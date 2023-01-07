import * as Yup from 'yup';
import { checkIfFileIsTooBig } from '@lib/utils/validators-functions';

const ResourceSchema = {
    resourceName: Yup.string().max(50, 'too long').min(3, 'Too short!').required(),
    resourceDescription: Yup.string().max(3000, 'too long').required(),
    resourceFile: Yup.mixed().test(
        'is-big-file',
        'Image too big. File should be less than 5MB',
        checkIfFileIsTooBig,
    ),
};

const createResourceSchema = Yup.object().shape({
    resources: Yup.array()
        .of(Yup.object().shape(ResourceSchema))
        .required('must have field')
        .min(1, 'minimu of one field'),
});
export default createResourceSchema;
