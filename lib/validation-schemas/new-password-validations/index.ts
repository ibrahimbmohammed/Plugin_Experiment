import * as yup from 'yup';

const newPasswordSchema = yup.object().shape({
    npassword: yup
        .string()
        .required()
        .typeError('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .typeError('Password Short')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    cpassword: yup
        .string()
        .required()
        .typeError('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .typeError('Password Short')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export default newPasswordSchema;
