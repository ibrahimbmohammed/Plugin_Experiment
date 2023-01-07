import useCheckCookieBeforeFetch from '@lib/hooks/fetch-query/useCheckCookieBeforeFetch';
import { CheckIsOrgAdminQueryQuery } from '@lib/types/generated';
import ToggleSwitch from '@molecules/m-toggle-switch';
import { useCallback, useState } from 'react';

interface DashboardTopNavAdminSwitchProps {
    label: string;
}

function DashboardTopNavAdminSwitch({ label }: DashboardTopNavAdminSwitchProps) {
    const isOrgAdmin = useCheckCookieBeforeFetch<CheckIsOrgAdminQueryQuery['isOrgAdmin']>(
        'api/dashboard/is-org-admin',
        'isOrgAdmin',
    );

    const pageLocation = window.location.pathname.includes('/dashboard');
    const [adminMode, setAdminMode] = useState<boolean>(!pageLocation);

    const handleAdminModeChange = useCallback(() => {
        if (!adminMode) {
            window.location.replace(`${window.location.origin}/admin`);
        } else {
            window.location.replace(`${window.location.origin}/dashboard`);
        }
        setAdminMode((prevState) => !prevState);
    }, []);

    if (String(isOrgAdmin) !== 'false' && isOrgAdmin !== undefined) {
        return (
            <ToggleSwitch
                htmlFor="toggle-admin-mode"
                checked={adminMode}
                onChangeHandler={handleAdminModeChange}
                label={label}
            />
        );
    }
    return null;
}

export default DashboardTopNavAdminSwitch;
