const countSecondsInTime = (time: string) => {
    const [hours, minutes]: Array<string> = time.split(' ')[0].split(':');

    if (time.split(' ')[1] === 'PM') {
        return (Number(hours) + 12) * 3600 + Number(minutes) * 60;
    } else {
        return Number(hours) * 3600 + Number(minutes) * 60;
    }
};

export const countDayLength = (sunrise: string, sunset: string) => {
    const sunriseSeconds = countSecondsInTime(sunrise);
    const sunsetSeconds = countSecondsInTime(sunset);
    const dayLengthInSeconds = sunsetSeconds - sunriseSeconds;

    return `${parseInt(String(dayLengthInSeconds / 3600))}:${(dayLengthInSeconds % 3600) / 60}`;
};
