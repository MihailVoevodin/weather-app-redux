export const formatWindSpeed = (windSpeed: number | undefined) => {
    if (windSpeed) {
        return (windSpeed * 0.44704).toFixed(1);
    }
    return;
};

export const formatPressure = (pressure: number | undefined) => {
    if (pressure) {
        return Math.round(pressure * 0.750062);
    }
    return;
};
