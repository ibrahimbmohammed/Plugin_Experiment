/* eslint-disable import/no-unresolved */
import * as yup from 'yup';

const ConferenceRegisterSchema = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    phoneNumber: yup.string().required('Phone Number is required'),
});

export default ConferenceRegisterSchema;
