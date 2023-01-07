import * as Yup from 'yup';

const RequestForHelpFormSchema = Yup.object().shape({
    'Helpee Name': Yup.string(),
    'Helpee Message': Yup.string().min(4, 'Too Short!').required('Required'),
    'Helpee PhoneNumber': Yup.string(),
    'Helpee Email': Yup.string().email(),
});
export default RequestForHelpFormSchema;
