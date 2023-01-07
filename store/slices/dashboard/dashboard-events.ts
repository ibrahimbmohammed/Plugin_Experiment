import { createSlice } from '@reduxjs/toolkit';

import type { FetchDashboardAllOrganizationEventsQueryQuery } from '@lib/types/generated';

const dashboardEventsSlice = createSlice({
    name: 'dashboardEvents',
    initialState: {} as FetchDashboardAllOrganizationEventsQueryQuery,
    reducers: {
        setDashboardEventsData: (state, action) => {
            const newState = Object.assign(state, action.payload);
            return newState;
        },
        removeDashboardEventsData: () => ({} as FetchDashboardAllOrganizationEventsQueryQuery),
    },
});

export const dashboardEventsActions = dashboardEventsSlice.actions;

export default dashboardEventsSlice.reducer;
