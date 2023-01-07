import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface OrgIdPros {
    orgId: number | null;
}

const initialState: OrgIdPros = {
    orgId: null,
};

const setOrganiationIdSlice = createSlice({
    name: 'setOrganizationId',
    initialState,
    reducers: {
        setOrganizationId: (state, action: PayloadAction<number>) => {
            // eslint-disable-next-line no-param-reassign
            state.orgId = action.payload;
        },
    },
});

export const { setOrganizationId } = setOrganiationIdSlice.actions;
export default setOrganiationIdSlice.reducer;
