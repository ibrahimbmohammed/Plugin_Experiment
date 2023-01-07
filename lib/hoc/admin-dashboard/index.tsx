import { checkAuthToken, getCookie } from '@lib/utils/cookies';

function WithAdminDashboard(Component: any) {
    return function WithDashboardComponent({ ...props }) {
        const hasAuthToken = Boolean(checkAuthToken());
        const isOrgAdmin = Boolean(getCookie('isOrgAdmin') === 'true');
        if (hasAuthToken && isOrgAdmin) {
            return <Component {...props} />;
        }
        if (hasAuthToken && !isOrgAdmin) {
            window.location.replace(`${window.location.origin}/dashboard`);
        } else {
            window.location.replace(`${window.location.origin}/login`);
        }
    };
}

export default WithAdminDashboard;
