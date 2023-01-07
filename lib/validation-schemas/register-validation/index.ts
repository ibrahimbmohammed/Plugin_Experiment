import * as yup from 'yup';

const LoginSchema = yup.object().shape({
    email: yup.string().email().required().typeError('email is required'),
    firstName: yup.string().required().typeError('email is required'),
    lastName: yup.string().required().typeError('email is required'),
    passwordOne: yup
        .string()
        .required()
        .typeError('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .typeError('Password Short')
        .matches(/[a-zA-Z]/, 'Password must match the partern below'),
    passwordTwo: yup
        .string()
        .required()
        .typeError('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .typeError('Password Short')
        .matches(/[a-zA-Z]/, 'Password must match the partern below'),
});

export default LoginSchema;
