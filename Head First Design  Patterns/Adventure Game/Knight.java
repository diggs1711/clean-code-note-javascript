public class Knight extends GameCharacter {

    public Knight() {
        weaponBehaviour = new KnifeBehaviour();
    }

    @Override
    public void fight() {
        weaponBehaviour.useWeapon();
    }
}