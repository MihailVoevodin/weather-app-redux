import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import GBFlag from 'Assets/Flags/GBFlag.png';
import RussiaFlag from 'Assets/Flags/RussiaFlag.png';
import styles from 'Components/Translation/Translation.module.css';

export const Translation: React.FC = () => {
    const [language, setLanguage] = useState<string>('en');
    const {i18n} = useTranslation();

    const changeLanguage = (language: string) => {
        void i18n.changeLanguage(language);
        setLanguage(language);
    };

    return (
        <div className={styles.localise}>
            <div
                className={`${styles.localiseItem} ${language === 'en' ? styles.localiseItemBorder : ''}`}
                onClick={() => changeLanguage('en')}
            >
                <span>EN</span>
                <img src={GBFlag} alt="GBFlag" />
            </div>
            <div
                className={`${styles.localiseItem} ${language === 'ru' ? styles.localiseItemBorder : ''}`}
                onClick={() => changeLanguage('ru')}
            >
                <span>RU</span>
                <img src={RussiaFlag} alt="rusFlag" />
            </div>
        </div>
    );
};
