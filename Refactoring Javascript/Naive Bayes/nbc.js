module.exports = class Classifier {
    constructor() {
        this._songList = {
            songs: [],
            difficulties: ['easy', 'medium', 'hard'],
            addSong(name, chords, difficulty) {
                this.songs.push({
                    name,
                    chords,
                    difficulty: this.difficulties[difficulty]
                })
            },
            allChords: new Set()
        }
        this._labelCounts = new Map()
        this._labelProbabilities = new Map()
        this.chordCountsInLabels = new Map()
        this._smoothing = 1.01
    }

    addSong(...songParams) {
        this._songList.addSong(...songParams)
    }

    _likelihoodFromChord(difficulty, chord) {
        return this._chordCountForDifficulty(difficulty, chord) / this._songList.songs.length;
    }
    _valueForChordDifficulty(difficulty, chord) {
        const value = this._likelihoodFromChord(difficulty, chord)
        return value ? value + this._smoothing : 1
    }
    classify(chords) {
        return new Map(Array.from(this._labelProbabilities.entries()).map((labelWithProbability) => {
            const difficulty = labelWithProbability[0];
            return [difficulty, chords.reduce((total, chord) => {
                return total * this._valueForChordDifficulty(difficulty, chord)
            }, this._labelProbabilities.get(difficulty) + this._smoothing)];
        }));
    }
    _chordCountForDifficulty(difficulty, testChord) {
        return this._songList.songs.reduce((total, song) => {
            if (song.difficulty === difficulty) {
                total += song.chords.filter((chord) => chord == testChord).length
            }
            return total
        }, 0);
    }
    trainAll() {

        this._songList.songs.forEach(({
            chords,
            difficulty
        }) => this.train(chords, difficulty))

        this._setlabelProbabilities();
    }
    train(chords, label) {
        chords.forEach(chord => this._songList.allChords.add(chord))

        if (Array.from(this._labelCounts.keys()).includes(label)) {
            this._labelCounts.set(label, this._labelCounts.get(label) + 1)
        } else {
            this._labelCounts.set(label, 1);
        }
    }
    _setlabelProbabilities() {
        this._labelCounts.forEach((_, label) => {
            this._labelProbabilities.set(label, this._labelCounts.get(label) / this._songList.songs.length);
        });
    }
}