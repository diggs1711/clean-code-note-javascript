class MenuItem {
    name: string
    description: string
    vegetarian: string
    price: number

    constructor({name, description, vegetarian, price}) {
        this.name = name
        this.description = description
        this.vegetarian = vegetarian
        this.price = price
    }

    getName() {
        return this.name
    }

    getDescription() {
        return this.description
    }

    getPrice() {
        return this.price
    }

    isVegetarian() {
        return this.isVegetarian
    }
}