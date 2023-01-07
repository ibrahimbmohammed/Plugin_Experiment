import { createSlice } from '@reduxjs/toolkit';

import type { FetchDashboardHomeDataQueryQuery } from '@lib/types/generated';

const dashboardHomeSlice = createSlice({
    name: 'dashboardHome',
    initialState: {} as FetchDashboardHomeDataQueryQuery,
    reducers: {
        setDashboardHomeData: (state, action) => {
            const newState = Object.assign(state, action.payload);
            return newState;
        },
        removeDashboardHomeData: () => ({} as FetchDashboardHomeDataQueryQuery),
    },
});

export const dashboardHomeActions = dashboardHomeSlice.actions;

export default dashboardHomeSlice.reducer;
