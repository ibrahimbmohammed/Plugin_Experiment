/* eslint-disable import/no-unresolved */
import { useAppSelector } from '@lib/hooks/redux-hooks';
// import { GetOrganizationPaymentApIsQuery } from '@lib/types/generated';

function getOrganizationPaymentAPIsPublicKey(
    platform?: 'paystack' | 'flutterwave',
): [string, string] {
    const paymentAPIs = useAppSelector((state) => state.organizationPaymentAPIsData);
    let publicKey = '';

    if (platform && platform.length > 2) {
        const platformAPI = paymentAPIs?.websitePaymentApi?.edges.find(
            (paymentPlatform: any) => paymentPlatform?.node?.platform === platform,
        );

        if (process.env.NEXT_PUBLIC_PAYMENT_API_MODE === 'TEST') {
            if (platformAPI?.node?.testPublicKey && platformAPI?.node?.testPublicKey?.length > 1) {
                publicKey = platformAPI?.node?.testPublicKey;
            }
        } else if (process.env.NEXT_PUBLIC_PAYMENT_API_MODE === 'LIVE') {
            if (platformAPI?.node?.livePublicKey && platformAPI?.node?.livePublicKey?.length > 1) {
                publicKey = platformAPI?.node?.livePublicKey;
            }
        }
        return [publicKey, platform];
    }
    if (process.env.NEXT_PUBLIC_PAYMENT_API_MODE === 'TEST') {
        if (
            paymentAPIs?.websitePaymentApi?.edges?.[0]?.node?.testPublicKey &&
            paymentAPIs?.websitePaymentApi?.edges?.[0]?.node?.testPublicKey.length > 1
        ) {
            publicKey = paymentAPIs?.websitePaymentApi?.edges?.[0]?.node?.testPublicKey;
        }
    } else if (process.env.NEXT_PUBLIC_PAYMENT_API_MODE === 'LIVE') {
        if (
            paymentAPIs?.websitePaymentApi?.edges?.[0]?.node?.livePublicKey &&
            paymentAPIs?.websitePaymentApi?.edges?.[0]?.node?.livePublicKey.length > 1
        ) {
            publicKey = paymentAPIs?.websitePaymentApi?.edges?.[0]?.node?.livePublicKey;
        }
    }
    return [publicKey, paymentAPIs?.websitePaymentApi?.edges?.[0]?.node?.platform as string];
}

export default getOrganizationPaymentAPIsPublicKey;
