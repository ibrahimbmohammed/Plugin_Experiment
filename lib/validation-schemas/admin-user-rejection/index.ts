import * as yup from 'yup';

const AdminUserRejectionSchema = yup.object().shape({
    userId: yup.string(),
    organizationId: yup.string(),
    reason: yup.string().required('reason is required'),
});

export default AdminUserRejectionSchema;
