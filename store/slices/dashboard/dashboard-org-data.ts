/* eslint-disable import/no-unresolved */
import { useAppSelector } from '@lib/hooks/redux-hooks';
import type {
    GetOrganizationProfessionalDataQuery,
    WebsiteDataQueryQuery,
} from '@lib/types/generated';
import isObjectEmpty from '@lib/utils/check-object-is-empty';
import Toast from '@lib/utils/toast';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const dashboardOrgDataSlice = createSlice({
    name: 'dashboardOrgData',
    initialState: {} as NonNullable<WebsiteDataQueryQuery> &
        NonNullable<GetOrganizationProfessionalDataQuery>,
    reducers: {
        setDashboardOrgData: (state, action: PayloadAction<NonNullable<WebsiteDataQueryQuery>>) => {
            const newState = Object.assign(state, {
                website: {
                    org: action.payload.website?.org,
                    webLogoUrl: action.payload.website?.webLogoUrl,
                },
            });
            return newState;
        },
        removeDashboardOrgData: () =>
            ({} as NonNullable<WebsiteDataQueryQuery> &
                NonNullable<GetOrganizationProfessionalDataQuery>),
        setOrganizationProfesionalData: (
            state,
            action: PayloadAction<NonNullable<GetOrganizationProfessionalDataQuery>>,
        ) => {
            const newState = Object.assign(state, action.payload);
            return newState;
        },
    },
});

export const fetchAndSetOrganizationProfessionalData = () => async (dispatch: any) => {
    const dashboardOrgData = useAppSelector((state) => state.dashboardOrgData);

    const { orgSubDivisionList, specialties } = dashboardOrgData;

    if (
        isObjectEmpty<GetOrganizationProfessionalDataQuery['orgSubDivisionList']>(
            orgSubDivisionList,
        ) ||
        isObjectEmpty<GetOrganizationProfessionalDataQuery['specialties']>(specialties)
    ) {
        try {
            const response = await fetch('/api/dashboard/get-org-professional-data');
            if (response.ok) {
                const data: GetOrganizationProfessionalDataQuery = await response.json();
                const { setOrganizationProfesionalData } = dashboardOrgDataSlice.actions;
                dispatch(setOrganizationProfesionalData(data));
            }
        } catch (error) {
            Toast('Something Went Wrong', { type: 'error' });
        }
    }
};

export const fetchAndSetDashboardOrganizationDisplayData =
    (dashboardOrgData: WebsiteDataQueryQuery & GetOrganizationProfessionalDataQuery) =>
    async (dispatch: any) => {
        const { website } = dashboardOrgData;
        if (isObjectEmpty<WebsiteDataQueryQuery['website']>(website)) {
            try {
                const response = await fetch('/api/theme');
                if (response.ok) {
                    const data: WebsiteDataQueryQuery = await response.json();
                    const { setDashboardOrgData } = dashboardOrgDataSlice.actions;
                    dispatch(setDashboardOrgData(data));
                }
            } catch (error) {
                Toast('Something Went Wrong', { type: 'error' });
            }
        }
    };

export const dashboardOrgDataActions = dashboardOrgDataSlice.actions;

export default dashboardOrgDataSlice.reducer;
