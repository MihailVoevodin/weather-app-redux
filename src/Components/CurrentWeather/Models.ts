export interface ICurrentWeather {
    current: ICurrent,
    location: ILocation,
};

interface ICurrent {
    temp_c: number,
    feelslike_c: number,
    condition: ICondition,
    humidity: number,
    wind_mph: number,
    wind_dir: string,
    pressure_mb: number,
}

interface ICondition {
    icon: string,
    text: string,
}

interface ILocation {
    name: string,
    country: string,
    localtime: string,
}