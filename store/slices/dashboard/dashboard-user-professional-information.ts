/* eslint-disable import/no-unresolved */
import {
    GetUserProfessionalInformationQuery,
    GetUserOutstandingPaymentsQuery,
    FetchUserDataQueryQuery,
} from '@lib/types/generated';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userProfessionalInformationDataSlice = createSlice({
    name: 'userProfessionalInformationData',
    initialState: {} as GetUserProfessionalInformationQuery['membershipJoinRequest'] &
        GetUserOutstandingPaymentsQuery['membershipJoinRequest'],

    reducers: {
        setUserProfessionalInformationPk: (state, action: PayloadAction<string>) => {
            const pkObject = { pk: action.payload };
            const newState = Object.assign(state, pkObject);
            return newState;
        },
        setUserApplicationStatus: (state, action: PayloadAction<boolean>) => {
            const verifiedStatusObject = { verified: action.payload };
            const newState = Object.assign(state, verifiedStatusObject);
            return newState;
        },
        setUserMessageFromAdmins: (state, action: PayloadAction<string>) => {
            const contactMessageObject = { contactMessage: action.payload };
            const newState = Object.assign(state, contactMessageObject);
            return newState;
        },
        setUserMembershipStatus: (state, action: PayloadAction<string>) => {
            const newOrOldObject = { newOrOld: action.payload };
            const newState = Object.assign(state, newOrOldObject);
            return newState;
        },
        setUserMembershipCadre: (state, action: PayloadAction<string>) => {
            const membershipCadreObject = {
                membershipCadre: {
                    ...state?.membershipCadre,
                    name: action.payload,
                },
            };
            const newState = Object.assign(state, membershipCadreObject);
            return newState;
        },
        setUserMembershipCadreId: (state, action: PayloadAction<string>) => {
            const membershipCadreIdObject = {
                membershipCadre: {
                    ...state?.membershipCadre,
                    id: action.payload,
                },
            };
            const newState = Object.assign(state, membershipCadreIdObject);
            return newState;
        },
        setUserMembershipApplicationStatus: (state, action: PayloadAction<string>) => {
            const membershipApplicationStatusObject = {
                membershipApplicationStatus: action.payload,
            };
            const newState = Object.assign(state, membershipApplicationStatusObject);
            return newState;
        },
        setUserAmountOwingReason: (state, action: PayloadAction<string>) => {
            const amountOwingReasonObject = { amountOwingReason: action.payload };
            const newState = Object.assign(state, amountOwingReasonObject);
            return newState;
        },
        setUserAmountOwingValue: (state, action: PayloadAction<number>) => {
            const amountOwingValueObject = { amountOwingValue: action.payload };
            const newState = Object.assign(state, amountOwingValueObject);
            return newState;
        },
        setUserAmountOwingStr: (state, action: PayloadAction<string>) => {
            const amountOwingStrObject = { amountOwingStr: action.payload };
            const newState = Object.assign(state, amountOwingStrObject);
            return newState;
        },
        removeUserProfessionalInformationData: () =>
            ({} as GetUserProfessionalInformationQuery['membershipJoinRequest'] &
                GetUserOutstandingPaymentsQuery['membershipJoinRequest']),
    },
});

export const fetchAndSetUserOutstandingPaymentsData =
    (
        user: FetchUserDataQueryQuery['user'],
        userProfessionalInformationData: GetUserProfessionalInformationQuery['membershipJoinRequest'] &
            GetUserOutstandingPaymentsQuery['membershipJoinRequest'],
    ) =>
    async (dispatch: any) => {
        const amountOwingReason = userProfessionalInformationData?.amountOwingReason as string;
        const amountOwingValue = userProfessionalInformationData?.amountOwingValue as number;

        if (user?.pk) {
            if (!(amountOwingReason?.length <= 0) && !(amountOwingValue <= 0)) {
                const response = await fetch(
                    '/api/dashboard/payments/get-user-outstanding-payments',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            userId: user?.pk,
                        }),
                    },
                );
                if (response.ok) {
                    const data: GetUserOutstandingPaymentsQuery = await response.json();
                    const {
                        setUserProfessionalInformationPk,
                        setUserAmountOwingReason,
                        setUserAmountOwingValue,
                        setUserAmountOwingStr,
                    } = userProfessionalInformationDataSlice.actions;
                    if ((userProfessionalInformationData?.pk as string)?.length > 0) {
                        dispatch(
                            setUserProfessionalInformationPk(
                                data.membershipJoinRequest?.pk as string,
                            ),
                        );
                    }
                    dispatch(
                        setUserAmountOwingReason(
                            data.membershipJoinRequest?.amountOwingReason as string,
                        ),
                    );
                    dispatch(
                        setUserAmountOwingValue(
                            data.membershipJoinRequest?.amountOwingValue as number,
                        ),
                    );
                    dispatch(
                        setUserAmountOwingStr(data.membershipJoinRequest?.amountOwingStr as string),
                    );
                }
            }
        }
    };

export const userProfessionalInformationDataActions = userProfessionalInformationDataSlice.actions;

export default userProfessionalInformationDataSlice.reducer;
