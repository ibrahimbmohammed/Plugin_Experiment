import { createSlice } from '@reduxjs/toolkit';

import type { GetAdminConferencePresentersListQuery } from '@lib/types/generated';

const conferencePresentersListSlice = createSlice({
    name: 'conferencePresentersList',
    initialState: {} as GetAdminConferencePresentersListQuery,
    reducers: {
        setConferencePresentersListData: (state: any, action: { payload: any }) => {
            const newState = Object.assign(state, action.payload);
            return newState;
        },
        removeConferencePresentersListData: () => ({} as GetAdminConferencePresentersListQuery),
    },
});

export const conferencePresentersListActions = conferencePresentersListSlice.actions;

export default conferencePresentersListSlice.reducer;
