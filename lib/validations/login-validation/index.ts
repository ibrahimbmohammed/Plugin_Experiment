import * as yup from 'yup';

const LoginSchema = yup.object().shape({
    email: yup.string().email().required().typeError('email is required'),
    password: yup
        .string()
        .required()
        .typeError('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .typeError('Password Short')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export default LoginSchema;
