import * as yup from 'yup';

const ConferenceCertificateSchema = yup.object().shape({
    firstname: yup.string().required().min(3).typeError('firstname is too short'),
    lastname: yup.string().required().min(3).typeError('lastname is too short'),
    ticket_type: yup.string().required(),
});

export default ConferenceCertificateSchema;
