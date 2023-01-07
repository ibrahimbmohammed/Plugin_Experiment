/* eslint-disable import/no-unresolved */
import { passwordRegex } from '@lib/utils/helpers';
import * as yup from 'yup';

const newPasswordSchema = yup.object().shape({
    npassword: yup
        .string()
        .required()
        .typeError('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .typeError('Password Short')
        .matches(passwordRegex, 'Password must match the pattern below'),
    cpassword: yup.string().oneOf([yup.ref('npassword'), null], 'Passwords must match'),
});

export default newPasswordSchema;
