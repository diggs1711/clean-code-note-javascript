public class ModelDuck extends Duck {
    public ModelDuck() {
        flyBehaviour = new FlyNoWay();
        quackBehaviour = new Quack();
    }

	@Override
	public void display() {
		// TODO Auto-generated method stub
        System.out.println("I'm a model duck.");
	}


}