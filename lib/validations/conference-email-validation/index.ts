import * as yup from 'yup';

const EmailSchema = yup.object().shape({
    email: yup.string().email().required().typeError('Email is required'),
});

export default EmailSchema;
