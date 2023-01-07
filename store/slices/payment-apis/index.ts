/* eslint-disable import/no-unresolved */
import { useAppSelector } from '@lib/hooks/redux-hooks';
import { GetOrganizationPaymentApIsQuery } from '@lib/types/generated';
import isObjectEmpty from '@lib/utils/check-object-is-empty';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const organizationPaymentAPIsDataSlice = createSlice({
    name: 'organizationPaymentAPIsData',
    initialState: {} as GetOrganizationPaymentApIsQuery,
    reducers: {
        setOrganizationPaymentAPIs: (
            state: any,
            action: PayloadAction<GetOrganizationPaymentApIsQuery>,
        ) => {
            const newState = Object.assign(state, action.payload);
            return newState;
        },
        removeOrganizationPaymentAPIs: () => ({} as GetOrganizationPaymentApIsQuery),
    },
});

export const fetchAndSetOrganizationPaymentAPIsData = () => async (dispatch: any) => {
    const organizationPaymentAPIsData = useAppSelector(
        (state) => state.organizationPaymentAPIsData,
    );

    if (isObjectEmpty<GetOrganizationPaymentApIsQuery>(organizationPaymentAPIsData)) {
        const response = await fetch('/api/get-organization-payment-apis');
        if (response.ok) {
            const data: GetOrganizationPaymentApIsQuery = await response.json();
            const { setOrganizationPaymentAPIs } = organizationPaymentAPIsDataSlice.actions;

            dispatch(setOrganizationPaymentAPIs(data));
        }
    }
};

export const organizationPaymentAPIsDataActions = organizationPaymentAPIsDataSlice.actions;

export default organizationPaymentAPIsDataSlice.reducer;
