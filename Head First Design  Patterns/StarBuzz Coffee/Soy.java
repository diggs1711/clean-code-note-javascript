public class Soy extends CondimentsDecorator {
    Beverage beverage;

    public Soy(Beverage b) {
        beverage = b;
    }

    public String getDescription() {
        return beverage.getDescription() + ", Soy";
    }

    public double cost() {
        Size s = beverage.getSize();

        if (s.equals(Size.VENTI)) {
            return .20;
        } else if (s.equals(Size.GRANDE)) {
            return .15;
        } else {
            return beverage.cost() + .15;
        }
    }

}