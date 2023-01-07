/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import * as Yup from 'yup';

const AdminLibrarySchema = Yup.object().shape({
    pub_file: Yup.mixed()
        .nullable()
        .notRequired()
        .test('fileSize', 'The file is too large', (value, context) => {
            if (value && value[0] && value[0].size >= 500000) {
                return false;
            }
            return true;
        }),
    pub_external: Yup.string().when('pub_file', {
        is: (value: any) => {
            if (value && value[0] && value[0].size) {
                return false;
            }
            return true;
        },
        then: Yup.string().required(
            'Please either upload a file or add an external link to the publication',
        ),
    }),
});

export default AdminLibrarySchema;
