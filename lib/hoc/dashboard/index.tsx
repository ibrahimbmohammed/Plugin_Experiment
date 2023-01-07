import { checkAuthToken } from '@lib/utils/cookies';

function WithDashboard(Component: any) {
    return function WithDashboardComponent({ ...props }) {
        const hasAuthToken = Boolean(checkAuthToken());
        if (hasAuthToken) {
            return <Component {...props} />;
        }
        window.location.replace(`${window.location.origin}/login`);
    };
}

export default WithDashboard;
