public class WeatherStation {
   public static void main(String[] args) {
       WeatherData weatherData = new WeatherData();

       CurrentConditionsDisplay currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
       HeadIndexDisplay headIndexDisplay = new HeadIndexDisplay(weatherData);

       weatherData.setMeasurement(80, 65, 30.4f);
       weatherData.setMeasurement(70, 80, 30.1f);
       weatherData.setMeasurement(90, 90, 29.4f);
   }
}