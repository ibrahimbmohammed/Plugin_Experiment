import type { GetFooterDataQuery } from '@pages/api/footer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const footerDataSlice = createSlice({
    name: 'footerData',
    initialState: {} as NonNullable<GetFooterDataQuery>,
    reducers: {
        setFooterData: (state, action: PayloadAction<NonNullable<GetFooterDataQuery>>) => {
            const newState = Object.assign(state, {
                website: {
                    org: action.payload.website?.org,
                },
            });
            return newState;
        },
        removeFooterData: () => ({} as NonNullable<GetFooterDataQuery>),
    },
});

export const footerDataActions = footerDataSlice.actions;

export default footerDataSlice.reducer;
