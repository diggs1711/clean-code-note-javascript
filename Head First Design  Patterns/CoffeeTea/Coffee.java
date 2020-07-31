public class Coffee extends CaffeineBeverage {

    @Override
    public void brew() {
        System.out.println("Brewing coffee grinds");
    }

	@Override
	void addCondiments() {
        System.out.println("Adding milk and sugar");
	}

}