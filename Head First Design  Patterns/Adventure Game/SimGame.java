public class SimGame {
    public static void main(String[] args) {
        GameCharacter knight = new Knight();
        knight.fight();

        GameCharacter queen = new Queen();
        queen.fight();

        knight.setWeaponBehaviour(new AxeBehaviour());
        knight.fight();
    }
}