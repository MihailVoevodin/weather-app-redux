/**
 * Интефейс объекта текущей погоды.
 */
export interface ICurrentWeather {
    current: ICurrent,
    location: ILocation,
};

/**
 * Интефейс объекта текущей погоды внутренний.
 */
interface ICurrent {
    temp_c: number,
    feelslike_c: number,
    condition: ICondition,
    humidity: number,
    wind_mph: number,
    wind_dir: string,
    pressure_mb: number,
}

/**
 * Интефейс условий текущей погоды.
 */
interface ICondition {
    icon: string,
    text: string,
}

/**
 * Интефейс локации текущей погоды.
 */
interface ILocation {
    name: string,
    country: string,
    localtime: string,
}
