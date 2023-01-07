import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface PostModal {
    isOpen: boolean;
}

const initialState: PostModal = {
    isOpen: false,
};

const setModalCaseReducer: CaseReducer<PostModal, PayloadAction<boolean>> = (state, action) => {
    if (action.payload === state.isOpen) {
        return state;
    }
    return { isOpen: action.payload };
};

const setCloseCaseReducer = (state: typeof initialState, action: PayloadAction<boolean>) => {
    if (action.payload === state.isOpen) {
        return state;
    }
    return { isOpen: action.payload };
};

const postModalSlice = createSlice({
    name: 'postModal',
    initialState,
    reducers: {
        setIsOpen: setModalCaseReducer,
        setClosed: setCloseCaseReducer,
    },
});

export const { setIsOpen } = postModalSlice.actions;
export default postModalSlice.reducer;
