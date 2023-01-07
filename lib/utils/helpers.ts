/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

import { NO_HOSTNAME, parseDomain } from 'parse-domain';
import { getCookie, setCookie } from '@utils/cookies';
import { WebsiteDataQueryQuery } from '@gentypes/index';
import { applyTheme } from '@lib/theme/utils';

export const passwordMatch = (password1: string, password2: string) => {
    if (password1 !== password2) {
        return 'Password does not match';
    }
};
// export const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// export const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9]{6,16}$/; #ibrahim
// export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; #doesn't match Pa$$w0rd!
export const passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z]).*$/;

export const validateEmail = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const getMobile = (number: string) => {
    const isNumber = number?.match?.(/\d+/gi);
    return isNumber ?? '';
};

export const formatSignupErrorMessage = (errors: {
    errors: { username: { message: string }[]; password2: { message: any }[] };
}) => {
    if (typeof errors === 'string') {
        return errors;
    }
    if (Object.prototype.hasOwnProperty.call(errors, 'errors')) {
        if (errors?.errors?.username && Array.isArray(errors?.errors?.username)) {
            return errors?.errors?.username[0]?.message ===
                'A user with that username already exists.'
                ? 'A user with that email already exists.'
                : 'Some error occurred';
        }
        if (errors?.errors?.password2 && Array.isArray(errors?.errors?.password2)) {
            return errors?.errors?.password2[0]?.message;
        }
    } else {
        return 'Some error occurred';
    }
};

export const formatErrorMessage = (errors: {
    hasOwnProperty: (arg0: string) => any;
    errors: { message: any }[];
}) => {
    if (typeof errors === 'string') {
        return errors;
    }

    if (Object.prototype.hasOwnProperty.call(errors, 'errors')) {
        if (errors.errors && Array.isArray(errors.errors)) {
            return errors.errors[0]?.message;
        }

        if (typeof errors.errors === 'object') {
            const objectKeys = Object.keys(errors.errors);
            return errors.errors[objectKeys[0]] && typeof errors.errors[objectKeys[0]] === 'object'
                ? errors.errors[objectKeys[0]][0]
                : 'Some errors occurred';
        }
    } else {
        return 'Some error occurred';
    }
};

export function setSessionStorageValue(itemName: string, item: any) {
    sessionStorage.setItem(itemName, JSON.stringify(item));
}

export function setLocalStorageValue(itemName: string, item: any) {
    localStorage.setItem(itemName, JSON.stringify(item));
}

export function removeLocalStorageValue(itemName: string) {
    localStorage.removeItem(itemName);
}

export function getLocalStorageValue(itemName: string) {
    // getting stored value
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(itemName);
        const initial = saved !== null ? JSON.parse(saved) : null;
        return initial;
    }
}

export function extractHostname(hostname: string | typeof NO_HOSTNAME) {
    // This should be a string with basic latin characters only.
    // More information below.
    const parseResult = parseDomain(hostname);
    /* @ts-ignore */
    // why am i getting this TS error ?
    const { domain, topLevelDomains } = parseResult;
    if (domain) return `${domain}.${topLevelDomains.join('.')}`;
    return undefined;
}

export function windowCheck(value: any) {
    if (typeof window !== 'undefined') {
        return null;
    }
    return value;
}

export const handleFormFile = (list: any, prop: any) =>
    // @ts-ignore
    list.map((item) => {
        const obj = { ...item };
        if (!obj[prop]) {
            obj[prop] = null;
            return obj;
        }
        obj[prop] = obj[prop][0];
        return obj;
    });

export function domainNameBasedOnEnv(url: string = '') {
    const fullHostName =
        typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';
    const devEnvHostname = process.env.NEXT_PUBLIC_DEV_HOSTNAME;
    let hostname = devEnvHostname === 'null' ? extractHostname(fullHostName) : devEnvHostname;

    if (typeof hostname === 'undefined') {
        hostname = extractHostname(url);
    }

    return hostname;
}

