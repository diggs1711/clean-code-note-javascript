import java.util.Observable;
import java.util.Observer;

public class CurrentConditionsDisplay implements Observer, DisplayElement{

    private float temp;
    private float hum;
    Observable weatherData;

    public CurrentConditionsDisplay(Observable weatherData) {
        this.weatherData = weatherData;
        this.weatherData.addObserver(this);
    }

	@Override
	public void display() {
        System.out.println("Current conditions: " + temp + "degrees and " + hum + "% humidity");
	}

	@Override
    public void update(Observable obs, Object args) {
        if (obs instanceof WeatherData) {
            WeatherData wd = (WeatherData) obs;
            this.temp = wd.getTemperature();
            this.hum = wd.getHumidity();
            display();
        }
	}


}