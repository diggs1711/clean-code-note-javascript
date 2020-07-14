var wish = require('wish');
const deepEqual = require('deep-equal')

const valuesFromHand = hand => {
    return hand.map(card => card.split("-")[0])
}
const highestCount = values => {
    var counts = {};
    values.forEach(function (value, index) {
        counts[value] = 0;
        if (value == values[0]) {
            counts[value] = counts[value] + 1;
        };
        if (value == values[1]) {
            counts[value] = counts[value] + 1;
        };
        if (value == values[2]) {
            counts[value] = counts[value] + 1;
        };
        if (value == values[3]) {
            counts[value] = counts[value] + 1;
        };
        if (value == values[4]) {
            counts[value] = counts[value] + 1;
        };
    });
    var totalCounts = Object.keys(counts).map(function (key) {
        return counts[key];
    });
    return totalCounts.sort(function (a, b) {
        return b - a
    })[0];
}

const multiplesIn = hand => {
    return highestCount(valuesFromHand(hand))
}

const isPair = hand => {
    return multiplesIn(hand) == 2
}

const isTriple = hand => {
    return multiplesIn(hand) === 3
}

const isQuad = hand => {
    return multiplesIn(hand) == 4
}

const allTheSameSuit = suits => {
    return suits.every(suit => suit == suits[0])
}

const suitsFor = hand => {
    return hand.map(card => card.split("-")[1])
}

const isFlush = hand => {
    return allTheSameSuit(suitsFor(hand))
}

function checkHand(hand) {
    if (isPair(hand)) {
        return 'pair';
    } else if (isTriple(hand)) {
        return 'three of a kind';
    } else if (isQuad(hand)) {
        return 'four of a kind'
    } else if (isFlush(hand)) {
        return 'flush'
    } else {
        return 'high card'
    }
};

describe("highestCount()", () => {
    const res = highestCount(['2', '4', '4', '4', '2'])
    wish(res == 3)
})

describe("valuesFromHand()", () => {
    const result = valuesFromHand(['2-H', '3-C', '4-D', '5-H', '2-C'])
    wish(deepEqual(result, ['2', '3', '4', '5', '2']))
})

describe("isPair()", () => {
    it("finds a pair in a hand", () => {
        const result = isPair(['2-H', '3-C', '4-D', '5-H', '2-C'])
        wish(result)
    })
})

describe('checkHand()', function () {
    it('handles pairs', function () {
        var result = checkHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
        wish(result === 'pair');

        var anotherResult = checkHand(['3-H', '3-C', '4-D', '5-H', '2-C']);
        wish(anotherResult === 'pair');
    });
    it('handles three of a kind', function () {
        var result = checkHand(['3-H', '3-C', '3-D', '5-H', '2-H']);
        wish(result === 'three of a kind');
    });

    it("handles four of a kind", () => {
        const res = checkHand(['3-H', '3-D', '3-C', '3-C', '4-H'])
        wish(res === 'four of a kind')
    })

    it('handles high card', () => {
        const res = checkHand(['2-H', '5-C', '9-D', '7-S', '3-H'])
        wish(res == 'high card')
    })

    it("handles flush", () => {
        const res = checkHand(['2-H', '5-H', '9-H', '7-H', '3-H'])
        wish(res == 'flush')
    })
});