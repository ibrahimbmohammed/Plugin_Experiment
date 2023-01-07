import gql from 'graphql-tag';

export const orgQuery = `
query ExternalConferenceQuery($externalDomain: String!) {
    externalConferencePage(externalDomain: $externalDomain){
    conferencePageData{
      event{
        name
        photoUrl
        description
        theme
        venue
        startDate
        endDate
        startTime
        endTime
        paid
        invitationLetter
        externalDomain
        org {
          name
        slug
        about
        }
      },
      organization{
        name
        slug
        about
        twitter
        facebook
        linkedin
        amount
        join
        photoUrl
      },
      presenters{
        person{
          firstName
        }
        slug
      },
      schedules{
        title
      },
      presentations{
        title
      }
      tickets {
        id
        name
        earlyBirdFeeCurrency
        earlyBirdFee
        earlyBirdDeadline
        lateBirdFeeCurrency
        lateBirdFee
      },
      sponsors {
        id
        name
        logoUrl
      },
    }
  }
}
`;

export const pageQuery = gql`
    query ConferencePageQuery($domain_name: String!) {
        eventByDomainName(domainName: $domain_name) {
            id
            pk
            name
            description
            venue
            theme
            startDate
            endDate
            startTime
            endTime
            invitationLetter
            photoUrl
            domainName
            org {
                id
                pk
                name
                about
                twitter
                facebook
                linkedin
                abbrev
                photoUrl
            }
            meetingSponsor {
                edges {
                    node {
                        id
                        name
                        logoUrl
                    }
                }
            }
            eventTicket {
                edges {
                    node {
                        id
                        name
                        isClosed
                        pk
                        earlyBirdFeeCurrency
                        earlyBirdDeadline
                        lateBirdFeeCurrency
                        lateBirdFee
                        earlyBirdFee
                        earlyBirdFeeStr
                        earlyBirdFeeValue
                        lateBirdFeeStr
                        lateBirdFeeValue
                    }
                }
            }
            presenterMeetings {
                edges {
                    node {
                        id
                        pk
                        name
                        photoUrl
                        portfolio
                    }
                }
            }
            paperMeetings {
                edges {
                    node {
                        title
                        abstract
                        file
                        externalUpload
                    }
                }
            }
            socialDpBanner {
                bannerImageUrl
            }
        }
    }
`;

export const PageQueryId = gql`
    query pageQueryId($domain_name: String!) {
        eventByDomainName(domainName: $domain_name) {
            id
            pk
        }
    }
`;

export const allEventsQuery = `
    query FetchAllOrganizationEvents($external_domain: String!) {
        allOrganizationEvents(externalDomain: $external_domain){
        name
        description
        theme
        photoUrl
        org{
           photoUrl
           name
           abbrev
        }
      }
    }`;

export const allAnnouncementsQuery = `
    query FetchAllOrganizationAnnouncement($external_domain: String!) {
        allOrganizationAnnouncements(externalDomain: $external_domain){
        title
        body
        updated
        photoUrl
        org{
           photoUrl
           name
           abbrev
        }
      }
    }
`;

export const allUpcomingEventsQuery = `
    query FetchAllOrganizationUpcomingEvents($external_domain: String!) {
        allOrganizationUpcomingEvents(externalDomain: $external_domain){
        name
        description
        theme
        photoUrl
        startDate
        org{
           photoUrl
           name
           abbrev
        }
      }
    }
`;

export const getOrgSubDivisions = gql`
    query OrgSubDivisionQuery($id: Float!) {
        orgSubDivisionList(organization_Id: $id) {
            edges {
                node {
                    pk
                    chairperson
                    email
                    subdivision
                    phoneNumber
                    state
                    meetingDaysTime
                    meetingVenue
                    dateOfInauguration
                }
            }
        }
    }
`;

export const getOrganizationWebsite = gql`
    query WebsiteQuery($domain_name: String!) {
        website(domainName: $domain_name) {
            id
            primaryColor
            webLogo
            bannerLogo
            headerTitle
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
            secondaryFont
            bodyFont
            org {
                id
                pk
                name
            }
        }
    }
`;
export const ReadNotification = gql`
    query NotificationQuery($id: Int!) {
        notification(id: $id) {
            pk
            id
            subject
            email
            read
            createdAt
            user {
                firstName
                lastName
                photoUrl
            }
        }
    }
`;
export const FetchNotifications = gql`
    query FetchNotifications {
        notifications {
            edges {
                node {
                    id
                    pk
                    subject
                    email
                    read
                    createdAt
                    user {
                        firstName
                        lastName
                        photoUrl
                    }
                }
            }
        }
    }
`;
export const FetchUserDataQuery = gql`
    query FetchUserDataQuery {
        user {
            pk
            id
            username
            firstName
            accountType
            middleName
            lastName
            bio
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
            photoUrl
            dateJoined
            isActive
            photo
            state
            country
            nationality
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
    }
`;
export const FetchCurrentUserDataQuery = gql`
    query fetchCurrentUserDataQuery {
        user {
            pk
            id
            username
            confirmedEmail
            accountType
        }
    }
`;

export const CHECK_IS_ORG_ADMIN = gql`
    query CheckIsOrgAdminQuery($organization_Id: Int!) {
        isOrgAdmin(organizationId: $organization_Id)
    }
`;

export const GET_TICKET_TYPES = gql`
    query TicketTypeConnection($org_Id: Float!) {
        eventTicketList(org_Id: $org_Id) {
            totalCount
            edgeCount
            edges {
                node {
                    id
                    pk
                    name
                    isClosed
                    earlyBirdFee
                    earlyBirdDeadline
                    lateBirdFee
                    earlyBirdFeeCurrency
                    lateBirdFeeCurrency
                    earlyBirdFeeValue
                    lateBirdFeeValue
                    earlyBirdFeeStr
                    lateBirdFeeStr
                    org {
                        id
                        pk
                        name
                    }
                    meeting {
                        id
                        pk
                        name
                    }
                }
            }
        }
    }
`;

// export const getSubSpecialties = `
//   query SubSpecialtyTypeConnection($organization_Id: Float, $specialty_Id: Float){
//     subSpecialties(organization_Id: $organization_Id, specialty_Id: $specialty_Id){
//       id
//       name
//       membershipFeeValue
//       membershipFeeStr
//       description
//     }
//   }`;

