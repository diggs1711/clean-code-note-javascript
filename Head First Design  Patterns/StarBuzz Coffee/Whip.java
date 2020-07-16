public class Whip extends CondimentsDecorator {
    Beverage beverage;

    public Whip(Beverage b) {
        beverage = b;
    }

    public String getDescription() {
        return beverage.getDescription() + ", Whip";
    }

    public double cost() {
        return beverage.cost() + .2;
    }

}