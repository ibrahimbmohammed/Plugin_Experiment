import * as yup from 'yup';

const AdminUserSchema = yup.object().shape({
    userId: yup.string(),
    organizationId: yup.string(),
    message: yup.string().required('message is required'),
});

export default AdminUserSchema;
