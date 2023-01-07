import * as Yup from 'yup';
import {
    checkIfImageIsCorrectType,
    checkIfImageIsTooBigThan5MB,
    isFileInputEmpty,
} from '@lib/utils/validators-functions';

const ConferenceGetDpUserDataFormSchema = Yup.object().shape({
    'Conference GetDp User Name': Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    'Conference GetDp User Photo': Yup.mixed()
        // .required('Required')
        .test('is-file-input-empty', 'Required', isFileInputEmpty)
        .test('is-invalid-file-type', 'Invalid image type', checkIfImageIsCorrectType)
        .test(
            'is-big-file',
            'Image too big. File should be less than 5MB',
            checkIfImageIsTooBigThan5MB,
        ),
});

export default ConferenceGetDpUserDataFormSchema;
