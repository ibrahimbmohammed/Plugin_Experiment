import * as Yup from 'yup';

const RefereeFormSchema = Yup.object().shape({
    'First Name (Referee)': Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    'Last Name (Referee)': Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    'Email (Referee)': Yup.string().email('Invalid email').required('Required'),
    'Phone Number (Referee)': Yup.string()
        .min(8, 'Kindly provide your complete phone number')
        .required('Required'),
    'Membership Number (Referee)': Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});
export default RefereeFormSchema;
