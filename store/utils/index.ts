/* eslint-disable import/no-unresolved */
import { dashboardOrgDataActions } from '@store/dashboard/dashboard-org-data';
import { dashboardHomeActions } from '@store/dashboard/dashboard-home';
import { dashboardEventsActions } from '@store/dashboard/dashboard-events';
import { userProfessionalInformationDataActions } from '@store/dashboard/dashboard-user-professional-information';
import { organizationPaymentAPIsDataActions } from '@store/payment-apis/';
import { userDataActions } from '@store/user-data/user-data';
import { removeAuthToken, removeCookie } from '@lib/utils/cookies';

const { removeDashboardOrgData } = dashboardOrgDataActions;
const { removeDashboardHomeData } = dashboardHomeActions;
const { removeDashboardEventsData } = dashboardEventsActions;
const { removeUserProfessionalInformationData } = userProfessionalInformationDataActions;
const { removeOrganizationPaymentAPIs } = organizationPaymentAPIsDataActions;
const { removeUserData } = userDataActions;

const clearDashboardSlicesAndLogoutUser = () => (dispatch: any) => {
    // clear DashboardOrgData slice
    dispatch(removeDashboardOrgData());
    // clear DashboardHome slice
    dispatch(removeDashboardHomeData());
    // clear DashboardEvents slice
    dispatch(removeDashboardEventsData());
    // clear DashboardUserProfessionalInformation slice
    dispatch(removeUserProfessionalInformationData());
    // clear OrganizationPaymentAPIs slice
    dispatch(removeOrganizationPaymentAPIs());
    // clear UserData slice
    dispatch(removeUserData());

    // remove userToken cookie
    removeCookie('membershipJoinRequestId');
    removeCookie('isOrgAdmin');
    removeAuthToken();
};

export default clearDashboardSlicesAndLogoutUser;
