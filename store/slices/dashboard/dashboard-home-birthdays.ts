import { createSlice } from '@reduxjs/toolkit';

import type { BirthdayQueryQuery } from '@lib/types/generated';

const dashboardHomeBirthdaySlice = createSlice({
    name: 'dashboardHomeBirthday',
    initialState: {} as BirthdayQueryQuery,
    reducers: {
        setDashboardHomeBirthdayData: (state: any, action: { payload: any }) => {
            const newState = Object.assign(state, action.payload);
            return newState;
        },
        removeDashboardHomeBirthdayData: () => ({} as BirthdayQueryQuery),
    },
});

export const dashboardHomeBirthdayActions = dashboardHomeBirthdaySlice.actions;

export default dashboardHomeBirthdaySlice.reducer;
