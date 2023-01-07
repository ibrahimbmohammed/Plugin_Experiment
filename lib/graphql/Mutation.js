import gql from 'graphql-tag';

export const downloadLeter = `
mutation DownloadInvitationLetter($full_name: String!, $address_line_1: String!, $address_line_2: String!, $domain_name: String!) {
  downloadInvitationLetter(fullName: $full_name, addressLine1: $address_line_1, addressLine2:$address_line_2, domainName: $domain_name){
  invitationLetter
  success
}
}
`;

// export const paidRegistration = `mutation PaidEventRegistration(
//   $first_name: String!
//   $last_name:String!
//   $email:String!
//   $ticketId:Int!
//   $meetingId:Int!
//   $phone: String!
//   $orgId: Int!
// ) {
//   paidRegistration(
//   lastName: $last_name
//   firstName: $first_name
//   ticketId: $ticketId
//   email: $email
//     phone: $phone
//     meetingId: $meetingId
//     orgId: $orgId
//   ) {
//     payment {
//       id
//       uuid
//     }
//     error
//   }
// }`;

export const REGISTER_USER = gql`
    mutation RegisterUser(
        $email: String!
        $accountType: String!
        $first_name: String!
        $last_name: String!
        $username: String!
        $password_1: String!
        $password_2: String!
        $orgId: Int!
    ) {
        registerByOrganization(
            email: $email
            accountType: $accountType
            firstName: $first_name
            lastName: $last_name
            username: $username
            password1: $password_1
            password2: $password_2
            orgId: $orgId
        ) {
            token
            success
            errors
        }
    }
`;

export const SIGNIN_USER = gql`
    mutation LoginUser($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            success
            errors
            user {
                pk
                id
                username
                firstName
                lastName
                bio
                accountType
                organizationmembershiptypeSet {
                    name
                }
                dob
                qrCodeFile
                phone
                confirmedEmail
                gender
                address
                postal
                socialAuthPhotoUrl
                dateJoined
                isActive
                photoUrl
                records {
                    edges {
                        node {
                            school {
                                name
                            }
                            program
                            admitted
                            graduated
                            discipline {
                                name
                            }
                        }
                    }
                }
                workexperienceSet {
                    edges {
                        node {
                            companyName
                            designation
                            startDate
                            endDate
                        }
                    }
                }
            }
            token
        }
    }
`;

export const VERIFY_ACCOUNT = gql`
    mutation VerifyAccount($code: String!) {
        verifyAccount(code: $code) {
            ok
            error
        }
    }
`;

export const VERIFY_ACCOUNT_BY_ORGANIZATION = gql`
    mutation VerifyAccountByOrganization($code: String!, $orgId: Int!) {
        verifyAccountByOrganization(code: $code, orgId: $orgId) {
            ok
            error
        }
    }
`;
export const RESEND_CODE = gql`
    mutation ResendActivationEmail($email: String!, $organizationId: ID!) {
        resendActivationEmail(email: $email, organizationId: $organizationId) {
            ok
            error
        }
    }
`;

// export const CONFIRM_OFFLINE_PAYMENT = `
//   mutation ConfirmOfflinePaymentMutation(
//     $amountPaid: Decimal,
//     $paid: Boolean,
//     $payerName: String,
//     $paymentDate: String,
//     $paymentMeetingid: Int,
//     $paymentOrgid: Int,
//     $paymentPk: Int,
//     $paymentType: String,
//     $proofOfPayment: Upload!
//     ) {
//     confirmOfflinePayment(
//       amountPaid: $amountPaid,
//       paid: $paid
//       paymentName: $paymentName
//       paymentDate: $paymentDate
//       paymentMeetingid: $paymentMeetingid
//       paymentOrgid: $paymentOrgid
//       paymentPk: $paymentPk
//       paymentType: $paymentType
//       proofOfPayment: $proofOfPayment
//       ) {
//       success
//       error
//       payment {
//         uuid
//       }
//     }
//   }
// `;

export const CONFIRM_OFFLINE_PAYMENT = `
mutation ConfirmOfflinePayment(
    $amount_paid: Int!,
    $payment_date:String,
    $payment_meeting_id: Int!,
    $payment_org_id: Int!,
    $payment_pk: Int!,
    $payer_name: String!,
    $paid: Boolean!,
    $payment_type: String!,
    $proof_of_payment: Upload!
        ){
        confirmOfflinePayment(
        amountPaid: $amount_paid,
        paid:$paid,
        paymentDate:$payment_date,
        paymentMeetingid: $payment_meeting_id,
        paymentOrgid: $payment_org_id,
        paymentPk: $payment_pk,
        paymentType: $payment_type,
        payerName: $payer_name,
        proofOfPayment: $proof_of_payment
            ){
            payment{
            firstName,
            lastName,
            paid,
            ticket{name}
            }
        }
    }`;

export const CONFIRM_ONLINE_PAYMENT = `
  mutation ConfirmOnlinePaymentMutation(
    $amountPaid: Decimal,
    $paid: Boolean,
    $paymentApproval: String,
    $paymentDate: String,
    $paymentMeetingid: Int,
    $paymentOrgid: Int,
    $paymentPk: Int,
    $paymentType: String,
    $txref: String
    ) {
    confirmOnlinePayment(
      amountPaid: $amountPaid,
      paid: $paid
      paymentApproval: $paymentApproval
      paymentDate: $paymentDate
      paymentMeetingid: $paymentMeetingid
      paymentOrgid: $paymentOrgid
      paymentPk: $paymentPk
      paymentType: $paymentType
      txref: $txref
      ) {
      success
      error
      payment {
        id
        uuid
      }
    }
  }
`;

export const SEND_PASSWORD_RESET = gql`
    mutation SendPasswordResetEmail($email: String!) {
        sendPasswordResetEmail(email: $email) {
            ok
            error
        }
    }
`;

export const VERIFY_RESET_PASSWORD_TOKEN = gql`
    mutation VerifyResetPasswordToken($code: String!) {
        verifyPasswordResetToken(code: $code) {
            ok
            error
        }
    }
`;

export const PASSWORD_RESET = gql`
    mutation PasswordReset($token: String!, $newPassword1: String!, $newPassword2: String!) {
        passwordReset(token: $token, newPassword1: $newPassword1, newPassword2: $newPassword2) {
            success
            errors
        }
    }
`;

export const SUBMIT_NEXT_OF_KIN_MUTATION = gql`
    mutation NextOfKinMutationPayload(
        $user: String!
        $first_name: String!
        $middle_name: String
        $last_name: String!
        $phone: String!
        $email: String!
        $relationship: String!
    ) {
        nextOfKin(
            input: {
                user: $user
                firstName: $first_name
                middleName: $middle_name
                lastName: $last_name
                phone: $phone
                email: $email
                relationship: $relationship
            }
        ) {
            id
            user
            firstName
            errors {
                field
                messages
            }
        }
    }
`;

