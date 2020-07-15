var wish = require('wish');
const deepEqual = require('deep-equal');
const {
    isRegExp
} = require('util');

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

const allCounts = values => {
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
    });
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

const fourAway = values => {
    return (parseInt(values[values.length - 1] - 4 - parseInt(values[0])) == 0)
}

const noMultiples = values => {
    return highestCount(values) == 1
}

const cardsInSequence = values => {
    const sortedValues = values.sort()
    return fourAway(sortedValues) && noMultiples(sortedValues)
}

const isStraight = hand => {
    return cardsInSequence(valuesFromHand(hand))
}

const isStraightFlush = hand => {
    return isStraight(hand) && isFlush(hand)
}

const isFullHouse = hand => {
    const counts = allCounts(valuesFromHand(hand))
    return counts[0] == 3 && counts[1] == 2
}

const isTwoPair = hand => {
    const counts = allCounts(valuesFromHand(hand))
    return counts[0] == 2 && counts[1] == 2
}

function checkHand(hand) {

    if (isTwoPair(hand)) {
        return 'two pair'
    } else if (isPair(hand)) {
        return 'pair';
    } else if (isFullHouse(hand)) {
        return 'full house'
    } else if (isTriple(hand)) {
        return 'three of a kind';
    } else if (isQuad(hand)) {
        return 'four of a kind'
    } else if (isStraightFlush(hand)) {
        return 'straight flush'
    } else if (isFlush(hand)) {
        return 'flush'
    } else if (isStraight(hand)) {
        return 'straight'
    } else {
        return 'high card'
    }
};

describe("noMultiples()", () => {
    it("reports true when all elements are different", () => {
        const res = noMultiples(['2', '6'])
        wish(res)
    })

    it("reports false when two elements are the same", () => {
        const res = noMultiples(['2', '2'])
        wish(!res)
    })
})
describe("fourAway()", () => {
    it("reports true if first and last are four away", () => {
        const res = fourAway(['2', '6'])
        wish(res)
    })
})

describe("allTheSameSuit()", () => {
    it("reports all suits the same", () => {
        const res = allTheSameSuit(['H', 'H', 'H', 'H', 'H'])
        wish(res)
    })

    it("reports false if all elements are the same", () => {
        const res = allTheSameSuit(['H', 'D', "H", 'H', 'H'])
        wish(!res)
    })
})

describe("highestCount()", () => {
    it("returns count of highest card from the array", () => {
        const res = highestCount(['2', '4', '4', '4', '2'])
        wish(res == 3)
    })
})

describe("suitsFor()", () => {
    it("returns suits for a hand", () => {
        const res = suitsFor(['2-H', '3-C', '4-D', '5-H', '2-C'])
        wish(deepEqual(res, ['H', 'C', 'D', 'H', 'C']))
    })
})

describe("valuesFromHand()", () => {
    it("returns values from a hand", () => {
        const result = valuesFromHand(['2-H', '3-C', '4-D', '5-H', '2-C'])
        wish(deepEqual(result, ['2', '3', '4', '5', '2']))
    })
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

    it("handles straight", () => {
        const res = checkHand(['1-H', '2-H', '3-H', '4-H', '5-D'])
        wish(res == 'straight')
    })

    it("handles a straight flush", () => {
        const res = checkHand(['1-H', '2-H', '3-H', '4-H', '5-H'])
        wish(res == 'straight flush')
    })

    it("handles full house", () => {
        const res = checkHand(['2-D', '2-H', '3-H', '3-D', '3-C'])
        wish(res == 'full house')
    })

    it("handles two pair", () => {
        const res = checkHand(['2-D', '2-H', '3-H', '3-D', '8-D']);
        wish(res == 'two pair')
    })
});