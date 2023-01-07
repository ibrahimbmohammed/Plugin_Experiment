import * as Yup from 'yup';

const NextOfKinFormSchema = Yup.object().shape({
    'First Name (Next of Kin)': Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    'Last Name (Next of Kin)': Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    'Email (Next of Kin)': Yup.string().email('Invalid email').required('Required'),
    'Phone Number (Next of Kin)': Yup.string()
        .min(8, 'Kindly provide your complete phone number')
        .required('Required'),
    'Relationship (Next of Kin)': Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});
export default NextOfKinFormSchema;
