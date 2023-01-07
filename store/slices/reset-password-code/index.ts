import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface CodePros {
    code: string | null;
}

const initialState: CodePros = {
    code: null,
};

const setResetCodeSlice = createSlice({
    name: 'setResetCode',
    initialState,
    reducers: {
        setResetCode: (state, action: PayloadAction<string>) => {
            // eslint-disable-next-line no-param-reassign
            state.code = action.payload;
        },
    },
});

export const { setResetCode } = setResetCodeSlice.actions;
export default setResetCodeSlice.reducer;
