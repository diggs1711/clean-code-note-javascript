public class Queen extends GameCharacter {

    WeaponBehaviour weaponBehaviour;

    public Queen() {
        weaponBehaviour = new BowAndArrowBehaviour();
    }

    @Override
    public void fight() {
        weaponBehaviour.useWeapon();
    }
}