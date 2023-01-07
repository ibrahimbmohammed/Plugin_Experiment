/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { WebsiteAboutPagesQuery } from '@gentypes/index';

interface Theme {
    theme: WebsiteAboutPagesQuery;
}

const themeData: any = {
    website: {
        __typename: 'WebsiteType',
        primaryColor: '#0000FF',
        primaryText: '#000000',
        secondaryText: '#FFFFFF',
        primaryBtn: '#0000FF',
        secondaryBtn: '#C0C0C0',
        backgroundPrimary: '#C0C0C0',
        backgroundSecondary: '0FF',
        secondaryColor: '#FFFFFF',
    },
};

const initialState: Theme = {
    theme: themeData,
};

const setTheme: CaseReducer<Theme, PayloadAction<object>> = (state, action) => {
    if (action.payload) {
        state.theme = action.payload;
        return state;
    }
    return { theme: action.payload };
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setThemes: setTheme,
    },
});

export const { setThemes } = themeSlice.actions;
export default themeSlice.reducer;
