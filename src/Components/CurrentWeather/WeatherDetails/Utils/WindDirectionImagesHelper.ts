import E from 'Assets/WindDir/E.png';
import ENE from 'Assets/WindDir/ENE.png';
import ESE from 'Assets/WindDir/ESE.png';
import N from 'Assets/WindDir/N.png';
import NE from 'Assets/WindDir/NE.png';
import NNE from 'Assets/WindDir/NNE.png';
import NNW from 'Assets/WindDir/NNW.png';
import NW from 'Assets/WindDir/NW.png';
import S from 'Assets/WindDir/S.png';
import SE from 'Assets/WindDir/SE.png';
import SSE from 'Assets/WindDir/SSE.png';
import SSW from 'Assets/WindDir/SSW.png';
import SW from 'Assets/WindDir/SW.png';
import W from 'Assets/WindDir/W.png';
import WNW from 'Assets/WindDir/WNW.png';
import WSW from 'Assets/WindDir/WSW.png';

/**
 * Хелпер вывода картинки направления ветра.
 */
export const WindDirectionImagesHelper = (windDirection: string | undefined) => {
    switch (windDirection) {
        case 'N':
            return N;
        case 'NNE':
            return NNE;
        case 'NE':
            return NE;
        case 'ENE':
            return ENE;
        case 'E':
            return E;
        case 'ESE':
            return ESE;
        case 'SE':
            return SE;
        case 'SSE':
            return SSE;
        case 'S':
            return S;
        case 'SSW':
            return SSW;
        case 'SW':
            return SW;
        case 'WSW':
            return WSW;
        case 'W':
            return W;
        case 'WNW':
            return WNW;
        case 'NW':
            return NW;
        case 'NNW':
            return NNW;
        default:
            return;
    }
};
