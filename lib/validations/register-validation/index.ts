/* eslint-disable import/no-unresolved */
import { passwordRegex } from '@lib/utils/helpers';
import * as yup from 'yup';

const LoginSchema = yup.object().shape({
    email: yup.string().email().required().typeError('email is required'),
    firstName: yup.string().required().typeError('email is required'),
    passwordOne: yup
        .string()
        .required()
        .typeError('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .typeError('Password Short')
        .matches(passwordRegex, 'Password must match the pattern below'),
    passwordTwo: yup.string().oneOf([yup.ref('passwordOne'), null], 'Passwords must match'),
});

export default LoginSchema;