// ///////////////BEGIN USER PROFILE SECTION ///////////////

export const PostUserProfilePicture = gql`
    mutation PostUserProfilePicture($profile_picture: Upload!) {
        profilePicture(file: $profile_picture) {
            ok
            photoUrl
        }
    }
`;

export const PostUserPersonalInformation = gql`
    mutation PostUserPersonalInformation(
        $firstName: String!
        $middleName: String
        $lastName: String!
        $dob: String!
        $phone: String
        $bio: String
        $gender: String!
        $address: String!
        $email: String!
        $postal: String
        $state: String
        $country: String
        $nationality: String
    ) {
        updateAccount(
            firstName: $firstName
            middleName: $middleName
            lastName: $lastName
            bio: $bio
            address: $address
            postal: $postal
            dob: $dob
            phone: $phone
            gender: $gender
            email: $email
            state: $state
            country: $country
            nationality: $nationality
        ) {
            success
            errors
        }
    }
`;

export const PostUserJoinOrganizationRequest = gql`
    mutation PostUserJoinOrganizationRequest(
        $organizationId: String!
        $userId: String!
        $orgNumber: String
        $otherMembershipNumbers: String!
        $newOrOld: String!
        $membershipCadreId: String
        $specialty: String
        $subSpecialty: String
        $subdivision: String
    ) {
        joinOrganization(
            input: {
                organization: $organizationId
                user: $userId
                orgNumber: $orgNumber
                otherMembershipNumbers: $otherMembershipNumbers
                newOrOld: $newOrOld
                membershipCadre: $membershipCadreId
                specialty: $specialty
                subSpecialty: $subSpecialty
                subdivision: $subdivision
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const UpdateUserJoinOrganizationRequest = gql`
    mutation UpdateUserJoinOrganizationRequest(
        $joinRequestId: Int
        $organizationId: String!
        $userId: String!
        $orgNumber: String
        $otherMembershipNumbers: String!
        $newOrOld: String!
        $membershipCadreId: String
        $specialty: String
        $subSpecialty: String
        $subdivision: String
    ) {
        joinOrganization(
            input: {
                id: $joinRequestId
                organization: $organizationId
                user: $userId
                orgNumber: $orgNumber
                otherMembershipNumbers: $otherMembershipNumbers
                newOrOld: $newOrOld
                membershipCadre: $membershipCadreId
                specialty: $specialty
                subSpecialty: $subSpecialty
                subdivision: $subdivision
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const DeleteUserWorkExperience = gql`
    mutation DeleteUserWorkExperience($workExperienceId: ID!) {
        userWorkExperienceDelete(id: $workExperienceId) {
            ok
        }
    }
`;

export const UpdateUserWorkExperience = gql`
    mutation UpdateUserWorkExperience(
        $workExperienceId: Int!
        $userId: String!
        $current: Boolean
        $companyName: String!
        $designation: String
        $description: String
        $country: String!
        $state: String
        $address: String!
        $startDate: Date!
        $endDate: Date
    ) {
        userWorkExperience(
            input: {
                id: $workExperienceId
                user: $userId
                current: $current
                companyName: $companyName
                designation: $designation
                description: $description
                country: $country
                state: $state
                address: $address
                startDate: $startDate
                endDate: $endDate
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const PostUserWorkExperience = gql`
    mutation PostUserWorkExperience(
        $userId: String!
        $current: Boolean
        $companyName: String!
        $designation: String
        $description: String
        $country: String!
        $state: String
        $address: String!
        $startDate: Date!
        $endDate: Date
    ) {
        userWorkExperience(
            input: {
                user: $userId
                current: $current
                companyName: $companyName
                designation: $designation
                description: $description
                country: $country
                state: $state
                address: $address
                startDate: $startDate
                endDate: $endDate
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const PostUserNextOfKin = gql`
    mutation PostUserNextOfKin(
        $userId: String!
        $firstName: String!
        $middleName: String!
        $lastName: String
        $email: String!
        $phone: String
        $relationship: String!
    ) {
        nextOfKin(
            input: {
                user: $userId
                firstName: $firstName
                middleName: $middleName
                lastName: $lastName
                email: $email
                phone: $phone
                relationship: $relationship
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const UpdateUserNextOfKin = gql`
    mutation UpdateUserNextOfKin(
        $nextOfKinId: Int!
        $userId: String!
        $firstName: String!
        $middleName: String!
        $lastName: String
        $email: String!
        $phone: String
        $relationship: String!
    ) {
        nextOfKin(
            input: {
                id: $nextOfKinId
                user: $userId
                firstName: $firstName
                middleName: $middleName
                lastName: $lastName
                email: $email
                phone: $phone
                relationship: $relationship
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const DeleteUserNextOfKin = gql`
    mutation DeleteUserNextOfKin($nextOfKinId: ID!) {
        nextOfKinDelete(id: $nextOfKinId) {
            ok
        }
    }
`;

export const PostUserReferee = gql`
    mutation PostUserReferee(
        $userId: String!
        $firstName: String!
        $middleName: String!
        $lastName: String
        $email: String!
        $phone: String
        $number: String!
        $organizationId: String!
    ) {
        memberReferee(
            input: {
                user: $userId
                firstName: $firstName
                middleName: $middleName
                lastName: $lastName
                email: $email
                phone: $phone
                number: $number
                organization: $organizationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const DeleteUserReferee = gql`
    mutation DeleteUserReferee($refereeId: ID!) {
        memberRefereeDelete(id: $refereeId) {
            ok
        }
    }
`;

export const UpdateUserReferee = gql`
    mutation UpdateUserReferee(
        $refereeId: Int!
        $userId: String!
        $firstName: String!
        $middleName: String!
        $lastName: String
        $email: String!
        $phone: String
        $number: String!
        $organizationId: String!
    ) {
        memberReferee(
            input: {
                id: $refereeId
                user: $userId
                firstName: $firstName
                middleName: $middleName
                lastName: $lastName
                email: $email
                phone: $phone
                number: $number
                organization: $organizationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const DeleteUserAcademicRecord = gql`
    mutation DeleteUserAcademicRecord($academicRecordId: ID!) {
        academicRecordDelete(id: $academicRecordId) {
            ok
        }
    }
`;

export const UpdateUserAcademicInformation = gql`
    mutation UpdateUserAcademicInformation(
        $academicRecordId: ID!
        $admitted: Date
        $school: String
        $graduated: String
        $program: String
        $discipline: String
        $current: Boolean
        $certificate: Upload
    ) {
        userAcademicInformation(
            id: $academicRecordId
            admitted: $admitted
            graduated: $graduated
            discipline: $discipline
            school: $school
            program: $program
            current: $current
            certificate: $certificate
        ) {
            success
            errors
        }
    }
`;

export const PostUserAcademicInformation = gql`
    mutation PostUserAcademicInformation(
        $admitted: Date
        $school: String
        $graduated: String
        $program: String
        $discipline: String
        $current: Boolean
        $certificate: Upload
    ) {
        userAcademicInformation(
            admitted: $admitted
            graduated: $graduated
            discipline: $discipline
            school: $school
            program: $program
            current: $current
            certificate: $certificate
        ) {
            success
            errors
        }
    }
`;

export const PostUserMembershipApplicationSubmission = gql`
    mutation PostUserMembershipApplicationSubmission($organizationId: ID!, $userId: ID!) {
        membershipApplicationSubmission(orgId: $organizationId, userId: $userId) {
            success
        }
    }
`;

// ///////////////END USER PROFILE SECTION ///////////////

// ///////////////BEGIN DASHBOARD/USER PAYMENT APIS SECTION ///////////////
export const PostCheckIfUserIsMemberElseCreateJoinRequest = gql`
    mutation PostCheckIfUserIsMemberElseCreateJoinRequest(
        $organizationId: ID!
        $userId: ID!
        $membershipTypeId: ID
    ) {
        checkIfUserIsMemberElseCreateJoinRequest(
            organizationId: $organizationId
            userId: $userId
            membershipTypeId: $membershipTypeId
        ) {
            success
        }
    }
`;

export const PostConfirmMembershipOnlinePayment = gql`
    mutation PostConfirmMembershipOnlinePayment(
        $organizationId: Int!
        $membershipTypeId: Int
        $userId: Int!
        $amountPaid: Int!
        $paid: Boolean!
        $paymentApproval: Boolean!
        $paymentType: String!
        $paymentDate: String!
        $txref: String!
        $paymentName: String
        $paymentStatus: String
    ) {
        confirmMembershipOnlinePayment(
            orgPk: $organizationId
            membershipTypeId: $membershipTypeId
            userId: $userId
            amountPaid: $amountPaid
            paid: $paid
            paymentApproval: $paymentApproval
            paymentDate: $paymentDate
            paymentType: $paymentType
            txref: $txref
            paymentName: $paymentName
            paymentStatus: $paymentStatus
        ) {
            error
            success
        }
    }
`;

export const PostNullifyMemberOutstandingPayments = gql`
    mutation PostNullifyMemberOutstandingPayments($organizationId: ID!, $userId: ID!) {
        nullifyMemberOutstandingPayments(organizationId: $organizationId, userId: $userId) {
            success
        }
    }
`;
export const CreateOrgBio = gql`
    mutation createOrgBio($bio: String!) {
        updateUserProfileBio(bio: $bio) {
            success
        }
    }
`;
export const CreateOrgDocument = gql`
    mutation CreateOrgDocument(
        $cacCertificate: Upload
        $companyProfile: Upload
        $other: Upload
        $taxClearance: Upload
    ) {
        createUpdateUserProfileDocuments(
            cacCertificate: $cacCertificate
            companyProfile: $companyProfile
            other: $other
            taxClearance: $taxClearance
        ) {
            success
        }
    }
`;
// ///////////////END DASHBOARD/USER PAYMENT APIS SECTION ///////////////

// ///////////////BEGIN COMMUNITY-HELP API SECTION ///////////////

export const PostSendHelpMessageToCommunity = gql`
    mutation PostSendHelpMessageToCommunity(
        $domainName: String
        $message: String!
        $email: String
        $pageName: String
        $senderName: String!
        $phoneNumber: String
    ) {
        sendHelpMessageToCommunity(
            domainName: $domainName
            message: $message
            pageName: $pageName
            senderName: $senderName
            phoneNumber: $phoneNumber
            email: $email
        ) {
            success
        }
    }
`;
// ///////////////END COMMUNITY-HELP API SECTION ///////////////
// ////////////// POST DONATION TO DATABASE ///////////////////

export const PostDonationPayment = gql`
    mutation PostDonationPayment(
        $name: String!
        $phoneNumber: String
        $amount: String
        $email: String
        $organization: String
        $clientMutationId: String
    ) {
        donate(
            input: {
                name: $name
                phoneNumber: $phoneNumber
                amount: $amount
                email: $email
                organization: $organization
                clientMutationId: $clientMutationId
            }
        ) {
            errors {
                field
                messages
            }
        }
    }
`;

// //////////////// END POST DONATION TO DATABASE ///////////////

// /////////////// TRAINING API ////////////////////////////////

export const PostTrainingPayment = gql`
    mutation PostTrainingPayment(
        $amountPaid: Float
        $paymentType: String
        $paid: Boolean
        $paymentApproval: Boolean
        $paymentDate: Date
        $paymentName: String
        $organization: String
        $course: String!
        $student: String!
        $transactionReference: String
        $refundStatus: Boolean
    ) {
        enrollment(
            input: {
                amountPaid: $amountPaid
                paymentType: $paymentType
                paid: $paid
                paymentApproval: $paymentApproval
                paymentDate: $paymentDate
                paymentName: $paymentName
                organization: $organization
                course: $course
                student: $student
                transactionReference: $transactionReference
                refundStatus: $refundStatus
            }
        ) {
            course
            errors {
                field
                messages
            }
        }
    }
`;

export const PostAdminCreateUpdateCourse = gql`
    mutation PostAdminCreateUpdateCourse(
        $courseName: String!
        $courseDescription: String!
        $paid: Boolean!
        $organizationId: ID!
        $message: String
        $amount: Float!
        $id: ID
        $courseImage: Upload
        $tutor: String
        $virtualClass: Boolean
        $physicalClass: Boolean
        $startDate: Date!
        $startTime: Time!
        $endDate: Date!
        $endTime: Time!
    ) {
        adminCreateUpdateCourse(
            input: {
                courseName: $courseName
                courseDescription: $courseDescription
                paid: $paid
                organizationId: $organizationId
                message: $message
                amount: $amount
                id: $id
                courseImage: $courseImage
                tutor: $tutor
                virtualClass: $virtualClass
                physicalClass: $physicalClass
                startDate: $startDate
                startTime: $startTime
                endDate: $endDate
                endTime: $endTime
            }
        ) {
            course {
                courseName
                courseDescription
                paid
                message

                id
                courseImageUrl
                tutor
                virtualClass
                physicalClass
                startDate
                startTime
                endDate
                endTime
                slug
            }
            success
        }
    }
`;

export const PostAdminCreateUpdateResources = gql`
    mutation PostAdminCreateUpdateResources(
        $courseId: ID!
        $organizationId: ID!
        $resources: [ResourceInputObjectType]!
    ) {
        adminCreateCourseResources(
            courseId: $courseId
            organizationId: $organizationId
            resources: $resources
        ) {
            success
            resources {
                resourceName
                resourceDescription
                resourceUrl
                resourceFileUrl
            }
        }
    }
`;

export const PostAdminCreateUpdateAssignment = gql`
    mutation PostAdminCreateUpdateAssignment(
        $organizationId: ID!
        $courseId: ID!
        $assignments: [AssignmentSerializerInputObjectType]
    ) {
        adminCreateCourseAssignments(
            organizationId: $organizationId
            courseId: $courseId
            assignments: $assignments
        ) {
            assignments {
                assignmentName
                pk
                id
            }
            success
        }
    }
`;
// /////////////// END TRAINING API ///////////////////////////

export const SubmitWorkExperienceMutationWithEndDate = gql`
    mutation UpdateWorkExperienceWithEndDate(
        $user: String!
        $current: Boolean!
        $companyName: String!
        $designation: String!
        $description: String!
        $country: String!
        $state: String!
        $address: String!
        $startDate: Date!
        $endDate: Date!
    ) {
        userWorkExperience(
            input: {
                user: $user
                current: $current
                companyName: $companyName
                designation: $designation
                description: $description
                country: $country
                state: $state
                address: $address
                startDate: $startDate
                endDate: $endDate
            }
        ) {
            errors {
                field
                messages
            }
        }
    }
`;

export const DeleteWorkExperienceMutation = gql`
    mutation DeleteWorkExperience($id: ID!) {
        userWorkExperienceDelete(id: $id) {
            ok
        }
    }
`;

export const DeleteAcedamicMutation = gql`
    mutation UseracademicRecordDelete($id: ID!) {
        academicRecordDelete(id: $id) {
            ok
        }
    }
`;

export const SUBMIT_ACADEMIC_INFORMATION_MUTATION_WITHOUT_DISCIPLINE = gql`
    mutation UpdateUserAcademicInformationWithoutDis(
        $admitted: Date!
        $school: String!
        $graduated: String!
        $program: String!
        $current: Boolean
        $certificate: Upload
    ) {
        userAcademicInformation(
            admitted: $admitted
            graduated: $graduated
            school: $school
            program: $program
            current: $current
            certificate: $certificate
        ) {
            success
            errors
        }
    }
`;

export const EditAcademicInformationMutation = gql`
    mutation UpdateUserAcademicInformationEdit(
        $id: ID!
        $admitted: Date!
        $school: String!
        $discipline: String!
        $graduated: String!
        $program: String!
        $current: Boolean!
        $certificate: Upload!
    ) {
        userAcademicInformation(
            id: $id
            admitted: $admitted
            graduated: $graduated
            discipline: $discipline
            school: $school
            program: $program
            current: $current
            certificate: $certificate
        ) {
            success
            errors
        }
    }
`;

export const SubmitAcademicCertificateMutation = `
    mutation UploadAcademicRecordCertificate($file: Upload!){
      uploadAcademicCertificate(file: $file) {
          ok
        }
      }
    `;

export const SubmitAdditionalInfoTextMutation = `
    mutation SubmitAdditionalInfoText($membershipRequirementId: Int!, $text: String!) {
          submitOrgAdditionalInfoText(
              membershipRequirementId:$membershipRequirementId
              text: $text,
          ){
            success
          }
        }`;

export const SubmitAdditionalInfoFileMutation = `
    mutation SubmitAdditionalInfoFile($membershipRequirementId: Int!, $file: Upload!) {
         submitOrgAdditionalInfoFile(
            membershipRequirementId:$membershipRequirementId,
            file: $file
         ){
            success
         }
    }`;

export const SubmitOrgAdditionalMembershipTypeMutation = `
mutation SubmitOrgAdditionalMembershipTypeMutation($membership_type_name: String!, $org_id: ID!){
	submitOrgAdditionalInfoMembershipType(membershipTypeName: $membership_type_name, orgId: $org_id){
		success
	}
}`;

// export const JOIN_ORGANIZATION = `
//   mutation JoinOrgMutation($orgId: ID!) {
//     joinOrganization(orgId: $orgId) {
//       request {
//         organization {
//           name
//           abbrev
//         }
//         user {
//           lastName
//         }
//         approved
//       }
//     }
//   }
// `;
// export const JOIN_ORGANIZATION  = `
// mutation JoinOrgMutation($org_id: String!, $user_id: String!
//  ) {
//   joinOrganization(input: {
//     organization: $org_id,
//     user: $user_id,
//   })
// {
//   approved
//   errors{
//     field
//     messages
//   }
// }
// }`

export const ContactOrganizationAdmins = gql`
    mutation ContactOrganizationAdmins(
        $email: String!
        $phoneNumber: String
        $name: String!
        $request: String!
        $organization: String!
    ) {
        contactOrganizationAdmins(
            input: {
                email: $email
                phoneNumber: $phoneNumber
                name: $name
                request: $request
                organization: $organization
            }
        ) {
            errors {
                messages
            }
        }
    }
`;

// ///////////BEGIN CONFERENCE ////////////////
export const ConferenceRegistration = gql`
    mutation ConferenceRegistrationMutationPayload(
        $email: String
        $firstName: String
        $phone: String
        $lastName: String
        $ticket: String
        $organization: String
        $event: String
        $user: String
    ) {
        conferenceRegistration(
            input: {
                email: $email
                firstName: $firstName
                lastName: $lastName
                phone: $phone
                event: $event
                ticket: $ticket
                organization: $organization
                user: $user
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const ConferenceCheckEmail = gql`
    mutation CheckRegisteringEmail($email: String!, $event_id: ID!) {
        checkRegistrationEmail(email: $email, eventId: $event_id) {
            success
            message
            hasPaid
            conferenceRegistrationDetails {
                pk
                firstName
                middleName
                lastName
                phone
                email
                ticket {
                    id
                    pk
                }
                user {
                    pk
                }
            }
        }
    }
`;

export const PostConfirmConferenceOnlinePayment = gql`
    mutation PostConfirmConferenceOnlinePayment(
        $org_id: Int
        $user_id: Int
        $event_id: Int
        $ticket_id: Int
        $first_name: String
        $last_name: String
        $email: String!
        $amount_paid: Int
        $paid: Boolean
        $payment_approval: Boolean
        $payment_date: String
        $payment_type: String
        $txref: String
        $payment_name: String
    ) {
        confirmConferenceOnlinePayment(
            orgId: $org_id
            userId: $user_id
            meetingId: $event_id
            ticketId: $ticket_id
            firstName: $first_name
            lastName: $last_name
            email: $email
            amountPaid: $amount_paid
            paid: $paid
            paymentApproval: $payment_approval
            paymentDate: $payment_date
            paymentType: $payment_type
            txref: $txref
            paymentName: $payment_name
        ) {
            error
            success
        }
    }
`;

export const PostDownloadInvitationLetter = gql`
    mutation PostDownloadInvitationLetter(
        $fullName: String!
        $addressLine1: String
        $addressLine2: String
        $eventId: ID
    ) {
        downloadInvitationLetter(
            fullName: $fullName
            addressLine1: $addressLine1
            addressLine2: $addressLine2
            eventId: $eventId
        ) {
            invitationLetter
            success
        }
    }
`;

export const PostGenerateUserConferenceDp = gql`
    mutation PostGenerateUserConferenceDp($photo: Upload!, $eventId: ID!, $name: String!) {
        conferenceGetDp(photo: $photo, eventId: $eventId, name: $name) {
            success
            imageUrl
        }
    }
`;

export const PostConferenceRegistrationAndPayment = gql`
    mutation PostConferenceRegistrationAndPayment(
        $userId: Int
        $user: String
        $orgId: Int
        $organization: String
        $event: String
        $eventId: Int
        $ticket: String
        $ticketId: Int
        $firstName: String
        $lastName: String
        $email: String!
        $phone: String
        $amountPaid: Int
        $paid: Boolean
        $paymentApproval: Boolean
        $paymentDate: String
        $paymentType: String
        $txref: String
        $paymentName: String
    ) {
        conferenceRegistration(
            input: {
                email: $email
                firstName: $firstName
                lastName: $lastName
                phone: $phone
                event: $event
                ticket: $ticket
                organization: $organization
                user: $user
            }
        ) {
            id
            errors {
                field
                messages
            }
        }

        confirmConferenceOnlinePayment(
            orgId: $orgId
            userId: $userId
            meetingId: $eventId
            ticketId: $ticketId
            firstName: $firstName
            lastName: $lastName
            email: $email
            amountPaid: $amountPaid
            paid: $paid
            paymentApproval: $paymentApproval
            paymentDate: $paymentDate
            paymentType: $paymentType
            txref: $txref
            paymentName: $paymentName
        ) {
            error
            success
        }
    }
`;

export const PostConferenceDashboardLogin = gql`
    mutation PostConferenceDashboardLogin($email: String!, $eventId: ID!) {
        conferenceLogin(email: $email, eventId: $eventId) {
            success
            conferenceUserToken
        }
    }
`;

// ///////////END CONFERENCE ////////////////

// ///////////////////// admin /////////////////

export const PostUserRegistrationAcceptance = gql`
    mutation postUserRegistrationAcceptance(
        $organizationId: ID!
        $userId: ID!
        $organizationNumber: String
    ) {
        adminApproveApplication(
            organizationId: $organizationId
            userId: $userId
            organizationNumber: $organizationNumber
        ) {
            request {
                verified
            }
        }
    }
`;

export const PostUserRegistrationRejection = gql`
    mutation postUserRegistrationRejection($organizationId: ID!, $userId: ID!, $reason: String!) {
        adminRejectApplication(organizationId: $organizationId, userId: $userId, reason: $reason) {
            request {
                verified
            }
        }
    }
`;

export const PostUserRegistrationMessage = gql`
    mutation postUserRegistrationMessage($organizationId: ID!, $userId: ID!, $message: String!) {
        adminContactAboutApplication(
            organizationId: $organizationId
            userId: $userId
            message: $message
        ) {
            success
        }
    }
`;

// ///////////////////// content admin /////////////////
export const CreateOrgAnnouncement = gql`
    mutation createOrgAnnouncement($title: String!, $body: String!, $organization: String) {
        announcement(input: { title: $title, body: $body, organization: $organization }) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const DeleteAdminOrgAnnouncement = gql`
    mutation deleteAdminOrgAnnouncement($organizationId: ID!, $id: ID!) {
        announcementDelete(organizationId: $organizationId, id: $id) {
            ok
        }
    }
`;

export const CreateAdminOrgConference = gql`
    mutation createAdminOrgConference(
        $id: Int
        $name: String!
        $theme: String
        $organizationId: ID!
        $startDate: Date!
        $startTime: Time
        $isConference: Boolean
        $attendance: Boolean
        $category: ID!
        $description: String
        $endDate: Date
        $endTime: Time
        $flyer: Upload
        $invitationLetter: Upload
        $venue: String
    ) {
        meeting(
            id: $id
            name: $name
            theme: $theme
            organizationId: $organizationId
            startDate: $startDate
            startTime: $startTime
            isConference: $isConference
            attendance: $attendance
            categoryId: $category
            description: $description
            endDate: $endDate
            endTime: $endTime
            flyer: $flyer
            invitationLetter: $invitationLetter
            venue: $venue
        ) {
            success
            meeting {
                pk
                name
            }
        }
    }
`;

export const EditAdminOrgConference = gql`
    mutation editAdminOrgConference(
        $id: Int
        $name: String!
        $theme: String
        $organizationId: ID!
        $startDate: Date!
        $startTime: Time
        $isConference: Boolean
        $attendance: Boolean
        $category: ID!
        $description: String
        $endDate: Date
        $endTime: Time
        $flyer: Upload
        $invitationLetter: Upload
        $venue: String
    ) {
        meeting(
            id: $id
            name: $name
            theme: $theme
            organizationId: $organizationId
            startDate: $startDate
            startTime: $startTime
            isConference: $isConference
            attendance: $attendance
            categoryId: $category
            description: $description
            endDate: $endDate
            endTime: $endTime
            flyer: $flyer
            invitationLetter: $invitationLetter
            venue: $venue
        ) {
            success
            meeting {
                pk
                name
            }
        }
    }
`;

export const CreateAdminOrgConferenceCategory = gql`
    mutation createAdminOrgConferenceCategory(
        $name: String!
        $description: String
        $organization: String
        $clientMutationId: String
    ) {
        meetingCategoryCreate(
            input: {
                name: $name
                description: $description
                org: $organization
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;
export const EditAdminOrgConferenceCategory = gql`
    mutation editAdminOrgConferenceCategory(
        $id: Int
        $name: String!
        $description: String
        $organization: String
        $clientMutationId: String
    ) {
        meetingCategoryCreate(
            input: {
                id: $id
                name: $name
                description: $description
                org: $organization
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const CreateAdminPublicationCategoryList = gql`
    mutation createAdminPublicationCategoryList(
        $name: String!
        $description: String
        $organization: String
        $clientMutationId: String
    ) {
        adminCreateUpdatePublicationCategory(
            input: {
                name: $name
                description: $description
                organization: $organization
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const CreateAdminPublication = gql`
    mutation createAdminPublication(
        $id: Int
        $categoryId: ID!
        $organizationId: ID!
        $title: String!
        $file: Upload
        $isPaidDownload: Boolean
        $amountPayable: Int
        $abstract: String
        $externalUploadLink: String
    ) {
        adminCreatePublication(
            id: $id
            abstract: $abstract
            amountPayable: $amountPayable
            categoryId: $categoryId
            file: $file
            isPaidDownload: $isPaidDownload
            organizationId: $organizationId
            title: $title
            externalUploadLink: $externalUploadLink
        ) {
            success
        }
    }
`;

export const DeleteAdminPublication = gql`
    mutation deleteAdminPublication($organizationId: ID!, $id: ID!) {
        adminPublicationDelete(organizationId: $organizationId, id: $id) {
            ok
        }
    }
`;

export const CreateAdminOrgLeader = gql`
    mutation createAdminOrgLeader(
        $id: Int
        $name: String!
        $bio: String
        $photo: Upload
        $startTenure: Date
        $endTenure: Date
        $current: Boolean
        $facebook: String
        $twitter: String
        $email: String
        $organization: ID!
        $position: ID!
        $category: ID!
    ) {
        adminExecutive(
            id: $id
            name: $name
            bio: $bio
            photo: $photo
            startTenure: $startTenure
            endTenure: $endTenure
            current: $current
            facebook: $facebook
            twitter: $twitter
            email: $email
            organizationId: $organization
            positionId: $position
            categoryId: $category
        ) {
            executive {
                pk
            }
            success
        }
    }
`;

export const CreateAdminLeaderCategory = gql`
    mutation createAdminLeaderCategory(
        $name: String!
        $description: String
        $organization: String
        $clientMutationId: String
    ) {
        adminLeadershipCategory(
            input: {
                name: $name
                description: $description
                organization: $organization
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const EditAdminLeaderCategory = gql`
    mutation editAdminLeaderCategory(
        $id: Int
        $name: String!
        $description: String
        $organization: String
        $clientMutationId: String
    ) {
        adminLeadershipCategory(
            input: {
                id: $id
                name: $name
                description: $description
                organization: $organization
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const CreateAdminLeaderPosition = gql`
    mutation createAdminLeaderPosition(
        $position: String!
        $rank: Int!
        $job: String
        $tenure: String
        $slug: String
        $organization: String!
        $clientMutationId: String
    ) {
        adminLeadershipPosition(
            input: {
                position: $position
                rank: $rank
                job: $job
                tenure: $tenure
                slug: $slug
                organization: $organization
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const EditAdminLeaderPosition = gql`
    mutation EditAdminLeaderPosition(
        $id: Int
        $position: String!
        $rank: Int!
        $job: String
        $tenure: String
        $slug: String
        $organization: String!
        $clientMutationId: String
    ) {
        adminLeadershipPosition(
            input: {
                id: $id
                position: $position
                rank: $rank
                job: $job
                tenure: $tenure
                slug: $slug
                organization: $organization
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const DeleteAdminLeader = gql`
    mutation deleteAdminLeader($organizationId: ID!, $id: ID!) {
        adminExecutiveDelete(organizationId: $organizationId, id: $id) {
            ok
        }
    }
`;

export const CreateAdminFaq = gql`
    mutation createAdminFaq(
        $question: String
        $answer: String
        $organization: String
        $createdBy: String
        $clientMutationId: String
    ) {
        adminWebsiteFaq(
            input: {
                question: $question
                answer: $answer
                organization: $organization
                createdBy: $createdBy
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;
export const EditAdminFaq = gql`
    mutation EditAdminFaq(
        $id: Int
        $question: String
        $answer: String
        $organization: String
        $createdBy: String
        $clientMutationId: String
    ) {
        adminWebsiteFaq(
            input: {
                id: $id
                question: $question
                answer: $answer
                organization: $organization
                createdBy: $createdBy
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const DeleteAdminFaq = gql`
    mutation deleteAdminFaq($organizationId: ID!, $id: ID!) {
        adminWebsiteFaqDelete(organizationId: $organizationId, id: $id) {
            ok
        }
    }
`;

export const CreateAdminChapters = gql`
    mutation createAdminChapters(
        $subdivision: String!
        $chairperson: String
        $phoneNumber: String
        $email: String
        $meetingDaysTime: String
        $meetingVenue: String
        $dateOfInauguration: Date
        $state: String
        $type: String
        $organization: String
        $clientMutationId: String
    ) {
        subdivision(
            input: {
                subdivision: $subdivision
                chairperson: $chairperson
                phoneNumber: $phoneNumber
                email: $email
                meetingDaysTime: $meetingDaysTime
                meetingVenue: $meetingVenue
                dateOfInauguration: $dateOfInauguration
                state: $state
                type: $type
                organization: $organization
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;
export const EditAdminChapters = gql`
    mutation editAdminChapters(
        $id: Int
        $subdivision: String!
        $chairperson: String
        $phoneNumber: String
        $email: String
        $meetingDaysTime: String
        $meetingVenue: String
        $dateOfInauguration: Date
        $state: String
        $type: String
        $organization: String
        $clientMutationId: String
    ) {
        subdivision(
            input: {
                id: $id
                subdivision: $subdivision
                chairperson: $chairperson
                phoneNumber: $phoneNumber
                email: $email
                meetingDaysTime: $meetingDaysTime
                meetingVenue: $meetingVenue
                dateOfInauguration: $dateOfInauguration
                state: $state
                type: $type
                organization: $organization
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const DeleteAdminChapters = gql`
    mutation deleteAdminChapters($organizationId: ID!, $id: ID!) {
        subdivisionDelete(organizationId: $organizationId, id: $id) {
            ok
        }
    }
`;

export const CreateAdminSpeciality = gql`
    mutation createAdminSpeciality(
        $name: String!
        $organization: String
        $clientMutationId: String
    ) {
        adminSpecialty(
            input: { name: $name, organization: $organization, clientMutationId: $clientMutationId }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;
export const EditAdminSpeciality = gql`
    mutation editAdminSpeciality(
        $id: Int
        $name: String!
        $organization: String
        $clientMutationId: String
    ) {
        adminSpecialty(
            input: {
                id: $id
                name: $name
                organization: $organization
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const DeleteAdminSpeciality = gql`
    mutation deleteAdminSpeciality($organizationId: ID!, $id: ID!) {
        adminSpecialtyDelete(organizationId: $organizationId, id: $id) {
            ok
        }
    }
`;

export const CreateAdminSubSpeciality = gql`
    mutation createAdminSubSpeciality(
        $name: String
        $specialty: String
        $organization: String
        $clientMutationId: String
    ) {
        adminSubSpecialty(
            input: {
                name: $name
                specialty: $specialty
                organization: $organization
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;
export const EditAdminSubSpeciality = gql`
    mutation editAdminSubSpeciality(
        $id: Int
        $name: String
        $specialty: String
        $organization: String
        $clientMutationId: String
    ) {
        adminSubSpecialty(
            input: {
                id: $id
                name: $name
                specialty: $specialty
                organization: $organization
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const DeleteAdminSubSpeciality = gql`
    mutation deleteAdminSubSpeciality($organizationId: ID!, $id: ID!) {
        adminSubSpecialtyDelete(organizationId: $organizationId, id: $id) {
            ok
        }
    }
`;

export const CreateAdminAddDebtForMember = gql`
    mutation createAdminAddDebtForMember(
        $debtAmount: Int!
        $debtReason: String!
        $organizationId: ID!
        $userId: ID!
    ) {
        adminAddDebtForMember(
            debtAmount: $debtAmount
            debtReason: $debtReason
            organizationId: $organizationId
            userId: $userId
        ) {
            request {
                verified
                amountOwingValue
                amountOwingStr
            }
        }
    }
`;
export const CreateAdminConferenceOfflinePayment = gql`
    mutation createAdminConferenceOfflinePayment(
        $amountPaid: Int!
        $email: String!
        $eventId: ID!
        $firstName: String!
        $lastName: String
        $offlinePaymentType: String
        $organizationId: ID!
        $paymentDate: Date
        $paymentName: String
        $phoneNumber: String
        $ticketId: ID
    ) {
        adminOfflineConferenceRegistrationAndPayment(
            amountPaid: $amountPaid
            email: $email
            eventId: $eventId
            firstName: $firstName
            lastName: $lastName
            offlinePaymentType: $offlinePaymentType
            organizationId: $organizationId
            paymentDate: $paymentDate
            paymentName: $paymentName
            phoneNumber: $phoneNumber
            ticketId: $ticketId
        ) {
            success
        }
    }
`;

export const CreateAdminConferenceBasicInfo = gql`
    mutation createAdminConferenceBasicInfo(
        $name: String!
        $venue: String!
        $category: String
        $theme: String
        $description: String
        $attendance: Boolean!
        $virtualOnly: Boolean
        $startDate: Date!
        $endDate: Date
        $startTime: Time!
        $endTime: Time
        $isConference: Boolean
        $org: String
        $clientMutationId: String
    ) {
        adminCreateUpdateConferenceBasicData(
            input: {
                name: $name
                venue: $venue
                category: $category
                theme: $theme
                description: $description
                attendance: $attendance
                virtualOnly: $virtualOnly
                startDate: $startDate
                endDate: $endDate
                startTime: $startTime
                endTime: $endTime
                isConference: $isConference
                org: $org
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;
export const EditAdminConferenceBasicInfo = gql`
    mutation editAdminConferenceBasicInfo(
        $id: Int
        $name: String!
        $venue: String!
        $category: String
        $theme: String
        $description: String
        $attendance: Boolean!
        $virtualOnly: Boolean
        $startDate: Date!
        $endDate: Date
        $startTime: Time!
        $endTime: Time
        $isConference: Boolean
        $org: String
        $clientMutationId: String
    ) {
        adminCreateUpdateConferenceBasicData(
            input: {
                id: $id
                name: $name
                venue: $venue
                category: $category
                theme: $theme
                description: $description
                attendance: $attendance
                virtualOnly: $virtualOnly
                startDate: $startDate
                endDate: $endDate
                startTime: $startTime
                endTime: $endTime
                isConference: $isConference
                org: $org
                clientMutationId: $clientMutationId
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;
export const CreateAdminConferenceEventPresenters = gql`
    mutation createAdminConferenceEventPresenters(
        $eventId: ID!
        $organizationId: ID!
        $presenters: [PresenterInputObjectType]!
    ) {
        adminCreateEventPresenters(
            eventId: $eventId
            organizationId: $organizationId
            presenters: $presenters
        ) {
            success
            presenters {
                id
            }
        }
    }
`;
export const CreateAdminConferenceSocialShareDp = gql`
    mutation createAdminConferenceSocialShareDp(
        $avatarImageAreaHeight: Float!
        $avatarImageAreaWidth: Float!
        $avatarImageXCoord: Float!
        $avatarImageYCoord: Float!
        $bannerImage: Upload!
        $eventId: ID!
        $eventSocialDpBannerId: ID
        $nameTextXCoord: Float!
        $nameTextYCoord: Float!
        $organizationId: ID!
    ) {
        adminCreateUpdateEventSocialDpBanner(
            avatarImageAreaHeight: $avatarImageAreaHeight
            avatarImageAreaWidth: $avatarImageAreaWidth
            avatarImageXCoord: $avatarImageXCoord
            avatarImageYCoord: $avatarImageYCoord
            bannerImage: $bannerImage
            eventId: $eventId
            eventSocialDpBannerId: $eventSocialDpBannerId
            nameTextXCoord: $nameTextXCoord
            nameTextYCoord: $nameTextYCoord
            organizationId: $organizationId
        ) {
            success
            eventSocialDpBanner {
                id
            }
        }
    }
`;

export const CreateAdminConferenceSchedule = gql`
    mutation createAdminConferenceSchedule(
        $description: String
        $eventSlug: String
        $location: String
        $scheduleDate: Date
        $scheduleEndTime: Time
        $scheduleStartTime: Time
        $speaker: String
        $title: String
    ) {
        createSchedule(
            description: $description
            eventSlug: $eventSlug
            location: $location
            scheduleDate: $scheduleDate
            scheduleEndTime: $scheduleEndTime
            scheduleStartTime: $scheduleStartTime
            speaker: $speaker
            title: $title
        ) {
            schedule {
                id
            }
        }
    }
`;
export const CreateAdminConferenceEventDocument = gql`
    mutation createAdminConferenceEventDocument(
        $certificate: Upload
        $eventId: ID!
        $invitationLetter: Upload
        $organizationId: ID!
    ) {
        adminCreateUpdateEventDocuments(
            certificate: $certificate
            eventId: $eventId
            invitationLetter: $invitationLetter
            organizationId: $organizationId
        ) {
            success
        }
    }
`;

export const CreateAdminConferenceEventSchedules = gql`
    mutation createAdminConferenceEventSchedules(
        $eventId: ID!
        $organizationId: ID!
        $schedules: [ScheduleSerializerInputObjectType]!
    ) {
        adminCreateEventSchedules(
            eventId: $eventId
            organizationId: $organizationId
            schedules: $schedules
        ) {
            success
            schedules {
                id
            }
        }
    }
`;
export const CreateAdminConferenceEventPresentation = gql`
    mutation createAdminConferenceEventPresentation(
        $eventId: ID!
        $organizationId: ID!
        $presentations: [PresentationInputObjectType]!
    ) {
        adminCreateEventPresentations(
            eventId: $eventId
            organizationId: $organizationId
            presentations: $presentations
        ) {
            success
        }
    }
`;
export const DeleteAdminConferenceEventAttendance = gql`
    mutation deleteAdminConferenceEventAttendance($attendanceId: ID!, $organizationId: ID!) {
        adminDeleteEventAttendance(attendanceId: $attendanceId, organizationId: $organizationId) {
            success
        }
    }
`;
export const DeleteAdminConferenceEventPresenters = gql`
    mutation deleteAdminConferenceEventPresenters($presenterId: ID!, $organizationId: ID!) {
        adminDeleteEventPresenter(presenterId: $presenterId, organizationId: $organizationId) {
            success
        }
    }
`;

export const DeleteAdminConferenceEventSchedule = gql`
    mutation deleteAdminConferenceEventSchedule($scheduleId: ID!, $organizationId: ID!) {
        adminDeleteEventSchedule(scheduleId: $scheduleId, organizationId: $organizationId) {
            success
        }
    }
`;

export const DeleteAdminConferencePresentation = gql`
    mutation deleteAdminConferencePresentation($presentationId: ID!, $organizationId: ID!) {
        adminDeleteEventPresentation(
            presentationId: $presentationId
            organizationId: $organizationId
        ) {
            success
        }
    }
`;

export const CreateAdminConferenceEventFlyer = gql`
    mutation createAdminConferenceEventFlyer(
        $eventId: ID!
        $eventImage: Upload!
        $organizationId: ID!
        $removeImage: Boolean
    ) {
        adminCreateUpdateEventImage(
            eventId: $eventId
            eventImage: $eventImage
            organizationId: $organizationId
            removeImage: $removeImage
        ) {
            success
            event {
                id
                pk
            }
        }
    }
`;

export const CreateAdminConferenceEventLogo = gql`
    mutation CreateAdminConferenceEventLogo(
        $eventId: ID!
        $eventLogo: Upload!
        $organizationId: ID!
    ) {
        adminUpdateEventLogo(
            eventId: $eventId
            eventLogo: $eventLogo
            organizationId: $organizationId
        ) {
            success
            event {
                pk
            }
            eventLogoUrl
        }
    }
`;

export const CreateAdminConferenceEventAttendance = gql`
    mutation createAdminConferenceEventAttendance(
        $name: String
        $attendanceCode: String!
        $openDate: Date
        $closeDate: Date
        $openTime: Time
        $closeTime: Time
        $organization: String!
        $meeting: String!
    ) {
        adminCreateUpdateEventAttendances(
            input: {
                name: $name
                attendanceCode: $attendanceCode
                openDate: $openDate
                closeDate: $closeDate
                openTime: $openTime
                closeTime: $closeTime
                meeting: $meeting
                organization: $organization
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;

export const EditAdminConferenceEventAttendance = gql`
    mutation editAdminConferenceEventAttendance(
        $id: Int
        $name: String
        $attendanceCode: String!
        $openDate: Date
        $closeDate: Date
        $openTime: Time
        $closeTime: Time
        $organization: String!
        $meeting: String!
    ) {
        adminCreateUpdateEventAttendances(
            input: {
                id: $id
                name: $name
                attendanceCode: $attendanceCode
                openDate: $openDate
                closeDate: $closeDate
                openTime: $openTime
                closeTime: $closeTime
                meeting: $meeting
                organization: $organization
            }
        ) {
            id
            errors {
                field
                messages
            }
        }
    }
`;
export const CreateConferenceDeleteAttendance = gql`
    mutation createConferenceDeleteAttendance($attendanceId: ID!, $organizationId: ID!) {
        adminDeleteEventAttendance(attendanceId: $attendanceId, organizationId: $organizationId) {
            success
        }
    }
`;
export const CreateConferenceTakeAttendance = gql`
    mutation createConferenceTakeAttendance(
        $attendanceCode: String!
        $attendeeEmail: String
        $eventSlug: String!
    ) {
        takeEventAttendance(
            attendanceCode: $attendanceCode
            attendeeEmail: $attendeeEmail
            eventSlug: $eventSlug
        ) {
            success
            message
        }
    }
`;
export const CreateConferenceTakeAdminAttendance = gql`
    mutation createConferenceTakeAdminAttendance(
        $attendanceCode: String!
        $attendeeEmail: String!
        $eventId: ID!
        $organizationId: ID!
    ) {
        adminTakeAttendanceForAttendee(
            attendanceCode: $attendanceCode
            attendeeEmail: $attendeeEmail
            eventId: $eventId
            organizationId: $organizationId
        ) {
            success
            hasPreviouslyTakenAttendance
            message
        }
    }
`;
export const CreateConferenceAdminCheckIn = gql`
    mutation createConferenceAdminCheckIn(
        $attendeeEmail: String!
        $eventId: ID
        $organizationId: ID!
    ) {
        adminCheckInAttendee(
            attendeeEmail: $attendeeEmail
            eventId: $eventId
            organizationId: $organizationId
        ) {
            success
        }
    }
`;
// ///////////////////// content admin end /////////////////

// ///////////////////// end admin /////////////////

// //////////////////// Download Conference Certificate ////////////

export const DownloadConferenceCertificate = gql`
    mutation DownloadConferenceCertificate($fullName: String!, $eventId: ID!, $category: String!) {
        downloadEventCertificates(fullName: $fullName, eventId: $eventId, category: $category) {
            certificateUrl
            success
        }
    }
`;

// ///////////////////// End Download Conference Certificate  /////////////

// //////////////////// E-voting                             /////////////

export const adminCreatePolls = gql`
    mutation adminCreatePolls(
        $answers: [AnswerInputObjectType]
        $candidates: [CandidateInputObjectType]
        $organizationId: ID!
        $poll: PollInputObjectType
        $question: QuestionInputObjectType
    ) {
        adminCreatePoll(
            answers: $answers
            candidates: $candidates
            organizationId: $organizationId
            poll: $poll
            question: $question
        ) {
            success
        }
    }
`;

export const userCastPollVote = gql`
    mutation userCastPollVote($organizationId: ID!, $pollEntry: PollEntryInputObjectType) {
        castPollVote(organizationId: $organizationId, pollEntry: $pollEntry) {
            success
        }
    }
`;

// //////////////////// End E-Voting                          ///////////////
