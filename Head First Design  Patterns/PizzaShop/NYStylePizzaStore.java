public class NYStylePizzaStore extends PizzaStore{

	@Override
	Pizza create(String type) {
        Pizza pizza = null;

        if (type == "chesse") {
            pizza = new NewYorkStyleCheesePizza();
        }

        return pizza;
	}

}