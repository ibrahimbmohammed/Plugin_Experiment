import * as Yup from 'yup';

const PersonalInformationFormSchema = Yup.object().shape({
    //  'First Name': Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    // 'Middle Name': Yup.string(),
    // 'Last Name': Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    //   email: Yup.string().email('Invalid email').required('Required'),
    'Phone Number': Yup.string()
        .min(8, 'Kindly provide your complete phone number')
        .required('Required'),
    // 'Date of Birth': Yup.date()
    //     .min('01/01/1900', 'Date of Birth must not be less than 01/01/1900')
    //     .required(),
    // Gender: Yup.string().required('Required'),

    // 'Professional Summary': Yup.string(),
    'Residential Address': Yup.string(),
    'Postal Address': Yup.string(),
    State: Yup.string().required('Required'),
    Country: Yup.string().required('Required'),
    //  Nationality: Yup.string().required('Required'),
});

export default PersonalInformationFormSchema;