export const getMembershipPaymentData = gql`
    query MembershipPaymentQuery($domain_name: String!) {
        website(domainName: $domain_name) {
            webLogoUrl
            org {
                pk
                id
                name
                abbrev
                about
                email
                officeAddress
                phone
                #flutterwaveSubaccountId
                sponsorSet {
                    edges {
                        node {
                            name
                            logoUrl
                        }
                    }
                }
            }
        }
        websiteMembershipTypes(domainName: $domain_name) {
            id
            name
            membershipFeeValue
            membershipFeeStr
            membershipRenewalFeeValue
            membershipRenewalFeeStr
            description
        }
        user {
            id
            pk
            username
            firstName
            lastName
            bio
            dob
            qrCodeFile
            phone
            confirmedEmail
            gender
            address
            postal
            photo
            socialAuthPhotoUrl
            dateJoined
            isActive
        }
    }
`;
export const GetFooterData = gql`
    query getFooterData($domain_name: String!) {
        website(domainName: $domain_name) {
            id
            org {
                id
                pk
                name
                abbrev
                about
                email
                officeAddress
                phone
            }
        }
    }
`;

export const getAllDomainData = gql`
    query AllDataQuery($domain_name: String!) {
        orgConference(domainName: $domain_name) {
            name
            theme
            venue
            description
            startDate
            endDate
            photoUrl
        }

        websiteHomePageAboutUs(domainName: $domain_name)
        website(domainName: $domain_name) {
            id
            primaryColor
            webLogo
            bannerLogo
            webLogoUrl
            bannerLogoUrl
            headerTitle
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
            secondaryFont
            bodyFont
            org {
                id
                pk
                name
                abbrev
                about
                email
                officeAddress
                phone
                sponsorSet {
                    edges {
                        node {
                            name
                            logoUrl
                        }
                    }
                }
            }
        }

        websiteBannerSliderImages(domainName: $domain_name) {
            edges {
                node {
                    id
                    title
                    subtitle
                    image
                    imageUrl
                }
            }
        }

        threeTopmostEvents(domainName: $domain_name) {
            name
            eventSlug
            theme
            description
            venue
            startDate
            startTime
            flyer
            photoUrl
        }
    }
`;

export const getLeadersData = gql`
    query LeaderData($id: ID!) {
        orgExecutive(id: $id) {
            name
            bio
            photo
            photoUrl
            startTenure
            endTenure
            facebook
            email

            position {
                rank
                job
                position
            }
        }
    }
`;

export const FetchDashboardHomeDataQuery = gql`
    query FetchDashboardHomeDataQuery($domain_name: String!) {
        allOrganizationUpcomingEvents(domainName: $domain_name) {
            photoUrl
        }
        allOrganizationAnnouncements(domainName: $domain_name) {
            title
            body
            created
        }
        allOrganizationEvents(domainName: $domain_name) {
            pk
        }
    }
`;

export const FetchDashboardAllOrganizationEventsQuery = gql`
    query FetchDashboardAllOrganizationEventsQuery($domain_name: String!) {
        allOrganizationEvents(domainName: $domain_name) {
            pk
            category {
                name
            }
            eventSlug
            name
            photoUrl
            created
            description
        }
    }
`;

export const FetchDashboardBirthdayQuery = gql`
    query BirthdayQuery($organizationId: ID!) {
        birthdays(organizationId: $organizationId) {
            pk
            id
            firstName
            lastName
            dob
        }
    }
`;

export const getEventsDataList = gql`
    query DashboardAllEventsDataList($domain_name: String!, $org_Id: Float) {
        eventCategoryList(org_Id: $org_Id) {
            edges {
                node {
                    id
                    name
                    pk
                    description
                    org {
                        id
                        name
                    }
                    meetingSet {
                        totalCount
                        edges {
                            node {
                                id
                                name
                                description
                                eventSlug
                                photoUrl
                                pk
                                startDate
                                theme
                                org {
                                    pk
                                    id
                                    photoUrl
                                    name
                                    abbrev
                                }
                            }
                        }
                    }
                }
            }
        }

        website(domainName: $domain_name) {
            webLogoUrl
            org {
                abbrev
                sponsorSet {
                    edges {
                        node {
                            name
                            logoUrl
                        }
                    }
                }
            }
        }
    }
`;

export const GetEventAttendanceEntries = gql`
    query GetEventAttendanceEntries(
        $eventSlug: String!
        $attendanceCode: String!
        $openDate: Date!
        $openTime: Time
        $closeDate: Date!
        $closeTime: Time
    ) {
        getEventAttendanceEntries(
            eventSlug: $eventSlug
            attendanceCode: $attendanceCode
            openDate: $openDate
            openTime: $openTime
            closeDate: $closeDate
            closeTime: $closeTime
        ) {
            attendeeName
            attendeeEmail
            attendee {
                photoUrl
            }
            attendance {
                name
            }
        }
    }
`;

export const getDashboardAccountData = gql`
    query DashboardAccountData($domain_name: String!) {
        user {
            __typename
            id
            pk
            username
            firstName
            lastName
            bio
            dob
            qrCodeFile
            phone
            confirmedEmail
            gender
            address
            postal
            socialAuthPhotoUrl
            photoUrl
            dateJoined
            isActive
            photo
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
                        id
                        companyName
                        designation
                        startDate
                        endDate
                    }
                }
            }
        }

        website(domainName: $domain_name) {
            webLogoUrl
            org {
                abbrev
            }
        }
    }
`;

export const getDashboardLayoutData = gql`
    query DashboardLayoutData($domain_name: String!) {
        user {
            id
            pk
            firstName
            lastName
            photoUrl
        }

        website(domainName: $domain_name) {
            webLogoUrl
            org {
                pk
                abbrev
            }
        }
    }
`;

export const getOrgDirectors = gql`
    query GetDirectorsQuery($id: Float!) {
        orgLeadershipCategoryList(organization_Id: $id) {
            edges {
                node {
                    name
                    executiveSet {
                        edges {
                            node {
                                pk
                                id
                                name
                                bio
                                photoUrl
                                position {
                                    position
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const GET_DASHBOARD_MEMBERSHIP_REGISTRATION_DATA = gql`
    query DashboardLayoutDataMembership($domain_name: String!) {
        websiteMembershipTypes(domainName: $domain_name) {
            id
            name
            membershipFeeValue
            membershipFeeStr
            description
        }
        user {
            id
            pk
            username
            firstName
            lastName
            photoUrl
            email
        }

        website(domainName: $domain_name) {
            org {
                pk
            }
            webLogoUrl
            org {
                abbrev
            }
        }
    }
