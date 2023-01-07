import * as yup from 'yup';

const DonationValidationSchema = yup
    .object({
        firstName: yup
            .string()
            .min(3, 'FirstName is too short')
            .typeError('First Name is required'),
        lastName: yup.string().min(3, 'lastName is too short').typeError('Last Name is required'),
        email: yup.string().email().typeError('email is required'),
        phoneNumber: yup
            .string()
            .min(11, 'enter a valid phone number - minimum 11 digit')
            .max(11, 'enter a valid phone number'),
        amount: yup
            .string()
            .min(3, 'minimum of hundred naira')
            .typeError('enter valid amount e.g 100'),
    })
    .required();

export default DonationValidationSchema;
