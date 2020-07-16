public abstract class Beverage {
    String description = "Unknown beverage";

    public enum Size {
        TALL, GRANDE, VENTI
    };

    Size size = Size.TALL;

    public void setSize(Size s) {
        this.size = s;
    }

    public Size getSize() {
        return size;
    }

    public String getDescription() {
        return description;
    }

    public abstract double cost();
}