/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
import countries from '@lib/constants/dashboard/countries-hashmap';

export const countriesMapper = (key: string) => countries[key];

export const stringToTitleCase = (value: string) => {
    const fieldValueToLowercase: string = value.toLowerCase();
    return fieldValueToLowercase.charAt(0).toUpperCase() + fieldValueToLowercase.slice(1);
};

export const transformMultiwordStateStringToTitleCase = (value: string): string => {
    if (value === 'FCT_ABUJA') {
        const splittedWords = value?.split('_');
        splittedWords[1] = `- ${stringToTitleCase(splittedWords[1])}`;
        return splittedWords?.join(' ');
    }
    if (value === 'OUTSIDE_OF_NIGERIA') {
        const splittedWords = value?.split('_');
        splittedWords[0] = stringToTitleCase(splittedWords[0]);
        splittedWords[1] = splittedWords[1].toLowerCase();
        splittedWords[2] = stringToTitleCase(splittedWords[2]);
        return splittedWords?.join(' ');
    }
    if (value) {
        const splittedWords = value?.split('_');
        const transformWordsStringToTitleCase = splittedWords?.map((word) =>
            stringToTitleCase(word),
        );
        return transformWordsStringToTitleCase?.join(' ');
    }
    return '';
};

export function countriesReverseMapper(countryValue: string) {
    const countryEntries = Object.entries(countries);
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < countryEntries.length; index++) {
        const [key, value] = countryEntries[index];
        if (value === countryValue) {
            return key;
        }
    }
}