export function toFlatPropertyMap<T>(obj: object | undefined | T, keySeparator = '_') {
    if (obj === undefined) return;
    const flattenRecursive = (
        obj: object | T,
        parentProperty?: string,
        propertyMap: Record<string, unknown> = {},
    ) => {
        for (const [key, value] of Object.entries(obj as object)) {
            const property = parentProperty ? `${parentProperty}${keySeparator}${key}` : key;
            if (value && typeof value === 'object') {
                flattenRecursive(value, property, propertyMap);
            } else {
                propertyMap[property] = value;
            }
        }
        return propertyMap;
    };
    return flattenRecursive(obj);
}

export const setFullDomainName = (data: string) => {
    setCookie('fullDomain', JSON.stringify(data as string));
};
export const getFullDomainName = () => {
    const fullDomain = getCookie('fullDomain');
    return JSON.parse(fullDomain as string);
};

export const applyThemeFunc = async () => {
    let dataR;
    try {
        if (typeof window !== 'undefined') {
            const themeData = getCookie('theme');
            if (themeData === undefined || themeData === null) {
                const response = await fetch('/api/theme');
                const data: WebsiteDataQueryQuery = await response.json();
                const organizationId = data?.website?.org?.pk;
                dataR = data;
                setLocalStorageValue('metaData', data);
                applyTheme(data?.website as string);
                const obj = data?.website;
                // @ts-ignore , ofcause it exists.
                const clone = (({ org, ...o }) => o)(obj); // remove org and return the rest.
                const websiteTheme = JSON.stringify(clone);
                setCookie('theme', websiteTheme as string);
                setCookie('organizationId', organizationId as string);
            } else if (themeData) {
                const metaData = getLocalStorageValue('metaData');
                const localWebsiteTheme = JSON.parse(themeData as string);
                dataR = metaData;
                applyTheme(localWebsiteTheme);
            }
        }
        return dataR;
    } catch (e) {
        // usually toast the error as a message
        console.log('error', e);
    }
};

export function getValidationErrors(err: any) {
    const validationErrors = {};

    err.inner.forEach((error: any) => {
        if (error.path) {
            /* @ts-ignore */
            validationErrors[error.path] = error.message;
        }
    });

    return validationErrors;
}
export function searchFuntion<T>(data: T, queryData: string, keys: string[]) {
    if (!Array.isArray(data)) return [];
    return data.filter((item) =>
        // @ts-ignore
        keys.some((key) => item[key]?.toLowerCase()?.includes(queryData)),
    );
}

export function sortFunction<T>(data: T, sort: string): [T, string, string] | [] {
    const [sortProp, desc] = sort?.split(':') ?? [];
    if (!Array.isArray(data)) return [];
    const sortedItems = [...data].sort?.((a, b) =>
        /* @ts-ignore */
        desc ? b[sortProp]?.localeCompare(a[sortProp]) : a[sortProp]?.localeCompare(b[sortProp]),
    );

    return [sortedItems as unknown as T, sortProp, desc];
}

export const aboutInfoFunc = (path: string, orgName: string = ' ') => {
    const actualRoute = path.split('/')[1];
    switch (actualRoute) {
        case 'about':
            return {
                title: 'About Us',
                description: `${orgName} `,
            };
        case 'leadership':
            return {
                title: 'Leadership',
                description: `${orgName} `,
            };
        case 'chapters':
            return {
                title: 'Our Chapters',
                description: `${orgName} `,
            };
        case 'events':
            return {
                title: 'Events',
                description: `${orgName} `,
            };
        case 'publications':
            return {
                title: 'Our Publications',
                description: `${orgName} `,
            };
        case 'faq':
            return {
                title: 'FAQs',
                description: `${orgName} `,
            };
        case 'contact_us':
            return {
                title: 'Contact Us',
                description: `${orgName} `,
            };

        default:
            return {
                title: 'About Us',
                description: `${orgName} `,
            };
    }
};

export const imageNullChecker = (localImage: { src: string }, dynamicImage: string) => {
    const imageUrl = `${process.env.NEXT_PUBLIC_PHOTO_URL}/${dynamicImage}`;
    const imageUrlLast = (imageUrl || 'hello/undefined').split('/').at(-1);
    if (imageUrlLast === 'undefined' || imageUrlLast === 'null') {
        return localImage.src;
    }
    return imageUrl;
};

export const getNumberOfPages = (count: number, rowsPerPage: number) => {
    const numberOfPages = Math.ceil(count / rowsPerPage);
    return numberOfPages;
};
