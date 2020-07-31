public class Tea extends CaffeineBeverage {

	@Override
    void brew() {
        System.out.println("Steeping teabag");
	}

	@Override
    void addCondiments() {
        System.out.println("Adding lemon");
	}
}