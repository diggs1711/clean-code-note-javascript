public class RemoteTest {
    public static void main(String[] args) {
        SimpleRemote remote = new SimpleRemote();
        Light light = new Light();
        LightOnCommand lightOnCommand = new LightOnCommand(light);

        GarageDoor garageDoor = new GarageDoor();
        GarageDoorOpenCommand garageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);


        remote.setCommand(0, () =>  { light.on(); });
        remote.buttonWasPressed();

        remote.setCommand(garageDoorOpenCommand);
        remote.buttonWasPressed();
    }

}