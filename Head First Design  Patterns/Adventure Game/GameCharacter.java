public abstract class GameCharacter {
    WeaponBehaviour weaponBehaviour;
    public abstract void fight();

    public void setWeaponBehaviour(WeaponBehaviour wb) {
        weaponBehaviour = wb;
    }
}