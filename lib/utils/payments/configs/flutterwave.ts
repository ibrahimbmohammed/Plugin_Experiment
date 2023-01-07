/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { GetOrganizationPaymentApIsQuery } from '@lib/types/generated';
import { FlutterWaveResponse, InitializeFlutterwavePayment } from 'flutterwave-react-v3/dist/types';
import { v4 as uuidv4 } from 'uuid';

function configureFlutterwave(
    publicKey: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    amount: number,
    // eslint-disable-next-line no-undef
    paymentAPIs: GetOrganizationPaymentApIsQuery,
) {
    // const transferFee = 45;
    const companyFeeShare = 0.01 * amount;
    const flutterwaveShare = 0.014 * amount;
    const calculatedAmount = amount + companyFeeShare + flutterwaveShare;
    const newTotalAfterCompound = calculatedAmount - flutterwaveShare;
    const transactionCharge = Number(newTotalAfterCompound) - Number(amount);

    const organizationFlutterwaveAPIData = paymentAPIs?.websitePaymentApi?.edges.find(
        (paymentAPI) => paymentAPI?.node?.platform === 'flutterwave',
    );
    console.log('removed', Math.floor(transactionCharge));

    return {
        public_key: publicKey,
        tx_ref: 'Local-Bosses-Q291cnNlVHlwZToy',
        amount: Math.round(calculatedAmount),
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email,
            phone_number: phone,
            name: `${firstName} ${lastName}`,
        },
        customizations: {
            title: organizationFlutterwaveAPIData?.node?.organization?.name as string,
            description: `Payment for ${firstName} ${lastName}`,
            logo: organizationFlutterwaveAPIData?.node?.organization?.photoUrl
                ? `${process.env.NEXT_PUBLIC_PHOTO_URL}${organizationFlutterwaveAPIData?.node?.organization?.photoUrl}`
                : '',
        },
        subaccounts: [
            {
                id: 'RS_2509195E651D775B4CC8FBD92D05667C',
                transaction_charge_type: 'flat',
                transaction_charge: transactionCharge,
            },
        ],
    };
}

export async function payWithFlutterwave(
    paymentHandler: ({ callback, onClose }: InitializeFlutterwavePayment) => void,
    successAction: (response: FlutterWaveResponse, tx_ref: any) => void,
) {
    paymentHandler({
        callback: (response: FlutterWaveResponse) => {
            successAction(response, response.tx_ref);
        },
        onClose: () => {},
    });
}

export default configureFlutterwave;
