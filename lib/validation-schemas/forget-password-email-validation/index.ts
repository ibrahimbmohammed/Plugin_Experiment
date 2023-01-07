import * as yup from 'yup';

const ForgetEmailSchema = yup.object().shape({
    email: yup.string().email().required('email is required'),
});

export default ForgetEmailSchema;
