import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';

const translationEN = {
    searchPanel: {
        header: 'Check the Weather',
        searchPanelPlaceholder: 'Input city',
        errorMessage: 'No matching location found',
    },
    currentWeather: {
        locationcity: '{{city}}',
        feelsLike: 'feels like',
        condition: '{{condition}}',
    },
    currentWeatherDetails: {
        humidity: 'Humidity',
        wind: 'Wind speed',
        windDirection: 'Wind dir',
        pressure: 'Pressure',
        pressureUnits: 'mmHg',
    },
    forecastWeather: {
        details: 'Details',
        astronomy: 'Astronomy',
        hourlyForecast: 'Hourly forecast',
        Details: {
            avgTemperature: 'Avg temperature',
            maxWindSpeed: 'Max wind speed',
            totalPrecipitation: 'Total precipitation',
            avgVisibility: 'Avg visibility',
            avgHumidity: 'Avg humidity',
            chanceOfRain: 'Chance of rain',
            chanceOfSnow: 'Chance of snow',
        },
        Astro: {
            sunrise: 'Sunrise',
            sunset: 'Sunset',
            dayLength: 'Day length',
        },
    },
    weatherUnits: {
        'm/s': 'm/s',
        mmHg: 'mmHg',
        mm: 'mm',
        km: 'km',
    },
};

const translationRU = {
    searchPanel: {
        header: 'Проверь погоду',
        searchPanelPlaceholder: 'Введите город',
        errorMessage: 'Город не найден',
    },
    currentWeather: {
        locationcity: '{{city}}',
        feelsLike: 'Ощущается как',
        condition: '{{condition}}',
    },
    currentWeatherDetails: {
        humidity: 'Влажность',
        wind: 'Скорость ветра',
        windSpeedUnits: 'м/с',
        windDirection: 'Напр. ветра',
        pressure: 'Давление',
        pressureUnits: 'мм рт. ст.',
    },
    forecastWeather: {
        details: 'Детали',
        astronomy: 'Астрономия',
        hourlyForecast: 'Почасовой прогноз',
        Details: {
            avgTemperature: 'Ср. температура',
            maxWindSpeed: 'Макс. скор. ветра',
            totalPrecipitation: 'Кол-во осадков',
            avgVisibility: 'Ср. видимость',
            avgHumidity: 'Ср. влажность',
            chanceOfRain: 'Шанс дождя',
            chanceOfSnow: 'Шанс снега',
        },
        Astro: {
            sunrise: 'Восход',
            sunset: 'Закат',
            dayLength: 'Световой день',
        },
    },
    weatherUnits: {
        'm/s': 'м/с',
        mmHg: 'мм рт. ст.',
        mm: 'мм',
        km: 'км',
    },
};

void i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: translationEN},
            ru: {translation: translationRU},
        },
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie'],
        },
        interpolation: {
            escapeValue: true,
        },
    });

export default i18n;
