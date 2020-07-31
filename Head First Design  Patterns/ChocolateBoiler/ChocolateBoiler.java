import jdk.nashorn.internal.runtime.Undefined;

public class ChocolateBoiler {
    private boolean empty;
    private boolean boiled;
    // public static ChocolateBoiler uniquChocolateBoiler;
    private volatile static ChocolateBoiler uniquChocolateBoiler;

    private ChocolateBoiler() {
        empty = true;
        boiled = false;
    }

    public static synchronized ChocolateBoiler getChocolateBoiler() {
        if (uniquChocolateBoiler == undefined) {
            synchronized (ChocolateBoiler.class) {
                if (uniquChocolateBoiler == undefined) {
                    uniquChocolateBoiler = new ChocolateBoiler();
                }
            }
        }
        return uniquChocolateBoiler;
    }

    public void fill() {
        if (isEmpty()) {
            empty = false;
            boiled = false;
        }
    }

    public boolean isEmpty() {
        return empty;
    }

    public boolean isBoiled() {
        return boiled;
    }
}