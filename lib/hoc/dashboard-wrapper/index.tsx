/* eslint-disable consistent-return */
import { checkAuthToken } from '@lib/utils/cookies';
import { useRouter } from 'next/router';

function WithDashboard(Component: any) {
    const withThing = (props: any) => {
        const router = useRouter();
        const previousRoute = encodeURIComponent(window.location.href);
        const hasAuthToken = Boolean(checkAuthToken());
        if (hasAuthToken) {
            return <Component {...props} />;
        }
        router.push({
            pathname: '/login',
            query: { from: previousRoute },
        });
    };

    return withThing;
}

export default WithDashboard;
