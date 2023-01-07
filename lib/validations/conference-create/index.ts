/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import * as Yup from 'yup';
import { checkIfEventDocumentsAreCorrectType } from '@lib/utils/validators-functions';

const ConferenceEventDoucmentSchema = Yup.object().shape({
    conf_invitation: Yup.mixed()
        .notRequired()
        .test(
            'is-invalid-file-type',
            'Invalid Document type, Please Only Pdfs are Supported',
            checkIfEventDocumentsAreCorrectType,
        )
        .test('fileSize', 'The file is too large,  Maximun of 5mb', (value, context) => {
            if (value && value[0] && value[0].size >= 500000) {
                return false;
            }
            return true;
        }),
    conf_cert: Yup.mixed()
        .notRequired()
        .test(
            'is-invalid-file-type',
            'Invalid Document type, Please Only Pdfs are Supported',
            checkIfEventDocumentsAreCorrectType,
        )
        .test('fileSize', 'The file is too large, Maximun of 5mb', (value, context) => {
            if (value && value[0] && value[0].size >= 500000) {
                return false;
            }
            return true;
        }),
    attendanceCode: Yup.string()
        .max(6)
        .min(6, 'Please, must be six characters, numbers or letters'),
});

export default ConferenceEventDoucmentSchema;
