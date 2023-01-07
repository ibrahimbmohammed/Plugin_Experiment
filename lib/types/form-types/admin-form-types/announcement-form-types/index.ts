export interface AnnouncementFormFieldsType {
    title: string;
    body: string;
    conf_theme: string;
    speaker: string;
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

export interface WorkExperienceFormFieldsType {
    'Name of Organization/Company': string;
    'Job Title/Position': string;
    'Brief Job Description': string;
    'Start Date': string;
    'End Date': string;
    'Company Address': string;
    workExperienceEndDateActive: boolean;
    State: string;
    Country: string;
}

export interface AcademicInformationFormFieldsType {
    'Name of Institution': string;
    'Academic Program': string;
    'Academic Discipline': string;
    'Date Admitted': string;
    'Date Graduated': string;
    academicStillActive: boolean;
    Certificate: File | string;
}

export interface NextOfKinFormFieldsType {
    'First Name (Next of Kin)': string;
    'Middle Name (Next of Kin)': string;
    'Last Name (Next of Kin)': string;
    'Email (Next of Kin)': string;
    'Phone Number (Next of Kin)': string;
    'Relationship (Next of Kin)': string;
}

export interface RefereeFieldsType {
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

export interface AnnouncementFieldType {
    announcement_type: string;
}

export type AllAnnouncementFormFieldsType = AnnouncementFormFieldsType &
    ProfessionalInformationFormFieldsType &
    WorkExperienceFormFieldsType &
    AcademicInformationFormFieldsType &
    NextOfKinFormFieldsType &
    RefereeFieldsType &
    AnnouncementFieldType &
    ProfilPictureFieldType;
