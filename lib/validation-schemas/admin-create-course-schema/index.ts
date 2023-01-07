/* eslint-disable import/no-unresolved */
/* eslint-disable func-names */
import * as Yup from 'yup';
import { checkIfFileIsTooBig } from '@lib/utils/validators-functions';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(isSameOrAfter);

const CreateCourseSchema = Yup.object().shape({
    course_name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),

    file_upload: Yup.mixed().test(
        'is-big-file',
        'Image too big. File should be less than 5MB',
        checkIfFileIsTooBig,
    ),
    Amount: Yup.string().required().min(1, 'too short'),
    course_des: Yup.string().min(50, 'Too Short!').max(3000, 'Too Long').required(),
    start_date: Yup.date().required(),
    end_date: Yup.date().min(Yup.ref('start_date')).required(),
    start_time: Yup.string().required(),
    end_time: Yup.string()
        .notRequired()
        .nullable()
        .test('is-time-valid', 'The End-time should be later than Start-time', function (value) {
            const daystr = dayjs().format('YYYY-MM-DD');

            return (
                dayjs(`${daystr} ${value}`).format('DD/MM/YYYY HH:mm') >
                dayjs(`${daystr} ${this.parent.start_time}`).format('DD/MM/YYYY HH:mm')
            );
        }),
});
export default CreateCourseSchema;
