import * as Yup from 'yup';

const ProfessionalInformationFormSchema = Yup.object().shape({
    // 'Membership Type': Yup.string().required('Required'),
    'Membership Number': Yup.string().max(50, 'Too Long!'),
    // Chapter: Yup.string().required('Required'),
    'Membership Status': Yup.string().required('Required'),
    // Specialty: Yup.string().required('Required'),
    // 'Sub Specialty': Yup.string()
    //     .required('Required')
    //     .test('is-invalid-string-data', 'Required', (string) => {
    //         if (string === '') {
    //             return false;
    //         }
    //         return true;
    //     }),
    // 'Other Membership Numbers': Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
});

export default ProfessionalInformationFormSchema;

// .test('is-invalid-file-type', 'Invalid file type', checkIfCertificateFilesAreCorrectType)
