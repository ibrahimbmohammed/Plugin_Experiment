export interface PersonalInformationFormFieldsType {
    'First Name': string;
    'Company Name': string;
    'Middle Name': string;
    'Last Name': string;
    Email: string;
    'Phone Number': string;
    'Date of Birth': string;
    Gender: string;
    'Professional Summary': string;
    'Residential Address': string;
    'Postal Address': string;
    'Company Address': string;
    State: string;
    Country: string;
    Nationality: string;
}

export interface ProfessionalInformationFormFieldsType {
    'Membership Type': string;
    'Membership Number': string;
    'Membership Status': string;
    'Other Membership Numbers': string;
    Chapter: string;
    Specialty: string;
    'Sub Specialty': string;
}

export interface DocFormFieldsType {
    pk: string;
    cacCertificateUrl: string;
    companyProfileUrl: string;
    taxClearanceUrl: string;
    otherUrl: string;
}

export interface WorkExperienceFormFieldsType {
    pk?: string | number;
    'Name of Organization/Company': string;
    'Project Name': string;
    'Job Title/Position': string;
    'Brief Job Description': string;
    'Start Date': string;
    'End Date': string;
    'Company Address': string;
    'Project Address': string;
    'Project Description': string;
    workExperienceEndDateActive: boolean;
    State: string;
    Country: string;
}

export interface AcademicInformationFormFieldsType {
    pk?: string | number;
    'Name of Institution': string;
    'Academic Program': string;
    'Academic Discipline': string;
    'Date Admitted': string;
    'Date Graduated': string;
    academicStillActive: boolean;
    Certificate: File | string;
    'Certificate Url'?: string;
}

export interface NextOfKinFormFieldsType {
    pk?: string | number;
    'First Name (Next of Kin)': string;
    'Middle Name (Next of Kin)': string;
    'Last Name (Next of Kin)': string;
    'Email (Next of Kin)': string;
    'Phone Number (Next of Kin)': string;
    'Relationship (Next of Kin)': string;
}

export interface RefereeFieldsType {
    pk?: string | number;
    'First Name (Referee)': string;
    'Middle Name (Referee)': string;
    'Last Name (Referee)': string;
    'Email (Referee)': string;
    'Phone Number (Referee)': string;
    'Membership Number (Referee)': string;
}

export interface ProfilPictureFieldType {
    'Profile Picture': File;
}

export interface DownloadInvitationLetterFieldTypes {
    'Full Name': string;
    'Address Line 1': string;
    'Address Line 2': string;
}

export interface RequestForHelpFieldType {
    'Helpee Name': string;
    'Helpee Message': string;
    'Helpee PhoneNumber': string;
    'Helpee Email': string;
}

export interface ConferenceGetDpUserDataFieldTypes {
    'Conference GetDp User Name': string;
    'Conference GetDp User Photo': FileList;
}
export type AllProfileFormFieldsType = PersonalInformationFormFieldsType &
    ProfessionalInformationFormFieldsType &
    WorkExperienceFormFieldsType &
    AcademicInformationFormFieldsType &
    NextOfKinFormFieldsType &
    RefereeFieldsType &
    ProfilPictureFieldType &
    DownloadInvitationLetterFieldTypes &
    RequestForHelpFieldType &
    ConferenceGetDpUserDataFieldTypes &
    DocFormFieldsType;
