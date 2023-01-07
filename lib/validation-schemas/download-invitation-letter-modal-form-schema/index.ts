import * as Yup from 'yup';

const DownloadInvitationModalFormSchema = Yup.object().shape({
    'Full Name': Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    'Address Line 1': Yup.string(),
    'Address Line 2': Yup.string(),
});

export default DownloadInvitationModalFormSchema;
