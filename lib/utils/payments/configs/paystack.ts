/* eslint-disable camelcase */
// interface MetaData {
//     custom_fields: {
//         display_name: string;
//     };
// }

const configurePayStack = (
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    publicKey: string,
    amount: number,
    actionText: string,
    // eslint-disable-next-line no-unused-vars
    successAction: (response: any, trxref: any) => Promise<void>,
) => {
    let transferFee;
    if (amount <= 5000) {
        transferFee = 10;
    }
    if (amount <= 5000) {
        transferFee = 10;
    }
    transferFee = 50;

    const totalAmount = amount + amount * 0.015 + 100 + transferFee;
    const calculatedAmount = totalAmount * 100;

    return {
        firstname,
        lastname,
        phone,
        email,
        amount: calculatedAmount,
        publicKey,
        text: actionText,
        onSuccess: async (response: any) => {
            await successAction(response, response.trxref);
        },
        // eslint-disable-next-line no-unused-vars
        onClose: (response: any) => {
            // eslint-disable-next-line no-alert
            alert('Are you sure you want to cancel this transaction?');
        },
    };
};

export default configurePayStack;
