public class Mocha extends CondimentsDecorator {
    Beverage beverage;

    public Mocha(Beverage b) {
        beverage = b;
    }

    public String getDescription() {
        return beverage.getDescription() + ", Mocha";
    }

    public double cost() {
        return beverage.cost() + .2;
    }

}