`;

export const getWebsiteFaqList = gql`
    query WebsiteFaqType($id: Float!) {
        websiteFaqList(organization_Id: $id) {
            edges {
                node {
                    id
                    pk
                    question
                    answer
                    created
                    updated
                }
            }
        }
    }
`;

export const OrgSubDivision = gql`
    query OrgSubDivisionsQuery {
        orgSubDivision(id: 3) {
            pk
            chairperson
            email
            subdivision
            phoneNumber
            state
            meetingDaysTime
            meetingVenue
            dateOfInauguration
        }
    }
`;

export const getWebsitePublicationsPage = gql`
    query WebsitePublications($domain_name: String!) {
        website(domainName: $domain_name) {
            org {
                pk
            }
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
            webLogoUrl
        }
    }
`;

export const getUserDataForOTPPage = gql`
    query {
        user {
            id
            username
        }
    }
`;

export const getWebsiteAboutPage = gql`
    query WebsiteAboutPages($domain_name: String!) {
        websiteAboutPage(domainName: $domain_name)
        website(domainName: $domain_name) {
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
        }
    }
`;

export const getWebsiteThemeColors = gql`
    query WebsiteDataQuery($domain_name: String!) {
        website(domainName: $domain_name) {
            webLogoUrl
            org {
                pk
                abbrev
                name
                about
                email
                phone
                officeAddress
                photoUrl
            }
            headerTitle
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
        }
    }
`;

export const getContactUsPage = gql`
    query ContactUsPage($domain_name: String!) {
        website(domainName: $domain_name) {
            org {
                pk
                officeAddress
                email
                phone
            }
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
        }
    }
`;

export const GET_REGISTER_PAGE = gql`
    query RegistersPage($domain_name: String!) {
        website(domainName: $domain_name) {
            org {
                pk
            }
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
        }
    }
`;
export const NavBarData = gql`
    query navBarData($domain_name: String!) {
        website(domainName: $domain_name) {
            webLogoUrl
            org {
                name
            }
        }
    }
`;
export const getRegisterPage = gql`
    query RegisterPage($domain_name: String!) {
        website(domainName: $domain_name) {
            org {
                pk
            }
            primaryColor
            primaryFont
            primaryBgColor
            primaryTextColor
            primaryBtnColor
            secondaryColor
            secondaryFont
            secondaryBgColor
            secondaryTextColor
            secondaryBtnColor
        }
    }
`;

export const DashboardLayoutData = `
  query DashboardLayoutData($domain_name: String!){
    website(domainName: $domain_name){
      webLogoUrl
      org {
        abbrev
      }
    }

  user{
    id
    pk
    username
    firstName
    lastName
    bio
    dob
    qrCodeFile
    phone
    confirmedEmail
    gender
    address
    postal
    socialAuthPhotoUrl
    photoUrl
    dateJoined
    isActive
    photo
		records{
			edges{
				node{
					school{
						name
					}
					program
					discipline{
						name
					}
				}
			}
		}
    workexperienceSet{
      edges{
        node{
          id
          companyName
          address
        }
      }
    }
  }
}
`;

export const EventPageData = gql`
    query WebsiteEventDetail($event_slug: String!) {
        eventBySlug(eventSlug: $event_slug) {
            name
            venue
            theme
            description
            attendance
            startDate
            endDate
            endTime
            minutes
            photoUrl
            paid
            eventTicket {
                edges {
                    node {
                        id
                        name
                        earlyBirdFee
                        earlyBirdDeadline
                    }
                }
            }
            mainEvent {
                theme
            }
            eventState
            eventSlug
            onlineMeetingLink
            org {
                name
            }

            scheduleMeetings {
                edges {
                    node {
                        title
                        description
                        scheduleEndTime
                        scheduleDate
                        scheduleStartTime
                        speaker {
                            name
                            photoUrl
                            portfolio
                            person {
                                firstName
                                lastName
                                email
                            }
                            presentationSet {
                                edges {
                                    node {
                                        meeting {
                                            name
                                            theme
                                        }
                                    }
                                }
                            }
                        }
                        meeting {
                            name
                            venue
                            mainEvent {
                                name
                                venue
                                theme
                                flyer
                            }
                        }
                    }
                }
            }
            presenterMeetings {
                edges {
                    node {
                        name
                        photoUrl
                        portfolio
                    }
                }
            }

            meetingSet {
                edges {
                    node {
                        name
                        theme
                    }
                }
            }

            meetingSponsor {
                edges {
                    node {
                        name
                        logoUrl
                    }
                }
            }
        }
    }
`;

export const SortedConferenceSchedule = gql`
    query GetConferenceSchedules($eventID: ID!) {
        sortedSchedules(eventId: $eventID)
    }
`;

export const getReceiptData = `
query WebsiteReceiptData($domain_name: String! $paymentId: ID!  ) {
  website(domainName: $domain_name){
    webLogoUrl
    org {
      abbrev
      phone
      email
      facebook
      twitter
    }
  }
  membershipPayment(paymentId: $paymentId) {
    amountPaidStr
    amountPaidValue
    txref
    paymentDate
    paymentType
    membershipType {
      name
    }
    org{
      name
    }
    user {
      id
      firstName
      lastName
      member {
        edges {
					node {
						orgNumber
					}
				}
      }
    }
  }
}
`;

export const ORG_SUBDIVISION_DATA = gql`
    query WebsitesQuery($id: Float!) {
        orgSubDivisionList(organization_Id: $id) {
            edges {
                node {
                    pk
                    chairperson
                    email
                    subdivision
                }
            }
        }
    }
`;

export const orgExecutiveList = `
query ExecutiveTypeConnection($org_Id: Float!){
  orgExecutiveList(org_Id: $org_Id){
    edges{
      node{
        pk
        id
        name
        bio
        photo
        position {
          position
        }
      }
    }
  }
}
`;

export const getPublicationCategoryList = gql`
    query WebsitePublicationCategoryList($orgId: Float!) {
        publicationCategoryList(organization_Id: $orgId) {
            edges {
                node {
                    id
                    name
                    publicationSet {
                        edges {
                            node {
                                title
                                abstract
                                fileUrl
                                externalUpload
                            }
                        }
                    }
                }
            }
        }
    }
