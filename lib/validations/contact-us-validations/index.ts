import * as yup from 'yup';

const ContactUsSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    name: yup.string().required('Name is required'),
    phoneNumber: yup.string().required('Phone Number is required'),
    request: yup.string().min(50, 'Message too short').required('Request is required'),
});

export default ContactUsSchema;
