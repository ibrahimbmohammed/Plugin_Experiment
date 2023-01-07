import * as yup from 'yup';

export const adminCourseRegistrationSchema = yup.object({
    first_name: yup.string().min(3, 'First name is too short').typeError('First name is required'),
    last_name: yup.string().min(3, 'Last name is too short').typeError('Last name is required'),
    email: yup.string().email().typeError('Email is required'),
    phone_Number: yup
        .string()
        .min(11, 'Enter a valid phone number - Minimum 11 digit')
        .max(11, 'Enter a valid phone number'),
    Amount: yup
        .string()
        .min(3, 'Minimum of One Hundred Naira')
        .typeError('Enter valid amount e.g 100'),
    course: yup
        .string()
        .min(3, 'The course name is too short')
        .typeError('Course name is required'),
    payment_type: yup
        .string()
        .min(3, 'The course name is too short')
        .typeError('Course name is required'),
});

export default adminCourseRegistrationSchema;