`;

// ////////////////// BEGIN USER PROFILE /////////////////////////////
export const GetOrganizationProfessionalData = gql`
    query GetOrganizationProfessionalData($organization_Id: Float!, $domain_name: String!) {
        orgSubDivisionList(organization_Id: $organization_Id) {
            edges {
                node {
                    pk
                    id
                    subdivision
                }
            }
        }

        specialties(organization_Id: $organization_Id) {
            edges {
                node {
                    id
                    pk
                    name
                    subspecialtySet {
                        edges {
                            node {
                                id
                                pk
                                name
                            }
                        }
                    }
                }
            }
        }

        websiteMembershipTypes(domainName: $domain_name) {
            id
            name
            membershipFeeValue
            membershipFeeStr
            membershipRenewalFeeValue
            membershipRenewalFeeStr
            description
        }
    }
`;

// export const GetOrganizationSpecialities = gql`
//     query GetOrganizationSpecialities($organization_Id: Float!) {
//         specialties(organization_Id: $organization_Id) {
//             edges {
//                 node {
//                     id
//                     pk
//                     name
//                     subspecialtySet {
//                         edges {
//                             node {
//                                 id
//                                 pk
//                                 name
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `;

// export const GetOrganizationSubDivisions = gql`
//     query GetOrganizationSubdivisions($id: Float!) {
//         orgSubDivisionList(organization_Id: $id) {
//             edges {
//                 node {
//                     pk
//                     subdivision
//                 }
//             }
//         }
//     }
// `;

// export const GetOrganizationMembershipTypes = gql`
//     query GetOrganizationMembershipTypes($domain_name: String!) {
//         websiteMembershipTypes(domainName: $domain_name) {
//             id
//             name
//             membershipFeeValue
//             membershipFeeStr
//             membershipRenewalFeeValue
//             membershipRenewalFeeStr
//             description
//         }
//     }
// `;

export const GetUserProfessionalInformation = gql`
    query GetUserProfessionalInformation($userId: ID!, $organizationId: ID!) {
        membershipJoinRequest(userId: $userId, organizationId: $organizationId) {
            pk
            newOrOld
            membershipCadre {
                id
                name
            }
            orgNumber
            otherMembershipNumbers
            verified
            contactMessage
            membershipApplicationStatus
            subdivision {
                pk
                subdivision
            }
            specialty {
                pk
                name
            }
            subSpecialty {
                pk
                name
            }
        }
    }
`;

export const GetUserWorkExperiences = gql`
    query GetUserWorkExperiences($userId: Float!) {
        workExperiences(user_Id: $userId) {
            edges {
                node {
                    id
                    pk
                    designation
                    description
                    companyName
                    startDate
                    endDate
                    current
                    address
                    state
                    country
                }
            }
        }
    }
`;

export const GetUserAcademicRecords = gql`
    query GetUserAcademicRecords($userId: Float!) {
        academicRecords(user_Id: $userId) {
            edges {
                node {
                    pk
                    id
                    school {
                        name
                    }
                    discipline {
                        name
                    }
                    program
                    admitted
                    graduated
                    current
                    certificate
                    certificateUrl
                }
            }
        }
    }
`;

export const GetUserNextOfKins = gql`
    query GetUserNextOfKins($userId: Float!) {
        nextOfKins(user_Id: $userId) {
            edges {
                node {
                    pk
                    id
                    firstName
                    middleName
                    lastName
                    phone
                    email
                    relationship
                }
            }
        }
    }
`;

export const GetUserReferees = gql`
    query GetUserReferees($userId: Float!, $organizationId: Float!) {
        memberReferees(user_Id: $userId, organization_Id: $organizationId) {
            edges {
                node {
                    pk
                    id
                    firstName
                    middleName
                    lastName
                    phone
                    email
                    number
                }
            }
        }
    }
`;
export const GetOrgProfileDocument = gql`
    query getOrgProfileDocument {
        getUserProfileDocuments {
            id
            pk
            companyProfile
            companyProfileUrl
            cacCertificateUrl
            taxClearanceUrl
            otherUrl
        }
    }
`;
export const GetOrgBio = gql`
    query getOrgBio {
        user {
            bio
        }
    }
`;

// ////////////////// END USER PROFILE /////////////////////////////

// //////////////// GET DONATION LIST  ///////////////////////////

