public class SimplePizzaFactory {
    public Pizza create(String type) {
       Pizza pizza = null;

       if (type == "Pepperoni") {
           pizza = new PepperoniPizza();
       }

       return pizza;
   }
}