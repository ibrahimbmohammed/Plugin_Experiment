/* eslint-disable import/no-unresolved */
import {
    checkIfImageIsCorrectType,
    checkIfImageIsTooBig,
    isFileInputEmpty,
} from '@lib/utils/validators-functions';
import * as Yup from 'yup';

const ProfilePictureFormSchema = Yup.object().shape({
    'Profile Picture': Yup.mixed()
        // .required('Required')
        .test('is-file-input-empty', 'Required', isFileInputEmpty)
        .test('is-invalid-file-type', 'Invalid image type', checkIfImageIsCorrectType)
        .test('is-big-file', 'Image too big. File should be less than 1mb', checkIfImageIsTooBig),
});
export default ProfilePictureFormSchema;
