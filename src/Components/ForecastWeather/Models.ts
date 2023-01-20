/**
 * Интефейс прогноза погоды.
 */
export interface IForecast {
    date: string;
    day: IForecastWeatherDay;
    hour: IHourForecast[];
    astro: IAstroForecast;
}

/**
 * Интефейс астрологи прогноза погоды.
 */
export interface IAstroForecast {
    sunrise: string;
    sunset: string;
}

/**
 * Интефейс деталей прогноза погоды.
 */
export interface IForecastWeatherDay {
    avgtemp_c: number;
    maxwind_mph: number;
    totalprecip_mm: number;
    avgvis_km: number;
    daily_chance_of_rain: number | undefined;
    daily_chance_of_snow: number | undefined;
    maxtemp_c: number;
    mintemp_c: number;
    condition: IForecastWeatherDayCondition;
}

/**
 * Интефейс условий прогноза погоды.
 */
interface IForecastWeatherDayCondition {
    text: string;
    icon: string;
}

/**
 * Интефейс почасового прогноза погоды.
 */
export interface IHourForecast {
    time: string;
    condition: IForecastWeatherDayCondition;
    temp_c: number;
}
