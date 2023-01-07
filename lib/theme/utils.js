/* eslint-disable no-bitwise */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */

export const mapTheme = (variables) => ({
    '--color-primaryColor': variables?.primaryColor || '#0000FF',
    '--color-primaryText': variables?.primaryText || '#000000',
    '--color-secondaryText': variables?.secondaryText || '#FFFFFF',
    '--color-primaryBtn': variables?.primaryBtn || '#0000FF',
    '--color-secondaryBtn': variables?.secondaryBtn || '#C0C0C0',
    '--color-backgroundPrimary': variables?.backgroundPrimary || '#C0C0C0',
    '--color-backgroundSecondary': variables?.backgroundSecondary || '#692d00',
    '--color-secondaryColor': variables?.secondaryColor || '#FFFFFF',
    '--font-name': variables?.primaryFont || 'Montserrat',
    '--font-family': variables?.secondaryFont || 'sans-serif',
});

/**
 * Helper function to set a new theme
 *
 * @param {string} theme The name of the theme to be set
 *
 * @return {void}
 */
export const applyTheme = (theme) => {
    const themeObject = mapTheme(theme);
    if (!themeObject) return;
    const root = document.documentElement;

    Object.keys(themeObject).forEach((property) => {
        if (property === 'name') {
            return;
        }

        root.style.setProperty(property, themeObject[property]);
    });
};

// code source https://codepen.io/andreaswik/pen/YjJqpK
export function lightOrDark(color) {
    let r;
    let g;
    let b = null;

    // Check the format of the color, HEX or RGB?
    if (color?.match(/^rgb/)) {
        // If HEX --> store the red, green, blue values in separate variables
        color = color?.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        r = color[1];
        g = color[2];
        b = color[3];
    } else {
        // If RGB --> Convert it to HEX: http://gist.github.com/983661
        color = +`0x${color?.slice(1).replace(color.length < 5 && /./g, '$&$&')}`;

        r = color >> 16;
        g = (color >> 8) & 255;
        b = color & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
        return 'light';
    }
    return 'dark';
}

export const generateThemeColors = (data) => ({
    primaryColor: data?.website?.primaryColor || '#0000FF',
    secondaryColor: data?.website?.secondaryColor || '#000000',
    primaryText: data?.website?.primaryTextColor || '#FFFFFF',
    secondaryText: data?.website?.secondaryTextColor || '#0000FF',
    primaryBtn: data?.website?.primaryBtnColor || '#C0C0C0',
    secondaryBtn: data?.website?.secondaryBtnColor || '#C0C0C0',
    backgroundPrimary: data?.website?.primaryBgColor || '0FF',
    backgroundSecondary: data?.website?.secondaryBgColor || '#FFFFFF',
});

export const getConditionalNavItemColor = (
    colorSource,
    stateSetter,
    lightCssRules,
    darkCssRules,
) => {
    if (typeof window !== 'undefined' && window.pageYOffset === 0) {
        if (lightOrDark(colorSource) === 'dark') {
            stateSetter(darkCssRules);
        } else {
            stateSetter(lightCssRules);
        }
    }
};
