/* eslint-disable import/no-unresolved */
import {
    checkIfFileIsTooBig,
    checkIfCertificateFilesAreCorrectType,
} from '@lib/utils/validators-functions';
import * as Yup from 'yup';

const AcademicInformationFormSchema = Yup.object().shape({
    'Name of Institution': Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    'Academic Discipline': Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    'Academic Program': Yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
    'Date Admitted': Yup.date()
        .min('01/01/1900', 'Start Date must not be less than 01/01/1900')
        .typeError('Please select a valid & correct date')
        .required(),
    Certificate: Yup.mixed()
        .required('Required')
        .test('is-invalid-file-type', 'Invalid file type', checkIfCertificateFilesAreCorrectType)
        .test('is-big-file', 'File too big. File should be less than 10MB', checkIfFileIsTooBig),
});
export default AcademicInformationFormSchema;
