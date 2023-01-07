import * as Yup from 'yup';

const ProjectFormSchema = Yup.object().shape({
    'Project Name': Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    'Project Description': Yup.string()
        .min(7, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    'Project Address': Yup.string().min(7, 'Too Short!').required('Required'),
    'Start Date': Yup.date()
        .min('01/01/1900', 'Start Date must not be less than 01/01/1900')
        .typeError('Please select a valid & correct date')
        .required('Required'),
    State: Yup.string().required('Required'),
    Country: Yup.string().required('Required'),
});
export default ProjectFormSchema;
