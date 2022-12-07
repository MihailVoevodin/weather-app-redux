export interface IForecast {
    date: string;
    day: IForecastWeatherDay;
    hour: IHourForecast[];
    astro: IAstroForecast;
}

export interface IAstroForecast {
    sunrise: string;
    sunset: string;
}

export interface IDetailsForecast {
    avgtemp_c: number;
    maxwind_mph: number;
    totalprecip_mm: number;
    avgvis_km: number;
    daily_chance_of_rain: number;
}

interface IForecastWeatherDay {
    avgtemp_c: number;
    maxwind_mph: number;
    totalprecip_mm: number;
    avgvis_km: number;
    daily_chance_of_rain: number;
    maxtemp_c: number;
    mintemp_c: number;
    condition: IForecastWeatherDayCondition;
}

interface IForecastWeatherDayCondition {
    text: string;
    icon: string;
}

export interface IHourForecast {
    time: string;
    temp_c: number;
}
