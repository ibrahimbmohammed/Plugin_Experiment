import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface LoginModal {
    isOpen: boolean;
}

const initialState: LoginModal = {
    isOpen: false,
};

const setModalCaseReducer: CaseReducer<LoginModal, PayloadAction<boolean>> = (state, action) => {
    if (action.payload === state.isOpen) {
        return state;
    }
    return { isOpen: action.payload };
};

const loginModalSlice = createSlice({
    name: 'loginModal',
    initialState,
    reducers: {
        setIsOpen: setModalCaseReducer,
    },
});

export const { setIsOpen } = loginModalSlice.actions;
export default loginModalSlice.reducer;
