public class SimpleRemote {
    Command[] onCommands;
    Command[] offCommands;

    public SimpleRemote() {
        onCommands = new Command[7];
        offCommands = new Command[7];

        for (int i = 0; i < offCommands.length; i++) {
            onCommands[i] = () => { };
            offCommands[i] = () => { };
        }
    }

    public void setCommand(int slot, Command on, Command off) {
        this.onCommands[slot] = on;
        this.offCommands[slot] = off;
    }

    public void buttonWasPressed() {
        slot.execute();
    }

}