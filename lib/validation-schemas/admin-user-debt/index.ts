import * as yup from 'yup';

const AdminUserDebtSchema = yup.object().shape({
    userId: yup.string(),
    organizationId: yup.string(),
    debt: yup.number().required('message is required'),
    debtMessage: yup.string().required('message is required'),
});

export default AdminUserDebtSchema;
