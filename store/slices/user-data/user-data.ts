/* eslint-disable import/no-unresolved */
import { FetchUserDataQueryQuery } from '@lib/types/generated';
import Toast from '@lib/utils/toast';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
    name: 'userData',
    initialState: {} as FetchUserDataQueryQuery['user'],
    reducers: {
        setUserData: (state, action) => {
            const newState = Object.assign(state, action.payload);
            return newState;
        },
        setUserProfilePicture: (state, action: PayloadAction<string>) => {
            const payloadObject = { photoUrl: action.payload };
            const newState = Object.assign(state, payloadObject);
            return newState;
        },
        removeUserData: () => ({} as FetchUserDataQueryQuery['user']),
    },
});

export const fetchAndSetUserData = () => async (dispatch: any) => {
    const response = await fetch('/api/user-data');
    if (response.ok) {
        const data: FetchUserDataQueryQuery = await response.json();
        const { setUserData } = userDataSlice.actions;
        dispatch(setUserData(data));
    } else {
        Toast('Updating Personal Information Failed. Refresh!', { type: 'error' });
    }
};

export const userDataActions = userDataSlice.actions;

export default userDataSlice.reducer;
