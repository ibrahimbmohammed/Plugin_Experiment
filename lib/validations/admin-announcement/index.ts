import * as Yup from 'yup';

const AdminAnnouncementSchema = Yup.object().shape({
    title: Yup.string(),
    body: Yup.string(),
});

// const AdminAnnouncementSchema = Yup.object().shape({
//     // This is the radio button.
//     announcement_type: Yup.string().required('Preferred contact is required.'),
//     // This is the input field.
//     title: Yup.string().when('announcement_type', {
//         is: 'Announcement',
//         then: Yup.string().required('Announcement title is required.'),
//     }),
//     body: Yup.string().when('announcement_type', {
//         is: 'Announcement',
//         then: Yup.string().required('Announcement title is required.'),
//     }),
// });
export default AdminAnnouncementSchema;