export const GetDonationList = gql`
    query GetDonations($organizationId: Float!, $first: Int, $after: String) {
        donations(organization_Id: $organizationId, first: $first, after: $after) {
            edgeCount
            totalCount
            edges {
                cursor
                node {
                    name
                    amount
                    email
                    phoneNumber
                    pk
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;

// /////////////////// END DONATION LIST ////////////////////////////////

// /////////////////// TRAINING API SECTION ////////////////////////////

export const GetOrganizationCourseList = gql`
    query GetOrganizationCourseList($organization_Id: Float, $first: Int, $after: String) {
        coursesList(organization_Id: $organization_Id, first: $first, after: $after) {
            edgeCount
            totalCount
            edges {
                cursor
                node {
                    id
                    pk
                    courseName
                    courseImageUrl
                    courseDescription
                    virtualClass
                    amountValue
                    physicalClass
                    startDate
                    endDate
                    startTime
                    endTime
                    paid
                    resourceSet {
                        edges {
                            node {
                                resourceName
                            }
                        }
                    }
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;

export const GetAdminEnrollmentsList = gql`
    query GetAdminEnrollmentsList(
        $course_Id: Float!
        $organization_Id: Float!
        $first: Int
        $after: String
    ) {
        adminEnrollmentsList(
            course_Id: $course_Id
            organization_Id: $organization_Id
            first: $first
            after: $after
        ) {
            totalCount
            edgeCount
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            edges {
                cursor
                node {
                    payerName
                    paymentName
                    paymentDate
                    paymentType
                    paymentApproval
                    transactionReference
                    paid
                    createdBy {
                        firstName
                        lastName
                    }
                    student {
                        firstName
                        lastName
                    }
                    course {
                        id
                        pk
                        courseName
                        amountValue
                    }
                }
            }
        }
    }
`;

export const GetCourse = gql`
    query GetCourse($id: ID!) {
        course(id: $id) {
            id
            courseName
            courseDescription
            courseImageUrl
            paid
            amountValue
            pk
            slug
            message
            tutor
            startTime
            endTime
            startDate
            endDate
            virtualClass
            physicalClass
            resourceSet {
                edges {
                    node {
                        id
                        pk
                        resourceName

                        resourceFileUrl
                        resourceDescription
                        resourceUrl
                    }
                }
            }
            assignmentSet {
                edges {
                    node {
                        id
                        pk
                        assignmentName
                        assignmentDescription
                        startDate
                        startTime
                        question {
                            edges {
                                node {
                                    submittedDate
                                    assignmentQuestion {
                                        assignmentName
                                        assignmentDescription
                                        dueDate
                                        pk
                                        startDate
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const GetMyEnrollmentsList = gql`
    query GetMyEnrollmentsList($student_Id: Float!) {
        myEnrollmentsList(student_Id: $student_Id) {
            edges {
                node {
                    course {
                        courseName
                        courseDescription
                        courseImageUrl
                        id
                        pk
                    }
                }
            }
        }
    }
`;

export const adminSearchUser = gql`
    query adminSearchUser($organizationId: ID!, $username: String!) {
        adminSearchForUsers(organizationId: $organizationId, username: $username) {
            id
            pk
            firstName
            lastName
            phone
        }
    }
`;

export const checkHasStudentRegistered = gql`
    query chechHasStudentRegistered($courseId: ID!) {
        hasStudentRegisteredForCourse(courseId: $courseId)
    }
`;
// /////////////////// END TRAINING APIS SECTION  ////////////////////////////////////////////
// ////////////////// BEGIN DASHBOARD/USER PAYMENT APIS SECTION /////////////////////////////
export const GetOrganizationPaymentAPIs = gql`
    query GetOrganizationPaymentAPIs($organizationId: Float!) {
        websitePaymentApi(organization_Id: $organizationId) {
            edges {
                node {
                    pk
                    platform
                    testPublicKey
                    livePublicKey
                    organization {
                        name
                        photoUrl
                    }
                }
            }
        }
    }
`;

export const GetUserOutstandingPayments = gql`
    query GetUserOutstandingPayments($organizationId: ID!, $userId: ID!) {
        membershipJoinRequest(organizationId: $organizationId, userId: $userId) {
            pk
            amountOwingReason
            amountOwingValue
            amountOwingStr
        }
    }
`;

export const GetUserPaymentsHistory = gql`
    query GetUserPaymentsHistory($organizationId: ID!, $userId: ID!) {
        membershipPaymentList(orgId: $organizationId, userId: $userId) {
            edges {
                node {
                    id
                    pk
                    paymentName
                    txref
                    paid
                    amountPaidValue
                    amountPaidStr
                }
            }
        }
    }
`;
export const GetUserMembershipPayment = gql`
    query GetUserMembershipPayment($paymentId: ID!) {
        membershipPayment(paymentId: $paymentId) {
            amountPaidValue
            txref
            created
            user {
                firstName
                lastName
            }
            paymentName
            paymentType
        }
    }
`;

export const GetUserConferencePaymentsList = gql`
    query GetUserConferencePaymentsList($organizationId: ID!, $userId: ID, $email: String) {
        getConferencePaymentsList(organizationId: $organizationId, userId: $userId, email: $email) {
            amountPaidValue
            txref
            paymentName
            created
            id
            pk
            paid
            user {
                firstName
                lastName
            }
        }
    }
`;
export const getUserConferencePaymentData = gql`
    query getUserConferencePaymentData($organizationId: ID!, $paymentId: ID!) {
        getConferencePaymentData(organizationId: $organizationId, paymentId: $paymentId) {
            amountPaidValue
            txref
            paymentName
            created
            user {
                firstName
                lastName
            }
        }
    }
`;
export const getAnonymouseConferencePaymentData = gql`
    query getAnonymouseConferencePaymentData($organizationId: ID!, $eventId: ID!, $email: String!) {
        getAnonymousUserConferencePaymentData(
            organizationId: $organizationId
            eventId: $eventId
            email: $email
        ) {
            org {
                officeAddress
                phone
                email
            }
            paymentName
            firstName
            lastName
            amountPaidValue
            txref
            created
            membershipCadre
            membershipNumber
        }
    }
`;
// ////////////////// END DASHBOARD/USER PAYMENT APIS SECTION /////////////////////////////

// //////////////////////////////////  admin  ///////////////////////////////////////////////

export const getOrganizationUser = gql`
    query GetOrganizationUser($organization_Id: Float!) {
        members(organization_Id: $organization_Id) {
            edges {
                node {
                    user {
                        pk
                        username
                        firstName
                        lastName
                        phone
                        email
                    }
                    orgNumber
                    verified
                    organization {
                        name
                    }
                }
            }
        }
    }
`;

export const GetOrgUserDataPaginated = gql`
    query getOrgUserDataPaginated(
        $organization_Id: Float!
        $first: Int!
        $after: String!
        $searchQuery: String
        $filterQuery: String
    ) {
        members(
            organization_Id: $organization_Id
            first: $first
            after: $after
            searchQuery: $searchQuery
            filterQuery: $filterQuery
        ) {
            edgeCount
            totalCount
            edges {
                cursor

                node {
                    membershipApplicationStatus
                    user {
                        pk
                        username
                        firstName
                        lastName
                        phone
                        email
                    }

                    orgNumber
                    verified
                    organization {
                        name
                    }
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;
export const GetOrgUserData = gql`
    query getOrgUserData(
        $organizationId: ID!
        $userId: ID!
        $userId1: Float!
        $organizationId1: Float!
    ) {
        member(organizationId: $organizationId, userId: $userId) {
            approved
            verified
            orgNumber
            membershipApplicationStatus
            otherMembershipNumbers
            membershipCadre {
                name
            }
            specialty {
                name
            }
            subSpecialty {
                name
            }
            subdivision {
                state
            }
            user {
                pk
                username
                firstName
                lastName
                email
                gender
                isActive
                middleName
                phone
                dob
                phone
                photoUrl
                nationality
                state
                address
                country
                membersMembershippayments {
                    edges {
                        node {
                            membershipType {
                                name
                            }
                            amountPaidValue
                            amountPaidStr
                            updated
                            paymentName
                            proofOfPayment
                            paymentType
                        }
                    }
                }

                conferencePayments {
                    edges {
                        node {
                            ticket {
                                name
                            }
                            amountPaidValue
                            amountPaidStr
                            updated
                        }
                    }
                }

                records {
                    edges {
                        node {
                            pk
                            school {
                                name
                            }
                            program
                            admitted
                            graduated
                            current
                            certificate
                            certificateUrl
                            discipline {
                                name
                            }
                        }
                    }
                }
                workexperienceSet {
                    edges {
                        node {
                            id
                            companyName
                            startDate
                            endDate
                            designation
                            description
                            current
                            address
                            state
                            country
                            created
                        }
                    }
                }
                kinsman {
                    edges {
                        node {
                            id
                            firstName
                            lastName
                            middleName
                            email
                            phone
                            relationship
                        }
                    }
                }
            }
        }
        memberReferees(user_Id: $userId1, organization_Id: $organizationId1) {
            edges {
                node {
                    pk
                    id
                    firstName
                    middleName
                    lastName
                    phone
                    email
                    number
                }
            }
        }
    }
`;
export const GetOrgUserStatusData = gql`
    query getOrgUserStatusData($organizationId: ID!, $userId: ID!) {
        member(organizationId: $organizationId, userId: $userId) {
            membershipApplicationStatus
            amountOwingStr
            orgNumber
        }
    }
`;

export const GetOrgAdminDashboardData = gql`
    query getOrgAdminDashboardData($organizationId: ID!) {
        adminDashboardAnalytics(organizationId: $organizationId)
    }
`;

export const GetOrgAdminConferenceTicketData = gql`
    query getOrgAdminConferenceTicketData($organizationId: Float, $meeting_Id: Float) {
        eventTicketList(org_Id: $organizationId, meeting_Id: $meeting_Id) {
            edges {
                node {
                    pk
                    name
                }
            }
        }
    }
`;

export const GetOrganizationUserPayment = gql`
    query getOrganizationUserPayment($org_Id: Float!) {
        adminMembershipPayments(org_Id: $org_Id) {
            edges {
                cursor

                node {
                    paymentStatus
                    amountPaidCurrency
                    paid
                    paymentName
                    paymentApproval
                    amountPaidStr
                    amountPaidValue
                    amountPaidValue
                    paymentType
                    membershipType {
                        name
                    }

                    user {
                        pk
                        firstName
                        lastName
                        email
                    }
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;
export const GetAdminUserPaymentDataPaginated = gql`
    query getAdminUserPaymentDataPaginated(
        $organization_Id: Float!
        $first: Int!
        $after: String!
        $searchQuery: String
    ) {
        adminMembershipPayments(
            org_Id: $organization_Id
            first: $first
            after: $after
            searchQuery: $searchQuery
        ) {
            edgeCount
            totalCount
            edges {
                cursor

                node {
                    paymentStatus
                    amountPaidCurrency
                    paid
                    paymentName
                    paymentApproval
                    amountPaidStr
                    amountPaidValue
                    amountPaidValue
                    paymentType
                    membershipType {
                        name
                    }

                    user {
                        pk
                        firstName
                        lastName
                        email
                    }
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;

// //////////////////////////////////  contents start  ///////////////////////////////////////////////
export const GetOrgAnnouncementDataPaginated = gql`
    query getOrgAnnouncementDataPaginated($organization_Id: Float!, $first: Int!, $after: String!) {
        announcements(organization_Id: $organization_Id, first: $first, after: $after) {
            edgeCount
            totalCount
            edges {
                node {
                    id
                    pk
                    title
                    photoUrl
                    updated
                    image
                    announcementType
                    body
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;

export const GetAdminOrgLibraryDataPaginated = gql`
    query getAdminOrgLibraryDataPaginated($org_Id: Float!, $first: Int!, $after: String!) {
        publicationsList(organization_Id: $org_Id, first: $first, after: $after) {
            edgeCount
            totalCount
            edges {
                node {
                    id
                    pk
                    title
                    externalUpload
                    fileUrl
                    updated
                    abstract
                    category {
                        pk
                        name
                    }
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;
export const GetAdminOrgLeadersDataPaginated = gql`
    query getAdminOrgLeadersDataPaginated($orgId: Float!, $first: Int!, $after: String!) {
        orgExecutiveList(organization_Id: $orgId, first: $first, after: $after) {
            edgeCount
            totalCount
            edges {
                node {
                    pk
                    id
                    name
                    email
                    bio
                    photoUrl
                    startTenure
                    endTenure
                    current
                    position {
                        pk
                        position
                    }
                    category {
                        pk
                        name
                    }
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;

export const GetAdminOrgChaptersDataPaginated = gql`
    query getAdminOrgChaptersDataPaginated(
        $organization_Id: Float!
        $first: Int!
        $after: String!
    ) {
        orgSubDivisionList(organization_Id: $organization_Id, first: $first, after: $after) {
            edgeCount
            totalCount
            edges {
                node {
                    id
                    pk
                    subdivision
                    organization {
                        officeAddress
                    }
                    chairperson
                    phoneNumber
                    email
                    state
                    created
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;

export const GetAdminOrgFaqsDataPaginated = gql`
    query getAdminOrgFaqsDataPaginated($organization_Id: Float!, $first: Int!, $after: String!) {
        websiteFaqList(organization_Id: $organization_Id, first: $first, after: $after) {
            edgeCount
            totalCount
            edges {
                node {
                    id
                    pk
                    question
                    answer
                    updated
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;
export const AdminPublicationCategoryListData = gql`
    query adminPublicationCategoryListData($organization_Id: Float!) {
        publicationCategoryList(organization_Id: $organization_Id) {
            edges {
                node {
                    id
                    name
                    pk
                }
            }
        }
    }
`;

export const GetAdminAboutDataPaginated = gql`
    query getAdminAboutDataPaginated($domainName: String!) {
        websiteAboutPage(domainName: $domainName)
    }
`;

export const GetEventCategoryDataList = gql`
    query getEventCategoryDataList($org_Id: Float) {
        eventCategoryList(org_Id: $org_Id) {
            edges {
                node {
                    id
                    name
                    pk
                }
            }
        }
    }
`;

export const GetAllOrgAdminConferenceDataPaginated = gql`
    query getAllOrgAdminConferenceDataPaginated(
        $org_Id: Float!
        $first: Int!
        $after: String!
        $isConference: Boolean
    ) {
        eventsList(org_Id: $org_Id, first: $first, after: $after, isConference: $isConference) {
            edgeCount
            totalCount
            edges {
                node {
                    id
                    theme
                    description
                    venue
                    flyer
                    invitationLetter
                    category {
                        pk
                        name
                    }
                    pk
                    virtualOnly
                    isConference
                    paid
                    startTime
                    endTime
                    attendance
                    endDate
                    startDate
                    name
                    updated
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;

export const GetSingleOrgAdminConferenceDataPaginated = gql`
    query getSingleOrgAdminConferenceDataPaginated($Id: Int!, $first: Int, $after: String) {
        eventById(id: $Id) {
            id
            name
            category {
                name
            }
            theme
            attendance
            conferenceEvent(first: $first, after: $after) {
                edgeCount
                totalCount
                edges {
                    node {
                        pk
                        firstName
                        lastName

                        ticket {
                            name
                        }

                        email
                        phone
                    }
                }
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                }
            }
        }
    }
`;
export const GetSingleOrgAdminConferenceDataPaginatedWithSearch = gql`
    query getSingleOrgAdminConferenceDataPaginatedWithSearch(
        $eventId: ID!
        $organizationId: ID!
        $first: Int
        $after: String
        $searchByEmailQuery: String
    ) {
        adminGetEventDetailsAndRegistrations(eventId: $eventId, organizationId: $organizationId) {
            id
            name
            isConference
            category {
                name
            }
            theme
            attendance
            eventRegistrations(
                first: $first
                after: $after
                searchByEmailQuery: $searchByEmailQuery
            ) {
                edgeCount
                totalCount
                edges {
                    node {
                        pk
                        firstName
                        lastName

                        ticket {
                            name
                        }
                        payment {
                            amountPaidStr
                            amountPaidValue
                        }

                        email
                        phone
                    }
                }
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                }
            }
        }
    }
`;

export const GetSingleOrgAdminConferenceDataPaginatedWithSearchIsConference = gql`
    query getSingleOrgAdminConferenceDataPaginatedWithSearchIsConference(
        $eventId: ID!
        $organizationId: ID!
    ) {
        adminGetEventDetailsAndRegistrations(eventId: $eventId, organizationId: $organizationId) {
            id
            name
            isConference
        }
    }
`;

export const GetAdminSingleUserRegistered = gql`
    query GetAdminSingleUserRegistered($id: ID!, $organizationId: ID!) {
        getConferenceRegistrationDetails(id: $id, organizationId: $organizationId) {
            user {
                firstName
                lastName
                email
                phone
            }
            firstName
            lastName
            email
            phone
            ticket {
                name
            }
        }
    }
`;

export const GetAdminLeaderCategoryList = gql`
    query getAdminLeaderCategoryList($organization_Id: Float!) {
        orgLeadershipCategoryList(organization_Id: $organization_Id) {
            edgeCount
            totalCount
            edges {
                node {
                    name
                    pk
                }
            }
        }
    }
`;

export const GetAdminLeaderPostionList = gql`
    query GetAdminLeaderPositionList($organization_Id: Float!) {
        leadershipPositionList(organization_Id: $organization_Id) {
            edgeCount
            totalCount
            edges {
                node {
                    position
                    pk
                }
            }
        }
    }
`;

export const GetAdminSpecialityPaginated = gql`
    query getAdminSpecialityPaginated($organization: Float!, $first: Int!, $after: String!) {
        specialties(organization_Id: $organization, first: $first, after: $after) {
            edgeCount
            totalCount
            edges {
                node {
                    id
                    name
                    pk
                    subspecialtySet(organization_Id: $organization) {
                        totalCount
                        edges {
                            node {
                                id
                                name
                                pk
                            }
                        }
                    }
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;
export const GetAdminConferenceBasicInfo = gql`
    query getAdminConferenceBasicInfo($eventId: ID!, $organizationId: ID!) {
        adminGetConferenceBasicData(organizationId: $organizationId, eventId: $eventId) {
            id
            category {
                name
                pk
            }
            pk
            name
            eventSlug
            description
            attendance
            startDate
            startTime
            theme
            venue
            virtualOnly
            endDate
            endTime
        }
    }
`;
export const GetAdminConferencePresentersList = gql`
    query getAdminConferencePresentersList($meeting_Id: Float, $org_Id: Float) {
        presentersList(meeting_Id: $meeting_Id, org_Id: $org_Id) {
            edges {
                node {
                    id
                    pk
                    name
                    portfolio
                    photoUrl
                }
            }
        }
    }
`;

export const GetAdminConferenceScheduleList = gql`
    query getAdminConferenceScheduleList($meeting_Id: Float) {
        schedulesList(meeting_Id: $meeting_Id) {
            edges {
                node {
                    id
                    pk
                    description
                    location
                    scheduleDate
                    scheduleEndTime
                    scheduleStartTime
                    speaker {
                        name
                    }
                    title
                }
            }
        }
    }
`;
export const GetAdminConferenceEventDocument = gql`
    query getAdminConferenceEventDocument($eventId: ID!, $organizationId: ID!) {
        adminGetEventDocuments(eventId: $eventId, organizationId: $organizationId) {
            id
            invitationLetterUrl
            certificateUrl
        }
    }
`;
export const GetAdminConferenceEventFlyer = gql`
    query getAdminConferenceEventFlyer($eventId: ID!, $organizationId: ID!) {
        adminGetEventFlyer(eventId: $eventId, organizationId: $organizationId) {
            id
            pk
            flyerUrl
        }
    }
`;

export const GetAdminConferenceEventLogo = gql`
    query getAdminConferenceEventLogo($eventId: ID!, $organizationId: ID!) {
        adminGetEventLogo(eventId: $eventId, organizationId: $organizationId) {
            eventLogo
            eventLogoUrl
        }
    }
`;

export const GetAdminConferenceEventSocialDp = gql`
    query getAdminConferenceEventSocialDp($eventId: ID!) {
        getEventSocialDpBanner(eventId: $eventId) {
            id
            pk
            bannerImageUrl
        }
    }
`;
export const GetAdminConferenceEventPresentationList = gql`
    query getAdminConferenceEventPresentationList($meeting_Id: Float, $org_Id: Float) {
        presentationsList(meeting_Id: $meeting_Id, org_Id: $org_Id) {
            edges {
                node {
                    id
                    pk
                    title
                    abstract
                    externalUpload
                    fileUrl
                }
            }
        }
    }
`;

export const GetAdminGetPollsAnalyticsPerPeriods = gql`
    query getAdminGetPollsAnalyticsPerPeriods(
        $organizationId: ID!
        $periodType: PeriodType!
        $year: Int
        $month: Int
    ) {
        adminGetPollsAnalyticsPerPeriod(
            organizationId: $organizationId
            periodType: $periodType
            year: $year
            month: $month
        )
    }
`;

export const GetAdminConferenceEventAttendanceList = gql`
    query getAdminConferenceEventAttendanceList(
        $meeting_Id: Float
        $organization_Id: Float
        $attendanceCode: String
    ) {
        adminGetEventAttendances(
            meeting_Id: $meeting_Id
            organization_Id: $organization_Id
            attendanceCode: $attendanceCode
        ) {
            edges {
                node {
                    id
                    pk
                    name
                    attendanceCode
                    openTime
                    closeTime
                    openDate
                    closeDate
                    attendanceCount
                }
            }
        }
    }
`;
export const GetPublisedPolls = gql`
    query getPublisedPolls($organizationId: ID!) {
        getPublishedPolls(organizationId: $organizationId) {
            id
            name
            pk
            state
            status
            pollType
        }
    }
`;

export const GetAdminPolls = gql`
    query GetAdminPolls($organization_Id: Float, $after: String, $first: Int, $pollType: String) {
        adminGetAllPolls(
            organization_Id: $organization_Id
            after: $after
            first: $first
            pollType: $pollType
        ) {
            totalCount
            edgeCount
            edges {
                node {
                    id
                    pk
                    name
                    state
                    status
                    pollType
                    endTime
                    startDate
                    startTime
                    endDate
                    pollVisibility
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;

export const GetPublisedPoll = gql`
    query getPublisedPoll($pollId: ID!) {
        getPublishedPoll(pollId: $pollId) {
            id
            name
            status
            pollType
            inputType
            pk
            candidates {
                edges {
                    node {
                        id
                        name
                        bio
                        image
                        imageUrl
                        poll {
                            edges {
                                node {
                                    name
                                }
                            }
                        }
                    }
                }
            }
            answers {
                edges {
                    node {
                        answer
                        description
                        imageUrl
                        poll {
                            edges {
                                node {
                                    name
                                }
                            }
                        }
                    }
                }
            }
            decision
            endTime
            document
            allowSelectionOfMultipleOptions
            requireParticipantsName
            resultVisibility
            startDate
            startTime
            endDate
            documentUrl
        }
    }
`;

export const GetClientPollsAnswers = gql`
    query GetClientPollsAnswers($pollId: ID!) {
        getPollAnswers(pollId: $pollId) {
            id
            answer
            description
            imageUrl
            createdAt

            poll {
                edges {
                    node {
                        name
                        answers {
                            edges {
                                node {
                                    answer
                                    description
                                    image
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const GetClientPollsCandidates = gql`
    query getClientPollsCandidates($pollId: ID!) {
        getPollCandidates(pollId: $pollId) {
            poll {
                edges {
                    node {
                        id
                        name
                        state
                        status
                        pollType
                        inputType
                        candidates {
                            edges {
                                node {
                                    id
                                    name
                                    bio
                                    imageUrl
                                }
                            }
                        }
                        decision
                        document
                        startDate
                        documentUrl
                        requireParticipantsName
                    }
                }
            }
        }
    }
`;

export const GetAdminSinglePoll = gql`
    query getAdminSinglePoll($pollId: ID!, $organizationId: ID!) {
        adminGetPollCandidatesAndAnswers(pollId: $pollId, organizationId: $organizationId) {
            poll {
                pk
                id
                name
                pollType
                state
                status
                inputType
                allowSelectionOfMultipleOptions
                requireParticipantsName
                resultVisibility
                startDate
                endDate
                startTime
                endTime
                document
                pollVisibility
                question {
                    question
                }
            }

            answers {
                id
                answer
                imageUrl
                description
            }

            candidates {
                id
                name
                bio
                imageUrl
            }
        }
    }
`;

export const GetAdminSinglePollResult = gql`
    query getAdminSinglePollResult($pollId: ID!, $organizationId: ID!) {
        adminGetPollResults(pollId: $pollId, organizationId: $organizationId) {
            poll {
                name
                question {
                    question
                }

                state
                status
                pollType
            }
            candidates
            answers
        }
    }
`;
export const getPollResult = gql`
    query getPollResult($pollId: ID!) {
        getPollResults(pollId: $pollId) {
            poll {
                name
                pollType
                question {
                    question
                }
                state
                status
            }
            candidates
            answers
        }
    }
`;

export const getClientPollCandidatesandAnswers = gql`
    query getClientPollCandidatesandAnswers($pollId: ID!) {
        getPollCandidatesAndAnswers(pollId: $pollId) {
            poll {
                name
                pk
                id
                documentUrl
                pollType
                resultVisibility
            }
            candidates {
                id
                pk
                bio
                imageUrl
                name
            }
            answers {
                id
                pk
                answer
                description
                imageUrl
            }
        }
    }
`;

export const GetAdminTopFourResult = gql`
    query getAdminTopFourResult($organizationId: ID!) {
        adminGetMostRecentFourPolls(organizationId: $organizationId) {
            poll {
                name
            }
            pollEntries
        }
    }
`;

export const getPollsForUser = gql`
    query getPollsForUSer($organizationId: ID!, $after: String, $first: Int) {
        getPublishedPollsForUser(organizationId: $organizationId, after: $after, first: $first) {
            totalCount
            edgeCount
            edges {
                node {
                    participated
                    poll {
                        pk
                        name
                        state
                        status
                        startDate
                        startTime
                        endDate
                        endTime
                        resultVisibility
                    }
                    pollEntries
                }
            }

            pageInfo {
                hasNextPage
                hasPreviousPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;
// //////////////////////////////////  contents end ///////////////////////////////////////////////

// //////////////////////////////////  admin end  ///////////////////////////////////////////////
