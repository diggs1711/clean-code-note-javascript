const wish = require("wish");
const deepEqual = require("deep-equal");

var suits = ['H', 'D', 'S', 'C'];
var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const buildCardArray = () => {
    let cards = []
    for (let j = 0; j < values.length; j++) {
        for (let index = 0; index < suits.length; index++) {
            cards.push(values[j] + '-' + suits[index])
        }

    }
    return cards
}

const spliceCard = cardArray => {
    const takeAway = cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0]
    return [takeAway, cardArray]
}

const randomHand = function () {
    var cards = [];
    var cardArray = buildCardArray();
    [cards[0], cardArray] = spliceCard(cardArray);
    [cards[1], cardArray] = spliceCard(cardArray);
    [cards[2], cardArray] = spliceCard(cardArray);
    [cards[3], cardArray] = spliceCard(cardArray);
    [cards[4], cardArray] = spliceCard(cardArray);
    return cards;
};

console.log(randomHand());

describe("spliceCard()", () => {
    it("returns two things", () => {
        wish(spliceCard(buildCardArray()).length == 2)
    })

    it("returns the selected card", () => {
        wish(spliceCard(buildCardArray())[0].match(/\w{1,2}-[HDSC]/))
    })

    it("returns an array with one card removed", () => {
        wish(spliceCard(buildCardArray())[1].length == buildCardArray().length - 1)
    })
})

describe('buildCardArray()', () => {
    it("returns a full decks", () => {
        const deck = buildCardArray()
        wish(deepEqual(deck, ['1-H', '1-D', '1-S', '1-C',
            '2-H', '2-D', '2-S', '2-C',
            '3-H', '3-D', '3-S', '3-C', '4-H', '4-D', '4-S', '4-C',
            '5-H', '5-D', '5-S', '5-C', '6-H', '6-D', '6-S', '6-C',
            '7-H', '7-D', '7-S', '7-C', '8-H', '8-D', '8-S', '8-C',
            '9-H', '9-D', '9-S', '9-C', '10-H', '10-D', '10-S', '10-C',
            'J-H', 'J-D', 'J-S', 'J-C', 'Q-H', 'Q-D', 'Q-S', 'Q-C',
            'K-H', 'K-D', 'K-S', 'K-C'
        ]))
    })
})

describe("randomHand()", () => {
    it("returns something of length 5", () => {
        wish(randomHand().length == 5)
    })
})