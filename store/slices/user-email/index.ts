import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface UserEmailPros {
    email: string | null;
}

const initialState: UserEmailPros = {
    email: null,
};

const setUserEmailSlice = createSlice({
    name: 'setUserEmail',
    initialState,
    reducers: {
        setUserEmail: (state, action: PayloadAction<string>) => {
            // eslint-disable-next-line no-param-reassign
            state.email = action.payload;
        },
    },
});

export const { setUserEmail } = setUserEmailSlice.actions;
export default setUserEmailSlice.reducer;
