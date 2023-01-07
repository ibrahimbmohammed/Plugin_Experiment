import { createSlice } from '@reduxjs/toolkit';

import type { ConferencePageQueryQuery } from '@lib/types/generated';

const conferenceHomeSlice = createSlice({
    name: 'conferenceHome',
    initialState: {} as ConferencePageQueryQuery,
    reducers: {
        setConferenceHomeData: (state: any, action: { payload: any }) => {
            const newState = Object.assign(state, action.payload);
            return newState;
        },
        removeConferenceHomeData: () => ({} as ConferencePageQueryQuery),
    },
});

export const conferenceHomeActions = conferenceHomeSlice.actions;

export default conferenceHomeSlice.reducer;
