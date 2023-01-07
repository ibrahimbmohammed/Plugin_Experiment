import * as Yup from 'yup';
import {
    checkIfImageIsTooBigThan5MB,
    checkIfImageIsCorrectType,
    checkIfEventDocumentsAreCorrectType,
    // eslint-disable-next-line import/no-unresolved
} from '@lib/utils/validators-functions';
import dayjs from 'dayjs';

const CandidatesSchema = {
    name: Yup.string().max(100, 'too long'),
    bio: Yup.string().max(3000, 'too long'),
    image: Yup.mixed()
        .test(
            'is-big-file',
            'Image too big. File should be less than 5MB',
            checkIfImageIsTooBigThan5MB,
        )
        .test('is-image-correct-type', 'please upload only image', checkIfImageIsCorrectType),
};
const AnswersSchema = {
    answer: Yup.string().max(100, 'too long'),
    description: Yup.string().max(3000, 'too long'),
    image: Yup.mixed()
        .test(
            'is-big-file',
            'Image too big. File should be less than 5MB',
            checkIfImageIsTooBigThan5MB,
        )
        .test('is-image-correct-type', 'please upload only image', checkIfImageIsCorrectType),
};

const createPollSchema = Yup.object().shape({
    candidates: Yup.array().of(Yup.object().shape(CandidatesSchema)),

    answers: Yup.array().of(Yup.object().shape(AnswersSchema)),

    PollName: Yup.string().min(5, 'Too Short!').max(100, 'Too Long!').required('Required'),
    Question: Yup.string().min(5, 'Too Short!').max(100, 'Too Long!').required('Required'),

    document: Yup.mixed()
        .test(
            'is-big-file',
            'file too big. File should be less than 5MB',
            checkIfImageIsTooBigThan5MB,
        )
        .test('is-file-correct-type', 'upload only pdf file', checkIfEventDocumentsAreCorrectType),

    startDate: Yup.date().required(),
    endDate: Yup.date().min(Yup.ref('startDate')).required(),
    startTime: Yup.string().required(),
    endTime: Yup.string()
        .required()
        .test('is-time-valid', 'The End-time should be later than Start-time', function (value) {
            const startDate = dayjs(this.parent.startDate).format('YYYY-MM-DD');
            const endDate = dayjs(this.parent.endDate).format('YYYY-MM-DD');

            return (
                dayjs(`${endDate} ${value}`).format('YYYY-MM-DD HH:mm') >
                dayjs(`${startDate} ${this.parent.startTime}`).format('YYYY-MM-DD HH:mm')
            );
        }),
});
export default createPollSchema;
