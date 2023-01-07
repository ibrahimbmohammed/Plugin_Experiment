export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /**
     * The `Date` scalar type represents a Date
     * value as specified by
     * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    Date: any;
    /**
     * The `DateTime` scalar type represents a DateTime
     * value as specified by
     * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    DateTime: any;
    /** The `Decimal` scalar type represents a python Decimal. */
    Decimal: any;
    /**
     *
     *     Errors messages and codes mapped to
     *     fields or non fields errors.
     *     Example:
     *     {
     *         field_name: [
     *             {
     *                 "message": "error message",
     *                 "code": "error_code"
     *             }
     *         ],
     *         other_field: [
     *             {
     *                 "message": "error message",
     *                 "code": "error_code"
     *             }
     *         ],
     *         nonFieldErrors: [
     *             {
     *                 "message": "error message",
     *                 "code": "error_code"
     *             }
     *         ]
     *     }
     *
     */
    ExpectedErrorType: any;
    /**
     * The `GenericScalar` scalar type represents a generic
     * GraphQL scalar value that could be:
     * String, Boolean, Int, Float, List or Object.
     */
    GenericScalar: any;
    /**
     * The `Time` scalar type represents a Time value as
     * specified by
     * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    Time: any;
    /**
     * Leverages the internal Python implmeentation of UUID (uuid.UUID) to provide native UUID objects
     * in fields, resolvers and input.
     */
    UUID: any;
    /**
     * Create scalar that ignores normal serialization/deserialization, since
     * that will be handled by the multipart request spec
     */
    Upload: any;
};

/** Delete an AcademicRecord */
export type AcademicRecordDeleteMutation = {
    __typename?: 'AcademicRecordDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/**  Academic Record model type definition  */
export type AcademicRecordModelType = Node & {
    __typename?: 'AcademicRecordModelType';
    /** Academic session admitted */
    admitted?: Maybe<Scalars['Date']>;
    /** Upload size of file should be a maximum of 2mb */
    certificate?: Maybe<Scalars['String']>;
    certificateUrl?: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    /** Currently enrolled in this academic program */
    current?: Maybe<Scalars['Boolean']>;
    discipline?: Maybe<DepartmentModelType>;
    /** Academic session graduated */
    graduated?: Maybe<Scalars['Date']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    pk: Scalars['ID'];
    program: Scalars['String'];
    school: SchoolModelType;
    updated: Scalars['DateTime'];
    user: UserType;
    uuid: Scalars['UUID'];
};

export type AcademicRecordModelTypeConnection = {
    __typename?: 'AcademicRecordModelTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<AcademicRecordModelTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `AcademicRecordModelType` and its cursor. */
export type AcademicRecordModelTypeEdge = {
    __typename?: 'AcademicRecordModelTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<AcademicRecordModelType>;
};

/** An enumeration. */
export enum AccountsUserAccountTypeChoices {
    /** Individual */
    Individual = 'INDIVIDUAL',
    /** Organization */
    Organization = 'ORGANIZATION',
}

/** An enumeration. */
export enum AccountsUserCountryChoices {
    /** Andorra */
    Ad = 'AD',
    /** United Arab Emirates */
    Ae = 'AE',
    /** Afghanistan */
    Af = 'AF',
    /** Antigua and Barbuda */
    Ag = 'AG',
    /** Anguilla */
    Ai = 'AI',
    /** Albania */
    Al = 'AL',
    /** Armenia */
    Am = 'AM',
    /** Angola */
    Ao = 'AO',
    /** Antarctica */
    Aq = 'AQ',
    /** Argentina */
    Ar = 'AR',
    /** American Samoa */
    As = 'AS',
    /** Austria */
    At = 'AT',
    /** Australia */
    Au = 'AU',
    /** Aruba */
    Aw = 'AW',
    /** Åland Islands */
    Ax = 'AX',
    /** Azerbaijan */
    Az = 'AZ',
    /** Bosnia and Herzegovina */
    Ba = 'BA',
    /** Barbados */
    Bb = 'BB',
    /** Bangladesh */
    Bd = 'BD',
    /** Belgium */
    Be = 'BE',
    /** Burkina Faso */
    Bf = 'BF',
    /** Bulgaria */
    Bg = 'BG',
    /** Bahrain */
    Bh = 'BH',
    /** Burundi */
    Bi = 'BI',
    /** Benin */
    Bj = 'BJ',
    /** Saint Barthélemy */
    Bl = 'BL',
    /** Bermuda */
    Bm = 'BM',
    /** Brunei */
    Bn = 'BN',
    /** Bolivia */
    Bo = 'BO',
    /** Bonaire, Sint Eustatius and Saba */
    Bq = 'BQ',
    /** Brazil */
    Br = 'BR',
    /** Bahamas */
    Bs = 'BS',
    /** Bhutan */
    Bt = 'BT',
    /** Bouvet Island */
    Bv = 'BV',
    /** Botswana */
    Bw = 'BW',
    /** Belarus */
    By = 'BY',
    /** Belize */
    Bz = 'BZ',
    /** Canada */
    Ca = 'CA',
    /** Cocos (Keeling) Islands */
    Cc = 'CC',
    /** Congo (the Democratic Republic of the) */
    Cd = 'CD',
    /** Central African Republic */
    Cf = 'CF',
    /** Congo */
    Cg = 'CG',
    /** Switzerland */
    Ch = 'CH',
    /** Côte d'Ivoire */
    Ci = 'CI',
    /** Cook Islands */
    Ck = 'CK',
    /** Chile */
    Cl = 'CL',
    /** Cameroon */
    Cm = 'CM',
    /** China */
    Cn = 'CN',
    /** Colombia */
    Co = 'CO',
    /** Costa Rica */
    Cr = 'CR',
    /** Cuba */
    Cu = 'CU',
    /** Cabo Verde */
    Cv = 'CV',
    /** Curaçao */
    Cw = 'CW',
    /** Christmas Island */
    Cx = 'CX',
    /** Cyprus */
    Cy = 'CY',
    /** Czechia */
    Cz = 'CZ',
    /** Germany */
    De = 'DE',
    /** Djibouti */
    Dj = 'DJ',
    /** Denmark */
    Dk = 'DK',
    /** Dominica */
    Dm = 'DM',
    /** Dominican Republic */
    Do = 'DO',
    /** Algeria */
    Dz = 'DZ',
    /** Ecuador */
    Ec = 'EC',
    /** Estonia */
    Ee = 'EE',
    /** Egypt */
    Eg = 'EG',
    /** Western Sahara */
    Eh = 'EH',
    /** Eritrea */
    Er = 'ER',
    /** Spain */
    Es = 'ES',
    /** Ethiopia */
    Et = 'ET',
    /** Finland */
    Fi = 'FI',
    /** Fiji */
    Fj = 'FJ',
    /** Falkland Islands (Malvinas) */
    Fk = 'FK',
    /** Micronesia (Federated States of) */
    Fm = 'FM',
    /** Faroe Islands */
    Fo = 'FO',
    /** France */
    Fr = 'FR',
    /** Gabon */
    Ga = 'GA',
    /** United Kingdom */
    Gb = 'GB',
    /** Grenada */
    Gd = 'GD',
    /** Georgia */
    Ge = 'GE',
    /** French Guiana */
    Gf = 'GF',
    /** Guernsey */
    Gg = 'GG',
    /** Ghana */
    Gh = 'GH',
    /** Gibraltar */
    Gi = 'GI',
    /** Greenland */
    Gl = 'GL',
    /** Gambia */
    Gm = 'GM',
    /** Guinea */
    Gn = 'GN',
    /** Guadeloupe */
    Gp = 'GP',
    /** Equatorial Guinea */
    Gq = 'GQ',
    /** Greece */
    Gr = 'GR',
    /** South Georgia and the South Sandwich Islands */
    Gs = 'GS',
    /** Guatemala */
    Gt = 'GT',
    /** Guam */
    Gu = 'GU',
    /** Guinea-Bissau */
    Gw = 'GW',
    /** Guyana */
    Gy = 'GY',
    /** Hong Kong */
    Hk = 'HK',
    /** Heard Island and McDonald Islands */
    Hm = 'HM',
    /** Honduras */
    Hn = 'HN',
    /** Croatia */
    Hr = 'HR',
    /** Haiti */
    Ht = 'HT',
    /** Hungary */
    Hu = 'HU',
    /** Indonesia */
    Id = 'ID',
    /** Ireland */
    Ie = 'IE',
    /** Israel */
    Il = 'IL',
    /** Isle of Man */
    Im = 'IM',
    /** India */
    In = 'IN',
    /** British Indian Ocean Territory */
    Io = 'IO',
    /** Iraq */
    Iq = 'IQ',
    /** Iran */
    Ir = 'IR',
    /** Iceland */
    Is = 'IS',
    /** Italy */
    It = 'IT',
    /** Jersey */
    Je = 'JE',
    /** Jamaica */
    Jm = 'JM',
    /** Jordan */
    Jo = 'JO',
    /** Japan */
    Jp = 'JP',
    /** Kenya */
    Ke = 'KE',
    /** Kyrgyzstan */
    Kg = 'KG',
    /** Cambodia */
    Kh = 'KH',
    /** Kiribati */
    Ki = 'KI',
    /** Comoros */
    Km = 'KM',
    /** Saint Kitts and Nevis */
    Kn = 'KN',
    /** North Korea */
    Kp = 'KP',
    /** South Korea */
    Kr = 'KR',
    /** Kuwait */
    Kw = 'KW',
    /** Cayman Islands */
    Ky = 'KY',
    /** Kazakhstan */
    Kz = 'KZ',
    /** Laos */
    La = 'LA',
    /** Lebanon */
    Lb = 'LB',
    /** Saint Lucia */
    Lc = 'LC',
    /** Liechtenstein */
    Li = 'LI',
    /** Sri Lanka */
    Lk = 'LK',
    /** Liberia */
    Lr = 'LR',
    /** Lesotho */
    Ls = 'LS',
    /** Lithuania */
    Lt = 'LT',
    /** Luxembourg */
    Lu = 'LU',
    /** Latvia */
    Lv = 'LV',
    /** Libya */
    Ly = 'LY',
    /** Morocco */
    Ma = 'MA',
    /** Monaco */
    Mc = 'MC',
    /** Moldova */
    Md = 'MD',
    /** Montenegro */
    Me = 'ME',
    /** Saint Martin (French part) */
    Mf = 'MF',
    /** Madagascar */
    Mg = 'MG',
    /** Marshall Islands */
    Mh = 'MH',
    /** North Macedonia */
    Mk = 'MK',
    /** Mali */
    Ml = 'ML',
    /** Myanmar */
    Mm = 'MM',
    /** Mongolia */
    Mn = 'MN',
    /** Macao */
    Mo = 'MO',
    /** Northern Mariana Islands */
    Mp = 'MP',
    /** Martinique */
    Mq = 'MQ',
    /** Mauritania */
    Mr = 'MR',
    /** Montserrat */
    Ms = 'MS',
    /** Malta */
    Mt = 'MT',
    /** Mauritius */
    Mu = 'MU',
    /** Maldives */
    Mv = 'MV',
    /** Malawi */
    Mw = 'MW',
    /** Mexico */
    Mx = 'MX',
    /** Malaysia */
    My = 'MY',
    /** Mozambique */
    Mz = 'MZ',
    /** Namibia */
    Na = 'NA',
    /** New Caledonia */
    Nc = 'NC',
    /** Niger */
    Ne = 'NE',
    /** Norfolk Island */
    Nf = 'NF',
    /** Nigeria */
    Ng = 'NG',
    /** Nicaragua */
    Ni = 'NI',
    /** Netherlands */
    Nl = 'NL',
    /** Norway */
    No = 'NO',
    /** Nepal */
    Np = 'NP',
    /** Nauru */
    Nr = 'NR',
    /** Niue */
    Nu = 'NU',
    /** New Zealand */
    Nz = 'NZ',
    /** Oman */
    Om = 'OM',
    /** Panama */
    Pa = 'PA',
    /** Peru */
    Pe = 'PE',
    /** French Polynesia */
    Pf = 'PF',
    /** Papua New Guinea */
    Pg = 'PG',
    /** Philippines */
    Ph = 'PH',
    /** Pakistan */
    Pk = 'PK',
    /** Poland */
    Pl = 'PL',
    /** Saint Pierre and Miquelon */
    Pm = 'PM',
    /** Pitcairn */
    Pn = 'PN',
    /** Puerto Rico */
    Pr = 'PR',
    /** Palestine, State of */
    Ps = 'PS',
    /** Portugal */
    Pt = 'PT',
    /** Palau */
    Pw = 'PW',
    /** Paraguay */
    Py = 'PY',
    /** Qatar */
    Qa = 'QA',
    /** Réunion */
    Re = 'RE',
    /** Romania */
    Ro = 'RO',
    /** Serbia */
    Rs = 'RS',
    /** Russia */
    Ru = 'RU',
    /** Rwanda */
    Rw = 'RW',
    /** Saudi Arabia */
    Sa = 'SA',
    /** Solomon Islands */
    Sb = 'SB',
    /** Seychelles */
    Sc = 'SC',
    /** Sudan */
    Sd = 'SD',
    /** Sweden */
    Se = 'SE',
    /** Singapore */
    Sg = 'SG',
    /** Saint Helena, Ascension and Tristan da Cunha */
    Sh = 'SH',
    /** Slovenia */
    Si = 'SI',
    /** Svalbard and Jan Mayen */
    Sj = 'SJ',
    /** Slovakia */
    Sk = 'SK',
    /** Sierra Leone */
    Sl = 'SL',
    /** San Marino */
    Sm = 'SM',
    /** Senegal */
    Sn = 'SN',
    /** Somalia */
    So = 'SO',
    /** Suriname */
    Sr = 'SR',
    /** South Sudan */
    Ss = 'SS',
    /** Sao Tome and Principe */
    St = 'ST',
    /** El Salvador */
    Sv = 'SV',
    /** Sint Maarten (Dutch part) */
    Sx = 'SX',
    /** Syria */
    Sy = 'SY',
    /** Eswatini */
    Sz = 'SZ',
    /** Turks and Caicos Islands */
    Tc = 'TC',
    /** Chad */
    Td = 'TD',
    /** French Southern Territories */
    Tf = 'TF',
    /** Togo */
    Tg = 'TG',
    /** Thailand */
    Th = 'TH',
    /** Tajikistan */
    Tj = 'TJ',
    /** Tokelau */
    Tk = 'TK',
    /** Timor-Leste */
    Tl = 'TL',
    /** Turkmenistan */
    Tm = 'TM',
    /** Tunisia */
    Tn = 'TN',
    /** Tonga */
    To = 'TO',
    /** Turkey */
    Tr = 'TR',
    /** Trinidad and Tobago */
    Tt = 'TT',
    /** Tuvalu */
    Tv = 'TV',
    /** Taiwan */
    Tw = 'TW',
    /** Tanzania */
    Tz = 'TZ',
    /** Ukraine */
    Ua = 'UA',
    /** Uganda */
    Ug = 'UG',
    /** United States Minor Outlying Islands */
    Um = 'UM',
    /** United States of America */
    Us = 'US',
    /** Uruguay */
    Uy = 'UY',
    /** Uzbekistan */
    Uz = 'UZ',
    /** Holy See */
    Va = 'VA',
    /** Saint Vincent and the Grenadines */
    Vc = 'VC',
    /** Venezuela */
    Ve = 'VE',
    /** Virgin Islands (British) */
    Vg = 'VG',
    /** Virgin Islands (U.S.) */
    Vi = 'VI',
    /** Vietnam */
    Vn = 'VN',
    /** Vanuatu */
    Vu = 'VU',
    /** Wallis and Futuna */
    Wf = 'WF',
    /** Samoa */
    Ws = 'WS',
    /** Yemen */
    Ye = 'YE',
    /** Mayotte */
    Yt = 'YT',
    /** South Africa */
    Za = 'ZA',
    /** Zambia */
    Zm = 'ZM',
    /** Zimbabwe */
    Zw = 'ZW',
}

/** An enumeration. */
export enum AccountsUserGenderChoices {
    /** Female */
    Female = 'FEMALE',
    /** Male */
    Male = 'MALE',
}

/** An enumeration. */
export enum AccountsUserNationalityChoices {
    /** Andorra */
    Ad = 'AD',
    /** United Arab Emirates */
    Ae = 'AE',
    /** Afghanistan */
    Af = 'AF',
    /** Antigua and Barbuda */
    Ag = 'AG',
    /** Anguilla */
    Ai = 'AI',
    /** Albania */
    Al = 'AL',
    /** Armenia */
    Am = 'AM',
    /** Angola */
    Ao = 'AO',
    /** Antarctica */
    Aq = 'AQ',
    /** Argentina */
    Ar = 'AR',
    /** American Samoa */
    As = 'AS',
    /** Austria */
    At = 'AT',
    /** Australia */
    Au = 'AU',
    /** Aruba */
    Aw = 'AW',
    /** Åland Islands */
    Ax = 'AX',
    /** Azerbaijan */
    Az = 'AZ',
    /** Bosnia and Herzegovina */
    Ba = 'BA',
    /** Barbados */
    Bb = 'BB',
    /** Bangladesh */
    Bd = 'BD',
    /** Belgium */
    Be = 'BE',
    /** Burkina Faso */
    Bf = 'BF',
    /** Bulgaria */
    Bg = 'BG',
    /** Bahrain */
    Bh = 'BH',
    /** Burundi */
    Bi = 'BI',
    /** Benin */
    Bj = 'BJ',
    /** Saint Barthélemy */
    Bl = 'BL',
    /** Bermuda */
    Bm = 'BM',
    /** Brunei */
    Bn = 'BN',
    /** Bolivia */
    Bo = 'BO',
    /** Bonaire, Sint Eustatius and Saba */
    Bq = 'BQ',
    /** Brazil */
    Br = 'BR',
    /** Bahamas */
    Bs = 'BS',
    /** Bhutan */
    Bt = 'BT',
    /** Bouvet Island */
    Bv = 'BV',
    /** Botswana */
    Bw = 'BW',
    /** Belarus */
    By = 'BY',
    /** Belize */
    Bz = 'BZ',
    /** Canada */
    Ca = 'CA',
    /** Cocos (Keeling) Islands */
    Cc = 'CC',
    /** Congo (the Democratic Republic of the) */
    Cd = 'CD',
    /** Central African Republic */
    Cf = 'CF',
    /** Congo */
    Cg = 'CG',
    /** Switzerland */
    Ch = 'CH',
    /** Côte d'Ivoire */
    Ci = 'CI',
    /** Cook Islands */
    Ck = 'CK',
    /** Chile */
    Cl = 'CL',
    /** Cameroon */
    Cm = 'CM',
    /** China */
    Cn = 'CN',
    /** Colombia */
    Co = 'CO',
    /** Costa Rica */
    Cr = 'CR',
    /** Cuba */
    Cu = 'CU',
    /** Cabo Verde */
    Cv = 'CV',
    /** Curaçao */
    Cw = 'CW',
    /** Christmas Island */
    Cx = 'CX',
    /** Cyprus */
    Cy = 'CY',
    /** Czechia */
    Cz = 'CZ',
    /** Germany */
    De = 'DE',
    /** Djibouti */
    Dj = 'DJ',
    /** Denmark */
    Dk = 'DK',
    /** Dominica */
    Dm = 'DM',
    /** Dominican Republic */
    Do = 'DO',
    /** Algeria */
    Dz = 'DZ',
    /** Ecuador */
    Ec = 'EC',
    /** Estonia */
    Ee = 'EE',
    /** Egypt */
    Eg = 'EG',
    /** Western Sahara */
    Eh = 'EH',
    /** Eritrea */
    Er = 'ER',
    /** Spain */
    Es = 'ES',
    /** Ethiopia */
    Et = 'ET',
    /** Finland */
    Fi = 'FI',
    /** Fiji */
    Fj = 'FJ',
    /** Falkland Islands (Malvinas) */
    Fk = 'FK',
    /** Micronesia (Federated States of) */
    Fm = 'FM',
    /** Faroe Islands */
    Fo = 'FO',
    /** France */
    Fr = 'FR',
    /** Gabon */
    Ga = 'GA',
    /** United Kingdom */
    Gb = 'GB',
    /** Grenada */
    Gd = 'GD',
    /** Georgia */
    Ge = 'GE',
    /** French Guiana */
    Gf = 'GF',
    /** Guernsey */
    Gg = 'GG',
    /** Ghana */
    Gh = 'GH',
    /** Gibraltar */
    Gi = 'GI',
    /** Greenland */
    Gl = 'GL',
    /** Gambia */
    Gm = 'GM',
    /** Guinea */
    Gn = 'GN',
    /** Guadeloupe */
    Gp = 'GP',
    /** Equatorial Guinea */
    Gq = 'GQ',
    /** Greece */
    Gr = 'GR',
    /** South Georgia and the South Sandwich Islands */
    Gs = 'GS',
    /** Guatemala */
    Gt = 'GT',
    /** Guam */
    Gu = 'GU',
    /** Guinea-Bissau */
    Gw = 'GW',
    /** Guyana */
    Gy = 'GY',
    /** Hong Kong */
    Hk = 'HK',
    /** Heard Island and McDonald Islands */
    Hm = 'HM',
    /** Honduras */
    Hn = 'HN',
    /** Croatia */
    Hr = 'HR',
    /** Haiti */
    Ht = 'HT',
    /** Hungary */
    Hu = 'HU',
    /** Indonesia */
    Id = 'ID',
    /** Ireland */
    Ie = 'IE',
    /** Israel */
    Il = 'IL',
    /** Isle of Man */
    Im = 'IM',
    /** India */
    In = 'IN',
    /** British Indian Ocean Territory */
    Io = 'IO',
    /** Iraq */
    Iq = 'IQ',
    /** Iran */
    Ir = 'IR',
    /** Iceland */
    Is = 'IS',
    /** Italy */
    It = 'IT',
    /** Jersey */
    Je = 'JE',
    /** Jamaica */
    Jm = 'JM',
    /** Jordan */
    Jo = 'JO',
    /** Japan */
    Jp = 'JP',
    /** Kenya */
    Ke = 'KE',
    /** Kyrgyzstan */
    Kg = 'KG',
    /** Cambodia */
    Kh = 'KH',
    /** Kiribati */
    Ki = 'KI',
    /** Comoros */
    Km = 'KM',
    /** Saint Kitts and Nevis */
    Kn = 'KN',
    /** North Korea */
    Kp = 'KP',
    /** South Korea */
    Kr = 'KR',
    /** Kuwait */
    Kw = 'KW',
    /** Cayman Islands */
    Ky = 'KY',
    /** Kazakhstan */
    Kz = 'KZ',
    /** Laos */
    La = 'LA',
    /** Lebanon */
    Lb = 'LB',
    /** Saint Lucia */
    Lc = 'LC',
    /** Liechtenstein */
    Li = 'LI',
    /** Sri Lanka */
    Lk = 'LK',
    /** Liberia */
    Lr = 'LR',
    /** Lesotho */
    Ls = 'LS',
    /** Lithuania */
    Lt = 'LT',
    /** Luxembourg */
    Lu = 'LU',
    /** Latvia */
    Lv = 'LV',
    /** Libya */
    Ly = 'LY',
    /** Morocco */
    Ma = 'MA',
    /** Monaco */
    Mc = 'MC',
    /** Moldova */
    Md = 'MD',
    /** Montenegro */
    Me = 'ME',
    /** Saint Martin (French part) */
    Mf = 'MF',
    /** Madagascar */
    Mg = 'MG',
    /** Marshall Islands */
    Mh = 'MH',
    /** North Macedonia */
    Mk = 'MK',
    /** Mali */
    Ml = 'ML',
    /** Myanmar */
    Mm = 'MM',
    /** Mongolia */
    Mn = 'MN',
    /** Macao */
    Mo = 'MO',
    /** Northern Mariana Islands */
    Mp = 'MP',
    /** Martinique */
    Mq = 'MQ',
    /** Mauritania */
    Mr = 'MR',
    /** Montserrat */
    Ms = 'MS',
    /** Malta */
    Mt = 'MT',
    /** Mauritius */
    Mu = 'MU',
    /** Maldives */
    Mv = 'MV',
    /** Malawi */
    Mw = 'MW',
    /** Mexico */
    Mx = 'MX',
    /** Malaysia */
    My = 'MY',
    /** Mozambique */
    Mz = 'MZ',
    /** Namibia */
    Na = 'NA',
    /** New Caledonia */
    Nc = 'NC',
    /** Niger */
    Ne = 'NE',
    /** Norfolk Island */
    Nf = 'NF',
    /** Nigeria */
    Ng = 'NG',
    /** Nicaragua */
    Ni = 'NI',
    /** Netherlands */
    Nl = 'NL',
    /** Norway */
    No = 'NO',
    /** Nepal */
    Np = 'NP',
    /** Nauru */
    Nr = 'NR',
    /** Niue */
    Nu = 'NU',
    /** New Zealand */
    Nz = 'NZ',
    /** Oman */
    Om = 'OM',
    /** Panama */
    Pa = 'PA',
    /** Peru */
    Pe = 'PE',
    /** French Polynesia */
    Pf = 'PF',
    /** Papua New Guinea */
    Pg = 'PG',
    /** Philippines */
    Ph = 'PH',
    /** Pakistan */
    Pk = 'PK',
    /** Poland */
    Pl = 'PL',
    /** Saint Pierre and Miquelon */
    Pm = 'PM',
    /** Pitcairn */
    Pn = 'PN',
    /** Puerto Rico */
    Pr = 'PR',
    /** Palestine, State of */
    Ps = 'PS',
    /** Portugal */
    Pt = 'PT',
    /** Palau */
    Pw = 'PW',
    /** Paraguay */
    Py = 'PY',
    /** Qatar */
    Qa = 'QA',
    /** Réunion */
    Re = 'RE',
    /** Romania */
    Ro = 'RO',
    /** Serbia */
    Rs = 'RS',
    /** Russia */
    Ru = 'RU',
    /** Rwanda */
    Rw = 'RW',
    /** Saudi Arabia */
    Sa = 'SA',
    /** Solomon Islands */
    Sb = 'SB',
    /** Seychelles */
    Sc = 'SC',
    /** Sudan */
    Sd = 'SD',
    /** Sweden */
    Se = 'SE',
    /** Singapore */
    Sg = 'SG',
    /** Saint Helena, Ascension and Tristan da Cunha */
    Sh = 'SH',
    /** Slovenia */
    Si = 'SI',
    /** Svalbard and Jan Mayen */
    Sj = 'SJ',
    /** Slovakia */
    Sk = 'SK',
    /** Sierra Leone */
    Sl = 'SL',
    /** San Marino */
    Sm = 'SM',
    /** Senegal */
    Sn = 'SN',
    /** Somalia */
    So = 'SO',
    /** Suriname */
    Sr = 'SR',
    /** South Sudan */
    Ss = 'SS',
    /** Sao Tome and Principe */
    St = 'ST',
    /** El Salvador */
    Sv = 'SV',
    /** Sint Maarten (Dutch part) */
    Sx = 'SX',
    /** Syria */
    Sy = 'SY',
    /** Eswatini */
    Sz = 'SZ',
    /** Turks and Caicos Islands */
    Tc = 'TC',
    /** Chad */
    Td = 'TD',
    /** French Southern Territories */
    Tf = 'TF',
    /** Togo */
    Tg = 'TG',
    /** Thailand */
    Th = 'TH',
    /** Tajikistan */
    Tj = 'TJ',
    /** Tokelau */
    Tk = 'TK',
    /** Timor-Leste */
    Tl = 'TL',
    /** Turkmenistan */
    Tm = 'TM',
    /** Tunisia */
    Tn = 'TN',
    /** Tonga */
    To = 'TO',
    /** Turkey */
    Tr = 'TR',
    /** Trinidad and Tobago */
    Tt = 'TT',
    /** Tuvalu */
    Tv = 'TV',
    /** Taiwan */
    Tw = 'TW',
    /** Tanzania */
    Tz = 'TZ',
    /** Ukraine */
    Ua = 'UA',
    /** Uganda */
    Ug = 'UG',
    /** United States Minor Outlying Islands */
    Um = 'UM',
    /** United States of America */
    Us = 'US',
    /** Uruguay */
    Uy = 'UY',
    /** Uzbekistan */
    Uz = 'UZ',
    /** Holy See */
    Va = 'VA',
    /** Saint Vincent and the Grenadines */
    Vc = 'VC',
    /** Venezuela */
    Ve = 'VE',
    /** Virgin Islands (British) */
    Vg = 'VG',
    /** Virgin Islands (U.S.) */
    Vi = 'VI',
    /** Vietnam */
    Vn = 'VN',
    /** Vanuatu */
    Vu = 'VU',
    /** Wallis and Futuna */
    Wf = 'WF',
    /** Samoa */
    Ws = 'WS',
    /** Yemen */
    Ye = 'YE',
    /** Mayotte */
    Yt = 'YT',
    /** South Africa */
    Za = 'ZA',
    /** Zambia */
    Zm = 'ZM',
    /** Zimbabwe */
    Zw = 'ZW',
}

/** An enumeration. */
export enum AccountsUserStateChoices {
    /** Abia */
    Abia = 'ABIA',
    /** Adamawa */
    Adamawa = 'ADAMAWA',
    /** Akwa Ibom */
    AkwaIbom = 'AKWA_IBOM',
    /** Anambra */
    Anambra = 'ANAMBRA',
    /** Bauchi */
    Bauchi = 'BAUCHI',
    /** Bayelsa */
    Bayelsa = 'BAYELSA',
    /** Benue */
    Benue = 'BENUE',
    /** Borno */
    Borno = 'BORNO',
    /** Cross River */
    CrossRiver = 'CROSS_RIVER',
    /** Delta */
    Delta = 'DELTA',
    /** Ebonyi */
    Ebonyi = 'EBONYI',
    /** Edo */
    Edo = 'EDO',
    /** Ekiti */
    Ekiti = 'EKITI',
    /** Enugu */
    Enugu = 'ENUGU',
    /** FCT - Abuja */
    FctAbuja = 'FCT_ABUJA',
    /** Gombe */
    Gombe = 'GOMBE',
    /** Imo */
    Imo = 'IMO',
    /** Jigawa */
    Jigawa = 'JIGAWA',
    /** Kaduna */
    Kaduna = 'KADUNA',
    /** Kano */
    Kano = 'KANO',
    /** Katsina */
    Katsina = 'KATSINA',
    /** Kebbi */
    Kebbi = 'KEBBI',
    /** Kogi */
    Kogi = 'KOGI',
    /** Kwara */
    Kwara = 'KWARA',
    /** Lagos */
    Lagos = 'LAGOS',
    /** Nasarawa */
    Nasarawa = 'NASARAWA',
    /** Niger */
    Niger = 'NIGER',
    /** Ogun */
    Ogun = 'OGUN',
    /** Ondo */
    Ondo = 'ONDO',
    /** Osun */
    Osun = 'OSUN',
    /** Outside of Nigeria */
    OutsideOfNigeria = 'OUTSIDE_OF_NIGERIA',
    /** Oyo */
    Oyo = 'OYO',
    /** Plateau */
    Plateau = 'PLATEAU',
    /** Rivers */
    Rivers = 'RIVERS',
    /** Sokoto */
    Sokoto = 'SOKOTO',
    /** Taraba */
    Taraba = 'TARABA',
    /** Yobe */
    Yobe = 'YOBE',
    /** Zamfara */
    Zamfara = 'ZAMFARA',
}

/** An enumeration. */
export enum AccountsUserTimezoneChoices {
    /** Africa/Abidjan */
    AfricaAbidjan = 'AFRICA_ABIDJAN',
    /** Africa/Accra */
    AfricaAccra = 'AFRICA_ACCRA',
    /** Africa/Addis_Ababa */
    AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
    /** Africa/Algiers */
    AfricaAlgiers = 'AFRICA_ALGIERS',
    /** Africa/Asmara */
    AfricaAsmara = 'AFRICA_ASMARA',
    /** Africa/Bamako */
    AfricaBamako = 'AFRICA_BAMAKO',
    /** Africa/Bangui */
    AfricaBangui = 'AFRICA_BANGUI',
    /** Africa/Banjul */
    AfricaBanjul = 'AFRICA_BANJUL',
    /** Africa/Bissau */
    AfricaBissau = 'AFRICA_BISSAU',
    /** Africa/Blantyre */
    AfricaBlantyre = 'AFRICA_BLANTYRE',
    /** Africa/Brazzaville */
    AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
    /** Africa/Bujumbura */
    AfricaBujumbura = 'AFRICA_BUJUMBURA',
    /** Africa/Cairo */
    AfricaCairo = 'AFRICA_CAIRO',
    /** Africa/Casablanca */
    AfricaCasablanca = 'AFRICA_CASABLANCA',
    /** Africa/Ceuta */
    AfricaCeuta = 'AFRICA_CEUTA',
    /** Africa/Conakry */
    AfricaConakry = 'AFRICA_CONAKRY',
    /** Africa/Dakar */
    AfricaDakar = 'AFRICA_DAKAR',
    /** Africa/Dar_es_Salaam */
    AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
    /** Africa/Djibouti */
    AfricaDjibouti = 'AFRICA_DJIBOUTI',
    /** Africa/Douala */
    AfricaDouala = 'AFRICA_DOUALA',
    /** Africa/El_Aaiun */
    AfricaElAaiun = 'AFRICA_EL_AAIUN',
    /** Africa/Freetown */
    AfricaFreetown = 'AFRICA_FREETOWN',
    /** Africa/Gaborone */
    AfricaGaborone = 'AFRICA_GABORONE',
    /** Africa/Harare */
    AfricaHarare = 'AFRICA_HARARE',
    /** Africa/Johannesburg */
    AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
    /** Africa/Juba */
    AfricaJuba = 'AFRICA_JUBA',
    /** Africa/Kampala */
    AfricaKampala = 'AFRICA_KAMPALA',
    /** Africa/Khartoum */
    AfricaKhartoum = 'AFRICA_KHARTOUM',
    /** Africa/Kigali */
    AfricaKigali = 'AFRICA_KIGALI',
    /** Africa/Kinshasa */
    AfricaKinshasa = 'AFRICA_KINSHASA',
    /** Africa/Lagos */
    AfricaLagos = 'AFRICA_LAGOS',
    /** Africa/Libreville */
    AfricaLibreville = 'AFRICA_LIBREVILLE',
    /** Africa/Lome */
    AfricaLome = 'AFRICA_LOME',
    /** Africa/Luanda */
    AfricaLuanda = 'AFRICA_LUANDA',
    /** Africa/Lubumbashi */
    AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
    /** Africa/Lusaka */
    AfricaLusaka = 'AFRICA_LUSAKA',
    /** Africa/Malabo */
    AfricaMalabo = 'AFRICA_MALABO',
    /** Africa/Maputo */
    AfricaMaputo = 'AFRICA_MAPUTO',
    /** Africa/Maseru */
    AfricaMaseru = 'AFRICA_MASERU',
    /** Africa/Mbabane */
    AfricaMbabane = 'AFRICA_MBABANE',
    /** Africa/Mogadishu */
    AfricaMogadishu = 'AFRICA_MOGADISHU',
    /** Africa/Monrovia */
    AfricaMonrovia = 'AFRICA_MONROVIA',
    /** Africa/Nairobi */
    AfricaNairobi = 'AFRICA_NAIROBI',
    /** Africa/Ndjamena */
    AfricaNdjamena = 'AFRICA_NDJAMENA',
    /** Africa/Niamey */
    AfricaNiamey = 'AFRICA_NIAMEY',
    /** Africa/Nouakchott */
    AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
    /** Africa/Ouagadougou */
    AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
    /** Africa/Porto-Novo */
    AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
    /** Africa/Sao_Tome */
    AfricaSaoTome = 'AFRICA_SAO_TOME',
    /** Africa/Tripoli */
    AfricaTripoli = 'AFRICA_TRIPOLI',
    /** Africa/Tunis */
    AfricaTunis = 'AFRICA_TUNIS',
    /** Africa/Windhoek */
    AfricaWindhoek = 'AFRICA_WINDHOEK',
    /** America/Adak */
    AmericaAdak = 'AMERICA_ADAK',
    /** America/Anchorage */
    AmericaAnchorage = 'AMERICA_ANCHORAGE',
    /** America/Anguilla */
    AmericaAnguilla = 'AMERICA_ANGUILLA',
    /** America/Antigua */
    AmericaAntigua = 'AMERICA_ANTIGUA',
    /** America/Araguaina */
    AmericaAraguaina = 'AMERICA_ARAGUAINA',
    /** America/Argentina/Buenos_Aires */
    AmericaArgentinaBuenosAires = 'AMERICA_ARGENTINA_BUENOS_AIRES',
    /** America/Argentina/Catamarca */
    AmericaArgentinaCatamarca = 'AMERICA_ARGENTINA_CATAMARCA',
    /** America/Argentina/Cordoba */
    AmericaArgentinaCordoba = 'AMERICA_ARGENTINA_CORDOBA',
    /** America/Argentina/Jujuy */
    AmericaArgentinaJujuy = 'AMERICA_ARGENTINA_JUJUY',
    /** America/Argentina/La_Rioja */
    AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
    /** America/Argentina/Mendoza */
    AmericaArgentinaMendoza = 'AMERICA_ARGENTINA_MENDOZA',
    /** America/Argentina/Rio_Gallegos */
    AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
    /** America/Argentina/Salta */
    AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
    /** America/Argentina/San_Juan */
    AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
    /** America/Argentina/San_Luis */
    AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
    /** America/Argentina/Tucuman */
    AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
    /** America/Argentina/Ushuaia */
    AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
    /** America/Aruba */
    AmericaAruba = 'AMERICA_ARUBA',
    /** America/Asuncion */
    AmericaAsuncion = 'AMERICA_ASUNCION',
    /** America/Atikokan */
    AmericaAtikokan = 'AMERICA_ATIKOKAN',
    /** America/Bahia */
    AmericaBahia = 'AMERICA_BAHIA',
    /** America/Bahia_Banderas */
    AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
    /** America/Barbados */
    AmericaBarbados = 'AMERICA_BARBADOS',
    /** America/Belem */
    AmericaBelem = 'AMERICA_BELEM',
    /** America/Belize */
    AmericaBelize = 'AMERICA_BELIZE',
    /** America/Blanc-Sablon */
    AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
    /** America/Boa_Vista */
    AmericaBoaVista = 'AMERICA_BOA_VISTA',
    /** America/Bogota */
    AmericaBogota = 'AMERICA_BOGOTA',
    /** America/Boise */
    AmericaBoise = 'AMERICA_BOISE',
    /** America/Cambridge_Bay */
    AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
    /** America/Campo_Grande */
    AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
    /** America/Cancun */
    AmericaCancun = 'AMERICA_CANCUN',
    /** America/Caracas */
    AmericaCaracas = 'AMERICA_CARACAS',
    /** America/Cayenne */
    AmericaCayenne = 'AMERICA_CAYENNE',
    /** America/Cayman */
    AmericaCayman = 'AMERICA_CAYMAN',
    /** America/Chicago */
    AmericaChicago = 'AMERICA_CHICAGO',
    /** America/Chihuahua */
    AmericaChihuahua = 'AMERICA_CHIHUAHUA',
    /** America/Costa_Rica */
    AmericaCostaRica = 'AMERICA_COSTA_RICA',
    /** America/Creston */
    AmericaCreston = 'AMERICA_CRESTON',
    /** America/Cuiaba */
    AmericaCuiaba = 'AMERICA_CUIABA',
    /** America/Curacao */
    AmericaCuracao = 'AMERICA_CURACAO',
    /** America/Danmarkshavn */
    AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
    /** America/Dawson */
    AmericaDawson = 'AMERICA_DAWSON',
    /** America/Dawson_Creek */
    AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
    /** America/Denver */
    AmericaDenver = 'AMERICA_DENVER',
    /** America/Detroit */
    AmericaDetroit = 'AMERICA_DETROIT',
    /** America/Dominica */
    AmericaDominica = 'AMERICA_DOMINICA',
    /** America/Edmonton */
    AmericaEdmonton = 'AMERICA_EDMONTON',
    /** America/Eirunepe */
    AmericaEirunepe = 'AMERICA_EIRUNEPE',
    /** America/El_Salvador */
    AmericaElSalvador = 'AMERICA_EL_SALVADOR',
    /** America/Fortaleza */
    AmericaFortaleza = 'AMERICA_FORTALEZA',
    /** America/Fort_Nelson */
    AmericaFortNelson = 'AMERICA_FORT_NELSON',
    /** America/Glace_Bay */
    AmericaGlaceBay = 'AMERICA_GLACE_BAY',
    /** America/Goose_Bay */
    AmericaGooseBay = 'AMERICA_GOOSE_BAY',
    /** America/Grand_Turk */
    AmericaGrandTurk = 'AMERICA_GRAND_TURK',
    /** America/Grenada */
    AmericaGrenada = 'AMERICA_GRENADA',
    /** America/Guadeloupe */
    AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
    /** America/Guatemala */
    AmericaGuatemala = 'AMERICA_GUATEMALA',
    /** America/Guayaquil */
    AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
    /** America/Guyana */
    AmericaGuyana = 'AMERICA_GUYANA',
    /** America/Halifax */
    AmericaHalifax = 'AMERICA_HALIFAX',
    /** America/Havana */
    AmericaHavana = 'AMERICA_HAVANA',
    /** America/Hermosillo */
    AmericaHermosillo = 'AMERICA_HERMOSILLO',
    /** America/Indiana/Indianapolis */
    AmericaIndianaIndianapolis = 'AMERICA_INDIANA_INDIANAPOLIS',
    /** America/Indiana/Knox */
    AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
    /** America/Indiana/Marengo */
    AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
    /** America/Indiana/Petersburg */
    AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
    /** America/Indiana/Tell_City */
    AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
    /** America/Indiana/Vevay */
    AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
    /** America/Indiana/Vincennes */
    AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
    /** America/Indiana/Winamac */
    AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
    /** America/Inuvik */
    AmericaInuvik = 'AMERICA_INUVIK',
    /** America/Iqaluit */
    AmericaIqaluit = 'AMERICA_IQALUIT',
    /** America/Jamaica */
    AmericaJamaica = 'AMERICA_JAMAICA',
    /** America/Juneau */
    AmericaJuneau = 'AMERICA_JUNEAU',
    /** America/Kentucky/Louisville */
    AmericaKentuckyLouisville = 'AMERICA_KENTUCKY_LOUISVILLE',
    /** America/Kentucky/Monticello */
    AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
    /** America/Kralendijk */
    AmericaKralendijk = 'AMERICA_KRALENDIJK',
    /** America/La_Paz */
    AmericaLaPaz = 'AMERICA_LA_PAZ',
    /** America/Lima */
    AmericaLima = 'AMERICA_LIMA',
    /** America/Los_Angeles */
    AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
    /** America/Lower_Princes */
    AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
    /** America/Maceio */
    AmericaMaceio = 'AMERICA_MACEIO',
    /** America/Managua */
    AmericaManagua = 'AMERICA_MANAGUA',
    /** America/Manaus */
    AmericaManaus = 'AMERICA_MANAUS',
    /** America/Marigot */
    AmericaMarigot = 'AMERICA_MARIGOT',
    /** America/Martinique */
    AmericaMartinique = 'AMERICA_MARTINIQUE',
    /** America/Matamoros */
    AmericaMatamoros = 'AMERICA_MATAMOROS',
    /** America/Mazatlan */
    AmericaMazatlan = 'AMERICA_MAZATLAN',
    /** America/Menominee */
    AmericaMenominee = 'AMERICA_MENOMINEE',
    /** America/Merida */
    AmericaMerida = 'AMERICA_MERIDA',
    /** America/Metlakatla */
    AmericaMetlakatla = 'AMERICA_METLAKATLA',
    /** America/Mexico_City */
    AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
    /** America/Miquelon */
    AmericaMiquelon = 'AMERICA_MIQUELON',
    /** America/Moncton */
    AmericaMoncton = 'AMERICA_MONCTON',
    /** America/Monterrey */
    AmericaMonterrey = 'AMERICA_MONTERREY',
    /** America/Montevideo */
    AmericaMontevideo = 'AMERICA_MONTEVIDEO',
    /** America/Montserrat */
    AmericaMontserrat = 'AMERICA_MONTSERRAT',
    /** America/Nassau */
    AmericaNassau = 'AMERICA_NASSAU',
    /** America/New_York */
    AmericaNewYork = 'AMERICA_NEW_YORK',
    /** America/Nipigon */
    AmericaNipigon = 'AMERICA_NIPIGON',
    /** America/Nome */
    AmericaNome = 'AMERICA_NOME',
    /** America/Noronha */
    AmericaNoronha = 'AMERICA_NORONHA',
    /** America/North_Dakota/Beulah */
    AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
    /** America/North_Dakota/Center */
    AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
    /** America/North_Dakota/New_Salem */
    AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
    /** America/Nuuk */
    AmericaNuuk = 'AMERICA_NUUK',
    /** America/Ojinaga */
    AmericaOjinaga = 'AMERICA_OJINAGA',
    /** America/Panama */
    AmericaPanama = 'AMERICA_PANAMA',
    /** America/Pangnirtung */
    AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
    /** America/Paramaribo */
    AmericaParamaribo = 'AMERICA_PARAMARIBO',
    /** America/Phoenix */
    AmericaPhoenix = 'AMERICA_PHOENIX',
    /** America/Porto_Velho */
    AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
    /** America/Port-au-Prince */
    AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
    /** America/Port_of_Spain */
    AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
    /** America/Puerto_Rico */
    AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
    /** America/Punta_Arenas */
    AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
    /** America/Rainy_River */
    AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
    /** America/Rankin_Inlet */
    AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
    /** America/Recife */
    AmericaRecife = 'AMERICA_RECIFE',
    /** America/Regina */
    AmericaRegina = 'AMERICA_REGINA',
    /** America/Resolute */
    AmericaResolute = 'AMERICA_RESOLUTE',
    /** America/Rio_Branco */
    AmericaRioBranco = 'AMERICA_RIO_BRANCO',
    /** America/Santarem */
    AmericaSantarem = 'AMERICA_SANTAREM',
    /** America/Santiago */
    AmericaSantiago = 'AMERICA_SANTIAGO',
    /** America/Santo_Domingo */
    AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
    /** America/Sao_Paulo */
    AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
    /** America/Scoresbysund */
    AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
    /** America/Sitka */
    AmericaSitka = 'AMERICA_SITKA',
    /** America/St_Barthelemy */
    AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
    /** America/St_Johns */
    AmericaStJohns = 'AMERICA_ST_JOHNS',
    /** America/St_Kitts */
    AmericaStKitts = 'AMERICA_ST_KITTS',
    /** America/St_Lucia */
    AmericaStLucia = 'AMERICA_ST_LUCIA',
    /** America/St_Thomas */
    AmericaStThomas = 'AMERICA_ST_THOMAS',
    /** America/St_Vincent */
    AmericaStVincent = 'AMERICA_ST_VINCENT',
    /** America/Swift_Current */
    AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
    /** America/Tegucigalpa */
    AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
    /** America/Thule */
    AmericaThule = 'AMERICA_THULE',
    /** America/Thunder_Bay */
    AmericaThunderBay = 'AMERICA_THUNDER_BAY',
    /** America/Tijuana */
    AmericaTijuana = 'AMERICA_TIJUANA',
    /** America/Toronto */
    AmericaToronto = 'AMERICA_TORONTO',
    /** America/Tortola */
    AmericaTortola = 'AMERICA_TORTOLA',
    /** America/Vancouver */
    AmericaVancouver = 'AMERICA_VANCOUVER',
    /** America/Whitehorse */
    AmericaWhitehorse = 'AMERICA_WHITEHORSE',
    /** America/Winnipeg */
    AmericaWinnipeg = 'AMERICA_WINNIPEG',
    /** America/Yakutat */
    AmericaYakutat = 'AMERICA_YAKUTAT',
    /** America/Yellowknife */
    AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
    /** Antarctica/Casey */
    AntarcticaCasey = 'ANTARCTICA_CASEY',
    /** Antarctica/Davis */
    AntarcticaDavis = 'ANTARCTICA_DAVIS',
    /** Antarctica/DumontDUrville */
    AntarcticaDumontdurville = 'ANTARCTICA_DUMONTDURVILLE',
    /** Antarctica/Macquarie */
    AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
    /** Antarctica/Mawson */
    AntarcticaMawson = 'ANTARCTICA_MAWSON',
    /** Antarctica/McMurdo */
    AntarcticaMcmurdo = 'ANTARCTICA_MCMURDO',
    /** Antarctica/Palmer */
    AntarcticaPalmer = 'ANTARCTICA_PALMER',
    /** Antarctica/Rothera */
    AntarcticaRothera = 'ANTARCTICA_ROTHERA',
    /** Antarctica/Syowa */
    AntarcticaSyowa = 'ANTARCTICA_SYOWA',
    /** Antarctica/Troll */
    AntarcticaTroll = 'ANTARCTICA_TROLL',
    /** Antarctica/Vostok */
    AntarcticaVostok = 'ANTARCTICA_VOSTOK',
    /** Arctic/Longyearbyen */
    ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
    /** Asia/Aden */
    AsiaAden = 'ASIA_ADEN',
    /** Asia/Almaty */
    AsiaAlmaty = 'ASIA_ALMATY',
    /** Asia/Amman */
    AsiaAmman = 'ASIA_AMMAN',
    /** Asia/Anadyr */
    AsiaAnadyr = 'ASIA_ANADYR',
    /** Asia/Aqtau */
    AsiaAqtau = 'ASIA_AQTAU',
    /** Asia/Aqtobe */
    AsiaAqtobe = 'ASIA_AQTOBE',
    /** Asia/Ashgabat */
    AsiaAshgabat = 'ASIA_ASHGABAT',
    /** Asia/Atyrau */
    AsiaAtyrau = 'ASIA_ATYRAU',
    /** Asia/Baghdad */
    AsiaBaghdad = 'ASIA_BAGHDAD',
    /** Asia/Bahrain */
    AsiaBahrain = 'ASIA_BAHRAIN',
    /** Asia/Baku */
    AsiaBaku = 'ASIA_BAKU',
    /** Asia/Bangkok */
    AsiaBangkok = 'ASIA_BANGKOK',
    /** Asia/Barnaul */
    AsiaBarnaul = 'ASIA_BARNAUL',
    /** Asia/Beirut */
    AsiaBeirut = 'ASIA_BEIRUT',
    /** Asia/Bishkek */
    AsiaBishkek = 'ASIA_BISHKEK',
    /** Asia/Brunei */
    AsiaBrunei = 'ASIA_BRUNEI',
    /** Asia/Chita */
    AsiaChita = 'ASIA_CHITA',
    /** Asia/Choibalsan */
    AsiaChoibalsan = 'ASIA_CHOIBALSAN',
    /** Asia/Colombo */
    AsiaColombo = 'ASIA_COLOMBO',
    /** Asia/Damascus */
    AsiaDamascus = 'ASIA_DAMASCUS',
    /** Asia/Dhaka */
    AsiaDhaka = 'ASIA_DHAKA',
    /** Asia/Dili */
    AsiaDili = 'ASIA_DILI',
    /** Asia/Dubai */
    AsiaDubai = 'ASIA_DUBAI',
    /** Asia/Dushanbe */
    AsiaDushanbe = 'ASIA_DUSHANBE',
    /** Asia/Famagusta */
    AsiaFamagusta = 'ASIA_FAMAGUSTA',
    /** Asia/Gaza */
    AsiaGaza = 'ASIA_GAZA',
    /** Asia/Hebron */
    AsiaHebron = 'ASIA_HEBRON',
    /** Asia/Hong_Kong */
    AsiaHongKong = 'ASIA_HONG_KONG',
    /** Asia/Hovd */
    AsiaHovd = 'ASIA_HOVD',
    /** Asia/Ho_Chi_Minh */
    AsiaHoChiMinh = 'ASIA_HO_CHI_MINH',
    /** Asia/Irkutsk */
    AsiaIrkutsk = 'ASIA_IRKUTSK',
    /** Asia/Jakarta */
    AsiaJakarta = 'ASIA_JAKARTA',
    /** Asia/Jayapura */
    AsiaJayapura = 'ASIA_JAYAPURA',
    /** Asia/Jerusalem */
    AsiaJerusalem = 'ASIA_JERUSALEM',
    /** Asia/Kabul */
    AsiaKabul = 'ASIA_KABUL',
    /** Asia/Kamchatka */
    AsiaKamchatka = 'ASIA_KAMCHATKA',
    /** Asia/Karachi */
    AsiaKarachi = 'ASIA_KARACHI',
    /** Asia/Kathmandu */
    AsiaKathmandu = 'ASIA_KATHMANDU',
    /** Asia/Khandyga */
    AsiaKhandyga = 'ASIA_KHANDYGA',
    /** Asia/Kolkata */
    AsiaKolkata = 'ASIA_KOLKATA',
    /** Asia/Krasnoyarsk */
    AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
    /** Asia/Kuala_Lumpur */
    AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
    /** Asia/Kuching */
    AsiaKuching = 'ASIA_KUCHING',
    /** Asia/Kuwait */
    AsiaKuwait = 'ASIA_KUWAIT',
    /** Asia/Macau */
    AsiaMacau = 'ASIA_MACAU',
    /** Asia/Magadan */
    AsiaMagadan = 'ASIA_MAGADAN',
    /** Asia/Makassar */
    AsiaMakassar = 'ASIA_MAKASSAR',
    /** Asia/Manila */
    AsiaManila = 'ASIA_MANILA',
    /** Asia/Muscat */
    AsiaMuscat = 'ASIA_MUSCAT',
    /** Asia/Nicosia */
    AsiaNicosia = 'ASIA_NICOSIA',
    /** Asia/Novokuznetsk */
    AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
    /** Asia/Novosibirsk */
    AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
    /** Asia/Omsk */
    AsiaOmsk = 'ASIA_OMSK',
    /** Asia/Oral */
    AsiaOral = 'ASIA_ORAL',
    /** Asia/Phnom_Penh */
    AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
    /** Asia/Pontianak */
    AsiaPontianak = 'ASIA_PONTIANAK',
    /** Asia/Pyongyang */
    AsiaPyongyang = 'ASIA_PYONGYANG',
    /** Asia/Qatar */
    AsiaQatar = 'ASIA_QATAR',
    /** Asia/Qostanay */
    AsiaQostanay = 'ASIA_QOSTANAY',
    /** Asia/Qyzylorda */
    AsiaQyzylorda = 'ASIA_QYZYLORDA',
    /** Asia/Riyadh */
    AsiaRiyadh = 'ASIA_RIYADH',
    /** Asia/Sakhalin */
    AsiaSakhalin = 'ASIA_SAKHALIN',
    /** Asia/Samarkand */
    AsiaSamarkand = 'ASIA_SAMARKAND',
    /** Asia/Seoul */
    AsiaSeoul = 'ASIA_SEOUL',
    /** Asia/Shanghai */
    AsiaShanghai = 'ASIA_SHANGHAI',
    /** Asia/Singapore */
    AsiaSingapore = 'ASIA_SINGAPORE',
    /** Asia/Srednekolymsk */
    AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
    /** Asia/Taipei */
    AsiaTaipei = 'ASIA_TAIPEI',
    /** Asia/Tashkent */
    AsiaTashkent = 'ASIA_TASHKENT',
    /** Asia/Tbilisi */
    AsiaTbilisi = 'ASIA_TBILISI',
    /** Asia/Tehran */
    AsiaTehran = 'ASIA_TEHRAN',
    /** Asia/Thimphu */
    AsiaThimphu = 'ASIA_THIMPHU',
    /** Asia/Tokyo */
    AsiaTokyo = 'ASIA_TOKYO',
    /** Asia/Tomsk */
    AsiaTomsk = 'ASIA_TOMSK',
    /** Asia/Ulaanbaatar */
    AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
    /** Asia/Urumqi */
    AsiaUrumqi = 'ASIA_URUMQI',
    /** Asia/Ust-Nera */
    AsiaUstNera = 'ASIA_UST_NERA',
    /** Asia/Vientiane */
    AsiaVientiane = 'ASIA_VIENTIANE',
    /** Asia/Vladivostok */
    AsiaVladivostok = 'ASIA_VLADIVOSTOK',
    /** Asia/Yakutsk */
    AsiaYakutsk = 'ASIA_YAKUTSK',
    /** Asia/Yangon */
    AsiaYangon = 'ASIA_YANGON',
    /** Asia/Yekaterinburg */
    AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
    /** Asia/Yerevan */
    AsiaYerevan = 'ASIA_YEREVAN',
    /** Atlantic/Azores */
    AtlanticAzores = 'ATLANTIC_AZORES',
    /** Atlantic/Bermuda */
    AtlanticBermuda = 'ATLANTIC_BERMUDA',
    /** Atlantic/Canary */
    AtlanticCanary = 'ATLANTIC_CANARY',
    /** Atlantic/Cape_Verde */
    AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
    /** Atlantic/Faroe */
    AtlanticFaroe = 'ATLANTIC_FAROE',
    /** Atlantic/Madeira */
    AtlanticMadeira = 'ATLANTIC_MADEIRA',
    /** Atlantic/Reykjavik */
    AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
    /** Atlantic/South_Georgia */
    AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
    /** Atlantic/Stanley */
    AtlanticStanley = 'ATLANTIC_STANLEY',
    /** Atlantic/St_Helena */
    AtlanticStHelena = 'ATLANTIC_ST_HELENA',
    /** Australia/Adelaide */
    AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
    /** Australia/Brisbane */
    AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
    /** Australia/Broken_Hill */
    AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
    /** Australia/Currie */
    AustraliaCurrie = 'AUSTRALIA_CURRIE',
    /** Australia/Darwin */
    AustraliaDarwin = 'AUSTRALIA_DARWIN',
    /** Australia/Eucla */
    AustraliaEucla = 'AUSTRALIA_EUCLA',
    /** Australia/Hobart */
    AustraliaHobart = 'AUSTRALIA_HOBART',
    /** Australia/Lindeman */
    AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
    /** Australia/Lord_Howe */
    AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
    /** Australia/Melbourne */
    AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
    /** Australia/Perth */
    AustraliaPerth = 'AUSTRALIA_PERTH',
    /** Australia/Sydney */
    AustraliaSydney = 'AUSTRALIA_SYDNEY',
    /** Canada/Atlantic */
    CanadaAtlantic = 'CANADA_ATLANTIC',
    /** Canada/Central */
    CanadaCentral = 'CANADA_CENTRAL',
    /** Canada/Eastern */
    CanadaEastern = 'CANADA_EASTERN',
    /** Canada/Mountain */
    CanadaMountain = 'CANADA_MOUNTAIN',
    /** Canada/Newfoundland */
    CanadaNewfoundland = 'CANADA_NEWFOUNDLAND',
    /** Canada/Pacific */
    CanadaPacific = 'CANADA_PACIFIC',
    /** Europe/Amsterdam */
    EuropeAmsterdam = 'EUROPE_AMSTERDAM',
    /** Europe/Andorra */
    EuropeAndorra = 'EUROPE_ANDORRA',
    /** Europe/Astrakhan */
    EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
    /** Europe/Athens */
    EuropeAthens = 'EUROPE_ATHENS',
    /** Europe/Belgrade */
    EuropeBelgrade = 'EUROPE_BELGRADE',
    /** Europe/Berlin */
    EuropeBerlin = 'EUROPE_BERLIN',
    /** Europe/Bratislava */
    EuropeBratislava = 'EUROPE_BRATISLAVA',
    /** Europe/Brussels */
    EuropeBrussels = 'EUROPE_BRUSSELS',
    /** Europe/Bucharest */
    EuropeBucharest = 'EUROPE_BUCHAREST',
    /** Europe/Budapest */
    EuropeBudapest = 'EUROPE_BUDAPEST',
    /** Europe/Busingen */
    EuropeBusingen = 'EUROPE_BUSINGEN',
    /** Europe/Chisinau */
    EuropeChisinau = 'EUROPE_CHISINAU',
    /** Europe/Copenhagen */
    EuropeCopenhagen = 'EUROPE_COPENHAGEN',
    /** Europe/Dublin */
    EuropeDublin = 'EUROPE_DUBLIN',
    /** Europe/Gibraltar */
    EuropeGibraltar = 'EUROPE_GIBRALTAR',
    /** Europe/Guernsey */
    EuropeGuernsey = 'EUROPE_GUERNSEY',
    /** Europe/Helsinki */
    EuropeHelsinki = 'EUROPE_HELSINKI',
    /** Europe/Isle_of_Man */
    EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
    /** Europe/Istanbul */
    EuropeIstanbul = 'EUROPE_ISTANBUL',
    /** Europe/Jersey */
    EuropeJersey = 'EUROPE_JERSEY',
    /** Europe/Kaliningrad */
    EuropeKaliningrad = 'EUROPE_KALININGRAD',
    /** Europe/Kiev */
    EuropeKiev = 'EUROPE_KIEV',
    /** Europe/Kirov */
    EuropeKirov = 'EUROPE_KIROV',
    /** Europe/Lisbon */
    EuropeLisbon = 'EUROPE_LISBON',
    /** Europe/Ljubljana */
    EuropeLjubljana = 'EUROPE_LJUBLJANA',
    /** Europe/London */
    EuropeLondon = 'EUROPE_LONDON',
    /** Europe/Luxembourg */
    EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
    /** Europe/Madrid */
    EuropeMadrid = 'EUROPE_MADRID',
    /** Europe/Malta */
    EuropeMalta = 'EUROPE_MALTA',
    /** Europe/Mariehamn */
    EuropeMariehamn = 'EUROPE_MARIEHAMN',
    /** Europe/Minsk */
    EuropeMinsk = 'EUROPE_MINSK',
    /** Europe/Monaco */
    EuropeMonaco = 'EUROPE_MONACO',
    /** Europe/Moscow */
    EuropeMoscow = 'EUROPE_MOSCOW',
    /** Europe/Oslo */
    EuropeOslo = 'EUROPE_OSLO',
    /** Europe/Paris */
    EuropeParis = 'EUROPE_PARIS',
    /** Europe/Podgorica */
    EuropePodgorica = 'EUROPE_PODGORICA',
    /** Europe/Prague */
    EuropePrague = 'EUROPE_PRAGUE',
    /** Europe/Riga */
    EuropeRiga = 'EUROPE_RIGA',
    /** Europe/Rome */
    EuropeRome = 'EUROPE_ROME',
    /** Europe/Samara */
    EuropeSamara = 'EUROPE_SAMARA',
    /** Europe/San_Marino */
    EuropeSanMarino = 'EUROPE_SAN_MARINO',
    /** Europe/Sarajevo */
    EuropeSarajevo = 'EUROPE_SARAJEVO',
    /** Europe/Saratov */
    EuropeSaratov = 'EUROPE_SARATOV',
    /** Europe/Simferopol */
    EuropeSimferopol = 'EUROPE_SIMFEROPOL',
    /** Europe/Skopje */
    EuropeSkopje = 'EUROPE_SKOPJE',
    /** Europe/Sofia */
    EuropeSofia = 'EUROPE_SOFIA',
    /** Europe/Stockholm */
    EuropeStockholm = 'EUROPE_STOCKHOLM',
    /** Europe/Tallinn */
    EuropeTallinn = 'EUROPE_TALLINN',
    /** Europe/Tirane */
    EuropeTirane = 'EUROPE_TIRANE',
    /** Europe/Ulyanovsk */
    EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
    /** Europe/Uzhgorod */
    EuropeUzhgorod = 'EUROPE_UZHGOROD',
    /** Europe/Vaduz */
    EuropeVaduz = 'EUROPE_VADUZ',
    /** Europe/Vatican */
    EuropeVatican = 'EUROPE_VATICAN',
    /** Europe/Vienna */
    EuropeVienna = 'EUROPE_VIENNA',
    /** Europe/Vilnius */
    EuropeVilnius = 'EUROPE_VILNIUS',
    /** Europe/Volgograd */
    EuropeVolgograd = 'EUROPE_VOLGOGRAD',
    /** Europe/Warsaw */
    EuropeWarsaw = 'EUROPE_WARSAW',
    /** Europe/Zagreb */
    EuropeZagreb = 'EUROPE_ZAGREB',
    /** Europe/Zaporozhye */
    EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
    /** Europe/Zurich */
    EuropeZurich = 'EUROPE_ZURICH',
    /** GMT */
    Gmt = 'GMT',
    /** Indian/Antananarivo */
    IndianAntananarivo = 'INDIAN_ANTANANARIVO',
    /** Indian/Chagos */
    IndianChagos = 'INDIAN_CHAGOS',
    /** Indian/Christmas */
    IndianChristmas = 'INDIAN_CHRISTMAS',
    /** Indian/Cocos */
    IndianCocos = 'INDIAN_COCOS',
    /** Indian/Comoro */
    IndianComoro = 'INDIAN_COMORO',
    /** Indian/Kerguelen */
    IndianKerguelen = 'INDIAN_KERGUELEN',
    /** Indian/Mahe */
    IndianMahe = 'INDIAN_MAHE',
    /** Indian/Maldives */
    IndianMaldives = 'INDIAN_MALDIVES',
    /** Indian/Mauritius */
    IndianMauritius = 'INDIAN_MAURITIUS',
    /** Indian/Mayotte */
    IndianMayotte = 'INDIAN_MAYOTTE',
    /** Indian/Reunion */
    IndianReunion = 'INDIAN_REUNION',
    /** Pacific/Apia */
    PacificApia = 'PACIFIC_APIA',
    /** Pacific/Auckland */
    PacificAuckland = 'PACIFIC_AUCKLAND',
    /** Pacific/Bougainville */
    PacificBougainville = 'PACIFIC_BOUGAINVILLE',
    /** Pacific/Chatham */
    PacificChatham = 'PACIFIC_CHATHAM',
    /** Pacific/Chuuk */
    PacificChuuk = 'PACIFIC_CHUUK',
    /** Pacific/Easter */
    PacificEaster = 'PACIFIC_EASTER',
    /** Pacific/Efate */
    PacificEfate = 'PACIFIC_EFATE',
    /** Pacific/Enderbury */
    PacificEnderbury = 'PACIFIC_ENDERBURY',
    /** Pacific/Fakaofo */
    PacificFakaofo = 'PACIFIC_FAKAOFO',
    /** Pacific/Fiji */
    PacificFiji = 'PACIFIC_FIJI',
    /** Pacific/Funafuti */
    PacificFunafuti = 'PACIFIC_FUNAFUTI',
    /** Pacific/Galapagos */
    PacificGalapagos = 'PACIFIC_GALAPAGOS',
    /** Pacific/Gambier */
    PacificGambier = 'PACIFIC_GAMBIER',
    /** Pacific/Guadalcanal */
    PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
    /** Pacific/Guam */
    PacificGuam = 'PACIFIC_GUAM',
    /** Pacific/Honolulu */
    PacificHonolulu = 'PACIFIC_HONOLULU',
    /** Pacific/Kiritimati */
    PacificKiritimati = 'PACIFIC_KIRITIMATI',
    /** Pacific/Kosrae */
    PacificKosrae = 'PACIFIC_KOSRAE',
    /** Pacific/Kwajalein */
    PacificKwajalein = 'PACIFIC_KWAJALEIN',
    /** Pacific/Majuro */
    PacificMajuro = 'PACIFIC_MAJURO',
    /** Pacific/Marquesas */
    PacificMarquesas = 'PACIFIC_MARQUESAS',
    /** Pacific/Midway */
    PacificMidway = 'PACIFIC_MIDWAY',
    /** Pacific/Nauru */
    PacificNauru = 'PACIFIC_NAURU',
    /** Pacific/Niue */
    PacificNiue = 'PACIFIC_NIUE',
    /** Pacific/Norfolk */
    PacificNorfolk = 'PACIFIC_NORFOLK',
    /** Pacific/Noumea */
    PacificNoumea = 'PACIFIC_NOUMEA',
    /** Pacific/Pago_Pago */
    PacificPagoPago = 'PACIFIC_PAGO_PAGO',
    /** Pacific/Palau */
    PacificPalau = 'PACIFIC_PALAU',
    /** Pacific/Pitcairn */
    PacificPitcairn = 'PACIFIC_PITCAIRN',
    /** Pacific/Pohnpei */
    PacificPohnpei = 'PACIFIC_POHNPEI',
    /** Pacific/Port_Moresby */
    PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
    /** Pacific/Rarotonga */
    PacificRarotonga = 'PACIFIC_RAROTONGA',
    /** Pacific/Saipan */
    PacificSaipan = 'PACIFIC_SAIPAN',
    /** Pacific/Tahiti */
    PacificTahiti = 'PACIFIC_TAHITI',
    /** Pacific/Tarawa */
    PacificTarawa = 'PACIFIC_TARAWA',
    /** Pacific/Tongatapu */
    PacificTongatapu = 'PACIFIC_TONGATAPU',
    /** Pacific/Wake */
    PacificWake = 'PACIFIC_WAKE',
    /** Pacific/Wallis */
    PacificWallis = 'PACIFIC_WALLIS',
    /** US/Alaska */
    UsAlaska = 'US_ALASKA',
    /** US/Arizona */
    UsArizona = 'US_ARIZONA',
    /** US/Central */
    UsCentral = 'US_CENTRAL',
    /** US/Eastern */
    UsEastern = 'US_EASTERN',
    /** US/Hawaii */
    UsHawaii = 'US_HAWAII',
    /** US/Mountain */
    UsMountain = 'US_MOUNTAIN',
    /** US/Pacific */
    UsPacific = 'US_PACIFIC',
    /** UTC */
    Utc = 'UTC',
}

/** Add debt to user account, for user to pay up. */
export type AdminAddDebtForMemberOrganizationMutation = {
    __typename?: 'AdminAddDebtForMemberOrganizationMutation';
    request?: Maybe<JoinRequestType>;
};

/**
 * Approve user to join an organization and set the organization (certificate) number
 *  Sends an email informing the user that their membership application was successful
 */
export type AdminApproveNewMemberToJoinOrganizationMutation = {
    __typename?: 'AdminApproveNewMemberToJoinOrganizationMutation';
    request?: Maybe<JoinRequestType>;
};

/** An admin can delete a course assignment */
export type AdminAssignmentDeleteMutation = {
    __typename?: 'AdminAssignmentDeleteMutation';
    success?: Maybe<Scalars['Boolean']>;
};

/** An admin can check in an attendee for an event */
export type AdminCheckInAttendeeForEvent = {
    __typename?: 'AdminCheckInAttendeeForEvent';
    success?: Maybe<Scalars['Boolean']>;
};

/** Conference basic data model */
export type AdminConferenceBasicDataType = {
    __typename?: 'AdminConferenceBasicDataType';
    attendance: Scalars['Boolean'];
    category?: Maybe<MeetingCategoryType>;
    /** Event objectives, sub-themes */
    description?: Maybe<Scalars['String']>;
    endDate?: Maybe<Scalars['Date']>;
    endTime?: Maybe<Scalars['Time']>;
    eventSlug?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    /** This indicates if the event is specifically a conference */
    isConference?: Maybe<Scalars['Boolean']>;
    name: Scalars['String'];
    org?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    startDate: Scalars['Date'];
    startTime: Scalars['Time'];
    /** Subtitle of event */
    theme?: Maybe<Scalars['String']>;
    venue?: Maybe<Scalars['String']>;
    /** This indicates if the event is specifically virtual */
    virtualOnly?: Maybe<Scalars['Boolean']>;
};

/** Contact user to with more message about joining an organization */
export type AdminContactNewMemberAboutOrganizationMutation = {
    __typename?: 'AdminContactNewMemberAboutOrganizationMutation';
    request?: Maybe<JoinRequestType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** An admin can delete a Course */
export type AdminCourseDeleteMutation = {
    __typename?: 'AdminCourseDeleteMutation';
    success?: Maybe<Scalars['Boolean']>;
};

export type AdminCreateCourseAssignmentsMutation = {
    __typename?: 'AdminCreateCourseAssignmentsMutation';
    assignments?: Maybe<Array<Maybe<AssignmentType>>>;
    success?: Maybe<Scalars['Boolean']>;
};

export type AdminCreateCourseResourceMutation = {
    __typename?: 'AdminCreateCourseResourceMutation';
    resources?: Maybe<Array<Maybe<ResourceType>>>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Create one or more presentations for an event */
export type AdminCreateEventPresentations = {
    __typename?: 'AdminCreateEventPresentations';
    presentations?: Maybe<Array<Maybe<AdminPresentationType>>>;
    success?: Maybe<Scalars['Boolean']>;
};

/** An admin can create presenter(s) for an event/conference */
export type AdminCreateEventPresenters = {
    __typename?: 'AdminCreateEventPresenters';
    presenters?: Maybe<Array<Maybe<PresenterType>>>;
    success?: Maybe<Scalars['Boolean']>;
};

/** An admin can create schedule(s) for an event/conference */
export type AdminCreateEventSchedules = {
    __typename?: 'AdminCreateEventSchedules';
    schedules?: Maybe<Array<Maybe<ScheduleType>>>;
    success?: Maybe<Scalars['Boolean']>;
};

/**
 * An admin can only create a poll for an organization
 *
 * Args:
 *     Check graphene docs to see args specification
 */
export type AdminCreatePoll = {
    __typename?: 'AdminCreatePoll';
    poll?: Maybe<PollType>;
    success?: Maybe<Scalars['Boolean']>;
};

/**
 * An admin can create candidates in bulk
 *
 * Args:
 *     graphene (List): CandidateInputObjectType, required=False
 */
export type AdminCreatePollCandidates = {
    __typename?: 'AdminCreatePollCandidates';
    candidates?: Maybe<Array<Maybe<CandidateType>>>;
    success?: Maybe<Scalars['Boolean']>;
};

export type AdminCreateUpdateAssignmentMutationInput = {
    assignmentDescription: Scalars['String'];
    assignmentName: Scalars['String'];
    author: Scalars['String'];
    clientMutationId?: InputMaybe<Scalars['String']>;
    course: Scalars['String'];
    dueDate?: InputMaybe<Scalars['Date']>;
    dueTime?: InputMaybe<Scalars['Time']>;
    id?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['String']>;
    startDate?: InputMaybe<Scalars['Date']>;
    startTime?: InputMaybe<Scalars['Time']>;
};

/** An admin can create/ update a course's assignment */
export type AdminCreateUpdateAssignmentMutationPayload = {
    __typename?: 'AdminCreateUpdateAssignmentMutationPayload';
    assignmentDescription?: Maybe<Scalars['String']>;
    assignmentName?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    course?: Maybe<Scalars['String']>;
    created?: Maybe<Scalars['DateTime']>;
    dueDate?: Maybe<Scalars['Date']>;
    dueTime?: Maybe<Scalars['Time']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    organization?: Maybe<Scalars['String']>;
    startDate?: Maybe<Scalars['Date']>;
    startTime?: Maybe<Scalars['Time']>;
    updated?: Maybe<Scalars['DateTime']>;
};

export type AdminCreateUpdateConferenceBasicDataMutationInput = {
    attendance: Scalars['Boolean'];
    category?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
    /** Event objectives, sub-themes */
    description?: InputMaybe<Scalars['String']>;
    endDate?: InputMaybe<Scalars['Date']>;
    endTime?: InputMaybe<Scalars['Time']>;
    id?: InputMaybe<Scalars['Int']>;
    /** This indicates if the event is specifically a conference */
    isConference?: InputMaybe<Scalars['Boolean']>;
    name: Scalars['String'];
    org?: InputMaybe<Scalars['String']>;
    startDate: Scalars['Date'];
    startTime: Scalars['Time'];
    /** Subtitle of event */
    theme?: InputMaybe<Scalars['String']>;
    venue: Scalars['String'];
    /** This indicates if the event is specifically virtual */
    virtualOnly?: InputMaybe<Scalars['Boolean']>;
};

/** An admin can create and update a conference basic data */
export type AdminCreateUpdateConferenceBasicDataMutationPayload = {
    __typename?: 'AdminCreateUpdateConferenceBasicDataMutationPayload';
    attendance?: Maybe<Scalars['Boolean']>;
    category?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    /** Event objectives, sub-themes */
    description?: Maybe<Scalars['String']>;
    endDate?: Maybe<Scalars['Date']>;
    endTime?: Maybe<Scalars['Time']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    /** This indicates if the event is specifically a conference */
    isConference?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    org?: Maybe<Scalars['String']>;
    startDate?: Maybe<Scalars['Date']>;
    startTime?: Maybe<Scalars['Time']>;
    /** Subtitle of event */
    theme?: Maybe<Scalars['String']>;
    venue?: Maybe<Scalars['String']>;
    /** This indicates if the event is specifically virtual */
    virtualOnly?: Maybe<Scalars['Boolean']>;
};

/** An admin can create a course for an organization */
export type AdminCreateUpdateCourseMutation = {
    __typename?: 'AdminCreateUpdateCourseMutation';
    course?: Maybe<CourseType>;
    success?: Maybe<Scalars['Boolean']>;
};

export type AdminCreateUpdateEventAttendancesMutationInput = {
    /** The code to be used to take attendance for an event */
    attendanceCode: Scalars['String'];
    clientMutationId?: InputMaybe<Scalars['String']>;
    /** The date this attendance session gets closed */
    closeDate?: InputMaybe<Scalars['Date']>;
    /** The time this attendance session gets closed */
    closeTime?: InputMaybe<Scalars['Time']>;
    createdBy?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    meeting: Scalars['String'];
    /** The name of the attendance period for an event */
    name?: InputMaybe<Scalars['String']>;
    /** The date this attendance session gets opened */
    openDate?: InputMaybe<Scalars['Date']>;
    /** The time this attendance session gets opened */
    openTime?: InputMaybe<Scalars['Time']>;
    organization: Scalars['String'];
};

/** An admin can be able to create/update an event's attendance session data */
export type AdminCreateUpdateEventAttendancesMutationPayload = {
    __typename?: 'AdminCreateUpdateEventAttendancesMutationPayload';
    /** The code to be used to take attendance for an event */
    attendanceCode?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    /** The date this attendance session gets closed */
    closeDate?: Maybe<Scalars['Date']>;
    /** The time this attendance session gets closed */
    closeTime?: Maybe<Scalars['Time']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    createdBy?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    meeting?: Maybe<Scalars['String']>;
    /** The name of the attendance period for an event */
    name?: Maybe<Scalars['String']>;
    /** The date this attendance session gets opened */
    openDate?: Maybe<Scalars['Date']>;
    /** The time this attendance session gets opened */
    openTime?: Maybe<Scalars['Time']>;
    organization?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminCreateUpdateEventDocumentsMutation = {
    __typename?: 'AdminCreateUpdateEventDocumentsMutation';
    success?: Maybe<Scalars['Boolean']>;
};

/** Create and Update an Meeting Image */
export type AdminCreateUpdateEventImageMutation = {
    __typename?: 'AdminCreateUpdateEventImageMutation';
    event?: Maybe<MeetingType>;
    success?: Maybe<Scalars['Boolean']>;
};

/**
 * An admin can create/update an event's social DP banner.
 * Note: An event can only have one entry/record for it's social dp banner.
 */
export type AdminCreateUpdateEventSocialDpBanner = {
    __typename?: 'AdminCreateUpdateEventSocialDpBanner';
    eventSocialDpBanner?: Maybe<MeetingSocialDpBannerType>;
    success?: Maybe<Scalars['Boolean']>;
};

export type AdminDeleteEventAttendanceMutation = {
    __typename?: 'AdminDeleteEventAttendanceMutation';
    success?: Maybe<Scalars['Boolean']>;
};

/** An admin can delete a Presentation */
export type AdminDeleteEventPresentation = {
    __typename?: 'AdminDeleteEventPresentation';
    success?: Maybe<Scalars['Boolean']>;
};

/** An admin can delete a Presenter */
export type AdminDeleteEventPresenter = {
    __typename?: 'AdminDeleteEventPresenter';
    success?: Maybe<Scalars['Boolean']>;
};

/** An admin can delete an event schedule */
export type AdminDeleteEventSchedule = {
    __typename?: 'AdminDeleteEventSchedule';
    success?: Maybe<Scalars['Boolean']>;
};

/** The Meeting Object with only invitationLetterUrl and certificateUrl */
export type AdminEventDocumentsType = {
    __typename?: 'AdminEventDocumentsType';
    certificateUrl?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    invitationLetterUrl?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
};

/** The Meeting Object with only Flyer Url */
export type AdminEventFlyerType = {
    __typename?: 'AdminEventFlyerType';
    flyerUrl?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    pk: Scalars['ID'];
};

export type AdminEventLogoType = {
    __typename?: 'AdminEventLogoType';
    /** Event logo */
    eventLogo?: Maybe<Scalars['String']>;
    eventLogoUrl?: Maybe<Scalars['String']>;
};

/** Create records for conference offline registration and payment */
export type AdminOfflineConferenceRegistrationAndPayment = {
    __typename?: 'AdminOfflineConferenceRegistrationAndPayment';
    success?: Maybe<Scalars['Boolean']>;
};

export type AdminPresentationType = {
    __typename?: 'AdminPresentationType';
    abstract: Scalars['String'];
    /** If presentation document is uploaded on another service, paste link here so that members can download it */
    externalUpload?: Maybe<Scalars['String']>;
    fileUrl?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    pk?: Maybe<Scalars['ID']>;
    title: Scalars['String'];
};

/** Reject user to join an organization */
export type AdminRejectNewMemberToJoinOrganizationMutation = {
    __typename?: 'AdminRejectNewMemberToJoinOrganizationMutation';
    request?: Maybe<JoinRequestType>;
};

/**
 * And admin can take attendance of either a member or non-member of an organization for an event/conference.
 * Arguments:
 * - eventId
 * - and other required arguments
 */
export type AdminTakeAttendanceForAttendee = {
    __typename?: 'AdminTakeAttendanceForAttendee';
    /** Indicates if the user has PREVIOUSLY taken this attendance */
    hasPreviouslyTakenAttendance?: Maybe<Scalars['Boolean']>;
    /** Provides hints about the reason for success status */
    message?: Maybe<Scalars['String']>;
    /** Tells about the success status of the mutation */
    success?: Maybe<Scalars['Boolean']>;
};

export type AdminUpdateCourseResourceMutation = {
    __typename?: 'AdminUpdateCourseResourceMutation';
    resource?: Maybe<ResourceType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Update an events logo */
export type AdminUpdateEventLogo = {
    __typename?: 'AdminUpdateEventLogo';
    event?: Maybe<MeetingType>;
    eventLogoUrl?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

export type AnnouncementCreateUpdateMutationInput = {
    actionLink?: InputMaybe<Scalars['String']>;
    actionText?: InputMaybe<Scalars['String']>;
    /** Set Announcement Type to the audience */
    announcementType?: InputMaybe<Scalars['String']>;
    /** Details of the announcement. This would appear as the email body */
    body?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
    createdBy?: InputMaybe<Scalars['String']>;
    event?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    image?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    /** This would appear as a Push Notification/ SMS */
    sms?: InputMaybe<Scalars['String']>;
    /** What this announcement is about, it would appear as the email subject also */
    title: Scalars['String'];
};

/** Create/ Update a Announcement for an org */
export type AnnouncementCreateUpdateMutationPayload = {
    __typename?: 'AnnouncementCreateUpdateMutationPayload';
    actionLink?: Maybe<Scalars['String']>;
    actionText?: Maybe<Scalars['String']>;
    /** Set Announcement Type to the audience */
    announcementType?: Maybe<Scalars['String']>;
    /** Details of the announcement. This would appear as the email body */
    body?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    created?: Maybe<Scalars['DateTime']>;
    createdBy?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    event?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    image?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    /** This would appear as a Push Notification/ SMS */
    sms?: Maybe<Scalars['String']>;
    /** What this announcement is about, it would appear as the email subject also */
    title?: Maybe<Scalars['String']>;
    updated?: Maybe<Scalars['DateTime']>;
};

/** Delete an Announcement */
export type AnnouncementDeleteMutation = {
    __typename?: 'AnnouncementDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/** Create and Update an Announcement Image */
export type AnnouncementImageUploadMutation = {
    __typename?: 'AnnouncementImageUploadMutation';
    image?: Maybe<AnnouncementType>;
    ok?: Maybe<Scalars['Boolean']>;
};

/** The Announcement model */
export type AnnouncementType = Node & {
    __typename?: 'AnnouncementType';
    actionLink?: Maybe<Scalars['String']>;
    actionText?: Maybe<Scalars['String']>;
    /** Set Announcement Type to the audience */
    announcementType: Scalars['String'];
    /** Details of the announcement. This would appear as the email body */
    body?: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    createdBy?: Maybe<UserType>;
    event?: Maybe<MeetingWithEventRegistrationsType>;
    /** The ID of the object. */
    id: Scalars['ID'];
    image?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    photoUrl?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    /** This would appear as a Push Notification/ SMS */
    sms?: Maybe<Scalars['String']>;
    /** What this announcement is about, it would appear as the email subject also */
    title: Scalars['String'];
    updated: Scalars['DateTime'];
};

export type AnnouncementTypeConnection = {
    __typename?: 'AnnouncementTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<AnnouncementTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `AnnouncementType` and its cursor. */
export type AnnouncementTypeEdge = {
    __typename?: 'AnnouncementTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<AnnouncementType>;
};

export type AnswerInputObjectType = {
    /** Poll Answer */
    answer: Scalars['String'];
    /** Description */
    description?: InputMaybe<Scalars['String']>;
    /** Image */
    image?: InputMaybe<Scalars['Upload']>;
};

/** The Poll Answer Model Object */
export type AnswerType = Node & {
    __typename?: 'AnswerType';
    answer: Scalars['String'];
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    entries: PollEntryTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    /** The image of an answer */
    image?: Maybe<Scalars['String']>;
    imageUrl?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    poll: PollTypeConnection;
    updatedAt: Scalars['DateTime'];
};

/** The Poll Answer Model Object */
export type AnswerTypeEntriesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The Poll Answer Model Object */
export type AnswerTypePollArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    pollType?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<Scalars['String']>;
};

export type AnswerTypeConnection = {
    __typename?: 'AnswerTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<AnswerTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `AnswerType` and its cursor. */
export type AnswerTypeEdge = {
    __typename?: 'AnswerTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<AnswerType>;
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
    __typename?: 'ArchiveAccount';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    success?: Maybe<Scalars['Boolean']>;
};

export type AssignmentSerializerInputObjectType = {
    /** The description of the assignment */
    assignmentDescription?: InputMaybe<Scalars['String']>;
    /** Then name of the assignment */
    assignmentName: Scalars['String'];
    /** The date the assignment submission window closes */
    dueDate: Scalars['Date'];
    /** The time the assignment submission window closes */
    dueTime?: InputMaybe<Scalars['Time']>;
    /** The date the assignment submission window opens */
    startDate: Scalars['Date'];
    /** The time the assignment submission window opens */
    startTime?: InputMaybe<Scalars['Time']>;
};

/** The Assignment Model Object */
export type AssignmentType = Node & {
    __typename?: 'AssignmentType';
    assignmentDescription: Scalars['String'];
    assignmentName: Scalars['String'];
    author: UserType;
    course: CourseType;
    created: Scalars['DateTime'];
    dueDate?: Maybe<Scalars['Date']>;
    dueTime?: Maybe<Scalars['Time']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    organization?: Maybe<OrganizationType>;
    pk?: Maybe<Scalars['ID']>;
    question: SubmittedAssignmentTypeConnection;
    startDate?: Maybe<Scalars['Date']>;
    startTime?: Maybe<Scalars['Time']>;
    updated: Scalars['DateTime'];
};

/** The Assignment Model Object */
export type AssignmentTypeQuestionArgs = {
    after?: InputMaybe<Scalars['String']>;
    assignmentQuestion_Id?: InputMaybe<Scalars['Float']>;
    author_Id?: InputMaybe<Scalars['Float']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    grade?: InputMaybe<Scalars['Int']>;
    graded?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    submitted?: InputMaybe<Scalars['Boolean']>;
    submittedDate?: InputMaybe<Scalars['DateTime']>;
    topic?: InputMaybe<Scalars['String']>;
};

export type AssignmentTypeConnection = {
    __typename?: 'AssignmentTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<AssignmentTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `AssignmentType` and its cursor. */
export type AssignmentTypeEdge = {
    __typename?: 'AssignmentTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<AssignmentType>;
};

/** The Attendance Entry Object Type */
export type AttendanceEntriesType = Node & {
    __typename?: 'AttendanceEntriesType';
    attendance?: Maybe<AttendanceWithAttendanceCountType>;
    attendee?: Maybe<UserType>;
    attendeeEmail?: Maybe<Scalars['String']>;
    /** The name of the user taking attendance */
    attendeeName?: Maybe<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    /** The ID of the object. */
    id: Scalars['ID'];
    meeting?: Maybe<MeetingWithEventRegistrationsType>;
    pk?: Maybe<Scalars['ID']>;
    present: Scalars['Boolean'];
    /** The time this attendance was taken */
    timeTaken?: Maybe<Scalars['DateTime']>;
    updatedAt: Scalars['DateTime'];
};

export type AttendanceEntriesTypeConnection = {
    __typename?: 'AttendanceEntriesTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<AttendanceEntriesTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `AttendanceEntriesType` and its cursor. */
export type AttendanceEntriesTypeEdge = {
    __typename?: 'AttendanceEntriesTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<AttendanceEntriesType>;
};

/** The Attendance Model Object Type */
export type AttendanceType = Node & {
    __typename?: 'AttendanceType';
    /** The code to be used to take attendance for an event */
    attendanceCode?: Maybe<Scalars['String']>;
    attendanceEntries: AttendanceEntriesTypeConnection;
    /** The date this attendance session gets closed */
    closeDate?: Maybe<Scalars['Date']>;
    /** The time this attendance session gets closed */
    closeTime?: Maybe<Scalars['Time']>;
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<UserType>;
    /** The ID of the object. */
    id: Scalars['ID'];
    meeting?: Maybe<MeetingWithEventRegistrationsType>;
    /** The name of the attendance period for an event */
    name?: Maybe<Scalars['String']>;
    /** The date this attendance session gets opened */
    openDate?: Maybe<Scalars['Date']>;
    /** The time this attendance session gets opened */
    openTime?: Maybe<Scalars['Time']>;
    organization?: Maybe<OrganizationType>;
    pk?: Maybe<Scalars['ID']>;
    updatedAt: Scalars['DateTime'];
};

/** The Attendance Model Object Type */
export type AttendanceTypeAttendanceEntriesArgs = {
    after?: InputMaybe<Scalars['String']>;
    attendance_AttendanceCode?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type AttendanceTypeConnection = {
    __typename?: 'AttendanceTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<AttendanceTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `AttendanceType` and its cursor. */
export type AttendanceTypeEdge = {
    __typename?: 'AttendanceTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<AttendanceType>;
};

/** The Attendance Model Object Type */
export type AttendanceWithAttendanceCountType = Node & {
    __typename?: 'AttendanceWithAttendanceCountType';
    /** The code to be used to take attendance for an event */
    attendanceCode?: Maybe<Scalars['String']>;
    /** The number of attendances taken */
    attendanceCount?: Maybe<Scalars['Int']>;
    attendanceEntries: AttendanceEntriesTypeConnection;
    /** The date this attendance session gets closed */
    closeDate?: Maybe<Scalars['Date']>;
    /** The time this attendance session gets closed */
    closeTime?: Maybe<Scalars['Time']>;
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<UserType>;
    /** The ID of the object. */
    id: Scalars['ID'];
    meeting?: Maybe<MeetingWithEventRegistrationsType>;
    /** The name of the attendance period for an event */
    name?: Maybe<Scalars['String']>;
    /** The date this attendance session gets opened */
    openDate?: Maybe<Scalars['Date']>;
    /** The time this attendance session gets opened */
    openTime?: Maybe<Scalars['Time']>;
    organization?: Maybe<OrganizationType>;
    pk?: Maybe<Scalars['ID']>;
    updatedAt: Scalars['DateTime'];
};

/** The Attendance Model Object Type */
export type AttendanceWithAttendanceCountTypeAttendanceEntriesArgs = {
    after?: InputMaybe<Scalars['String']>;
    attendance_AttendanceCode?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type AttendanceWithAttendanceCountTypeConnection = {
    __typename?: 'AttendanceWithAttendanceCountTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<AttendanceWithAttendanceCountTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `AttendanceWithAttendanceCountType` and its cursor. */
export type AttendanceWithAttendanceCountTypeEdge = {
    __typename?: 'AttendanceWithAttendanceCountTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<AttendanceWithAttendanceCountType>;
};

export type CandidateAndAnswerType = {
    __typename?: 'CandidateAndAnswerType';
    /** Answers list objects */
    answers?: Maybe<Array<Maybe<AnswerType>>>;
    /** Candidates list objects */
    candidates?: Maybe<Array<Maybe<CandidateType>>>;
    /** The poll object */
    poll?: Maybe<PollType>;
};

export type CandidateInputObjectType = {
    /** Candidate Biography/Manifesto */
    bio?: InputMaybe<Scalars['String']>;
    /** Image */
    image?: InputMaybe<Scalars['Upload']>;
    /** Candidate Name */
    name: Scalars['String'];
};

/** The Poll Candidate Model Object */
export type CandidateType = Node & {
    __typename?: 'CandidateType';
    bio: Scalars['String'];
    createdAt: Scalars['DateTime'];
    entries: PollEntryTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    /** The image of an answer */
    image?: Maybe<Scalars['String']>;
    imageUrl?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    poll: PollTypeConnection;
    updatedAt: Scalars['DateTime'];
};

/** The Poll Candidate Model Object */
export type CandidateTypeEntriesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The Poll Candidate Model Object */
export type CandidateTypePollArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    pollType?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<Scalars['String']>;
};

export type CandidateTypeConnection = {
    __typename?: 'CandidateTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<CandidateTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `CandidateType` and its cursor. */
export type CandidateTypeEdge = {
    __typename?: 'CandidateTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<CandidateType>;
};

/**
 * A user registered member can cast vote for a poll
 *
 * Args:
 *     graphene (PollEntryInputObjectType): A poll entry input object type
 *     graphene (ID): organizationId
 */
export type CastPollVote = {
    __typename?: 'CastPollVote';
    success?: Maybe<Scalars['Boolean']>;
};

/**
 * This check if a user has atleast a join request application with either any membership status,
 * if none, it creates a join request.
 *
 * Args:
 *     graphene (ID): user_id - The User Id
 *     graphene (ID): org_id - The Organization Id
 *     graphene (ID): membership_type_id - The Membership Type Id. This should only be provided from a reliable source of truth,
 *     either entered by the user or from membership payment
 *
 * Returns:
 *     Boolean: sucess - Expects to return True in all cases in the function execution.
 */
export type CheckIfUserIsMemberElseCreateJoinRequest = {
    __typename?: 'CheckIfUserIsMemberElseCreateJoinRequest';
    success?: Maybe<Scalars['Boolean']>;
};

/** Undo the attendance taken for a user for an event */
export type CheckOutMemberForEvent = {
    __typename?: 'CheckOutMemberForEvent';
    attendance?: Maybe<AttendanceType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Generates an image appended with user's provided photo */
export type ConferenceGetDp = {
    __typename?: 'ConferenceGetDP';
    imageUrl?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

/**
 * Validates email has successfully registered and
 * allows them in to the Conference Dashboard
 */
export type ConferenceLogin = {
    __typename?: 'ConferenceLogin';
    conferenceUserToken?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** The ConferencePayment Model Object */
export type ConferencePaymentType = Node & {
    __typename?: 'ConferencePaymentType';
    amountPaid?: Maybe<Scalars['Decimal']>;
    amountPaidCurrency: Scalars['String'];
    amountPaidStr?: Maybe<Scalars['String']>;
    amountPaidValue?: Maybe<Scalars['Int']>;
    created: Scalars['DateTime'];
    email?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    lastName?: Maybe<Scalars['String']>;
    meeting?: Maybe<MeetingWithEventRegistrationsType>;
    offlinePaymentOptions?: Maybe<Scalars['String']>;
    org?: Maybe<OrganizationType>;
    paid: Scalars['Boolean'];
    payerName?: Maybe<Scalars['String']>;
    paymentApproval?: Maybe<Scalars['Boolean']>;
    paymentDate?: Maybe<Scalars['Date']>;
    paymentName?: Maybe<Scalars['String']>;
    paymentType: Scalars['String'];
    pk?: Maybe<Scalars['ID']>;
    proofOfPayment?: Maybe<Scalars['String']>;
    refundStatus: Scalars['Boolean'];
    ticket?: Maybe<TicketType>;
    txref?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    user?: Maybe<UserType>;
    uuid: Scalars['UUID'];
};

export type ConferencePaymentTypeConnection = {
    __typename?: 'ConferencePaymentTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<ConferencePaymentTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `ConferencePaymentType` and its cursor. */
export type ConferencePaymentTypeEdge = {
    __typename?: 'ConferencePaymentTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<ConferencePaymentType>;
};

/** The ConferencePayment Model Object */
export type ConferencePaymentWithMembershipDetailsType = Node & {
    __typename?: 'ConferencePaymentWithMembershipDetailsType';
    amountPaid?: Maybe<Scalars['Decimal']>;
    amountPaidCurrency: Scalars['String'];
    amountPaidStr?: Maybe<Scalars['String']>;
    amountPaidValue?: Maybe<Scalars['Int']>;
    created: Scalars['DateTime'];
    email?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    lastName?: Maybe<Scalars['String']>;
    meeting?: Maybe<MeetingWithEventRegistrationsType>;
    membershipCadre?: Maybe<Scalars['String']>;
    membershipNumber?: Maybe<Scalars['String']>;
    offlinePaymentOptions?: Maybe<Scalars['String']>;
    org?: Maybe<OrganizationType>;
    paid: Scalars['Boolean'];
    payerName?: Maybe<Scalars['String']>;
    paymentApproval?: Maybe<Scalars['Boolean']>;
    paymentDate?: Maybe<Scalars['Date']>;
    paymentName?: Maybe<Scalars['String']>;
    paymentType: Scalars['String'];
    pk?: Maybe<Scalars['ID']>;
    proofOfPayment?: Maybe<Scalars['String']>;
    refundStatus: Scalars['Boolean'];
    ticket?: Maybe<TicketType>;
    txref?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    user?: Maybe<UserType>;
    uuid: Scalars['UUID'];
};

export type ConferencePaymentWithMembershipDetailsTypeConnection = {
    __typename?: 'ConferencePaymentWithMembershipDetailsTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<ConferencePaymentWithMembershipDetailsTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `ConferencePaymentWithMembershipDetailsType` and its cursor. */
export type ConferencePaymentWithMembershipDetailsTypeEdge = {
    __typename?: 'ConferencePaymentWithMembershipDetailsTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<ConferencePaymentWithMembershipDetailsType>;
};

/**
 * Checks if email belongs to
 * a member or already registered
 */
export type ConferenceRegistrationEmailCheckMutation = {
    __typename?: 'ConferenceRegistrationEmailCheckMutation';
    conferenceRegistrationDetails?: Maybe<ConferenceRegistrationType>;
    hasPaid?: Maybe<Scalars['Boolean']>;
    message?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

export type ConferenceRegistrationMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    event?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    middleName?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    /** e.g. +2348012345678 */
    phone?: InputMaybe<Scalars['String']>;
    registrationAttendant?: InputMaybe<Scalars['String']>;
    ticket?: InputMaybe<Scalars['String']>;
    user?: InputMaybe<Scalars['String']>;
};

/**
 * Registers both member or non_member for conference/event
 * and indicate the ticket type they're registering with
 */
export type ConferenceRegistrationMutationPayload = {
    __typename?: 'ConferenceRegistrationMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    created?: Maybe<Scalars['DateTime']>;
    email?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    event?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    lastName?: Maybe<Scalars['String']>;
    middleName?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    /** e.g. +2348012345678 */
    phone?: Maybe<Scalars['String']>;
    registrationAttendant?: Maybe<Scalars['String']>;
    ticket?: Maybe<Scalars['String']>;
    updated?: Maybe<Scalars['DateTime']>;
    user?: Maybe<Scalars['String']>;
};

/** The Conference Registration Model Object */
export type ConferenceRegistrationType = Node & {
    __typename?: 'ConferenceRegistrationType';
    created: Scalars['DateTime'];
    email?: Maybe<Scalars['String']>;
    event?: Maybe<MeetingWithEventRegistrationsType>;
    firstName?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    lastName?: Maybe<Scalars['String']>;
    middleName?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    /** e.g. +2348012345678 */
    phone?: Maybe<Scalars['String']>;
    pk?: Maybe<Scalars['ID']>;
    registrationAttendant?: Maybe<UserType>;
    ticket?: Maybe<TicketType>;
    updated: Scalars['DateTime'];
    user?: Maybe<UserType>;
};

export type ConferenceRegistrationTypeConnection = {
    __typename?: 'ConferenceRegistrationTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<ConferenceRegistrationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `ConferenceRegistrationType` and its cursor. */
export type ConferenceRegistrationTypeEdge = {
    __typename?: 'ConferenceRegistrationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<ConferenceRegistrationType>;
};

/** The Conference Registration Model Object */
export type ConferenceRegistrationWithRelatedPaymentType = Node & {
    __typename?: 'ConferenceRegistrationWithRelatedPaymentType';
    created: Scalars['DateTime'];
    email?: Maybe<Scalars['String']>;
    event?: Maybe<MeetingWithEventRegistrationsType>;
    firstName?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    lastName?: Maybe<Scalars['String']>;
    middleName?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    /** A field returning all payments made for an event registration */
    payment?: Maybe<ConferencePaymentType>;
    /** e.g. +2348012345678 */
    phone?: Maybe<Scalars['String']>;
    pk?: Maybe<Scalars['ID']>;
    registrationAttendant?: Maybe<UserType>;
    ticket?: Maybe<TicketType>;
    updated: Scalars['DateTime'];
    user?: Maybe<UserType>;
};

export type ConferenceRegistrationWithRelatedPaymentTypeConnection = {
    __typename?: 'ConferenceRegistrationWithRelatedPaymentTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<ConferenceRegistrationWithRelatedPaymentTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `ConferenceRegistrationWithRelatedPaymentType` and its cursor. */
export type ConferenceRegistrationWithRelatedPaymentTypeEdge = {
    __typename?: 'ConferenceRegistrationWithRelatedPaymentTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<ConferenceRegistrationWithRelatedPaymentType>;
};

/** For Offline: create payments record with proof of payments and necessary data */
export type ConfirmConferenceOfflinePaymentMutation = {
    __typename?: 'ConfirmConferenceOfflinePaymentMutation';
    error?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** For Online: create payments record with proof of payments and necessary data */
export type ConfirmConferenceOnlinePaymentMutation = {
    __typename?: 'ConfirmConferenceOnlinePaymentMutation';
    error?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Create offline payment record with proof of payments and necessary data */
export type ConfirmMembershipOfflinePaymentMutation = {
    __typename?: 'ConfirmMembershipOfflinePaymentMutation';
    error?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Create online payment record with proof of payments and necessary data */
export type ConfirmMembershipOnlinePaymentMutation = {
    __typename?: 'ConfirmMembershipOnlinePaymentMutation';
    error?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

export type ContactOrganizationAdminsMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    email: Scalars['String'];
    id?: InputMaybe<Scalars['Int']>;
    name: Scalars['String'];
    organization?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    request?: InputMaybe<Scalars['String']>;
};

/** Sends an email to all org admins in the organization and saves the info */
export type ContactOrganizationAdminsMutationPayload = {
    __typename?: 'ContactOrganizationAdminsMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    phoneNumber?: Maybe<Scalars['String']>;
    request?: Maybe<Scalars['String']>;
    uuid?: Maybe<Scalars['String']>;
};

export type CourseSerializerInputObjectType = {
    /** Amount for the course */
    amount: Scalars['Float'];
    /** The description of the course */
    courseDescription?: InputMaybe<Scalars['String']>;
    /** The course display image */
    courseImage?: InputMaybe<Scalars['Upload']>;
    /** The name of the course */
    courseName: Scalars['String'];
    endDate?: InputMaybe<Scalars['Date']>;
    endTime?: InputMaybe<Scalars['Time']>;
    /** The course ID. Provide for an update operation */
    id?: InputMaybe<Scalars['ID']>;
    /** Some information for enrolled students */
    message?: InputMaybe<Scalars['String']>;
    /** The organization Id */
    organizationId: Scalars['ID'];
    /** Is the course a paid course? */
    paid: Scalars['Boolean'];
    /** Is the course going to be physical? */
    physicalClass?: InputMaybe<Scalars['Boolean']>;
    /** The date the course is going to commence */
    startDate: Scalars['Date'];
    /** The time of day the course is going to commence */
    startTime: Scalars['Time'];
    /** Course facilitator */
    tutor?: InputMaybe<Scalars['String']>;
    /** Is the course going to be virtual? */
    virtualClass?: InputMaybe<Scalars['Boolean']>;
};

/** The Course Model Object */
export type CourseType = Node & {
    __typename?: 'CourseType';
    amount?: Maybe<Scalars['Decimal']>;
    amountCurrency: Scalars['String'];
    amountStr?: Maybe<Scalars['String']>;
    amountValue?: Maybe<Scalars['Int']>;
    assignmentSet: AssignmentTypeConnection;
    courseDescription: Scalars['String'];
    courseImage?: Maybe<Scalars['String']>;
    courseImageUrl?: Maybe<Scalars['String']>;
    courseName: Scalars['String'];
    created: Scalars['DateTime'];
    creator: UserType;
    endDate?: Maybe<Scalars['Date']>;
    endTime?: Maybe<Scalars['Time']>;
    enrollments: EnrollmentTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    /** This message will be displayed to the user after they have enrolled in this course. */
    message?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    paid?: Maybe<Scalars['Boolean']>;
    physicalClass?: Maybe<Scalars['Boolean']>;
    pk?: Maybe<Scalars['ID']>;
    resourceSet: ResourceTypeConnection;
    slug: Scalars['String'];
    startDate: Scalars['Date'];
    startTime: Scalars['Time'];
    tutor?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    virtualClass?: Maybe<Scalars['Boolean']>;
};

/** The Course Model Object */
export type CourseTypeAssignmentSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    assignmentName?: InputMaybe<Scalars['String']>;
    author_Id?: InputMaybe<Scalars['Float']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    dueDate?: InputMaybe<Scalars['Date']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    startDate?: InputMaybe<Scalars['Date']>;
};

/** The Course Model Object */
export type CourseTypeEnrollmentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    refundStatus?: InputMaybe<Scalars['Boolean']>;
    student_Id?: InputMaybe<Scalars['Float']>;
};

/** The Course Model Object */
export type CourseTypeResourceSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    ordering?: InputMaybe<Scalars['Int']>;
    resourceName?: InputMaybe<Scalars['String']>;
};

export type CourseTypeConnection = {
    __typename?: 'CourseTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<CourseTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `CourseType` and its cursor. */
export type CourseTypeEdge = {
    __typename?: 'CourseTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<CourseType>;
};

/** Register your interest to attend an event */
export type CreateInterest = {
    __typename?: 'CreateInterest';
    attendance?: Maybe<AttendanceType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Create a schedule for an event */
export type CreateSchedule = {
    __typename?: 'CreateSchedule';
    schedule?: Maybe<ScheduleType>;
};

/**
 * Creates and Updates company_profile, cac_certificate, tax_clearance, other fields for a user in
 * ProfileDocument model. User must be logged in to create/update profile document.
 *
 * Args:
 *     graphene (Upload): company_profile
 *     graphene (Upload): cac_certificate
 *     graphene (Upload): tax_clearance
 *     graphene (Upload): other
 *
 * Returns:
 *     graphene (Boolean): Returns True or False based on operation's success
 */
export type CreateUpdateUserProfileDocuments = {
    __typename?: 'CreateUpdateUserProfileDocuments';
    success?: Maybe<Scalars['Boolean']>;
};

/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccount = {
    __typename?: 'DeleteAccount';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Delete a Referee previously added by the user */
export type DeleteRefereeMutation = {
    __typename?: 'DeleteRefereeMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/**  Discipline model type definition  */
export type DepartmentModelType = Node & {
    __typename?: 'DepartmentModelType';
    created: Scalars['DateTime'];
    deptAcad: AcademicRecordModelTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    name: Scalars['String'];
    pk: Scalars['ID'];
    school: SchoolModelType;
    updated: Scalars['DateTime'];
};

/**  Discipline model type definition  */
export type DepartmentModelTypeDeptAcadArgs = {
    admitted?: InputMaybe<Scalars['Date']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    discipline_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    graduated?: InputMaybe<Scalars['Date']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    program?: InputMaybe<Scalars['String']>;
    school_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type DepartmentModelTypeConnection = {
    __typename?: 'DepartmentModelTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<DepartmentModelTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `DepartmentModelType` and its cursor. */
export type DepartmentModelTypeEdge = {
    __typename?: 'DepartmentModelTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<DepartmentModelType>;
};

/** Debugging information for the current query. */
export type DjangoDebug = {
    __typename?: 'DjangoDebug';
    /** Executed SQL queries for this API query. */
    sql?: Maybe<Array<Maybe<DjangoDebugSql>>>;
};

/** Represents a single database query made to a Django managed DB. */
export type DjangoDebugSql = {
    __typename?: 'DjangoDebugSQL';
    /** The Django database alias (e.g. 'default'). */
    alias: Scalars['String'];
    /** Duration of this database query in seconds. */
    duration: Scalars['Float'];
    /** Postgres connection encoding if available. */
    encoding?: Maybe<Scalars['String']>;
    /** Whether this database query was a SELECT. */
    isSelect: Scalars['Boolean'];
    /** Whether this database query took more than 10 seconds. */
    isSlow: Scalars['Boolean'];
    /** Postgres isolation level if available. */
    isoLevel?: Maybe<Scalars['String']>;
    /** JSON encoded database query parameters. */
    params: Scalars['String'];
    /** The raw SQL of this query, without params. */
    rawSql: Scalars['String'];
    /** The actual SQL sent to this database. */
    sql?: Maybe<Scalars['String']>;
    /** Start time of this database query. */
    startTime: Scalars['Float'];
    /** Stop time of this database query. */
    stopTime: Scalars['Float'];
    /** Postgres transaction ID if available. */
    transId?: Maybe<Scalars['String']>;
    /** Postgres transaction status if available. */
    transStatus?: Maybe<Scalars['String']>;
    /** The type of database being used (e.g. postrgesql, mysql, sqlite). */
    vendor: Scalars['String'];
};

export type DonationMutationInput = {
    amount?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    name: Scalars['String'];
    organization?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
};

/** Create donation for an organization. */
export type DonationMutationPayload = {
    __typename?: 'DonationMutationPayload';
    amount?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    phoneNumber?: Maybe<Scalars['String']>;
};

/** The Donation Model Object */
export type DonationType = Node & {
    __typename?: 'DonationType';
    amount?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    name: Scalars['String'];
    organization?: Maybe<OrganizationType>;
    phoneNumber?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
};

export type DonationTypeConnection = {
    __typename?: 'DonationTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<DonationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `DonationType` and its cursor. */
export type DonationTypeEdge = {
    __typename?: 'DonationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<DonationType>;
};

/** Download Certificate of an event, based on pre-selected conditions */
export type DownloadCertificateMutation = {
    __typename?: 'DownloadCertificateMutation';
    certificate?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

/**
 * Download certificate of an event, based on selected category.
 * For the desired category of certficate, the following are the available categories:
 * - participant
 * - volunteer
 * - presenter
 *
 * Categories should be sent in lower-case.
 */
export type DownloadEventCertificatesMutation = {
    __typename?: 'DownloadEventCertificatesMutation';
    certificateUrl?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

/**
 * Prepares and responds with an invitation letter for a member.
 * :arguments - Full name, Address Line 1 and Address Line 2
 */
export type DownloadInvitationLetterMutation = {
    __typename?: 'DownloadInvitationLetterMutation';
    invitationLetter?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

export type EnrollmentMutationInput = {
    amountPaid?: InputMaybe<Scalars['Float']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
    course: Scalars['String'];
    createdBy?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['String']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    payerName?: InputMaybe<Scalars['String']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentDate?: InputMaybe<Scalars['Date']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    refundStatus?: InputMaybe<Scalars['Boolean']>;
    student: Scalars['String'];
    transactionReference?: InputMaybe<Scalars['String']>;
};

/** Allow a user to enroll for a course and submit the payment information */
export type EnrollmentMutationPayload = {
    __typename?: 'EnrollmentMutationPayload';
    amountPaid?: Maybe<Scalars['Float']>;
    amountPaidCurrency?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    course?: Maybe<Scalars['String']>;
    created?: Maybe<Scalars['DateTime']>;
    createdBy?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    organization?: Maybe<Scalars['String']>;
    paid?: Maybe<Scalars['Boolean']>;
    payerName?: Maybe<Scalars['String']>;
    paymentApproval?: Maybe<Scalars['Boolean']>;
    paymentDate?: Maybe<Scalars['Date']>;
    paymentName?: Maybe<Scalars['String']>;
    paymentType?: Maybe<Scalars['String']>;
    refundStatus?: Maybe<Scalars['Boolean']>;
    student?: Maybe<Scalars['String']>;
    transactionReference?: Maybe<Scalars['String']>;
    updated?: Maybe<Scalars['DateTime']>;
    uuid?: Maybe<Scalars['String']>;
};

/** The Enrollment Model Object */
export type EnrollmentType = Node & {
    __typename?: 'EnrollmentType';
    amountPaid?: Maybe<Scalars['Decimal']>;
    amountPaidCurrency: Scalars['String'];
    course: CourseType;
    created: Scalars['DateTime'];
    createdBy?: Maybe<UserType>;
    /** The ID of the object. */
    id: Scalars['ID'];
    organization?: Maybe<OrganizationType>;
    paid: Scalars['Boolean'];
    payerName?: Maybe<Scalars['String']>;
    paymentApproval?: Maybe<Scalars['Boolean']>;
    paymentDate?: Maybe<Scalars['Date']>;
    paymentName?: Maybe<Scalars['String']>;
    paymentType: Scalars['String'];
    pk: Scalars['ID'];
    refundStatus: Scalars['Boolean'];
    student: UserType;
    transactionReference?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    uuid: Scalars['UUID'];
};

export type EnrollmentTypeConnection = {
    __typename?: 'EnrollmentTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<EnrollmentTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `EnrollmentType` and its cursor. */
export type EnrollmentTypeEdge = {
    __typename?: 'EnrollmentTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<EnrollmentType>;
};

export type ErrorType = {
    __typename?: 'ErrorType';
    field: Scalars['String'];
    messages: Array<Scalars['String']>;
};

export type EventCheckInType = {
    __typename?: 'EventCheckInType';
    attendance?: Maybe<AttendanceType>;
    user?: Maybe<UserType>;
};

/** An enumeration. */
export enum EvotingPollInputTypeChoices {
    /** Multiple Choice */
    MultipleChoice = 'MULTIPLE_CHOICE',
    /** Multiple Choice with Image */
    MultipleChoiceWithImage = 'MULTIPLE_CHOICE_WITH_IMAGE',
}

/** An enumeration. */
export enum EvotingPollPollTypeChoices {
    /** Decision Poll */
    DecisionPoll = 'DECISION_POLL',
    /** Electoral Purpose */
    ElectoralPurpose = 'ELECTORAL_PURPOSE',
    /** Meeting Poll */
    MeetingPoll = 'MEETING_POLL',
}

/** An enumeration. */
export enum EvotingPollPollVisibilityChoices {
    /** Not Public */
    NotPublic = 'NOT_PUBLIC',
    /** Public */
    Public = 'PUBLIC',
}

/** An enumeration. */
export enum EvotingPollResultVisibilityChoices {
    /** Always Public */
    AlwaysPublic = 'ALWAYS_PUBLIC',
    /** Not Public */
    NotPublic = 'NOT_PUBLIC',
    /** Public After End Date */
    PublicAfterEndDate = 'PUBLIC_AFTER_END_DATE',
    /** Public After Vote */
    PublicAfterVote = 'PUBLIC_AFTER_VOTE',
}

/** An enumeration. */
export enum EvotingPollStateChoices {
    /** Closed */
    Closed = 'CLOSED',
    /** Live */
    Live = 'LIVE',
}

/** An enumeration. */
export enum EvotingPollStatusChoices {
    /** Draft */
    Draft = 'DRAFT',
    /** Published */
    Published = 'PUBLISHED',
}

/** Create an Executive for an org */
export type ExecutiveCreateUpdateMutation = {
    __typename?: 'ExecutiveCreateUpdateMutation';
    executive?: Maybe<ExecutiveType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Delete an organization Executive */
export type ExecutiveDeleteMutation = {
    __typename?: 'ExecutiveDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/** Upload an Executive Photo */
export type ExecutivePhotoUploadMutation = {
    __typename?: 'ExecutivePhotoUploadMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/** An Executive Model Object */
export type ExecutiveType = Node & {
    __typename?: 'ExecutiveType';
    bio?: Maybe<Scalars['String']>;
    category?: Maybe<LeadershipCategoryType>;
    /** this person currently holds this position */
    current: Scalars['Boolean'];
    email?: Maybe<Scalars['String']>;
    endTenure?: Maybe<Scalars['Date']>;
    /** Enter facebook username */
    facebook?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    photo?: Maybe<Scalars['String']>;
    photoUrl?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    position?: Maybe<LeadershipPositionType>;
    startTenure?: Maybe<Scalars['Date']>;
    /** Enter twitter username */
    twitter?: Maybe<Scalars['String']>;
    uuid: Scalars['UUID'];
};

export type ExecutiveTypeConnection = {
    __typename?: 'ExecutiveTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<ExecutiveTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `ExecutiveType` and its cursor. */
export type ExecutiveTypeEdge = {
    __typename?: 'ExecutiveTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<ExecutiveType>;
};

/** The Event Feedback Object */
export type FeedbackType = Node & {
    __typename?: 'FeedbackType';
    /** The ID of the object. */
    id: Scalars['ID'];
    keyTakeaway?: Maybe<Scalars['String']>;
    lectureDelivery?: Maybe<Scalars['String']>;
    likedLeast?: Maybe<Scalars['String']>;
    likedMost?: Maybe<Scalars['String']>;
    meeting?: Maybe<MeetingWithEventRegistrationsType>;
    otherComments?: Maybe<Scalars['String']>;
    participantsEngagement?: Maybe<Scalars['String']>;
    respondent?: Maybe<UserType>;
};

export type FeedbackTypeConnection = {
    __typename?: 'FeedbackTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<FeedbackTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `FeedbackType` and its cursor. */
export type FeedbackTypeEdge = {
    __typename?: 'FeedbackTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<FeedbackType>;
};

/** Verify a Google Sign in on the app */
export type GoogleSignIn = {
    __typename?: 'GoogleSignIn';
    ok?: Maybe<Scalars['Boolean']>;
    token?: Maybe<Scalars['String']>;
};

/** The How Did You Hear About Us Object */
export type HowDidYouHearAboutUsType = Node & {
    __typename?: 'HowDidYouHearAboutUsType';
    /** The ID of the object. */
    id: Scalars['ID'];
    meeting?: Maybe<MeetingWithEventRegistrationsType>;
    organization?: Maybe<OrganizationType>;
    respondent?: Maybe<UserType>;
    response?: Maybe<Scalars['String']>;
};

export type HowDidYouHearAboutUsTypeConnection = {
    __typename?: 'HowDidYouHearAboutUsTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<HowDidYouHearAboutUsTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `HowDidYouHearAboutUsType` and its cursor. */
export type HowDidYouHearAboutUsTypeEdge = {
    __typename?: 'HowDidYouHearAboutUsTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<HowDidYouHearAboutUsType>;
};

export type JoinOrganizationMutationInput = {
    /** The Admin that approved - if joining with Organization is not automatic */
    admin?: InputMaybe<Scalars['String']>;
    /** Amount owed to the organization */
    amountOwing?: InputMaybe<Scalars['Float']>;
    amountOwingReason?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    blocked?: InputMaybe<Scalars['Boolean']>;
    /** The Admin that blocked the person */
    blockedBy?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
    contactMessage?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    membershipApplicationStatus?: InputMaybe<Scalars['String']>;
    membershipCadre?: InputMaybe<Scalars['String']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    otherMembershipNumbers?: InputMaybe<Scalars['String']>;
    otherSpecialty?: InputMaybe<Scalars['String']>;
    paymentName?: InputMaybe<Scalars['String']>;
    rejectionReason?: InputMaybe<Scalars['String']>;
    specialty?: InputMaybe<Scalars['String']>;
    subSpecialty?: InputMaybe<Scalars['String']>;
    subdivision?: InputMaybe<Scalars['String']>;
    /** The User that wants to join the organization */
    user: Scalars['String'];
    verified?: InputMaybe<Scalars['Boolean']>;
};

/** Allow a user join an organization and submit the necessary information */
export type JoinOrganizationMutationPayload = {
    __typename?: 'JoinOrganizationMutationPayload';
    /** The Admin that approved - if joining with Organization is not automatic */
    admin?: Maybe<Scalars['String']>;
    /** Amount owed to the organization */
    amountOwing?: Maybe<Scalars['Float']>;
    amountOwingCurrency?: Maybe<Scalars['String']>;
    amountOwingReason?: Maybe<Scalars['String']>;
    approved?: Maybe<Scalars['Boolean']>;
    blocked?: Maybe<Scalars['Boolean']>;
    /** The Admin that blocked the person */
    blockedBy?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    contactMessage?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    membershipApplicationStatus?: Maybe<Scalars['String']>;
    membershipCadre?: Maybe<Scalars['String']>;
    newOrOld?: Maybe<Scalars['String']>;
    orgNumber?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    otherMembershipNumbers?: Maybe<Scalars['String']>;
    otherSpecialty?: Maybe<Scalars['String']>;
    paymentName?: Maybe<Scalars['String']>;
    rejectionReason?: Maybe<Scalars['String']>;
    specialty?: Maybe<Scalars['String']>;
    subSpecialty?: Maybe<Scalars['String']>;
    subdivision?: Maybe<Scalars['String']>;
    /** The User that wants to join the organization */
    user?: Maybe<Scalars['String']>;
    verified?: Maybe<Scalars['Boolean']>;
};

export type JoinRequestType = Node & {
    __typename?: 'JoinRequestType';
    /** Amount owed to the organization */
    amountOwing?: Maybe<Scalars['Decimal']>;
    amountOwingCurrency: Scalars['String'];
    amountOwingReason?: Maybe<Scalars['String']>;
    amountOwingStr?: Maybe<Scalars['String']>;
    amountOwingValue?: Maybe<Scalars['Int']>;
    approved?: Maybe<Scalars['Boolean']>;
    contactMessage?: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    /** The ID of the object. */
    id: Scalars['ID'];
    membershipApplicationStatus: Scalars['String'];
    membershipCadre?: Maybe<OrgMembershipType>;
    newOrOld?: Maybe<Scalars['String']>;
    orgNumber?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    otherMembershipNumbers?: Maybe<Scalars['String']>;
    otherSpecialty?: Maybe<Scalars['String']>;
    paymentName?: Maybe<Scalars['String']>;
    pk?: Maybe<Scalars['ID']>;
    rejectionReason?: Maybe<Scalars['String']>;
    specialty?: Maybe<SpecialtyType>;
    subSpecialty?: Maybe<SubSpecialtyType>;
    subdivision?: Maybe<OrgSubDivisionType>;
    updated: Scalars['DateTime'];
    user?: Maybe<UserType>;
    uuid: Scalars['UUID'];
    verified?: Maybe<Scalars['Boolean']>;
};

export type JoinRequestTypeConnection = {
    __typename?: 'JoinRequestTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<JoinRequestTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `JoinRequestType` and its cursor. */
export type JoinRequestTypeEdge = {
    __typename?: 'JoinRequestTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<JoinRequestType>;
};

export type LeadershipCategoryCreateUpdateMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    name: Scalars['String'];
    organization?: InputMaybe<Scalars['String']>;
};

/** Create/ Update an organization Leadership Category */
export type LeadershipCategoryCreateUpdateMutationPayload = {
    __typename?: 'LeadershipCategoryCreateUpdateMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
};

/** Delete an organization Leadership Category */
export type LeadershipCategoryDeleteMutation = {
    __typename?: 'LeadershipCategoryDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/** An LeadershipCategory Model Object */
export type LeadershipCategoryType = Node & {
    __typename?: 'LeadershipCategoryType';
    description?: Maybe<Scalars['String']>;
    executiveSet: ExecutiveTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    name: Scalars['String'];
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
};

/** An LeadershipCategory Model Object */
export type LeadershipCategoryTypeExecutiveSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    current?: InputMaybe<Scalars['Boolean']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    position_Id?: InputMaybe<Scalars['Float']>;
    startTenure?: InputMaybe<Scalars['Date']>;
};

export type LeadershipCategoryTypeConnection = {
    __typename?: 'LeadershipCategoryTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<LeadershipCategoryTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `LeadershipCategoryType` and its cursor. */
export type LeadershipCategoryTypeEdge = {
    __typename?: 'LeadershipCategoryTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<LeadershipCategoryType>;
};

export type LeadershipPositionCreateUpdateMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    job?: InputMaybe<Scalars['String']>;
    organization: Scalars['String'];
    position: Scalars['String'];
    /** This determines how it would displayed. If Chairman is 1, he will appear topmost, Vice is 2, like that... */
    rank: Scalars['Int'];
    slug?: InputMaybe<Scalars['String']>;
    tenure?: InputMaybe<Scalars['String']>;
};

/** Create/ Update an organization Leadership Position */
export type LeadershipPositionCreateUpdateMutationPayload = {
    __typename?: 'LeadershipPositionCreateUpdateMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    job?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    position?: Maybe<Scalars['String']>;
    /** This determines how it would displayed. If Chairman is 1, he will appear topmost, Vice is 2, like that... */
    rank?: Maybe<Scalars['Int']>;
    slug?: Maybe<Scalars['String']>;
    tenure?: Maybe<Scalars['String']>;
};

/** Delete an organization Leadership Position */
export type LeadershipPositionDeleteMutation = {
    __typename?: 'LeadershipPositionDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/** An LeadershipPosition Model Object */
export type LeadershipPositionType = Node & {
    __typename?: 'LeadershipPositionType';
    /** The ID of the object. */
    id: Scalars['ID'];
    job?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    position: Scalars['String'];
    positions: ExecutiveTypeConnection;
    /** This determines how it would displayed. If Chairman is 1, he will appear topmost, Vice is 2, like that... */
    rank: Scalars['Int'];
    slug?: Maybe<Scalars['String']>;
    tenure?: Maybe<Scalars['String']>;
};

/** An LeadershipPosition Model Object */
export type LeadershipPositionTypePositionsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    current?: InputMaybe<Scalars['Boolean']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    position_Id?: InputMaybe<Scalars['Float']>;
    startTenure?: InputMaybe<Scalars['Date']>;
};

export type LeadershipPositionTypeConnection = {
    __typename?: 'LeadershipPositionTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<LeadershipPositionTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `LeadershipPositionType` and its cursor. */
export type LeadershipPositionTypeEdge = {
    __typename?: 'LeadershipPositionTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<LeadershipPositionType>;
};

/**
 * Leave an Organization Mutation.
 * Authenticated user should be able to leave an org
 */
export type LeaveOrgMutation = {
    __typename?: 'LeaveOrgMutation';
    request?: Maybe<JoinRequestType>;
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type LoginUser = {
    __typename?: 'LoginUser';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    refreshToken?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
    token?: Maybe<Scalars['String']>;
    unarchiving?: Maybe<Scalars['Boolean']>;
    user?: Maybe<UserType>;
};

/** The MeetingCategory Model Object */
export type MeetingCategoryType = Node & {
    __typename?: 'MeetingCategoryType';
    description?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    meetingSet: MeetingWithEventRegistrationsTypeConnection;
    name: Scalars['String'];
    org?: Maybe<OrganizationType>;
    pk?: Maybe<Scalars['ID']>;
};

/** The MeetingCategory Model Object */
export type MeetingCategoryTypeMeetingSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type MeetingCategoryTypeConnection = {
    __typename?: 'MeetingCategoryTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<MeetingCategoryTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `MeetingCategoryType` and its cursor. */
export type MeetingCategoryTypeEdge = {
    __typename?: 'MeetingCategoryTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<MeetingCategoryType>;
};

export type MeetingCategoryUpdateMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    name: Scalars['String'];
    org?: InputMaybe<Scalars['String']>;
};

/** Create/ Update an organization event category */
export type MeetingCategoryUpdateMutationPayload = {
    __typename?: 'MeetingCategoryUpdateMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    org?: Maybe<Scalars['String']>;
};

/** Create a Meeting AKA Event for an org */
export type MeetingCreateUpdateMutation = {
    __typename?: 'MeetingCreateUpdateMutation';
    meeting?: Maybe<MeetingType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Delete a Meeting */
export type MeetingDeleteMutation = {
    __typename?: 'MeetingDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/** The MeetingSocialDpBanner model object */
export type MeetingSocialDpBannerImageType = Node & {
    __typename?: 'MeetingSocialDpBannerImageType';
    /** Event Personalized DP Template */
    bannerImage?: Maybe<Scalars['String']>;
    bannerImageUrl?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    pk: Scalars['ID'];
};

/** The MeetingSocialDpBanner model */
export type MeetingSocialDpBannerType = Node & {
    __typename?: 'MeetingSocialDpBannerType';
    /** Avatar image area height in pixels */
    avatarImageAreaHeight?: Maybe<Scalars['Float']>;
    /** Avatar image area width in pixels */
    avatarImageAreaWidth?: Maybe<Scalars['Float']>;
    /** Avatar image cartesian X coordinate in pixels */
    avatarImageXCoordinate?: Maybe<Scalars['Float']>;
    /** Avatar image cartesian Y coordinate in pixels */
    avatarImageYCoordinate?: Maybe<Scalars['Float']>;
    /** Event Personalized DP Template */
    bannerImage?: Maybe<Scalars['String']>;
    bannerImageUrl?: Maybe<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    event?: Maybe<MeetingWithEventRegistrationsType>;
    /** The ID of the object. */
    id: Scalars['ID'];
    /** User name text X coordinate in pixels */
    nameTextXCoordinate?: Maybe<Scalars['Float']>;
    /** User name text Y coordinate in pixels */
    nameTextYCoordinate?: Maybe<Scalars['Float']>;
    pk: Scalars['ID'];
    updatedAt: Scalars['DateTime'];
};

/** The Meeting / events object */
export type MeetingType = Node & {
    __typename?: 'MeetingType';
    announcementSet: AnnouncementTypeConnection;
    attendance: Scalars['Boolean'];
    category?: Maybe<MeetingCategoryType>;
    /** A downloadable certificate related to this event. Must have fillable Form Fields in PDF */
    certificate?: Maybe<Scalars['String']>;
    conferenceEvent: ConferenceRegistrationWithRelatedPaymentTypeConnection;
    created: Scalars['DateTime'];
    createdBy?: Maybe<UserType>;
    /** Event objectives, sub-themes */
    description?: Maybe<Scalars['String']>;
    /** The domain name of the organization hosting this event */
    domainName?: Maybe<Scalars['String']>;
    /** Download Certification Condition I */
    downloadCertificateCondition1: Scalars['Boolean'];
    /** Download Certification Condition II */
    downloadCertificateCondition2: Scalars['Boolean'];
    endDate?: Maybe<Scalars['Date']>;
    endTime?: Maybe<Scalars['Time']>;
    /** Event logo */
    eventLogo?: Maybe<Scalars['String']>;
    eventLogoUrl?: Maybe<Scalars['String']>;
    eventPersonalizedDpImageUrl?: Maybe<Scalars['String']>;
    eventSlug?: Maybe<Scalars['String']>;
    /** Publishing an event makes it accessible for everyone to see/register */
    eventState: Scalars['String'];
    eventTicket: TicketTypeConnection;
    feedbackMeetings: FeedbackTypeConnection;
    /** Cover photo/ flyer of the event */
    flyer?: Maybe<Scalars['String']>;
    hearaboutusMeetings: HowDidYouHearAboutUsTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    /** Generic Invitation Letter for a Paid Event, Must have fillable Form Fields in PDF */
    invitationLetter?: Maybe<Scalars['String']>;
    /** This indicates if the event is specifically a conference */
    isConference?: Maybe<Scalars['Boolean']>;
    locationWebsite: WebsiteTypeConnection;
    mainEvent?: Maybe<MeetingWithEventRegistrationsType>;
    meetingAttendance: AttendanceWithAttendanceCountTypeConnection;
    meetingAttendanceEntries: AttendanceEntriesTypeConnection;
    meetingSet: MeetingWithEventRegistrationsTypeConnection;
    meetingSponsor: SponsorTypeConnection;
    /** Minute of previous meeting to be read at this meeting */
    minutes?: Maybe<Scalars['String']>;
    minutesUrl?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    /** Youtube, Zoom, Google Meet, Facebook or any link for members to join the event */
    onlineMeetingLink?: Maybe<Scalars['String']>;
    org?: Maybe<OrganizationType>;
    /** Should payment be collected during registration for this event */
    paid: Scalars['Boolean'];
    paperMeetings: PresentationTypeConnection;
    payers: ConferencePaymentWithMembershipDetailsTypeConnection;
    photoUrl?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    presenterMeetings: PresenterTypeConnection;
    publishAt?: Maybe<Scalars['DateTime']>;
    /** The Planning Committee to contact for attention */
    rsvp?: Maybe<Scalars['String']>;
    scheduleMeetings: ScheduleTypeConnection;
    session: Scalars['Boolean'];
    socialDpBanner?: Maybe<MeetingSocialDpBannerImageType>;
    startDate: Scalars['Date'];
    startTime: Scalars['Time'];
    /** Subtitle of event */
    theme?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    uuid: Scalars['UUID'];
    venue?: Maybe<Scalars['String']>;
    /** This indicates if the event is specifically virtual */
    virtualOnly?: Maybe<Scalars['Boolean']>;
};

/** The Meeting / events object */
export type MeetingTypeAnnouncementSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    announcementType?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    body?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    organization_Slug?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The Meeting / events object */
export type MeetingTypeConferenceEventArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The Meeting / events object */
export type MeetingTypeEventTicketArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    earlyBirdDeadline?: InputMaybe<Scalars['Date']>;
    earlyBirdFee?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    lateBirdFee?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

/** The Meeting / events object */
export type MeetingTypeFeedbackMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

/** The Meeting / events object */
export type MeetingTypeHearaboutusMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

/** The Meeting / events object */
export type MeetingTypeLocationWebsiteArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    customDomain?: InputMaybe<Scalars['String']>;
    event?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org?: InputMaybe<Scalars['ID']>;
    subDomain?: InputMaybe<Scalars['String']>;
};

/** The Meeting / events object */
export type MeetingTypeMeetingAttendanceArgs = {
    after?: InputMaybe<Scalars['String']>;
    attendanceCode?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

/** The Meeting / events object */
export type MeetingTypeMeetingAttendanceEntriesArgs = {
    after?: InputMaybe<Scalars['String']>;
    attendance_AttendanceCode?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The Meeting / events object */
export type MeetingTypeMeetingSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The Meeting / events object */
export type MeetingTypeMeetingSponsorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The Meeting / events object */
export type MeetingTypePaperMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    author?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The Meeting / events object */
export type MeetingTypePayersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The Meeting / events object */
export type MeetingTypePresenterMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

/** The Meeting / events object */
export type MeetingTypeScheduleMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    location?: InputMaybe<Scalars['String']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type MeetingTypeConnection = {
    __typename?: 'MeetingTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<MeetingTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `MeetingType` and its cursor. */
export type MeetingTypeEdge = {
    __typename?: 'MeetingTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<MeetingType>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsType = Node & {
    __typename?: 'MeetingWithEventRegistrationsType';
    announcementSet: AnnouncementTypeConnection;
    attendance: Scalars['Boolean'];
    category?: Maybe<MeetingCategoryType>;
    /** A downloadable certificate related to this event. Must have fillable Form Fields in PDF */
    certificate?: Maybe<Scalars['String']>;
    conferenceEvent: ConferenceRegistrationWithRelatedPaymentTypeConnection;
    created: Scalars['DateTime'];
    createdBy?: Maybe<UserType>;
    /** Event objectives, sub-themes */
    description?: Maybe<Scalars['String']>;
    /** The domain name of the organization hosting this event */
    domainName?: Maybe<Scalars['String']>;
    /** Download Certification Condition I */
    downloadCertificateCondition1: Scalars['Boolean'];
    /** Download Certification Condition II */
    downloadCertificateCondition2: Scalars['Boolean'];
    endDate?: Maybe<Scalars['Date']>;
    endTime?: Maybe<Scalars['Time']>;
    /** Event logo */
    eventLogo?: Maybe<Scalars['String']>;
    eventLogoUrl?: Maybe<Scalars['String']>;
    eventPersonalizedDpImageUrl?: Maybe<Scalars['String']>;
    /** A connection filter for all event registrations */
    eventRegistrations?: Maybe<ConferenceRegistrationWithRelatedPaymentTypeConnection>;
    eventSlug?: Maybe<Scalars['String']>;
    /** Publishing an event makes it accessible for everyone to see/register */
    eventState: Scalars['String'];
    eventTicket: TicketTypeConnection;
    feedbackMeetings: FeedbackTypeConnection;
    /** Cover photo/ flyer of the event */
    flyer?: Maybe<Scalars['String']>;
    hearaboutusMeetings: HowDidYouHearAboutUsTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    /** Generic Invitation Letter for a Paid Event, Must have fillable Form Fields in PDF */
    invitationLetter?: Maybe<Scalars['String']>;
    /** This indicates if the event is specifically a conference */
    isConference?: Maybe<Scalars['Boolean']>;
    locationWebsite: WebsiteTypeConnection;
    mainEvent?: Maybe<MeetingWithEventRegistrationsType>;
    meetingAttendance: AttendanceWithAttendanceCountTypeConnection;
    meetingAttendanceEntries: AttendanceEntriesTypeConnection;
    meetingSet: MeetingWithEventRegistrationsTypeConnection;
    meetingSponsor: SponsorTypeConnection;
    /** Minute of previous meeting to be read at this meeting */
    minutes?: Maybe<Scalars['String']>;
    minutesUrl?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    /** Youtube, Zoom, Google Meet, Facebook or any link for members to join the event */
    onlineMeetingLink?: Maybe<Scalars['String']>;
    org?: Maybe<OrganizationType>;
    /** Should payment be collected during registration for this event */
    paid: Scalars['Boolean'];
    paperMeetings: PresentationTypeConnection;
    payers: ConferencePaymentWithMembershipDetailsTypeConnection;
    photoUrl?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    presenterMeetings: PresenterTypeConnection;
    publishAt?: Maybe<Scalars['DateTime']>;
    /** The Planning Committee to contact for attention */
    rsvp?: Maybe<Scalars['String']>;
    scheduleMeetings: ScheduleTypeConnection;
    session: Scalars['Boolean'];
    socialDpBanner?: Maybe<MeetingSocialDpBannerImageType>;
    startDate: Scalars['Date'];
    startTime: Scalars['Time'];
    /** Subtitle of event */
    theme?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    uuid: Scalars['UUID'];
    venue?: Maybe<Scalars['String']>;
    /** This indicates if the event is specifically virtual */
    virtualOnly?: Maybe<Scalars['Boolean']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypeAnnouncementSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    announcementType?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    body?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    organization_Slug?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypeConferenceEventArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypeEventRegistrationsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    searchByEmailQuery?: InputMaybe<Scalars['String']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypeEventTicketArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    earlyBirdDeadline?: InputMaybe<Scalars['Date']>;
    earlyBirdFee?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    lateBirdFee?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypeFeedbackMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypeHearaboutusMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypeLocationWebsiteArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    customDomain?: InputMaybe<Scalars['String']>;
    event?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org?: InputMaybe<Scalars['ID']>;
    subDomain?: InputMaybe<Scalars['String']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypeMeetingAttendanceArgs = {
    after?: InputMaybe<Scalars['String']>;
    attendanceCode?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypeMeetingAttendanceEntriesArgs = {
    after?: InputMaybe<Scalars['String']>;
    attendance_AttendanceCode?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypeMeetingSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypeMeetingSponsorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypePaperMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    author?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypePayersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypePresenterMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

/** The Meeting Object Type with eventRegistrations field */
export type MeetingWithEventRegistrationsTypeScheduleMeetingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    location?: InputMaybe<Scalars['String']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type MeetingWithEventRegistrationsTypeConnection = {
    __typename?: 'MeetingWithEventRegistrationsTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<MeetingWithEventRegistrationsTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `MeetingWithEventRegistrationsType` and its cursor. */
export type MeetingWithEventRegistrationsTypeEdge = {
    __typename?: 'MeetingWithEventRegistrationsTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<MeetingWithEventRegistrationsType>;
};

/** The Imported Members Invitation Object */
export type MemberInvitationType = Node & {
    __typename?: 'MemberInvitationType';
    created: Scalars['DateTime'];
    creator?: Maybe<UserType>;
    email?: Maybe<Scalars['String']>;
    firstName: Scalars['String'];
    /** The ID of the object. */
    id: Scalars['ID'];
    invited: Scalars['Boolean'];
    lastName: Scalars['String'];
    organization?: Maybe<OrganizationType>;
    phoneNumber?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    used: Scalars['Boolean'];
    uuid: Scalars['UUID'];
};

export type MemberInvitationTypeConnection = {
    __typename?: 'MemberInvitationTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<MemberInvitationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `MemberInvitationType` and its cursor. */
export type MemberInvitationTypeEdge = {
    __typename?: 'MemberInvitationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<MemberInvitationType>;
};

/** Sends an email informing the user that their membership application was successful */
export type MembershipApplicationSubmission = {
    __typename?: 'MembershipApplicationSubmission';
    success?: Maybe<Scalars['Boolean']>;
};

/** The Membership Payment Model Object */
export type MembershipPaymentType = Node & {
    __typename?: 'MembershipPaymentType';
    amountPaid?: Maybe<Scalars['Decimal']>;
    amountPaidCurrency: Scalars['String'];
    amountPaidStr?: Maybe<Scalars['String']>;
    amountPaidValue?: Maybe<Scalars['Int']>;
    created: Scalars['DateTime'];
    /** The ID of the object. */
    id: Scalars['ID'];
    membershipType?: Maybe<OrgMembershipType>;
    org?: Maybe<OrganizationType>;
    paid: Scalars['Boolean'];
    payerName?: Maybe<Scalars['String']>;
    paymentApproval?: Maybe<Scalars['Boolean']>;
    paymentDate?: Maybe<Scalars['Date']>;
    paymentName?: Maybe<Scalars['String']>;
    paymentStatus: Scalars['String'];
    paymentType: Scalars['String'];
    pk: Scalars['ID'];
    proofOfPayment?: Maybe<Scalars['String']>;
    refundStatus: Scalars['Boolean'];
    txref?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    user?: Maybe<UserType>;
    uuid: Scalars['UUID'];
};

export type MembershipPaymentTypeConnection = {
    __typename?: 'MembershipPaymentTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<MembershipPaymentTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `MembershipPaymentType` and its cursor. */
export type MembershipPaymentTypeEdge = {
    __typename?: 'MembershipPaymentTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<MembershipPaymentType>;
};

/** Delete an NextOfKin */
export type NextOfKinDeleteMutation = {
    __typename?: 'NextOfKinDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/**  NextOfKin model type definition  */
export type NextOfKinModelType = Node & {
    __typename?: 'NextOfKinModelType';
    email: Scalars['String'];
    firstName: Scalars['String'];
    /** The ID of the object. */
    id: Scalars['ID'];
    lastName: Scalars['String'];
    middleName: Scalars['String'];
    /** Write in international phone no format (+234 or +41) */
    phone?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    relationship?: Maybe<Scalars['String']>;
    user: UserType;
};

export type NextOfKinModelTypeConnection = {
    __typename?: 'NextOfKinModelTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<NextOfKinModelTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `NextOfKinModelType` and its cursor. */
export type NextOfKinModelTypeEdge = {
    __typename?: 'NextOfKinModelTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<NextOfKinModelType>;
};

export type NextOfKinMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    middleName?: InputMaybe<Scalars['String']>;
    /** Write in international phone no format (+234 or +41) */
    phone?: InputMaybe<Scalars['String']>;
    relationship?: InputMaybe<Scalars['String']>;
    user: Scalars['String'];
};

/** Create NextOfKin information */
export type NextOfKinMutationPayload = {
    __typename?: 'NextOfKinMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    firstName?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    lastName?: Maybe<Scalars['String']>;
    middleName?: Maybe<Scalars['String']>;
    /** Write in international phone no format (+234 or +41) */
    phone?: Maybe<Scalars['String']>;
    relationship?: Maybe<Scalars['String']>;
    user?: Maybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
    /** The ID of the object. */
    id: Scalars['ID'];
};

/** Update the Notification settings of a User */
export type NotificationSettingsMutation = {
    __typename?: 'NotificationSettingsMutation';
    settings?: Maybe<UserSettingType>;
};

/** The Notification model */
export type NotificationType = Node & {
    __typename?: 'NotificationType';
    createdAt: Scalars['DateTime'];
    email?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    pk?: Maybe<Scalars['ID']>;
    push?: Maybe<Scalars['String']>;
    read: Scalars['Boolean'];
    sms?: Maybe<Scalars['String']>;
    subject?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
    user?: Maybe<UserType>;
};

export type NotificationTypeConnection = {
    __typename?: 'NotificationTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<NotificationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `NotificationType` and its cursor. */
export type NotificationTypeEdge = {
    __typename?: 'NotificationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<NotificationType>;
};

/** Sends an email informing the user that their membership application was successful */
export type NullifyMemberOutstandingPayments = {
    __typename?: 'NullifyMemberOutstandingPayments';
    success?: Maybe<Scalars['Boolean']>;
};

/** The Organization Admin Invitation Object */
export type OrgAdminInvitationType = Node & {
    __typename?: 'OrgAdminInvitationType';
    created: Scalars['DateTime'];
    creator?: Maybe<UserType>;
    email: Scalars['String'];
    /** The ID of the object. */
    id: Scalars['ID'];
    organization?: Maybe<OrganizationType>;
    updated: Scalars['DateTime'];
    used: Scalars['Boolean'];
    uuid: Scalars['UUID'];
};

export type OrgAdminInvitationTypeConnection = {
    __typename?: 'OrgAdminInvitationTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<OrgAdminInvitationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `OrgAdminInvitationType` and its cursor. */
export type OrgAdminInvitationTypeEdge = {
    __typename?: 'OrgAdminInvitationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<OrgAdminInvitationType>;
};

/** The Organization Admin Object */
export type OrgAdminType = Node & {
    __typename?: 'OrgAdminType';
    created: Scalars['DateTime'];
    creator?: Maybe<UserType>;
    /** The ID of the object. */
    id: Scalars['ID'];
    organization?: Maybe<OrganizationType>;
    updated: Scalars['DateTime'];
    user?: Maybe<UserType>;
};

export type OrgAdminTypeConnection = {
    __typename?: 'OrgAdminTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<OrgAdminTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `OrgAdminType` and its cursor. */
export type OrgAdminTypeEdge = {
    __typename?: 'OrgAdminTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<OrgAdminType>;
};

/** The Organization's Membership Types/Categories Object */
export type OrgMembershipType = {
    __typename?: 'OrgMembershipType';
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    membershipFeeStr?: Maybe<Scalars['String']>;
    membershipFeeValue?: Maybe<Scalars['Int']>;
    membershipRenewalFeeStr?: Maybe<Scalars['String']>;
    membershipRenewalFeeValue?: Maybe<Scalars['Int']>;
    name: Scalars['String'];
    organization?: Maybe<OrganizationType>;
};

/** Delete an OrgSubDivision */
export type OrgSubDivisionDeleteMutation = {
    __typename?: 'OrgSubDivisionDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

export type OrgSubDivisionMutationInput = {
    chairperson?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
    dateOfInauguration?: InputMaybe<Scalars['Date']>;
    email?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    meetingDaysTime?: InputMaybe<Scalars['String']>;
    meetingVenue?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    subdivision: Scalars['String'];
    type?: InputMaybe<Scalars['String']>;
};

/** Create/ Update an OrgSubDivision (chapter) information */
export type OrgSubDivisionMutationPayload = {
    __typename?: 'OrgSubDivisionMutationPayload';
    chairperson?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    created?: Maybe<Scalars['DateTime']>;
    dateOfInauguration?: Maybe<Scalars['Date']>;
    email?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    meetingDaysTime?: Maybe<Scalars['String']>;
    meetingVenue?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    phoneNumber?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    subdivision?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    updated?: Maybe<Scalars['DateTime']>;
};

/** The OrgSubDivision Model Object */
export type OrgSubDivisionType = Node & {
    __typename?: 'OrgSubDivisionType';
    chairperson?: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    dateOfInauguration?: Maybe<Scalars['Date']>;
    email?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    joinrequestSet: JoinRequestTypeConnection;
    meetingDaysTime?: Maybe<Scalars['String']>;
    meetingVenue?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    phoneNumber?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    state?: Maybe<Scalars['String']>;
    subdivision: Scalars['String'];
    type?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
};

/** The OrgSubDivision Model Object */
export type OrgSubDivisionTypeJoinrequestSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Email?: InputMaybe<Scalars['String']>;
    user_FirstName?: InputMaybe<Scalars['String']>;
    user_Gender?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    user_LastName?: InputMaybe<Scalars['String']>;
    user_MiddleName?: InputMaybe<Scalars['String']>;
    user_Phone?: InputMaybe<Scalars['String']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

export type OrgSubDivisionTypeConnection = {
    __typename?: 'OrgSubDivisionTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<OrgSubDivisionTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `OrgSubDivisionType` and its cursor. */
export type OrgSubDivisionTypeEdge = {
    __typename?: 'OrgSubDivisionTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<OrgSubDivisionType>;
};

/** An Organization Payment API Model Object */
export type OrganizationPaymentApiType = Node & {
    __typename?: 'OrganizationPaymentAPIType';
    /** The ID of the object. */
    id: Scalars['ID'];
    livePublicKey?: Maybe<Scalars['String']>;
    liveSecretKey?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    platform?: Maybe<Scalars['String']>;
    testPublicKey?: Maybe<Scalars['String']>;
    testSecretKey?: Maybe<Scalars['String']>;
};

export type OrganizationPaymentApiTypeConnection = {
    __typename?: 'OrganizationPaymentAPITypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<OrganizationPaymentApiTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `OrganizationPaymentAPIType` and its cursor. */
export type OrganizationPaymentApiTypeEdge = {
    __typename?: 'OrganizationPaymentAPITypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<OrganizationPaymentApiType>;
};

export type OrganizationType = Node & {
    __typename?: 'OrganizationType';
    /** Popular name you are called in a short form */
    abbrev: Scalars['String'];
    /** Data about the Organization: Vision, Mission, etc */
    about?: Maybe<Scalars['String']>;
    /** The Membership renewal rate in naira */
    amount?: Maybe<Scalars['Decimal']>;
    announcements: AnnouncementTypeConnection;
    assignmentSet: AssignmentTypeConnection;
    /** Takes Attendance of people at meetings */
    attendance?: Maybe<Scalars['Boolean']>;
    attendances: AttendanceWithAttendanceCountTypeConnection;
    conferencepaymentSet: ConferencePaymentWithMembershipDetailsTypeConnection;
    conferenceregistrationSet: ConferenceRegistrationWithRelatedPaymentTypeConnection;
    courseSet: CourseTypeConnection;
    created: Scalars['DateTime'];
    createdBy?: Maybe<UserType>;
    donationSet: DonationTypeConnection;
    email?: Maybe<Scalars['String']>;
    enrollmentSet: EnrollmentTypeConnection;
    events: MeetingWithEventRegistrationsTypeConnection;
    executiveSet: ExecutiveTypeConnection;
    facebook?: Maybe<Scalars['String']>;
    faqs: WebsiteFaqTypeConnection;
    hearaboutusOrganization: HowDidYouHearAboutUsTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    /** Members automatically join when they request to join */
    join?: Maybe<Scalars['Boolean']>;
    leadershipcategorySet: LeadershipCategoryTypeConnection;
    leadershippositionSet: LeadershipPositionTypeConnection;
    linkedin?: Maybe<Scalars['String']>;
    meetingcategorySet: MeetingCategoryTypeConnection;
    /** Keeps minutes of meetings during meetings */
    minutes?: Maybe<Scalars['Boolean']>;
    /** Has recurring monthly meetings (e.g. OGM) */
    monthly?: Maybe<Scalars['Boolean']>;
    myOrg: JoinRequestTypeConnection;
    name: Scalars['String'];
    officeAddress?: Maybe<Scalars['String']>;
    org: MemberInvitationTypeConnection;
    orgMembershippayments: MembershipPaymentTypeConnection;
    orgMembershiptypes: Array<OrgMembershipType>;
    orgadminSet: OrgAdminTypeConnection;
    orgadmininvitationSet: OrgAdminInvitationTypeConnection;
    organizationpaymentapikeysSet: OrganizationPaymentApiTypeConnection;
    orgsubdivisionSet: OrgSubDivisionTypeConnection;
    phone?: Maybe<Scalars['String']>;
    photoUrl?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    pollAnswers: AnswerTypeConnection;
    pollCandidates: CandidateTypeConnection;
    pollQuestions: QuestionTypeConnection;
    polls: PollTypeConnection;
    presentationSet: PresentationTypeConnection;
    presenters: PresenterTypeConnection;
    publicationcategorySet: PublicationCategoryTypeConnection;
    publications: PublicationTypeConnection;
    refereeSet: RefereeTypeConnection;
    resourceSet: ResourceTypeConnection;
    /** Mother Organization */
    selfie: OrganizationTypeConnection;
    /** You can use your domain name here without the TLD */
    slug: Scalars['String'];
    specialtySet: SpecialtyTypeConnection;
    sponsorSet: SponsorTypeConnection;
    storeWebsite: WebsiteTypeConnection;
    subspecialtySet: SubSpecialtyTypeConnection;
    /** Mother Organization */
    superbody?: Maybe<OrganizationType>;
    telegram?: Maybe<Scalars['Int']>;
    ticketSet: TicketTypeConnection;
    timezone: Scalars['String'];
    twitter?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    uuid: Scalars['UUID'];
    /** Uncheck if creating a super body with child organizations underneath */
    visible?: Maybe<Scalars['Boolean']>;
    websiteImages: WebsiteImageTypeConnection;
    /** Has recurring annual meetings (e.g. AGM) */
    yearly?: Maybe<Scalars['Boolean']>;
};

export type OrganizationTypeAnnouncementsArgs = {
    after?: InputMaybe<Scalars['String']>;
    announcementType?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    body?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    organization_Slug?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypeAssignmentSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    assignmentName?: InputMaybe<Scalars['String']>;
    author_Id?: InputMaybe<Scalars['Float']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    dueDate?: InputMaybe<Scalars['Date']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    startDate?: InputMaybe<Scalars['Date']>;
};

export type OrganizationTypeAttendancesArgs = {
    after?: InputMaybe<Scalars['String']>;
    attendanceCode?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeConferencepaymentSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type OrganizationTypeConferenceregistrationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeCourseSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    courseName?: InputMaybe<Scalars['String']>;
    creator_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    physicalClass?: InputMaybe<Scalars['Boolean']>;
    slug?: InputMaybe<Scalars['String']>;
    startDate?: InputMaybe<Scalars['Date']>;
    startTime?: InputMaybe<Scalars['Time']>;
    tutor?: InputMaybe<Scalars['String']>;
    virtualClass?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationTypeDonationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypeEnrollmentSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    refundStatus?: InputMaybe<Scalars['Boolean']>;
    student_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeEventsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type OrganizationTypeExecutiveSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    current?: InputMaybe<Scalars['Boolean']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    position_Id?: InputMaybe<Scalars['Float']>;
    startTenure?: InputMaybe<Scalars['Date']>;
};

export type OrganizationTypeFaqsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    createdBy_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeHearaboutusOrganizationArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

export type OrganizationTypeLeadershipcategorySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeLeadershippositionSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    position?: InputMaybe<Scalars['String']>;
    rank?: InputMaybe<Scalars['Int']>;
};

export type OrganizationTypeMeetingcategorySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeMyOrgArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Email?: InputMaybe<Scalars['String']>;
    user_FirstName?: InputMaybe<Scalars['String']>;
    user_Gender?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    user_LastName?: InputMaybe<Scalars['String']>;
    user_MiddleName?: InputMaybe<Scalars['String']>;
    user_Phone?: InputMaybe<Scalars['String']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationTypeOrgArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    firstName?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    used?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationTypeOrgMembershippaymentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    membershipType_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeOrgadminSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    creator?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    user?: InputMaybe<Scalars['ID']>;
};

export type OrganizationTypeOrgadmininvitationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
};

export type OrganizationTypeOrganizationpaymentapikeysSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    platform?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypeOrgsubdivisionSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    chairperson?: InputMaybe<Scalars['String']>;
    dateOfInauguration?: InputMaybe<Scalars['Date']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meetingDaysTime?: InputMaybe<Scalars['String']>;
    meetingVenue?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    subdivision?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypePollAnswersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypePollCandidatesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypePollQuestionsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypePollsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    pollType?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypePresentationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    author?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypePresentersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypePublicationcategorySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypePublicationsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypeRefereeSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    number?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeResourceSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    ordering?: InputMaybe<Scalars['Int']>;
    resourceName?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypeSelfieArgs = {
    abbrev?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    myOrg_Approved?: InputMaybe<Scalars['Boolean']>;
    myOrg_Blocked?: InputMaybe<Scalars['Boolean']>;
    myOrg_User?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypeSpecialtySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeSponsorSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type OrganizationTypeStoreWebsiteArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    customDomain?: InputMaybe<Scalars['String']>;
    event?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org?: InputMaybe<Scalars['ID']>;
    subDomain?: InputMaybe<Scalars['String']>;
};

export type OrganizationTypeSubspecialtySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    specialty_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeTicketSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    earlyBirdDeadline?: InputMaybe<Scalars['Date']>;
    earlyBirdFee?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    lateBirdFee?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeWebsiteImagesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type OrganizationTypeConnection = {
    __typename?: 'OrganizationTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<OrganizationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `OrganizationType` and its cursor. */
export type OrganizationTypeEdge = {
    __typename?: 'OrganizationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<OrganizationType>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
    __typename?: 'PageInfo';
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean'];
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']>;
};

export type PaidEventRegistration = {
    __typename?: 'PaidEventRegistration';
    error?: Maybe<Scalars['String']>;
    payment?: Maybe<ConferencePaymentType>;
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User may not be verified.
 */
export type PasswordChangeWithoutVerification = {
    __typename?: 'PasswordChangeWithoutVerification';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    refreshToken?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
    token?: Maybe<Scalars['String']>;
};

export type PasswordReset = {
    __typename?: 'PasswordReset';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    success?: Maybe<Scalars['Boolean']>;
};

export enum PeriodType {
    Monthly = 'MONTHLY',
    Yearly = 'YEARLY',
}

export type PollEntryInputObjectType = {
    /** Answer Id */
    answerId?: InputMaybe<Scalars['ID']>;
    /** Candidate Id */
    candidateId?: InputMaybe<Scalars['ID']>;
    /** Poll Id */
    pollId: Scalars['ID'];
};

/** The Poll Entry Model Object */
export type PollEntryType = Node & {
    __typename?: 'PollEntryType';
    answer?: Maybe<AnswerType>;
    candidate?: Maybe<CandidateType>;
    createdAt: Scalars['DateTime'];
    /** The ID of the object. */
    id: Scalars['ID'];
    poll?: Maybe<PollType>;
    voter?: Maybe<UserType>;
};

export type PollEntryTypeConnection = {
    __typename?: 'PollEntryTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<PollEntryTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `PollEntryType` and its cursor. */
export type PollEntryTypeEdge = {
    __typename?: 'PollEntryTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<PollEntryType>;
};

export type PollInputObjectType = {
    /** Setting: allow selection of multiple options */
    allowSelectionOfMultipleOptions?: InputMaybe<Scalars['Boolean']>;
    /** Poll Decision */
    decision?: InputMaybe<Scalars['String']>;
    /** Document for Poll */
    document?: InputMaybe<Scalars['Upload']>;
    /** Poll End Date */
    endDate: Scalars['Date'];
    /** Poll End Time */
    endTime: Scalars['Time'];
    /** Input Type: multiple-choice || multiple-choice-with-image */
    inputType: Scalars['String'];
    /** Poll Name */
    name: Scalars['String'];
    /** Poll Type: electoral-purpose || decision-poll || meeting-poll */
    pollType: Scalars['String'];
    /** Poll Visibility: public || not-public */
    pollVisibility: Scalars['String'];
    /** Setting: require participants name */
    requireParticipantsName?: InputMaybe<Scalars['Boolean']>;
    /** Poll Result Visibility: always-public || public-after-end-date || public-after-vote || not-public */
    resultVisibility: Scalars['String'];
    /** Poll Start Date */
    startDate: Scalars['Date'];
    /** Poll Start Time */
    startTime: Scalars['Time'];
    /** Poll Status: published || draft */
    status: Scalars['String'];
};

/** The Poll Model Object */
export type PollType = Node & {
    __typename?: 'PollType';
    allowSelectionOfMultipleOptions: Scalars['Boolean'];
    answers: AnswerTypeConnection;
    candidates: CandidateTypeConnection;
    createdAt: Scalars['DateTime'];
    /** A further explanation of what the poll is about */
    decision?: Maybe<Scalars['String']>;
    document?: Maybe<Scalars['String']>;
    documentUrl?: Maybe<Scalars['String']>;
    /** The date this poll will become closed and not receive votes */
    endDate?: Maybe<Scalars['Date']>;
    /** The time this poll will become closed and not receive votes */
    endTime?: Maybe<Scalars['Time']>;
    entries: PollEntryTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    inputType: EvotingPollInputTypeChoices;
    name: Scalars['String'];
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    pollType: EvotingPollPollTypeChoices;
    pollVisibility: EvotingPollPollVisibilityChoices;
    question?: Maybe<QuestionType>;
    requireParticipantsName: Scalars['Boolean'];
    resultVisibility: EvotingPollResultVisibilityChoices;
    slug: Scalars['String'];
    /** The date this poll will go live and receive votes */
    startDate?: Maybe<Scalars['Date']>;
    /** The time this poll will go live and receive votes */
    startTime?: Maybe<Scalars['Time']>;
    state: EvotingPollStateChoices;
    status: EvotingPollStatusChoices;
    updatedAt: Scalars['DateTime'];
};

/** The Poll Model Object */
export type PollTypeAnswersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

/** The Poll Model Object */
export type PollTypeCandidatesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

/** The Poll Model Object */
export type PollTypeEntriesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type PollTypeConnection = {
    __typename?: 'PollTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<PollTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `PollType` and its cursor. */
export type PollTypeEdge = {
    __typename?: 'PollTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<PollType>;
};

/** The Poll Model Object with fields Candidates, Answers for Result & Counts */
export type PollTypeForResults = {
    __typename?: 'PollTypeForResults';
    /** Answers with counts of poll entries */
    answers?: Maybe<Scalars['GenericScalar']>;
    /** Candidates with counts of poll entries */
    candidates?: Maybe<Scalars['GenericScalar']>;
    /** The poll object */
    poll?: Maybe<PollType>;
};

export type PollWithParticipatedFieldConnection = {
    __typename?: 'PollWithParticipatedFieldConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<PollWithParticipatedFieldEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `PollWithParticipatedField` and its cursor. */
export type PollWithParticipatedFieldEdge = {
    __typename?: 'PollWithParticipatedFieldEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<PollWithParticipatedFieldType>;
};

export type PollWithParticipatedFieldType = Node & {
    __typename?: 'PollWithParticipatedFieldType';
    /** The ID of the object. */
    id: Scalars['ID'];
    participated?: Maybe<Scalars['Boolean']>;
    /** The poll object */
    poll?: Maybe<PollType>;
    pollEntries?: Maybe<Scalars['String']>;
};

/**
 * The Poll type with Poll Entries count field
 *
 * Args:
 *     None
 *
 * Returns:
 *     PollType: The poll type
 *     String: The count of poll entries for a particular poll
 */
export type PollWithPollEntriesType = {
    __typename?: 'PollWithPollEntriesType';
    /** The poll object */
    poll?: Maybe<PollType>;
    pollEntries?: Maybe<Scalars['String']>;
};

export type PotentialClientMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    email: Scalars['String'];
    fullname: Scalars['String'];
    organization: Scalars['String'];
    phonenumber: Scalars['String'];
};

/** Create a Potential Client */
export type PotentialClientMutationPayload = {
    __typename?: 'PotentialClientMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    fullname?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    phonenumber?: Maybe<Scalars['String']>;
};

export type PotentialClientType = {
    __typename?: 'PotentialClientType';
    email: Scalars['String'];
    fullname: Scalars['String'];
    id: Scalars['ID'];
    organization: Scalars['String'];
    phonenumber: Scalars['String'];
};

export type PresentationInputObjectType = {
    /** Presentation summary */
    abstract?: InputMaybe<Scalars['String']>;
    /** Link to presentation */
    externalUpload?: InputMaybe<Scalars['String']>;
    /** Presentation document */
    file?: InputMaybe<Scalars['Upload']>;
    /** Presentation title */
    title: Scalars['String'];
};

/** The Presentation object */
export type PresentationType = Node & {
    __typename?: 'PresentationType';
    abstract: Scalars['String'];
    /** If the author is a member, select author from the list */
    author: PresenterTypeConnection;
    created: Scalars['DateTime'];
    /** If presentation document is uploaded on another service, paste link here so that members can download it */
    externalUpload?: Maybe<Scalars['String']>;
    /** Upload PDF or Power point presentation document */
    file: Scalars['String'];
    fileUrl?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    meeting?: Maybe<MeetingWithEventRegistrationsType>;
    org?: Maybe<OrganizationType>;
    pk?: Maybe<Scalars['ID']>;
    slug?: Maybe<Scalars['String']>;
    title: Scalars['String'];
    updated: Scalars['DateTime'];
    /** This is the count of the number of views/ downloads of this document */
    view: Scalars['Int'];
};

/** The Presentation object */
export type PresentationTypeAuthorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type PresentationTypeConnection = {
    __typename?: 'PresentationTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<PresentationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `PresentationType` and its cursor. */
export type PresentationTypeEdge = {
    __typename?: 'PresentationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<PresentationType>;
};

export type PresenterInputObjectType = {
    /** Presenter Name */
    name?: InputMaybe<Scalars['String']>;
    /** Presenter Picture */
    picture?: InputMaybe<Scalars['Upload']>;
    /** Presenter Portfolio */
    portfolio?: InputMaybe<Scalars['String']>;
};

/** The Presenter object */
export type PresenterType = Node & {
    __typename?: 'PresenterType';
    created: Scalars['DateTime'];
    /** The ID of the object. */
    id: Scalars['ID'];
    meeting?: Maybe<MeetingWithEventRegistrationsType>;
    /** If the author is not a member */
    name?: Maybe<Scalars['String']>;
    org?: Maybe<OrganizationType>;
    person?: Maybe<UserType>;
    photoUrl?: Maybe<Scalars['String']>;
    picture?: Maybe<Scalars['String']>;
    pk?: Maybe<Scalars['ID']>;
    /** The Presenter's bio, qualifications, education, etc */
    portfolio?: Maybe<Scalars['String']>;
    /** If the author is a member, select author from the list */
    presentationSet: PresentationTypeConnection;
    slug?: Maybe<Scalars['String']>;
    speaker: ScheduleTypeConnection;
    updated: Scalars['DateTime'];
};

/** The Presenter object */
export type PresenterTypePresentationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    author?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The Presenter object */
export type PresenterTypeSpeakerArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    location?: InputMaybe<Scalars['String']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type PresenterTypeConnection = {
    __typename?: 'PresenterTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<PresenterTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `PresenterType` and its cursor. */
export type PresenterTypeEdge = {
    __typename?: 'PresenterTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<PresenterType>;
};

/** ProfileDocument model type definition */
export type ProfileDocumentType = Node & {
    __typename?: 'ProfileDocumentType';
    /** Upload size of file should be a maximum of 5MB */
    cacCertificate?: Maybe<Scalars['String']>;
    cacCertificateUrl?: Maybe<Scalars['String']>;
    /** Upload size of file should be a maximum of 5MB */
    companyProfile?: Maybe<Scalars['String']>;
    companyProfileUrl?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    /** Upload size of file should be a maximum of 5MB */
    other?: Maybe<Scalars['String']>;
    otherUrl?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    /** Upload size of file should be a maximum of 5MB */
    taxClearance?: Maybe<Scalars['String']>;
    taxClearanceUrl?: Maybe<Scalars['String']>;
    user?: Maybe<UserType>;
};

export type ProfileDocumentTypeConnection = {
    __typename?: 'ProfileDocumentTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<ProfileDocumentTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `ProfileDocumentType` and its cursor. */
export type ProfileDocumentTypeEdge = {
    __typename?: 'ProfileDocumentTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<ProfileDocumentType>;
};

export type PublicationCategoryMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    name: Scalars['String'];
    organization?: InputMaybe<Scalars['String']>;
};

/** Create/ Update an organization Publication Category */
export type PublicationCategoryMutationPayload = {
    __typename?: 'PublicationCategoryMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
};

/** The PublicationCategory Model Object */
export type PublicationCategoryType = Node & {
    __typename?: 'PublicationCategoryType';
    description?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    name: Scalars['String'];
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    publicationSet: PublicationTypeConnection;
};

/** The PublicationCategory Model Object */
export type PublicationCategoryTypePublicationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

export type PublicationCategoryTypeConnection = {
    __typename?: 'PublicationCategoryTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<PublicationCategoryTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `PublicationCategoryType` and its cursor. */
export type PublicationCategoryTypeEdge = {
    __typename?: 'PublicationCategoryTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<PublicationCategoryType>;
};

/** Create a Publication for an org */
export type PublicationCreateMutation = {
    __typename?: 'PublicationCreateMutation';
    publication?: Maybe<PublicationType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** Delete an organization Publication */
export type PublicationDeleteMutation = {
    __typename?: 'PublicationDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/** The Publication object */
export type PublicationType = Node & {
    __typename?: 'PublicationType';
    abstract: Scalars['String'];
    /** How much to pay if it is a paid download */
    amountPayable?: Maybe<Scalars['Decimal']>;
    amountPayableCurrency: Scalars['String'];
    category?: Maybe<PublicationCategoryType>;
    created: Scalars['DateTime'];
    /** If presentation document is uploaded on another service, paste link here so that members can download it */
    externalUpload?: Maybe<Scalars['String']>;
    /** Upload PDF or Power point presentation document */
    file: Scalars['String'];
    fileUrl?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    organization?: Maybe<OrganizationType>;
    paidDownload: Scalars['Boolean'];
    pk: Scalars['ID'];
    slug?: Maybe<Scalars['String']>;
    title: Scalars['String'];
    updated: Scalars['DateTime'];
    /** This is the count of the number of views/ downloads of this document */
    view: Scalars['Int'];
};

export type PublicationTypeConnection = {
    __typename?: 'PublicationTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<PublicationTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `PublicationType` and its cursor. */
export type PublicationTypeEdge = {
    __typename?: 'PublicationTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<PublicationType>;
};

export type QuestionInputObjectType = {
    /** Poll Question */
    question: Scalars['String'];
};

/** The Poll Question Model Object */
export type QuestionType = Node & {
    __typename?: 'QuestionType';
    createdAt: Scalars['DateTime'];
    /** The ID of the object. */
    id: Scalars['ID'];
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    poll?: Maybe<PollType>;
    question: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type QuestionTypeConnection = {
    __typename?: 'QuestionTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<QuestionTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `QuestionType` and its cursor. */
export type QuestionTypeEdge = {
    __typename?: 'QuestionTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<QuestionType>;
};

export type RefereeMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    middleName?: InputMaybe<Scalars['String']>;
    number?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    /** Write in international phone no format (+234 or +41) */
    phone?: InputMaybe<Scalars['String']>;
    user: Scalars['String'];
};

/**
 * Create multiple referees for a user of an organization.
 * Note each organization would require a different set of references.
 */
export type RefereeMutationPayload = {
    __typename?: 'RefereeMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    firstName?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    lastName?: Maybe<Scalars['String']>;
    middleName?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    /** Write in international phone no format (+234 or +41) */
    phone?: Maybe<Scalars['String']>;
    user?: Maybe<Scalars['String']>;
};

/** An Organization Referee Model Object */
export type RefereeType = Node & {
    __typename?: 'RefereeType';
    email: Scalars['String'];
    firstName: Scalars['String'];
    /** The ID of the object. */
    id: Scalars['ID'];
    lastName: Scalars['String'];
    middleName: Scalars['String'];
    number?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    /** Write in international phone no format (+234 or +41) */
    phone?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    user: UserType;
};

export type RefereeTypeConnection = {
    __typename?: 'RefereeTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<RefereeTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `RefereeType` and its cursor. */
export type RefereeTypeEdge = {
    __typename?: 'RefereeTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<RefereeType>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
    __typename?: 'RefreshToken';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    payload?: Maybe<Scalars['GenericScalar']>;
    refreshToken?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
    token?: Maybe<Scalars['String']>;
};

export type RegisterUser = {
    __typename?: 'RegisterUser';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    refreshToken?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
    token?: Maybe<Scalars['String']>;
};

export type RegisterUserByOrganization = {
    __typename?: 'RegisterUserByOrganization';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    refreshToken?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
    token?: Maybe<Scalars['String']>;
};

export type ResendActivationEmail = {
    __typename?: 'ResendActivationEmail';
    error?: Maybe<Scalars['String']>;
    ok?: Maybe<Scalars['Boolean']>;
};

export type ResourceInputObjectType = {
    /** Resource description */
    resourceDescription?: InputMaybe<Scalars['String']>;
    /** File associated with resource */
    resourceFile?: InputMaybe<Scalars['Upload']>;
    /** Resource name */
    resourceName?: InputMaybe<Scalars['String']>;
    /** URL to resource */
    resourceUrl?: InputMaybe<Scalars['String']>;
};

/** The Resource Model Object */
export type ResourceType = Node & {
    __typename?: 'ResourceType';
    course: CourseType;
    created: Scalars['DateTime'];
    /** The ID of the object. */
    id: Scalars['ID'];
    ordering?: Maybe<Scalars['Int']>;
    organization?: Maybe<OrganizationType>;
    pk?: Maybe<Scalars['ID']>;
    resourceDescription?: Maybe<Scalars['String']>;
    resourceFile?: Maybe<Scalars['String']>;
    resourceFileUrl?: Maybe<Scalars['String']>;
    resourceName: Scalars['String'];
    resourceUrl?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
};

export type ResourceTypeConnection = {
    __typename?: 'ResourceTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<ResourceTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `ResourceType` and its cursor. */
export type ResourceTypeEdge = {
    __typename?: 'ResourceTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<ResourceType>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
    __typename?: 'RevokeToken';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    revoked?: Maybe<Scalars['Int']>;
    success?: Maybe<Scalars['Boolean']>;
};

export type RootMutation = {
    __typename?: 'RootMutation';
    /** Delete an AcademicRecord */
    academicRecordDelete?: Maybe<AcademicRecordDeleteMutation>;
    /** Add debt to user account, for user to pay up. */
    adminAddDebtForMember?: Maybe<AdminAddDebtForMemberOrganizationMutation>;
    /**
     * Approve user to join an organization and set the organization (certificate) number
     *  Sends an email informing the user that their membership application was successful
     */
    adminApproveApplication?: Maybe<AdminApproveNewMemberToJoinOrganizationMutation>;
    /** An admin can check in an attendee for an event */
    adminCheckInAttendee?: Maybe<AdminCheckInAttendeeForEvent>;
    /** Contact user to with more message about joining an organization */
    adminContactAboutApplication?: Maybe<AdminContactNewMemberAboutOrganizationMutation>;
    adminCreateCourseAssignments?: Maybe<AdminCreateCourseAssignmentsMutation>;
    adminCreateCourseResources?: Maybe<AdminCreateCourseResourceMutation>;
    /** Create one or more presentations for an event */
    adminCreateEventPresentations?: Maybe<AdminCreateEventPresentations>;
    /** An admin can create presenter(s) for an event/conference */
    adminCreateEventPresenters?: Maybe<AdminCreateEventPresenters>;
    /** An admin can create schedule(s) for an event/conference */
    adminCreateEventSchedules?: Maybe<AdminCreateEventSchedules>;
    /**
     * An admin can only create a poll for an organization
     *
     * Args:
     *     Check graphene docs to see args specification
     */
    adminCreatePoll?: Maybe<AdminCreatePoll>;
    /**
     * An admin can create candidates in bulk
     *
     * Args:
     *     graphene (List): CandidateInputObjectType, required=False
     */
    adminCreatePollCandidates?: Maybe<AdminCreatePollCandidates>;
    /** Create a Publication for an org */
    adminCreatePublication?: Maybe<PublicationCreateMutation>;
    /** An admin can create/ update a course's assignment */
    adminCreateUpdateAssignment?: Maybe<AdminCreateUpdateAssignmentMutationPayload>;
    /** An admin can create and update a conference basic data */
    adminCreateUpdateConferenceBasicData?: Maybe<AdminCreateUpdateConferenceBasicDataMutationPayload>;
    /** An admin can create a course for an organization */
    adminCreateUpdateCourse?: Maybe<AdminCreateUpdateCourseMutation>;
    /** An admin can be able to create/update an event's attendance session data */
    adminCreateUpdateEventAttendances?: Maybe<AdminCreateUpdateEventAttendancesMutationPayload>;
    adminCreateUpdateEventDocuments?: Maybe<AdminCreateUpdateEventDocumentsMutation>;
    /** Create and Update an Meeting Image */
    adminCreateUpdateEventImage?: Maybe<AdminCreateUpdateEventImageMutation>;
    /**
     * An admin can create/update an event's social DP banner.
     * Note: An event can only have one entry/record for it's social dp banner.
     */
    adminCreateUpdateEventSocialDpBanner?: Maybe<AdminCreateUpdateEventSocialDpBanner>;
    /** Create/ Update an organization Publication Category */
    adminCreateUpdatePublicationCategory?: Maybe<PublicationCategoryMutationPayload>;
    /** An admin can delete a course assignment */
    adminDeleteAssignment?: Maybe<AdminAssignmentDeleteMutation>;
    /** An admin can delete a Course */
    adminDeleteCourse?: Maybe<AdminCourseDeleteMutation>;
    adminDeleteEventAttendance?: Maybe<AdminDeleteEventAttendanceMutation>;
    /** An admin can delete a Presentation */
    adminDeleteEventPresentation?: Maybe<AdminDeleteEventPresentation>;
    /** An admin can delete a Presenter */
    adminDeleteEventPresenter?: Maybe<AdminDeleteEventPresenter>;
    /** An admin can delete an event schedule */
    adminDeleteEventSchedule?: Maybe<AdminDeleteEventSchedule>;
    /** Create an Executive for an org */
    adminExecutive?: Maybe<ExecutiveCreateUpdateMutation>;
    /** Delete an organization Executive */
    adminExecutiveDelete?: Maybe<ExecutiveDeleteMutation>;
    /** Upload an Executive Photo */
    adminExecutivePhotoUpload?: Maybe<ExecutivePhotoUploadMutation>;
    /** Create/ Update an organization Leadership Category */
    adminLeadershipCategory?: Maybe<LeadershipCategoryCreateUpdateMutationPayload>;
    /** Delete an organization Leadership Category */
    adminLeadershipCategoryDelete?: Maybe<LeadershipCategoryDeleteMutation>;
    /** Create/ Update an organization Leadership Position */
    adminLeadershipPosition?: Maybe<LeadershipPositionCreateUpdateMutationPayload>;
    /** Delete an organization Leadership Position */
    adminLeadershipPositionDelete?: Maybe<LeadershipPositionDeleteMutation>;
    /** Create records for conference offline registration and payment */
    adminOfflineConferenceRegistrationAndPayment?: Maybe<AdminOfflineConferenceRegistrationAndPayment>;
    /** Delete an organization Publication */
    adminPublicationDelete?: Maybe<PublicationDeleteMutation>;
    /** Reject user to join an organization */
    adminRejectApplication?: Maybe<AdminRejectNewMemberToJoinOrganizationMutation>;
    /** Create/ Update an organization Specialty */
    adminSpecialty?: Maybe<SpecialtyCreateUpdateMutationPayload>;
    /** Delete an organization Specialty */
    adminSpecialtyDelete?: Maybe<SpecialtyDeleteMutation>;
    /** Create/ Update an organization Sub Specialty */
    adminSubSpecialty?: Maybe<SubSpecialtyCreateUpdateMutationPayload>;
    /** Delete an organization Sub Specialty */
    adminSubSpecialtyDelete?: Maybe<SubSpecialtyDeleteMutation>;
    /**
     * And admin can take attendance of either a member or non-member of an organization for an event/conference.
     * Arguments:
     * - eventId
     * - and other required arguments
     */
    adminTakeAttendanceForAttendee?: Maybe<AdminTakeAttendanceForAttendee>;
    adminUpdateCourseResource?: Maybe<AdminUpdateCourseResourceMutation>;
    /** Update an events logo */
    adminUpdateEventLogo?: Maybe<AdminUpdateEventLogo>;
    /** Create/ Update an organization Website FAQ */
    adminWebsiteFaq?: Maybe<WebsiteFaqCreateUpdateMutationPayload>;
    /** Delete an organization Website FAQ */
    adminWebsiteFaqDelete?: Maybe<WebsiteFaqDeleteMutation>;
    /** Create/ Update a Announcement for an org */
    announcement?: Maybe<AnnouncementCreateUpdateMutationPayload>;
    /** Delete an Announcement */
    announcementDelete?: Maybe<AnnouncementDeleteMutation>;
    /** Create and Update an Announcement Image */
    announcementImage?: Maybe<AnnouncementImageUploadMutation>;
    /**
     * Archive account and revoke refresh tokens.
     *
     * User must be verified and confirm password.
     */
    archiveAccount?: Maybe<ArchiveAccount>;
    /**
     * A user registered member can cast vote for a poll
     *
     * Args:
     *     graphene (PollEntryInputObjectType): A poll entry input object type
     *     graphene (ID): organizationId
     */
    castPollVote?: Maybe<CastPollVote>;
    /**
     * This check if a user has atleast a join request application with either any membership status,
     * if none, it creates a join request.
     *
     * Args:
     *     graphene (ID): user_id - The User Id
     *     graphene (ID): org_id - The Organization Id
     *     graphene (ID): membership_type_id - The Membership Type Id. This should only be provided from a reliable source of truth,
     *     either entered by the user or from membership payment
     *
     * Returns:
     *     Boolean: sucess - Expects to return True in all cases in the function execution.
     */
    checkIfUserIsMemberElseCreateJoinRequest?: Maybe<CheckIfUserIsMemberElseCreateJoinRequest>;
    /** Undo the attendance taken for a user for an event */
    checkOutMember?: Maybe<CheckOutMemberForEvent>;
    /**
     * Checks if email belongs to
     * a member or already registered
     */
    checkRegistrationEmail?: Maybe<ConferenceRegistrationEmailCheckMutation>;
    /** Generates an image appended with user's provided photo */
    conferenceGetDp?: Maybe<ConferenceGetDp>;
    /**
     * Validates email has successfully registered and
     * allows them in to the Conference Dashboard
     */
    conferenceLogin?: Maybe<ConferenceLogin>;
    /**
     * Registers both member or non_member for conference/event
     * and indicate the ticket type they're registering with
     */
    conferenceRegistration?: Maybe<ConferenceRegistrationMutationPayload>;
    /** For Offline: create payments record with proof of payments and necessary data */
    confirmConferenceOfflinePayment?: Maybe<ConfirmConferenceOfflinePaymentMutation>;
    /** For Online: create payments record with proof of payments and necessary data */
    confirmConferenceOnlinePayment?: Maybe<ConfirmConferenceOnlinePaymentMutation>;
    /** Create offline payment record with proof of payments and necessary data */
    confirmMembershipOfflinePayment?: Maybe<ConfirmMembershipOfflinePaymentMutation>;
    /** Create online payment record with proof of payments and necessary data */
    confirmMembershipOnlinePayment?: Maybe<ConfirmMembershipOnlinePaymentMutation>;
    /** Sends an email to all org admins in the organization and saves the info */
    contactOrganizationAdmins?: Maybe<ContactOrganizationAdminsMutationPayload>;
    /** Create a Potential Client */
    createClient?: Maybe<PotentialClientMutationPayload>;
    /** Register your interest to attend an event */
    createInterest?: Maybe<CreateInterest>;
    /** Create a schedule for an event */
    createSchedule?: Maybe<CreateSchedule>;
    /**
     * Creates and Updates company_profile, cac_certificate, tax_clearance, other fields for a user in
     * ProfileDocument model. User must be logged in to create/update profile document.
     *
     * Args:
     *     graphene (Upload): company_profile
     *     graphene (Upload): cac_certificate
     *     graphene (Upload): tax_clearance
     *     graphene (Upload): other
     *
     * Returns:
     *     graphene (Boolean): Returns True or False based on operation's success
     */
    createUpdateUserProfileDocuments?: Maybe<CreateUpdateUserProfileDocuments>;
    /**
     * Delete account permanently or make `user.is_active=False`.
     *
     * The behavior is defined on settings.
     * Anyway user refresh tokens are revoked.
     *
     * User must be verified and confirm password.
     */
    deleteAccount?: Maybe<DeleteAccount>;
    /** Create donation for an organization. */
    donate?: Maybe<DonationMutationPayload>;
    /** Download Certificate of an event, based on pre-selected conditions */
    downloadCertificate?: Maybe<DownloadCertificateMutation>;
    /**
     * Download certificate of an event, based on selected category.
     * For the desired category of certficate, the following are the available categories:
     * - participant
     * - volunteer
     * - presenter
     *
     * Categories should be sent in lower-case.
     */
    downloadEventCertificates?: Maybe<DownloadEventCertificatesMutation>;
    /**
     * Prepares and responds with an invitation letter for a member.
     * :arguments - Full name, Address Line 1 and Address Line 2
     */
    downloadInvitationLetter?: Maybe<DownloadInvitationLetterMutation>;
    /** Allow a user to enroll for a course and submit the payment information */
    enrollment?: Maybe<EnrollmentMutationPayload>;
    /** Verify a Google Sign in on the app */
    googleSignIn?: Maybe<GoogleSignIn>;
    /** Allow a user join an organization and submit the necessary information */
    joinOrganization?: Maybe<JoinOrganizationMutationPayload>;
    /**
     * Leave an Organization Mutation.
     * Authenticated user should be able to leave an org
     */
    leaveOrganization?: Maybe<LeaveOrgMutation>;
    /**
     * Obtain JSON web token for given user.
     *
     * Allow to perform login with different fields,
     * and secondary email if set. The fields are
     * defined on settings.
     *
     * Not verified users can login by default. This
     * can be changes on settings.
     *
     * If user is archived, make it unarchive and
     * return `unarchiving=True` on output.
     */
    login?: Maybe<LoginUser>;
    /** Create a Meeting AKA Event for an org */
    meeting?: Maybe<MeetingCreateUpdateMutation>;
    /** Create/ Update an organization event category */
    meetingCategoryCreate?: Maybe<MeetingCategoryUpdateMutationPayload>;
    /** Delete a Meeting */
    meetingDelete?: Maybe<MeetingDeleteMutation>;
    /**
     * Create multiple referees for a user of an organization.
     * Note each organization would require a different set of references.
     */
    memberReferee?: Maybe<RefereeMutationPayload>;
    /** Delete a Referee previously added by the user */
    memberRefereeDelete?: Maybe<DeleteRefereeMutation>;
    /** Sends an email informing the user that their membership application was successful */
    membershipApplicationSubmission?: Maybe<MembershipApplicationSubmission>;
    /** Create NextOfKin information */
    nextOfKin?: Maybe<NextOfKinMutationPayload>;
    /** Delete an NextOfKin */
    nextOfKinDelete?: Maybe<NextOfKinDeleteMutation>;
    /** Update the Notification settings of a User */
    notificationSettings?: Maybe<NotificationSettingsMutation>;
    /** Sends an email informing the user that their membership application was successful */
    nullifyMemberOutstandingPayments?: Maybe<NullifyMemberOutstandingPayments>;
    paidRegistration?: Maybe<PaidEventRegistration>;
    /**
     * Change account password when user knows the old password.
     *
     * A new token and refresh token are sent. User may not be verified.
     */
    passwordChange?: Maybe<PasswordChangeWithoutVerification>;
    passwordReset?: Maybe<PasswordReset>;
    /** Upload Profile Image for a user */
    profilePicture?: Maybe<UserProfilePhoto>;
    /** Same as `grapgql_jwt` implementation, with standard output. */
    refreshToken?: Maybe<RefreshToken>;
    register?: Maybe<RegisterUser>;
    registerByOrganization?: Maybe<RegisterUserByOrganization>;
    resendActivationEmail?: Maybe<ResendActivationEmail>;
    /** Same as `grapgql_jwt` implementation, with standard output. */
    revokeToken?: Maybe<RevokeToken>;
    /** Sends user's message to the community Slack channel */
    sendHelpMessageToCommunity?: Maybe<SendHelpMessageToCommunity>;
    /**
     * Send password reset email.
     * For non verified users, send an activation
     * email instead.
     */
    sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
    /** Create/ Update an OrgSubDivision (chapter) information */
    subdivision?: Maybe<OrgSubDivisionMutationPayload>;
    /** Delete an OrgSubDivision */
    subdivisionDelete?: Maybe<OrgSubDivisionDeleteMutation>;
    /** Allow a user to submit an assignment */
    submitAssignment?: Maybe<SubmittedAssignmentMutationPayload>;
    /** Submit feedback for an attended event */
    submitFeedback?: Maybe<SubmitFeedback>;
    /**
     * Take attendance of either a member or non-member of an organization for an event/conference.
     * Expects a user's session to be passed, if the user is logged in, else it's ignore.
     * Arguments:
     * - An authenticated user object has more priority over the attendee email
     * - If attendee will no authenticated session, provided attendee email.
     */
    takeEventAttendance?: Maybe<TakeEventAttendance>;
    /** Take an excuse for a member of the Org hosting the event */
    takeExcuse?: Maybe<TakeExcuseMutation>;
    /**
     * Update user model fields, defined on settings.
     *
     * User must be verified.
     */
    updateAccount?: Maybe<UpdateAccount>;
    /**
     * Updates a User Bio
     *
     * Args:
     *     graphene (String): _description_
     *
     * Returns:
     *     Boolean: Returns True | False in the Success return field
     */
    updateUserProfileBio?: Maybe<UpdateUserProfileBio>;
    /** Upload certificate for a User Academic Record */
    uploadAcademicCertificate?: Maybe<UploadAcademicRecordCertificate>;
    /** Create/Update a User's Academic Information */
    userAcademicInformation?: Maybe<UserAcademicRecord>;
    /** Create User's work experience record */
    userWorkExperience?: Maybe<UserWorkExperienceMutationPayload>;
    /** Delete a User's Work Experience */
    userWorkExperienceDelete?: Maybe<WorkExperienceDeleteMutation>;
    /**
     * Verify user account.
     *
     * Receive the token that was sent by email.
     * If the token is valid, make the user verified
     * by making the `user.status.verified` field true.
     */
    verifyAccount?: Maybe<VerifyAccount>;
    /**
     * Verify user account.
     *
     * Receive the token that was sent by email.
     * If the token is valid, make the user verified
     * by making the `user.status.verified` field true.
     */
    verifyAccountByOrganization?: Maybe<VerifyAccountByOrganization>;
    /** Verify reset password token sent to user email. */
    verifyPasswordResetToken?: Maybe<VerifyResetPasswordToken>;
    /** Same as `grapgql_jwt` implementation, with standard output. */
    verifyToken?: Maybe<VerifyToken>;
};

export type RootMutationAcademicRecordDeleteArgs = {
    id: Scalars['ID'];
};

export type RootMutationAdminAddDebtForMemberArgs = {
    debtAmount: Scalars['Int'];
    debtReason: Scalars['String'];
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
};

export type RootMutationAdminApproveApplicationArgs = {
    organizationId: Scalars['ID'];
    organizationNumber?: InputMaybe<Scalars['String']>;
    userId: Scalars['ID'];
};

export type RootMutationAdminCheckInAttendeeArgs = {
    attendeeEmail: Scalars['String'];
    eventId?: InputMaybe<Scalars['ID']>;
    eventSlug?: InputMaybe<Scalars['String']>;
    organizationId: Scalars['ID'];
};

export type RootMutationAdminContactAboutApplicationArgs = {
    message: Scalars['String'];
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
};

export type RootMutationAdminCreateCourseAssignmentsArgs = {
    assignments?: InputMaybe<Array<InputMaybe<AssignmentSerializerInputObjectType>>>;
    courseId: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationAdminCreateCourseResourcesArgs = {
    courseId: Scalars['ID'];
    organizationId: Scalars['ID'];
    resources: Array<InputMaybe<ResourceInputObjectType>>;
};

export type RootMutationAdminCreateEventPresentationsArgs = {
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
    presentations: Array<InputMaybe<PresentationInputObjectType>>;
};

export type RootMutationAdminCreateEventPresentersArgs = {
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
    presenters: Array<InputMaybe<PresenterInputObjectType>>;
};

export type RootMutationAdminCreateEventSchedulesArgs = {
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
    schedules: Array<InputMaybe<ScheduleSerializerInputObjectType>>;
};

export type RootMutationAdminCreatePollArgs = {
    answers?: InputMaybe<Array<InputMaybe<AnswerInputObjectType>>>;
    candidates?: InputMaybe<Array<InputMaybe<CandidateInputObjectType>>>;
    organizationId: Scalars['ID'];
    poll?: InputMaybe<PollInputObjectType>;
    question?: InputMaybe<QuestionInputObjectType>;
};

export type RootMutationAdminCreatePublicationArgs = {
    abstract?: InputMaybe<Scalars['String']>;
    amountPayable?: InputMaybe<Scalars['Int']>;
    categoryId: Scalars['ID'];
    externalUploadLink?: InputMaybe<Scalars['String']>;
    file?: InputMaybe<Scalars['Upload']>;
    id?: InputMaybe<Scalars['Int']>;
    isPaidDownload?: InputMaybe<Scalars['Boolean']>;
    organizationId: Scalars['ID'];
    title: Scalars['String'];
};

export type RootMutationAdminCreateUpdateAssignmentArgs = {
    input: AdminCreateUpdateAssignmentMutationInput;
};

export type RootMutationAdminCreateUpdateConferenceBasicDataArgs = {
    input: AdminCreateUpdateConferenceBasicDataMutationInput;
};

export type RootMutationAdminCreateUpdateCourseArgs = {
    input?: InputMaybe<CourseSerializerInputObjectType>;
};

export type RootMutationAdminCreateUpdateEventAttendancesArgs = {
    input: AdminCreateUpdateEventAttendancesMutationInput;
};

export type RootMutationAdminCreateUpdateEventDocumentsArgs = {
    certificate?: InputMaybe<Scalars['Upload']>;
    eventId: Scalars['ID'];
    invitationLetter?: InputMaybe<Scalars['Upload']>;
    organizationId: Scalars['ID'];
};

export type RootMutationAdminCreateUpdateEventImageArgs = {
    eventId: Scalars['ID'];
    eventImage: Scalars['Upload'];
    organizationId: Scalars['ID'];
    removeImage?: InputMaybe<Scalars['Boolean']>;
};

export type RootMutationAdminCreateUpdateEventSocialDpBannerArgs = {
    avatarImageAreaHeight: Scalars['Float'];
    avatarImageAreaWidth: Scalars['Float'];
    avatarImageXCoord: Scalars['Float'];
    avatarImageYCoord: Scalars['Float'];
    bannerImage: Scalars['Upload'];
    eventId: Scalars['ID'];
    eventSocialDpBannerId?: InputMaybe<Scalars['ID']>;
    nameTextXCoord: Scalars['Float'];
    nameTextYCoord: Scalars['Float'];
    organizationId: Scalars['ID'];
};

export type RootMutationAdminCreateUpdatePublicationCategoryArgs = {
    input: PublicationCategoryMutationInput;
};

export type RootMutationAdminDeleteAssignmentArgs = {
    assignmentId: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationAdminDeleteCourseArgs = {
    courseId: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationAdminDeleteEventAttendanceArgs = {
    attendanceId: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationAdminDeleteEventPresentationArgs = {
    organizationId: Scalars['ID'];
    presentationId: Scalars['ID'];
};

export type RootMutationAdminDeleteEventPresenterArgs = {
    organizationId: Scalars['ID'];
    presenterId: Scalars['ID'];
};

export type RootMutationAdminDeleteEventScheduleArgs = {
    organizationId: Scalars['ID'];
    scheduleId: Scalars['ID'];
};

export type RootMutationAdminExecutiveArgs = {
    bio?: InputMaybe<Scalars['String']>;
    categoryId: Scalars['ID'];
    current?: InputMaybe<Scalars['Boolean']>;
    email?: InputMaybe<Scalars['String']>;
    endTenure?: InputMaybe<Scalars['Date']>;
    facebook?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    name: Scalars['String'];
    organizationId: Scalars['ID'];
    photo?: InputMaybe<Scalars['Upload']>;
    positionId: Scalars['ID'];
    startTenure?: InputMaybe<Scalars['Date']>;
    twitter?: InputMaybe<Scalars['String']>;
};

export type RootMutationAdminExecutiveDeleteArgs = {
    id: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationAdminExecutivePhotoUploadArgs = {
    file?: InputMaybe<Scalars['Upload']>;
    id: Scalars['ID'];
    organizationId: Scalars['ID'];
    removePhoto?: InputMaybe<Scalars['Boolean']>;
};

export type RootMutationAdminLeadershipCategoryArgs = {
    input: LeadershipCategoryCreateUpdateMutationInput;
};

export type RootMutationAdminLeadershipCategoryDeleteArgs = {
    id: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationAdminLeadershipPositionArgs = {
    input: LeadershipPositionCreateUpdateMutationInput;
};

export type RootMutationAdminLeadershipPositionDeleteArgs = {
    id: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationAdminOfflineConferenceRegistrationAndPaymentArgs = {
    amountPaid: Scalars['Int'];
    email: Scalars['String'];
    eventId: Scalars['ID'];
    firstName: Scalars['String'];
    lastName?: InputMaybe<Scalars['String']>;
    offlinePaymentType?: InputMaybe<Scalars['String']>;
    organizationId: Scalars['ID'];
    paymentDate?: InputMaybe<Scalars['Date']>;
    paymentName?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    ticketId?: InputMaybe<Scalars['ID']>;
};

export type RootMutationAdminPublicationDeleteArgs = {
    id: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationAdminRejectApplicationArgs = {
    organizationId: Scalars['ID'];
    reason: Scalars['String'];
    userId: Scalars['ID'];
};

export type RootMutationAdminSpecialtyArgs = {
    input: SpecialtyCreateUpdateMutationInput;
};

export type RootMutationAdminSpecialtyDeleteArgs = {
    id: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationAdminSubSpecialtyArgs = {
    input: SubSpecialtyCreateUpdateMutationInput;
};

export type RootMutationAdminSubSpecialtyDeleteArgs = {
    id: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationAdminTakeAttendanceForAttendeeArgs = {
    attendanceCode: Scalars['String'];
    attendeeEmail: Scalars['String'];
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationAdminUpdateCourseResourceArgs = {
    organizationId: Scalars['ID'];
    resource?: InputMaybe<ResourceInputObjectType>;
    resourceId: Scalars['ID'];
};

export type RootMutationAdminUpdateEventLogoArgs = {
    eventId: Scalars['ID'];
    eventLogo: Scalars['Upload'];
    organizationId: Scalars['ID'];
};

export type RootMutationAdminWebsiteFaqArgs = {
    input: WebsiteFaqCreateUpdateMutationInput;
};

export type RootMutationAdminWebsiteFaqDeleteArgs = {
    id: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationAnnouncementArgs = {
    input: AnnouncementCreateUpdateMutationInput;
};

export type RootMutationAnnouncementDeleteArgs = {
    id: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationAnnouncementImageArgs = {
    announcementId?: InputMaybe<Scalars['ID']>;
    file?: InputMaybe<Scalars['Upload']>;
    organizationId?: InputMaybe<Scalars['ID']>;
    removeImage?: InputMaybe<Scalars['Boolean']>;
};

export type RootMutationArchiveAccountArgs = {
    password: Scalars['String'];
};

export type RootMutationCastPollVoteArgs = {
    organizationId: Scalars['ID'];
    pollEntry?: InputMaybe<PollEntryInputObjectType>;
};

export type RootMutationCheckIfUserIsMemberElseCreateJoinRequestArgs = {
    membershipTypeId?: InputMaybe<Scalars['ID']>;
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
};

export type RootMutationCheckOutMemberArgs = {
    eventId: Scalars['Int'];
    orgId: Scalars['Int'];
    userEmail?: InputMaybe<Scalars['String']>;
    userId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationCheckRegistrationEmailArgs = {
    email: Scalars['String'];
    eventId: Scalars['ID'];
};

export type RootMutationConferenceGetDpArgs = {
    eventId: Scalars['ID'];
    name: Scalars['String'];
    photo: Scalars['Upload'];
};

export type RootMutationConferenceLoginArgs = {
    email: Scalars['String'];
    eventId?: InputMaybe<Scalars['ID']>;
    eventSlug?: InputMaybe<Scalars['String']>;
};

export type RootMutationConferenceRegistrationArgs = {
    input: ConferenceRegistrationMutationInput;
};

export type RootMutationConfirmConferenceOfflinePaymentArgs = {
    amountPaid?: InputMaybe<Scalars['Int']>;
    email: Scalars['String'];
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    meetingId?: InputMaybe<Scalars['Int']>;
    orgId?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    payerName?: InputMaybe<Scalars['String']>;
    paymentDate?: InputMaybe<Scalars['String']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    proofOfPayment: Scalars['Upload'];
    ticketId?: InputMaybe<Scalars['Int']>;
    txref?: InputMaybe<Scalars['String']>;
    userId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationConfirmConferenceOnlinePaymentArgs = {
    amountPaid?: InputMaybe<Scalars['Int']>;
    email: Scalars['String'];
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    meetingId?: InputMaybe<Scalars['Int']>;
    orgId?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentDate?: InputMaybe<Scalars['String']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    ticketId?: InputMaybe<Scalars['Int']>;
    txref?: InputMaybe<Scalars['String']>;
    userId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationConfirmMembershipOfflinePaymentArgs = {
    amountPaid?: InputMaybe<Scalars['Int']>;
    membershipTypeId?: InputMaybe<Scalars['Int']>;
    orgPk?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    payerName?: InputMaybe<Scalars['String']>;
    paymentDate?: InputMaybe<Scalars['String']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentStatus?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    proofOfPayment: Scalars['Upload'];
    txref?: InputMaybe<Scalars['String']>;
    userId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationConfirmMembershipOnlinePaymentArgs = {
    amountPaid?: InputMaybe<Scalars['Int']>;
    membershipTypeId?: InputMaybe<Scalars['Int']>;
    orgPk?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentDate?: InputMaybe<Scalars['String']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentStatus?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    txref?: InputMaybe<Scalars['String']>;
    userId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationContactOrganizationAdminsArgs = {
    input: ContactOrganizationAdminsMutationInput;
};

export type RootMutationCreateClientArgs = {
    input: PotentialClientMutationInput;
};

export type RootMutationCreateInterestArgs = {
    eventSlug?: InputMaybe<Scalars['String']>;
    orgSlug?: InputMaybe<Scalars['String']>;
};

export type RootMutationCreateScheduleArgs = {
    description?: InputMaybe<Scalars['String']>;
    eventSlug?: InputMaybe<Scalars['String']>;
    location?: InputMaybe<Scalars['String']>;
    scheduleDate?: InputMaybe<Scalars['Date']>;
    scheduleEndTime?: InputMaybe<Scalars['Time']>;
    scheduleStartTime?: InputMaybe<Scalars['Time']>;
    speaker?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type RootMutationCreateUpdateUserProfileDocumentsArgs = {
    cacCertificate?: InputMaybe<Scalars['Upload']>;
    companyProfile?: InputMaybe<Scalars['Upload']>;
    other?: InputMaybe<Scalars['Upload']>;
    taxClearance?: InputMaybe<Scalars['Upload']>;
};

export type RootMutationDeleteAccountArgs = {
    password: Scalars['String'];
};

export type RootMutationDonateArgs = {
    input: DonationMutationInput;
};

export type RootMutationDownloadCertificateArgs = {
    domainName?: InputMaybe<Scalars['Date']>;
    fullName?: InputMaybe<Scalars['String']>;
};

export type RootMutationDownloadEventCertificatesArgs = {
    category: Scalars['String'];
    eventId: Scalars['ID'];
    fullName: Scalars['String'];
};

export type RootMutationDownloadInvitationLetterArgs = {
    addressLine1?: InputMaybe<Scalars['String']>;
    addressLine2?: InputMaybe<Scalars['String']>;
    eventId?: InputMaybe<Scalars['ID']>;
    fullName?: InputMaybe<Scalars['String']>;
};

export type RootMutationEnrollmentArgs = {
    input: EnrollmentMutationInput;
};

export type RootMutationGoogleSignInArgs = {
    googleId: Scalars['String'];
};

export type RootMutationJoinOrganizationArgs = {
    input: JoinOrganizationMutationInput;
};

export type RootMutationLeaveOrganizationArgs = {
    orgId: Scalars['ID'];
};

export type RootMutationLoginArgs = {
    password: Scalars['String'];
    username: Scalars['String'];
};

export type RootMutationMeetingArgs = {
    attendance?: InputMaybe<Scalars['Boolean']>;
    categoryId: Scalars['ID'];
    certificate?: InputMaybe<Scalars['Upload']>;
    description?: InputMaybe<Scalars['String']>;
    downloadCertificateCondition1?: InputMaybe<Scalars['Boolean']>;
    downloadCertificateCondition2?: InputMaybe<Scalars['Boolean']>;
    endDate?: InputMaybe<Scalars['Date']>;
    endTime?: InputMaybe<Scalars['Time']>;
    eventLogo?: InputMaybe<Scalars['Upload']>;
    eventState?: InputMaybe<Scalars['String']>;
    flyer?: InputMaybe<Scalars['Upload']>;
    id?: InputMaybe<Scalars['Int']>;
    invitationLetter?: InputMaybe<Scalars['Upload']>;
    isConference?: InputMaybe<Scalars['Boolean']>;
    mainEvent?: InputMaybe<Scalars['String']>;
    minutes?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    organizationId: Scalars['ID'];
    paid?: InputMaybe<Scalars['Boolean']>;
    publishAt?: InputMaybe<Scalars['String']>;
    rsvp?: InputMaybe<Scalars['String']>;
    session?: InputMaybe<Scalars['Boolean']>;
    startDate?: InputMaybe<Scalars['Date']>;
    startTime?: InputMaybe<Scalars['Time']>;
    theme?: InputMaybe<Scalars['String']>;
    venue?: InputMaybe<Scalars['String']>;
    virtualOnly?: InputMaybe<Scalars['Boolean']>;
};

export type RootMutationMeetingCategoryCreateArgs = {
    input: MeetingCategoryUpdateMutationInput;
};

export type RootMutationMeetingDeleteArgs = {
    id: Scalars['ID'];
    org_Id: Scalars['ID'];
};

export type RootMutationMemberRefereeArgs = {
    input: RefereeMutationInput;
};

export type RootMutationMemberRefereeDeleteArgs = {
    id: Scalars['ID'];
};

export type RootMutationMembershipApplicationSubmissionArgs = {
    orgId: Scalars['ID'];
    userId: Scalars['ID'];
};

export type RootMutationNextOfKinArgs = {
    input: NextOfKinMutationInput;
};

export type RootMutationNextOfKinDeleteArgs = {
    id: Scalars['ID'];
};

export type RootMutationNotificationSettingsArgs = {
    email?: InputMaybe<Scalars['Boolean']>;
    push?: InputMaybe<Scalars['Boolean']>;
    sms?: InputMaybe<Scalars['Boolean']>;
};

export type RootMutationNullifyMemberOutstandingPaymentsArgs = {
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
};

export type RootMutationPaidRegistrationArgs = {
    email?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    meetingId?: InputMaybe<Scalars['Int']>;
    orgId?: InputMaybe<Scalars['Int']>;
    phone?: InputMaybe<Scalars['String']>;
    ticketId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationPasswordChangeArgs = {
    newPassword1: Scalars['String'];
    newPassword2: Scalars['String'];
    oldPassword: Scalars['String'];
};

export type RootMutationPasswordResetArgs = {
    newPassword1: Scalars['String'];
    newPassword2: Scalars['String'];
    token: Scalars['String'];
};

export type RootMutationProfilePictureArgs = {
    file?: InputMaybe<Scalars['Upload']>;
    removeImage?: InputMaybe<Scalars['Boolean']>;
};

export type RootMutationRefreshTokenArgs = {
    refreshToken: Scalars['String'];
};

export type RootMutationRegisterArgs = {
    email: Scalars['String'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    password1: Scalars['String'];
    password2: Scalars['String'];
    username: Scalars['String'];
};

export type RootMutationRegisterByOrganizationArgs = {
    accountType: Scalars['String'];
    email: Scalars['String'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    orgId?: InputMaybe<Scalars['Int']>;
    password1: Scalars['String'];
    password2: Scalars['String'];
    username: Scalars['String'];
};

export type RootMutationResendActivationEmailArgs = {
    email: Scalars['String'];
    organizationId: Scalars['ID'];
};

export type RootMutationRevokeTokenArgs = {
    refreshToken: Scalars['String'];
};

export type RootMutationSendHelpMessageToCommunityArgs = {
    domainName?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    message: Scalars['String'];
    pageName?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    senderName: Scalars['String'];
};

export type RootMutationSendPasswordResetEmailArgs = {
    email: Scalars['String'];
};

export type RootMutationSubdivisionArgs = {
    input: OrgSubDivisionMutationInput;
};

export type RootMutationSubdivisionDeleteArgs = {
    id: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootMutationSubmitAssignmentArgs = {
    input: SubmittedAssignmentMutationInput;
};

export type RootMutationSubmitFeedbackArgs = {
    eventSlug?: InputMaybe<Scalars['String']>;
    howDidYouHearAboutUs?: InputMaybe<Scalars['String']>;
    keyTakeaway?: InputMaybe<Scalars['String']>;
    lectureDelivery?: InputMaybe<Scalars['String']>;
    likedLeast?: InputMaybe<Scalars['String']>;
    likedMost?: InputMaybe<Scalars['String']>;
    otherComments?: InputMaybe<Scalars['String']>;
    participantEngagement?: InputMaybe<Scalars['String']>;
};

export type RootMutationTakeEventAttendanceArgs = {
    attendanceCode: Scalars['String'];
    attendeeEmail?: InputMaybe<Scalars['String']>;
    eventSlug: Scalars['String'];
};

export type RootMutationTakeExcuseArgs = {
    eventId?: InputMaybe<Scalars['Int']>;
    excuse?: InputMaybe<Scalars['String']>;
    orgId?: InputMaybe<Scalars['Int']>;
};

export type RootMutationUpdateAccountArgs = {
    address?: InputMaybe<Scalars['String']>;
    bio?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    dob?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    gender?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    middleName?: InputMaybe<Scalars['String']>;
    nationality?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    photo?: InputMaybe<Scalars['String']>;
    postal?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
};

export type RootMutationUpdateUserProfileBioArgs = {
    bio: Scalars['String'];
};

export type RootMutationUploadAcademicCertificateArgs = {
    academicRecordId: Scalars['ID'];
    file: Scalars['Upload'];
};

export type RootMutationUserAcademicInformationArgs = {
    admitted?: InputMaybe<Scalars['Date']>;
    certificate?: InputMaybe<Scalars['Upload']>;
    current?: InputMaybe<Scalars['Boolean']>;
    discipline?: InputMaybe<Scalars['String']>;
    graduated?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    program?: InputMaybe<Scalars['String']>;
    school?: InputMaybe<Scalars['String']>;
};

export type RootMutationUserWorkExperienceArgs = {
    input: UserWorkExperienceMutationInput;
};

export type RootMutationUserWorkExperienceDeleteArgs = {
    id: Scalars['ID'];
};

export type RootMutationVerifyAccountArgs = {
    code: Scalars['String'];
};

export type RootMutationVerifyAccountByOrganizationArgs = {
    code: Scalars['String'];
    orgId: Scalars['Int'];
};

export type RootMutationVerifyPasswordResetTokenArgs = {
    code: Scalars['String'];
};

export type RootMutationVerifyTokenArgs = {
    token: Scalars['String'];
};

export type RootQuery = {
    __typename?: 'RootQuery';
    _debug?: Maybe<DjangoDebug>;
    /** The ID of the object */
    academicRecord?: Maybe<AcademicRecordModelType>;
    /** Get all academic_record items */
    academicRecords?: Maybe<AcademicRecordModelTypeConnection>;
    /**
     *
     *                     Generate Organization Analytics for Admin Dashboard.
     *                     - Total Members Count
     *                     - Total Announcement Count
     *                     - Total Training Count
     *                     - Total Events Count
     *                     - Total Amount of Membership Payments
     *
     */
    adminDashboardAnalytics?: Maybe<Scalars['GenericScalar']>;
    /** The ID of the object */
    adminEnrollment?: Maybe<EnrollmentType>;
    /** Get all EnrollmentType items for admin view */
    adminEnrollmentsList?: Maybe<EnrollmentTypeConnection>;
    /** Get all ConferenceRegistrationType */
    adminEventPayments?: Maybe<ConferencePaymentTypeConnection>;
    /** An Admin can get all polls. Provide organization_Id as this is an org-admin endpoint */
    adminGetAllPolls?: Maybe<PollTypeConnection>;
    /** Get conference basic data */
    adminGetConferenceBasicData?: Maybe<AdminConferenceBasicDataType>;
    /** Returns Get all attendance session information for an event */
    adminGetEventAttendances?: Maybe<AttendanceWithAttendanceCountTypeConnection>;
    /** Returns the list of registrations for an event from the eventRegistrations field. A search field is available in eventRegistrations for searching */
    adminGetEventDetailsAndRegistrations?: Maybe<MeetingWithEventRegistrationsType>;
    /** Get event invitation letter and certificate. */
    adminGetEventDocuments?: Maybe<AdminEventDocumentsType>;
    /** Get event Flyer. */
    adminGetEventFlyer?: Maybe<AdminEventFlyerType>;
    /** Returns the event logo */
    adminGetEventLogo?: Maybe<AdminEventLogoType>;
    /** Fetch most recent four published polls including a Poll Entries Count. Both live && closed polls */
    adminGetMostRecentFourPolls?: Maybe<Array<Maybe<PollWithPollEntriesType>>>;
    /** Gets a list of all candidates and answers for either a decision-poll */
    adminGetPollCandidatesAndAnswers?: Maybe<CandidateAndAnswerType>;
    /** An admin can fetch all poll results for a poll sorted into entries for poll candidates and answers provided */
    adminGetPollResults?: Maybe<PollTypeForResults>;
    /** Get Polls Analytics based on selected period and month */
    adminGetPollsAnalyticsPerPeriod?: Maybe<Scalars['GenericScalar']>;
    /** Gets all the conferences the user has registered for */
    adminGetUserRegisteredConferences?: Maybe<Array<Maybe<ConferenceRegistrationType>>>;
    /** For admin to get a list of Membership Payments of the organization and Search items to get a list of Membership Payments of the organization */
    adminMembershipPayments?: Maybe<MembershipPaymentTypeConnection>;
    /**
     * Returns all the conference registrations where conference
     *         matches the specified conferenceId and email matches the specified email
     */
    adminSearchConferenceRegistrationsByEmail?: Maybe<ConferenceRegistrationTypeConnection>;
    /** An admin can search for registered member and non-member users in his/her organization */
    adminSearchForUsers?: Maybe<Array<Maybe<UserType>>>;
    /** The ID of the object */
    adminSubmittedAssignment?: Maybe<SubmittedAssignmentType>;
    /** Get all SubmittedAssignmentType items for admin view */
    adminSubmittedAssignmentsList?: Maybe<SubmittedAssignmentTypeConnection>;
    /** The ID of the object */
    allOrganizationAnnouncement?: Maybe<AnnouncementType>;
    /** Fetch all announcement in a specified organization */
    allOrganizationAnnouncements?: Maybe<Array<Maybe<AnnouncementType>>>;
    /** Get all Org Announcement Items */
    allOrganizationAnnouncementsList?: Maybe<AnnouncementTypeConnection>;
    /** Fetch all events in a specified organization */
    allOrganizationEvents?: Maybe<Array<Maybe<MeetingType>>>;
    /** Get all events in a specified organization */
    allOrganizationEventsList?: Maybe<MeetingTypeConnection>;
    /** Get all events in a specified organization */
    allOrganizationUpcomingEventList?: Maybe<MeetingTypeConnection>;
    /** Fetch all upcoming events in a specified organization */
    allOrganizationUpcomingEvents?: Maybe<Array<Maybe<MeetingType>>>;
    /** Get the details of an announcement */
    announcement?: Maybe<AnnouncementType>;
    /** Get the List of announcements of organizations I belong to */
    announcements?: Maybe<AnnouncementTypeConnection>;
    /** The ID of the object */
    assignment?: Maybe<AssignmentType>;
    /** Get all AssignmentType items */
    assignmentsList?: Maybe<AssignmentTypeConnection>;
    /** Get birthdays for an organization */
    birthdays?: Maybe<Array<Maybe<UserType>>>;
    /** The ID of the object */
    course?: Maybe<CourseType>;
    /** Get all CourseType items */
    coursesList?: Maybe<CourseTypeConnection>;
    /** The ID of the object */
    department?: Maybe<DepartmentModelType>;
    /** Get all department items */
    departments?: Maybe<DepartmentModelTypeConnection>;
    /** Get all the donations of an Organization */
    donations?: Maybe<DonationTypeConnection>;
    /** The ID of the object */
    event?: Maybe<MeetingType>;
    /** Get the details of an event and related models using domain_name */
    eventByDomainName?: Maybe<MeetingType>;
    /** Get the details of an event */
    eventById?: Maybe<MeetingType>;
    /** Get the details of an event using the event slug */
    eventBySlug?: Maybe<MeetingType>;
    /** The ID of the object */
    eventCategory?: Maybe<MeetingCategoryType>;
    /** Get all MeetingCategory items */
    eventCategoryList?: Maybe<MeetingCategoryTypeConnection>;
    /** Get all the members of an Organization to be checked in for this event */
    eventCheckIn?: Maybe<Array<Maybe<EventCheckInType>>>;
    /** The ID of the object */
    eventTicket?: Maybe<TicketType>;
    /** Get all Event Ticket items */
    eventTicketList?: Maybe<TicketTypeConnection>;
    /** Get all Event items */
    eventsList?: Maybe<MeetingTypeConnection>;
    /** Retrieve all available GENDER */
    genderEnums?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
    /** Get an Anonymous/Conference User Conference Payment Data */
    getAnonymousUserConferencePaymentData?: Maybe<ConferencePaymentWithMembershipDetailsType>;
    /** Get a Single User Conference Payment Data */
    getConferencePaymentData?: Maybe<ConferencePaymentType>;
    /** Get a list of a User Conference Payments Records */
    getConferencePaymentsList?: Maybe<Array<Maybe<ConferencePaymentType>>>;
    /** Get details of a registration in the conference registration model */
    getConferenceRegistrationDetails?: Maybe<ConferenceRegistrationType>;
    /** The list of attendance entries for a given attendance session */
    getEventAttendanceEntries?: Maybe<Array<Maybe<AttendanceEntriesType>>>;
    /** Get all attendance session information for an event */
    getEventAttendances?: Maybe<AttendanceTypeConnection>;
    /** Get an event banner image by the event Id */
    getEventSocialDpBanner?: Maybe<MeetingSocialDpBannerImageType>;
    /** Gets a list of all answers for either a decision-poll || meeting-poll */
    getPollAnswers?: Maybe<Array<Maybe<AnswerType>>>;
    /** Gets a list of all candidates for a electoral-poll */
    getPollCandidates?: Maybe<Array<Maybe<CandidateType>>>;
    /** Gets a list of all candidates and answers for either a decision-poll */
    getPollCandidatesAndAnswers?: Maybe<CandidateAndAnswerType>;
    /** Fetch all poll results for a poll sorted into entries for poll candidates and answers provided */
    getPollResults?: Maybe<PollTypeForResults>;
    /** Get a published poll. Either a live && closed poll */
    getPublishedPoll?: Maybe<PollType>;
    /** Fetch all published polls. Both live && closed polls */
    getPublishedPolls?: Maybe<Array<Maybe<PollType>>>;
    /** Fetch all published polls including a Boolean field participated. Both live && closed polls */
    getPublishedPollsForUser?: Maybe<PollWithParticipatedFieldConnection>;
    /** Get Logged in user REST Token */
    getRestToken?: Maybe<Scalars['String']>;
    /** Get User (Organization) profile documents. User must be logged in */
    getUserProfileDocuments?: Maybe<ProfileDocumentType>;
    /** Checks if a student has successfully registered for a course. Expects the user-token to be passed */
    hasStudentRegisteredForCourse?: Maybe<Scalars['Boolean']>;
    /** Is this user a member of an Organization */
    isOrgAdmin?: Maybe<Scalars['Boolean']>;
    /** The ID of the object */
    leadershipPosition?: Maybe<LeadershipPositionType>;
    /** Get all LeadershipPosition items */
    leadershipPositionList?: Maybe<LeadershipPositionTypeConnection>;
    me?: Maybe<UserNode>;
    /** Get a specific member of an Organization */
    member?: Maybe<JoinRequestType>;
    /** Get a list of References for user */
    memberReferees?: Maybe<RefereeTypeConnection>;
    /** Get all the members of an Organization */
    members?: Maybe<JoinRequestTypeConnection>;
    /** Fetch member's/applicant's professional info from Join Request model */
    membershipJoinRequest?: Maybe<JoinRequestType>;
    /** Get a Single Membership Payment Record */
    membershipPayment?: Maybe<MembershipPaymentType>;
    /** Get a list of Membership Payment Records */
    membershipPaymentList?: Maybe<MembershipPaymentTypeConnection>;
    /** The ID of the object */
    myEnrollment?: Maybe<EnrollmentType>;
    /** Get all EnrollmentType items */
    myEnrollmentsList?: Maybe<EnrollmentTypeConnection>;
    /** Get all organization a user belongs */
    myOrganizations?: Maybe<OrganizationTypeConnection>;
    /** The ID of the object */
    mySubmittedAssignment?: Maybe<SubmittedAssignmentType>;
    /** Get all SubmittedAssignmentType items */
    mySubmittedAssignmentsList?: Maybe<SubmittedAssignmentTypeConnection>;
    /** The ID of the object */
    nextOfKin?: Maybe<NextOfKinModelType>;
    /** Get all next of kin items */
    nextOfKins?: Maybe<NextOfKinModelTypeConnection>;
    /** Get the details of a Notification & mark as read */
    notification?: Maybe<NotificationType>;
    /** Get my Notifications settings */
    notificationSettings?: Maybe<UserSettingType>;
    /** Get a list of all my Notifications */
    notifications?: Maybe<NotificationTypeConnection>;
    /** Get the most recent or upcoming event in an organization */
    orgConference?: Maybe<MeetingType>;
    /** The ID of the object */
    orgExecutive?: Maybe<ExecutiveType>;
    /** Get a list of Org Executive items */
    orgExecutiveList?: Maybe<ExecutiveTypeConnection>;
    /** The ID of the object */
    orgLeadershipCategory?: Maybe<LeadershipCategoryType>;
    /** Get a list of Org LeadershipCategory items */
    orgLeadershipCategoryList?: Maybe<LeadershipCategoryTypeConnection>;
    /** The ID of the object */
    orgSubDivision?: Maybe<OrgSubDivisionType>;
    /** Get all OrgSubDivision items */
    orgSubDivisionList?: Maybe<OrgSubDivisionTypeConnection>;
    /** The ID of the object */
    orgWebsite?: Maybe<WebsiteType>;
    /** The ID of the object */
    organization?: Maybe<OrganizationType>;
    /** Get all of our potential clients */
    potentialClients?: Maybe<Array<Maybe<PotentialClientType>>>;
    /** The ID of the object */
    presentation?: Maybe<PresentationType>;
    /** Get a list of all presentations for an event */
    presentations?: Maybe<Array<Maybe<PresentationType>>>;
    /** Get all Presentation Items */
    presentationsList?: Maybe<PresentationTypeConnection>;
    /** The ID of the object */
    presenter?: Maybe<PresenterType>;
    /** Get a list of all presenters for an event */
    presenters?: Maybe<Array<Maybe<PresenterType>>>;
    /** Get all Presenter Items */
    presentersList?: Maybe<PresenterTypeConnection>;
    /** The ID of the object */
    publication?: Maybe<PublicationType>;
    /** The ID of the object */
    publicationCategory?: Maybe<PublicationCategoryType>;
    /** Get all PublicationCategoryType Items */
    publicationCategoryList?: Maybe<PublicationCategoryTypeConnection>;
    /** Get all Publications Items */
    publicationsList?: Maybe<PublicationTypeConnection>;
    /** The ID of the object */
    resource?: Maybe<ResourceType>;
    /** Get all ResourceType items */
    resourceList?: Maybe<ResourceTypeConnection>;
    /** The ID of the object */
    schedule?: Maybe<ScheduleType>;
    /** Get a list of all the schedules for an event */
    schedules?: Maybe<Array<Maybe<ScheduleType>>>;
    /** Get all schedules for an Event */
    schedulesList?: Maybe<ScheduleTypeConnection>;
    /** The ID of the object */
    school?: Maybe<SchoolModelType>;
    /** Get all school items */
    schools?: Maybe<SchoolModelTypeConnection>;
    /** Get a list of sorted schedules for an event */
    sortedSchedules?: Maybe<Scalars['GenericScalar']>;
    /** Get all specialty items */
    specialties?: Maybe<SpecialtyTypeConnection>;
    /** The ID of the object */
    specialty?: Maybe<SpecialtyType>;
    /** Get all sub_specialty items */
    subSpecialties?: Maybe<SubSpecialtyTypeConnection>;
    /** The ID of the object */
    subSpecialty?: Maybe<SubSpecialtyType>;
    /** Fetch the three topmost events in a specified organization */
    threeTopmostEvents?: Maybe<Array<Maybe<MeetingType>>>;
    /** Get a list of all upcoming events/ meetings of all Organizations I belong to */
    upcomingEvents?: Maybe<Array<Maybe<MeetingType>>>;
    user?: Maybe<UserType>;
    /** The ID of the object */
    userRelay?: Maybe<UserNode>;
    /** Verify the Attendance Code for an Event */
    verifyAttendanceCode?: Maybe<Scalars['Boolean']>;
    website?: Maybe<WebsiteType>;
    websiteAboutPage?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** Get all Website Banner Slider Images */
    websiteBannerSliderImages?: Maybe<WebsiteImageTypeConnection>;
    /** The ID of the object */
    websiteFaq?: Maybe<WebsiteFaqType>;
    /** Get a list of Single WebsiteFaq Items */
    websiteFaqList?: Maybe<WebsiteFaqTypeConnection>;
    /** Get all Website Gallery Images */
    websiteGalleryImages?: Maybe<WebsiteImageTypeConnection>;
    websiteHomePageAboutUs?: Maybe<Array<Maybe<Scalars['String']>>>;
    websiteMembershipTypes?: Maybe<Array<Maybe<OrgMembershipType>>>;
    /** Get all Organization's Payment API */
    websitePaymentApi?: Maybe<OrganizationPaymentApiTypeConnection>;
    /** Get a list of all presentations/publications in an organization */
    websitePresentations?: Maybe<Array<Maybe<PresentationType>>>;
    /** Get all Website Items */
    websitesList?: Maybe<WebsiteTypeConnection>;
    /** The ID of the object */
    workExperience?: Maybe<WorkExperienceModelType>;
    /** Get all work_experience items */
    workExperiences?: Maybe<WorkExperienceModelTypeConnection>;
};

export type RootQueryAcademicRecordArgs = {
    id: Scalars['ID'];
};

export type RootQueryAcademicRecordsArgs = {
    admitted?: InputMaybe<Scalars['Date']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    discipline_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    graduated?: InputMaybe<Scalars['Date']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    program?: InputMaybe<Scalars['String']>;
    school_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryAdminDashboardAnalyticsArgs = {
    organizationId: Scalars['ID'];
};

export type RootQueryAdminEnrollmentArgs = {
    id: Scalars['ID'];
};

export type RootQueryAdminEnrollmentsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    refundStatus?: InputMaybe<Scalars['Boolean']>;
    student_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryAdminEventPaymentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryAdminGetAllPollsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    pollType?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<Scalars['String']>;
};

export type RootQueryAdminGetConferenceBasicDataArgs = {
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootQueryAdminGetEventAttendancesArgs = {
    after?: InputMaybe<Scalars['String']>;
    attendanceCode?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryAdminGetEventDetailsAndRegistrationsArgs = {
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootQueryAdminGetEventDocumentsArgs = {
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootQueryAdminGetEventFlyerArgs = {
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootQueryAdminGetEventLogoArgs = {
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootQueryAdminGetMostRecentFourPollsArgs = {
    organizationId: Scalars['ID'];
};

export type RootQueryAdminGetPollCandidatesAndAnswersArgs = {
    organizationId: Scalars['ID'];
    pollId: Scalars['ID'];
};

export type RootQueryAdminGetPollResultsArgs = {
    organizationId: Scalars['ID'];
    pollId: Scalars['ID'];
};

export type RootQueryAdminGetPollsAnalyticsPerPeriodArgs = {
    month?: InputMaybe<Scalars['Int']>;
    organizationId: Scalars['ID'];
    periodType: PeriodType;
    year?: InputMaybe<Scalars['Int']>;
};

export type RootQueryAdminGetUserRegisteredConferencesArgs = {
    email: Scalars['String'];
};

export type RootQueryAdminMembershipPaymentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    membershipType_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    searchQuery?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryAdminSearchConferenceRegistrationsByEmailArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    conferenceId: Scalars['ID'];
    email: Scalars['String'];
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organizationId: Scalars['ID'];
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryAdminSearchForUsersArgs = {
    organizationId: Scalars['ID'];
    username: Scalars['String'];
};

export type RootQueryAdminSubmittedAssignmentArgs = {
    id: Scalars['ID'];
};

export type RootQueryAdminSubmittedAssignmentsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    assignmentQuestion_Id?: InputMaybe<Scalars['Float']>;
    author_Id?: InputMaybe<Scalars['Float']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    grade?: InputMaybe<Scalars['Int']>;
    graded?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    submitted?: InputMaybe<Scalars['Boolean']>;
    submittedDate?: InputMaybe<Scalars['DateTime']>;
    topic?: InputMaybe<Scalars['String']>;
};

export type RootQueryAllOrganizationAnnouncementArgs = {
    id: Scalars['ID'];
};

export type RootQueryAllOrganizationAnnouncementsArgs = {
    domainName: Scalars['String'];
};

export type RootQueryAllOrganizationAnnouncementsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    announcementType?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    body?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    organization_Slug?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type RootQueryAllOrganizationEventsArgs = {
    domainName: Scalars['String'];
};

export type RootQueryAllOrganizationEventsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    category_Name?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    isConference?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    org_Slug?: InputMaybe<Scalars['String']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    theme?: InputMaybe<Scalars['String']>;
    venue?: InputMaybe<Scalars['String']>;
    virtualOnly?: InputMaybe<Scalars['Boolean']>;
};

export type RootQueryAllOrganizationUpcomingEventListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    category_Name?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    isConference?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    org_Slug?: InputMaybe<Scalars['String']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    theme?: InputMaybe<Scalars['String']>;
    venue?: InputMaybe<Scalars['String']>;
    virtualOnly?: InputMaybe<Scalars['Boolean']>;
};

export type RootQueryAllOrganizationUpcomingEventsArgs = {
    domainName: Scalars['String'];
};

export type RootQueryAnnouncementArgs = {
    id: Scalars['Int'];
};

export type RootQueryAnnouncementsArgs = {
    after?: InputMaybe<Scalars['String']>;
    announcementType?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    body?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    organization_Slug?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type RootQueryAssignmentArgs = {
    id: Scalars['ID'];
};

export type RootQueryAssignmentsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    assignmentName?: InputMaybe<Scalars['String']>;
    author_Id?: InputMaybe<Scalars['Float']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    dueDate?: InputMaybe<Scalars['Date']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    startDate?: InputMaybe<Scalars['Date']>;
};

export type RootQueryBirthdaysArgs = {
    organizationId: Scalars['ID'];
};

export type RootQueryCourseArgs = {
    id: Scalars['ID'];
};

export type RootQueryCoursesListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    courseName?: InputMaybe<Scalars['String']>;
    creator_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    physicalClass?: InputMaybe<Scalars['Boolean']>;
    slug?: InputMaybe<Scalars['String']>;
    startDate?: InputMaybe<Scalars['Date']>;
    startTime?: InputMaybe<Scalars['Time']>;
    tutor?: InputMaybe<Scalars['String']>;
    virtualClass?: InputMaybe<Scalars['Boolean']>;
};

export type RootQueryDepartmentArgs = {
    id: Scalars['ID'];
};

export type RootQueryDepartmentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type RootQueryDonationsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
};

export type RootQueryEventArgs = {
    id: Scalars['ID'];
};

export type RootQueryEventByDomainNameArgs = {
    domainName: Scalars['String'];
};

export type RootQueryEventByIdArgs = {
    id: Scalars['Int'];
};

export type RootQueryEventBySlugArgs = {
    eventSlug?: InputMaybe<Scalars['String']>;
};

export type RootQueryEventCategoryArgs = {
    id: Scalars['ID'];
};

export type RootQueryEventCategoryListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryEventCheckInArgs = {
    eventId: Scalars['Int'];
    orgId: Scalars['Int'];
};

export type RootQueryEventTicketArgs = {
    id: Scalars['ID'];
};

export type RootQueryEventTicketListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    earlyBirdDeadline?: InputMaybe<Scalars['Date']>;
    earlyBirdFee?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    lateBirdFee?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryEventsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    category_Name?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    isConference?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    org_Slug?: InputMaybe<Scalars['String']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    theme?: InputMaybe<Scalars['String']>;
    venue?: InputMaybe<Scalars['String']>;
    virtualOnly?: InputMaybe<Scalars['Boolean']>;
};

export type RootQueryGetAnonymousUserConferencePaymentDataArgs = {
    email: Scalars['String'];
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootQueryGetConferencePaymentDataArgs = {
    organizationId: Scalars['ID'];
    paymentId: Scalars['ID'];
};

export type RootQueryGetConferencePaymentsListArgs = {
    email?: InputMaybe<Scalars['String']>;
    organizationId: Scalars['ID'];
    userId?: InputMaybe<Scalars['ID']>;
};

export type RootQueryGetConferenceRegistrationDetailsArgs = {
    id: Scalars['ID'];
    organizationId: Scalars['ID'];
};

export type RootQueryGetEventAttendanceEntriesArgs = {
    attendanceCode: Scalars['String'];
    closeDate: Scalars['Date'];
    closeTime?: InputMaybe<Scalars['Time']>;
    eventSlug: Scalars['String'];
    openDate: Scalars['Date'];
    openTime?: InputMaybe<Scalars['Time']>;
};

export type RootQueryGetEventAttendancesArgs = {
    after?: InputMaybe<Scalars['String']>;
    attendanceCode?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryGetEventSocialDpBannerArgs = {
    eventId: Scalars['ID'];
};

export type RootQueryGetPollAnswersArgs = {
    pollId: Scalars['ID'];
};

export type RootQueryGetPollCandidatesArgs = {
    pollId: Scalars['ID'];
};

export type RootQueryGetPollCandidatesAndAnswersArgs = {
    pollId: Scalars['ID'];
};

export type RootQueryGetPollResultsArgs = {
    pollId: Scalars['ID'];
};

export type RootQueryGetPublishedPollArgs = {
    pollId: Scalars['ID'];
};

export type RootQueryGetPublishedPollsArgs = {
    organizationId: Scalars['ID'];
};

export type RootQueryGetPublishedPollsForUserArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    organizationId: Scalars['ID'];
};

export type RootQueryHasStudentRegisteredForCourseArgs = {
    courseId: Scalars['ID'];
};

export type RootQueryIsOrgAdminArgs = {
    organizationId: Scalars['Int'];
};

export type RootQueryLeadershipPositionArgs = {
    id: Scalars['ID'];
};

export type RootQueryLeadershipPositionListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    position?: InputMaybe<Scalars['String']>;
    rank?: InputMaybe<Scalars['Int']>;
};

export type RootQueryMemberArgs = {
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
};

export type RootQueryMemberRefereesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    number?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryMembersArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    filterQuery?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    searchQuery?: InputMaybe<Scalars['String']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Email?: InputMaybe<Scalars['String']>;
    user_FirstName?: InputMaybe<Scalars['String']>;
    user_Gender?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    user_LastName?: InputMaybe<Scalars['String']>;
    user_MiddleName?: InputMaybe<Scalars['String']>;
    user_Phone?: InputMaybe<Scalars['String']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

export type RootQueryMembershipJoinRequestArgs = {
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
};

export type RootQueryMembershipPaymentArgs = {
    paymentId: Scalars['ID'];
};

export type RootQueryMembershipPaymentListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    membershipType_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgId: Scalars['ID'];
    org_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    userId: Scalars['ID'];
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryMyEnrollmentArgs = {
    id: Scalars['ID'];
};

export type RootQueryMyEnrollmentsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    refundStatus?: InputMaybe<Scalars['Boolean']>;
    student_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryMyOrganizationsArgs = {
    abbrev?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    myOrg_Approved?: InputMaybe<Scalars['Boolean']>;
    myOrg_Blocked?: InputMaybe<Scalars['Boolean']>;
    myOrg_User?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type RootQueryMySubmittedAssignmentArgs = {
    id: Scalars['ID'];
};

export type RootQueryMySubmittedAssignmentsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    assignmentQuestion_Id?: InputMaybe<Scalars['Float']>;
    author_Id?: InputMaybe<Scalars['Float']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    grade?: InputMaybe<Scalars['Int']>;
    graded?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    submitted?: InputMaybe<Scalars['Boolean']>;
    submittedDate?: InputMaybe<Scalars['DateTime']>;
    topic?: InputMaybe<Scalars['String']>;
};

export type RootQueryNextOfKinArgs = {
    id: Scalars['ID'];
};

export type RootQueryNextOfKinsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    firstName?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    middleName?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    phone?: InputMaybe<Scalars['String']>;
    relationship?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryNotificationArgs = {
    id: Scalars['Int'];
};

export type RootQueryNotificationsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    push?: InputMaybe<Scalars['String']>;
    read?: InputMaybe<Scalars['Boolean']>;
    sms?: InputMaybe<Scalars['String']>;
    subject?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryOrgConferenceArgs = {
    domainName: Scalars['String'];
};

export type RootQueryOrgExecutiveArgs = {
    id: Scalars['ID'];
};

export type RootQueryOrgExecutiveListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    current?: InputMaybe<Scalars['Boolean']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    position_Id?: InputMaybe<Scalars['Float']>;
    startTenure?: InputMaybe<Scalars['Date']>;
};

export type RootQueryOrgLeadershipCategoryArgs = {
    id: Scalars['ID'];
};

export type RootQueryOrgLeadershipCategoryListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryOrgSubDivisionArgs = {
    id: Scalars['ID'];
};

export type RootQueryOrgSubDivisionListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    chairperson?: InputMaybe<Scalars['String']>;
    dateOfInauguration?: InputMaybe<Scalars['Date']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meetingDaysTime?: InputMaybe<Scalars['String']>;
    meetingVenue?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    subdivision?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};

export type RootQueryOrgWebsiteArgs = {
    id: Scalars['ID'];
};

export type RootQueryOrganizationArgs = {
    id: Scalars['ID'];
};

export type RootQueryPotentialClientsArgs = {
    id?: InputMaybe<Scalars['Int']>;
};

export type RootQueryPresentationArgs = {
    id: Scalars['ID'];
};

export type RootQueryPresentationsArgs = {
    eventSlug?: InputMaybe<Scalars['String']>;
};

export type RootQueryPresentationsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    author?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

export type RootQueryPresenterArgs = {
    id: Scalars['ID'];
};

export type RootQueryPresentersArgs = {
    eventSlug?: InputMaybe<Scalars['String']>;
};

export type RootQueryPresentersListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type RootQueryPublicationArgs = {
    id: Scalars['ID'];
};

export type RootQueryPublicationCategoryArgs = {
    id: Scalars['ID'];
};

export type RootQueryPublicationCategoryListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryPublicationsListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

export type RootQueryResourceArgs = {
    id: Scalars['ID'];
};

export type RootQueryResourceListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    ordering?: InputMaybe<Scalars['Int']>;
    resourceName?: InputMaybe<Scalars['String']>;
};

export type RootQueryScheduleArgs = {
    id: Scalars['ID'];
};

export type RootQuerySchedulesArgs = {
    eventSlug?: InputMaybe<Scalars['String']>;
};

export type RootQuerySchedulesListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    location?: InputMaybe<Scalars['String']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};

export type RootQuerySchoolArgs = {
    id: Scalars['ID'];
};

export type RootQuerySchoolsArgs = {
    address?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    short?: InputMaybe<Scalars['String']>;
};

export type RootQuerySortedSchedulesArgs = {
    eventId: Scalars['ID'];
};

export type RootQuerySpecialtiesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQuerySpecialtyArgs = {
    id: Scalars['ID'];
};

export type RootQuerySubSpecialtiesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    specialty_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQuerySubSpecialtyArgs = {
    id: Scalars['ID'];
};

export type RootQueryThreeTopmostEventsArgs = {
    domainName: Scalars['String'];
};

export type RootQueryUpcomingEventsArgs = {
    orgSlug?: InputMaybe<Scalars['String']>;
};

export type RootQueryUserRelayArgs = {
    id: Scalars['ID'];
};

export type RootQueryVerifyAttendanceCodeArgs = {
    eventCode: Scalars['Int'];
    eventSlug: Scalars['String'];
};

export type RootQueryWebsiteArgs = {
    domainName: Scalars['String'];
};

export type RootQueryWebsiteAboutPageArgs = {
    domainName: Scalars['String'];
};

export type RootQueryWebsiteBannerSliderImagesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    domainName: Scalars['String'];
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryWebsiteFaqArgs = {
    id: Scalars['ID'];
};

export type RootQueryWebsiteFaqListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    createdBy_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type RootQueryWebsiteGalleryImagesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    organizationId: Scalars['ID'];
};

export type RootQueryWebsiteHomePageAboutUsArgs = {
    domainName: Scalars['String'];
};

export type RootQueryWebsiteMembershipTypesArgs = {
    domainName: Scalars['String'];
};

export type RootQueryWebsitePaymentApiArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    platform?: InputMaybe<Scalars['String']>;
};

export type RootQueryWebsitePresentationsArgs = {
    domainName: Scalars['String'];
};

export type RootQueryWebsitesListArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    customDomain?: InputMaybe<Scalars['String']>;
    event?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org?: InputMaybe<Scalars['ID']>;
    subDomain?: InputMaybe<Scalars['String']>;
};

export type RootQueryWorkExperienceArgs = {
    id: Scalars['ID'];
};

export type RootQueryWorkExperiencesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    companyName?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    description?: InputMaybe<Scalars['String']>;
    designation?: InputMaybe<Scalars['String']>;
    endDate?: InputMaybe<Scalars['Date']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    startDate?: InputMaybe<Scalars['Date']>;
    state?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type ScheduleSerializerInputObjectType = {
    description: Scalars['String'];
    scheduleDate: Scalars['Date'];
    scheduleEndTime?: InputMaybe<Scalars['Time']>;
    scheduleStartTime: Scalars['Time'];
    speaker?: InputMaybe<Scalars['String']>;
    title: Scalars['String'];
};

/** The Event Schedule object */
export type ScheduleType = Node & {
    __typename?: 'ScheduleType';
    description?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    location: Scalars['String'];
    meeting?: Maybe<MeetingWithEventRegistrationsType>;
    pk?: Maybe<Scalars['ID']>;
    scheduleDate?: Maybe<Scalars['Date']>;
    scheduleEndTime?: Maybe<Scalars['Time']>;
    scheduleStartTime?: Maybe<Scalars['Time']>;
    speaker?: Maybe<PresenterType>;
    title: Scalars['String'];
};

export type ScheduleTypeConnection = {
    __typename?: 'ScheduleTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<ScheduleTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `ScheduleType` and its cursor. */
export type ScheduleTypeEdge = {
    __typename?: 'ScheduleTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<ScheduleType>;
};

/**  School model type definition  */
export type SchoolModelType = Node & {
    __typename?: 'SchoolModelType';
    address: Scalars['String'];
    country: Scalars['String'];
    created: Scalars['DateTime'];
    /** The ID of the object. */
    id: Scalars['ID'];
    name: Scalars['String'];
    pk: Scalars['ID'];
    schAcad: AcademicRecordModelTypeConnection;
    schDept: DepartmentModelTypeConnection;
    /** Popular abbreviation of School name */
    short?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
};

/**  School model type definition  */
export type SchoolModelTypeSchAcadArgs = {
    admitted?: InputMaybe<Scalars['Date']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    discipline_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    graduated?: InputMaybe<Scalars['Date']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    program?: InputMaybe<Scalars['String']>;
    school_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/**  School model type definition  */
export type SchoolModelTypeSchDeptArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type SchoolModelTypeConnection = {
    __typename?: 'SchoolModelTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<SchoolModelTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `SchoolModelType` and its cursor. */
export type SchoolModelTypeEdge = {
    __typename?: 'SchoolModelTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<SchoolModelType>;
};

/** Sends user's message to the community Slack channel */
export type SendHelpMessageToCommunity = {
    __typename?: 'SendHelpMessageToCommunity';
    success?: Maybe<Scalars['Boolean']>;
};

/**
 * Send password reset email.
 * For non verified users, send an activation
 * email instead.
 */
export type SendPasswordResetEmail = {
    __typename?: 'SendPasswordResetEmail';
    error?: Maybe<Scalars['String']>;
    ok?: Maybe<Scalars['Boolean']>;
};

export type SpecialtyCreateUpdateMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
};

/** Create/ Update an organization Specialty */
export type SpecialtyCreateUpdateMutationPayload = {
    __typename?: 'SpecialtyCreateUpdateMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    uuid?: Maybe<Scalars['String']>;
};

/** Delete an organization Specialty */
export type SpecialtyDeleteMutation = {
    __typename?: 'SpecialtyDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/** An Specialty Model Object */
export type SpecialtyType = Node & {
    __typename?: 'SpecialtyType';
    /** The ID of the object. */
    id: Scalars['ID'];
    joinrequestSet: JoinRequestTypeConnection;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    subspecialtySet: SubSpecialtyTypeConnection;
    uuid: Scalars['UUID'];
};

/** An Specialty Model Object */
export type SpecialtyTypeJoinrequestSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Email?: InputMaybe<Scalars['String']>;
    user_FirstName?: InputMaybe<Scalars['String']>;
    user_Gender?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    user_LastName?: InputMaybe<Scalars['String']>;
    user_MiddleName?: InputMaybe<Scalars['String']>;
    user_Phone?: InputMaybe<Scalars['String']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

/** An Specialty Model Object */
export type SpecialtyTypeSubspecialtySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    specialty_Id?: InputMaybe<Scalars['Float']>;
};

export type SpecialtyTypeConnection = {
    __typename?: 'SpecialtyTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<SpecialtyTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `SpecialtyType` and its cursor. */
export type SpecialtyTypeEdge = {
    __typename?: 'SpecialtyTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<SpecialtyType>;
};

/** The ticket object for an event */
export type SponsorType = Node & {
    __typename?: 'SponsorType';
    /** The ID of the object. */
    id: Scalars['ID'];
    logoUrl?: Maybe<Scalars['String']>;
    meeting?: Maybe<MeetingWithEventRegistrationsType>;
    name?: Maybe<Scalars['String']>;
};

export type SponsorTypeConnection = {
    __typename?: 'SponsorTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<SponsorTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `SponsorType` and its cursor. */
export type SponsorTypeEdge = {
    __typename?: 'SponsorTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<SponsorType>;
};

export type SubSpecialtyCreateUpdateMutationInput = {
    clientMutationId?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    specialty?: InputMaybe<Scalars['String']>;
};

/** Create/ Update an organization Sub Specialty */
export type SubSpecialtyCreateUpdateMutationPayload = {
    __typename?: 'SubSpecialtyCreateUpdateMutationPayload';
    clientMutationId?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<Scalars['String']>;
    specialty?: Maybe<Scalars['String']>;
    uuid?: Maybe<Scalars['String']>;
};

/** Delete an organization Sub Specialty */
export type SubSpecialtyDeleteMutation = {
    __typename?: 'SubSpecialtyDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/** An SubSpecialty Model Object */
export type SubSpecialtyType = Node & {
    __typename?: 'SubSpecialtyType';
    /** The ID of the object. */
    id: Scalars['ID'];
    joinrequestSet: JoinRequestTypeConnection;
    name?: Maybe<Scalars['String']>;
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    specialty?: Maybe<SpecialtyType>;
    uuid: Scalars['UUID'];
};

/** An SubSpecialty Model Object */
export type SubSpecialtyTypeJoinrequestSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Email?: InputMaybe<Scalars['String']>;
    user_FirstName?: InputMaybe<Scalars['String']>;
    user_Gender?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    user_LastName?: InputMaybe<Scalars['String']>;
    user_MiddleName?: InputMaybe<Scalars['String']>;
    user_Phone?: InputMaybe<Scalars['String']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

export type SubSpecialtyTypeConnection = {
    __typename?: 'SubSpecialtyTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<SubSpecialtyTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `SubSpecialtyType` and its cursor. */
export type SubSpecialtyTypeEdge = {
    __typename?: 'SubSpecialtyTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<SubSpecialtyType>;
};

/** Submit feedback for an attended event */
export type SubmitFeedback = {
    __typename?: 'SubmitFeedback';
    feedback?: Maybe<FeedbackType>;
    howDidYouHearAboutUs?: Maybe<HowDidYouHearAboutUsType>;
    success?: Maybe<Scalars['Boolean']>;
};

export type SubmittedAssignmentMutationInput = {
    assignmentFile?: InputMaybe<Scalars['String']>;
    assignmentQuestion?: InputMaybe<Scalars['String']>;
    author: Scalars['String'];
    clientMutationId?: InputMaybe<Scalars['String']>;
    description: Scalars['String'];
    grade?: InputMaybe<Scalars['Int']>;
    graded?: InputMaybe<Scalars['Boolean']>;
    id?: InputMaybe<Scalars['Int']>;
    submitted?: InputMaybe<Scalars['Boolean']>;
    submittedDate: Scalars['DateTime'];
    topic: Scalars['String'];
};

/** Allow a user to submit an assignment */
export type SubmittedAssignmentMutationPayload = {
    __typename?: 'SubmittedAssignmentMutationPayload';
    assignmentFile?: Maybe<Scalars['String']>;
    assignmentQuestion?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    created?: Maybe<Scalars['DateTime']>;
    description?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    grade?: Maybe<Scalars['Int']>;
    graded?: Maybe<Scalars['Boolean']>;
    id?: Maybe<Scalars['Int']>;
    submitted?: Maybe<Scalars['Boolean']>;
    submittedDate?: Maybe<Scalars['DateTime']>;
    topic?: Maybe<Scalars['String']>;
    updated?: Maybe<Scalars['DateTime']>;
};

/** The Submitted Assignment Model Object */
export type SubmittedAssignmentType = Node & {
    __typename?: 'SubmittedAssignmentType';
    assignmentFile?: Maybe<Scalars['String']>;
    assignmentFileUrl?: Maybe<Scalars['String']>;
    assignmentQuestion?: Maybe<AssignmentType>;
    author: UserType;
    created: Scalars['DateTime'];
    description: Scalars['String'];
    grade: Scalars['Int'];
    graded: Scalars['Boolean'];
    /** The ID of the object. */
    id: Scalars['ID'];
    pk?: Maybe<Scalars['ID']>;
    submitted: Scalars['Boolean'];
    submittedDate: Scalars['DateTime'];
    topic: Scalars['String'];
    updated: Scalars['DateTime'];
};

export type SubmittedAssignmentTypeConnection = {
    __typename?: 'SubmittedAssignmentTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<SubmittedAssignmentTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `SubmittedAssignmentType` and its cursor. */
export type SubmittedAssignmentTypeEdge = {
    __typename?: 'SubmittedAssignmentTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<SubmittedAssignmentType>;
};

/**
 * Take attendance of either a member or non-member of an organization for an event/conference.
 * Expects a user's session to be passed, if the user is logged in, else it's ignore.
 * Arguments:
 * - An authenticated user object has more priority over the attendee email
 * - If attendee will no authenticated session, provided attendee email.
 */
export type TakeEventAttendance = {
    __typename?: 'TakeEventAttendance';
    /** Indicates if the user has PREVIOUSLY taken this attendance */
    hasPreviouslyTakenAttendance?: Maybe<Scalars['Boolean']>;
    /** Provides hints about the reason for success status */
    message?: Maybe<Scalars['String']>;
    /** Tells about the success status of the mutation */
    success?: Maybe<Scalars['Boolean']>;
};

/** Take an excuse for a member of the Org hosting the event */
export type TakeExcuseMutation = {
    __typename?: 'TakeExcuseMutation';
    attendance?: Maybe<AttendanceType>;
    success?: Maybe<Scalars['Boolean']>;
};

/** The ticket object for an event */
export type TicketType = Node & {
    __typename?: 'TicketType';
    conferenceTicket: ConferenceRegistrationWithRelatedPaymentTypeConnection;
    earlyBirdDeadline?: Maybe<Scalars['Date']>;
    earlyBirdFee?: Maybe<Scalars['String']>;
    earlyBirdFeeCurrency: Scalars['String'];
    earlyBirdFeeStr?: Maybe<Scalars['String']>;
    earlyBirdFeeValue?: Maybe<Scalars['Int']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    isClosed: Scalars['Boolean'];
    lateBirdFee?: Maybe<Scalars['String']>;
    lateBirdFeeCurrency: Scalars['String'];
    lateBirdFeeStr?: Maybe<Scalars['String']>;
    lateBirdFeeValue?: Maybe<Scalars['Int']>;
    meeting?: Maybe<MeetingWithEventRegistrationsType>;
    name: Scalars['String'];
    org?: Maybe<OrganizationType>;
    pk?: Maybe<Scalars['ID']>;
    ticketPaid: ConferencePaymentWithMembershipDetailsTypeConnection;
};

/** The ticket object for an event */
export type TicketTypeConferenceTicketArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The ticket object for an event */
export type TicketTypeTicketPaidArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type TicketTypeConnection = {
    __typename?: 'TicketTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<TicketTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `TicketType` and its cursor. */
export type TicketTypeEdge = {
    __typename?: 'TicketTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<TicketType>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
    __typename?: 'UpdateAccount';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    success?: Maybe<Scalars['Boolean']>;
};

/**
 * Updates a User Bio
 *
 * Args:
 *     graphene (String): _description_
 *
 * Returns:
 *     Boolean: Returns True | False in the Success return field
 */
export type UpdateUserProfileBio = {
    __typename?: 'UpdateUserProfileBio';
    success?: Maybe<Scalars['Boolean']>;
};

/** Upload certificate for a User Academic Record */
export type UploadAcademicRecordCertificate = {
    __typename?: 'UploadAcademicRecordCertificate';
    fileUrl?: Maybe<Scalars['String']>;
    ok?: Maybe<Scalars['Boolean']>;
};

/** Create/Update a User's Academic Information */
export type UserAcademicRecord = {
    __typename?: 'UserAcademicRecord';
    academicData?: Maybe<AcademicRecordModelType>;
    errors?: Maybe<Scalars['String']>;
    success?: Maybe<Scalars['Boolean']>;
};

export type UserNode = Node & {
    __typename?: 'UserNode';
    /** The Admin that approved - if joining with Organization is not automatic */
    acceptor: JoinRequestTypeConnection;
    accountType: AccountsUserAccountTypeChoices;
    address?: Maybe<Scalars['String']>;
    announcementSet: AnnouncementTypeConnection;
    archived?: Maybe<Scalars['Boolean']>;
    assignmentCreator: AssignmentTypeConnection;
    assignments: SubmittedAssignmentTypeConnection;
    attendanceCreator: AttendanceWithAttendanceCountTypeConnection;
    attendanceentrySet: AttendanceEntriesTypeConnection;
    bio?: Maybe<Scalars['String']>;
    /** The Admin that blocked the person */
    blocker: JoinRequestTypeConnection;
    conferencePayments: ConferencePaymentWithMembershipDetailsTypeConnection;
    conferenceRegistrationAttendants: ConferenceRegistrationWithRelatedPaymentTypeConnection;
    /** Indicates if a new user has confirmed email */
    confirmedEmail?: Maybe<Scalars['Boolean']>;
    /** Indicates if a new user has confirmed phone number */
    confirmedPhone?: Maybe<Scalars['Boolean']>;
    country: AccountsUserCountryChoices;
    course: CourseTypeConnection;
    creator: OrganizationTypeConnection;
    dateJoined: Scalars['DateTime'];
    /** Enter birthday in YYYY-MM-DD format  */
    dob?: Maybe<Scalars['Date']>;
    email: Scalars['String'];
    enrolledStudents: EnrollmentTypeConnection;
    enrollmentSet: EnrollmentTypeConnection;
    entries: PollEntryTypeConnection;
    faqCreator: WebsiteFaqTypeConnection;
    feedbackSet: FeedbackTypeConnection;
    firstName: Scalars['String'];
    gender?: Maybe<AccountsUserGenderChoices>;
    howdidyouhearaboutusSet: HowDidYouHearAboutUsTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    importcontactSet: MemberInvitationTypeConnection;
    /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
    isActive: Scalars['Boolean'];
    /** Designates whether the user can log into this admin site. */
    isStaff: Scalars['Boolean'];
    kinsman: NextOfKinModelTypeConnection;
    lastLogin?: Maybe<Scalars['DateTime']>;
    lastName: Scalars['String'];
    meetingSet: MeetingWithEventRegistrationsTypeConnection;
    /** The User that wants to join the organization */
    member: JoinRequestTypeConnection;
    memberUsers: ConferenceRegistrationWithRelatedPaymentTypeConnection;
    membersMembershippayments: MembershipPaymentTypeConnection;
    middleName: Scalars['String'];
    nationality: AccountsUserNationalityChoices;
    notificationSetting?: Maybe<UserSettingType>;
    orgAdmins: OrgAdminTypeConnection;
    orgCreator: OrgAdminTypeConnection;
    orgadmininvitationSet: OrgAdminInvitationTypeConnection;
    organizationmembershiptypeSet: Array<OrgMembershipType>;
    /** Write in international phone no format (+234 or +41) */
    phone?: Maybe<Scalars['String']>;
    /** Upload size of photo should be a maximum of 2mb */
    photo?: Maybe<Scalars['String']>;
    pk?: Maybe<Scalars['Int']>;
    pollsAnswersCreated: AnswerTypeConnection;
    pollsCandidatesCreated: CandidateTypeConnection;
    pollsCreated: PollTypeConnection;
    pollsQuestionsCreated: QuestionTypeConnection;
    postal?: Maybe<Scalars['String']>;
    presentationCreator: PresenterTypeConnection;
    presentationSet: PresentationTypeConnection;
    presenterPerson: PresenterTypeConnection;
    profileDocuments: ProfileDocumentTypeConnection;
    publicationSet: PublicationTypeConnection;
    qrCodeFile?: Maybe<Scalars['String']>;
    records: AcademicRecordModelTypeConnection;
    refereeSet: RefereeTypeConnection;
    secondaryEmail?: Maybe<Scalars['String']>;
    sender: NotificationTypeConnection;
    socialAuthPhotoUrl?: Maybe<Scalars['String']>;
    state?: Maybe<AccountsUserStateChoices>;
    ticketSet: TicketTypeConnection;
    timezone: AccountsUserTimezoneChoices;
    /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
    username: Scalars['String'];
    verified?: Maybe<Scalars['Boolean']>;
    workexperienceSet: WorkExperienceModelTypeConnection;
};

export type UserNodeAcceptorArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Email?: InputMaybe<Scalars['String']>;
    user_FirstName?: InputMaybe<Scalars['String']>;
    user_Gender?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    user_LastName?: InputMaybe<Scalars['String']>;
    user_MiddleName?: InputMaybe<Scalars['String']>;
    user_Phone?: InputMaybe<Scalars['String']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserNodeAnnouncementSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    announcementType?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    body?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    organization_Slug?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type UserNodeAssignmentCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    assignmentName?: InputMaybe<Scalars['String']>;
    author_Id?: InputMaybe<Scalars['Float']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    dueDate?: InputMaybe<Scalars['Date']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    startDate?: InputMaybe<Scalars['Date']>;
};

export type UserNodeAssignmentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    assignmentQuestion_Id?: InputMaybe<Scalars['Float']>;
    author_Id?: InputMaybe<Scalars['Float']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    grade?: InputMaybe<Scalars['Int']>;
    graded?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    submitted?: InputMaybe<Scalars['Boolean']>;
    submittedDate?: InputMaybe<Scalars['DateTime']>;
    topic?: InputMaybe<Scalars['String']>;
};

export type UserNodeAttendanceCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    attendanceCode?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeAttendanceentrySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    attendance_AttendanceCode?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type UserNodeBlockerArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Email?: InputMaybe<Scalars['String']>;
    user_FirstName?: InputMaybe<Scalars['String']>;
    user_Gender?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    user_LastName?: InputMaybe<Scalars['String']>;
    user_MiddleName?: InputMaybe<Scalars['String']>;
    user_Phone?: InputMaybe<Scalars['String']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserNodeConferencePaymentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type UserNodeConferenceRegistrationAttendantsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeCourseArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    courseName?: InputMaybe<Scalars['String']>;
    creator_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    physicalClass?: InputMaybe<Scalars['Boolean']>;
    slug?: InputMaybe<Scalars['String']>;
    startDate?: InputMaybe<Scalars['Date']>;
    startTime?: InputMaybe<Scalars['Time']>;
    tutor?: InputMaybe<Scalars['String']>;
    virtualClass?: InputMaybe<Scalars['Boolean']>;
};

export type UserNodeCreatorArgs = {
    abbrev?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    myOrg_Approved?: InputMaybe<Scalars['Boolean']>;
    myOrg_Blocked?: InputMaybe<Scalars['Boolean']>;
    myOrg_User?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type UserNodeEnrolledStudentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    refundStatus?: InputMaybe<Scalars['Boolean']>;
    student_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeEnrollmentSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    refundStatus?: InputMaybe<Scalars['Boolean']>;
    student_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeEntriesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type UserNodeFaqCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    createdBy_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeFeedbackSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

export type UserNodeHowdidyouhearaboutusSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

export type UserNodeImportcontactSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    firstName?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    used?: InputMaybe<Scalars['Boolean']>;
};

export type UserNodeKinsmanArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    firstName?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    middleName?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    phone?: InputMaybe<Scalars['String']>;
    relationship?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeMeetingSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

export type UserNodeMemberArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Email?: InputMaybe<Scalars['String']>;
    user_FirstName?: InputMaybe<Scalars['String']>;
    user_Gender?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    user_LastName?: InputMaybe<Scalars['String']>;
    user_MiddleName?: InputMaybe<Scalars['String']>;
    user_Phone?: InputMaybe<Scalars['String']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserNodeMemberUsersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeMembersMembershippaymentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    membershipType_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeOrgAdminsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    creator?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    user?: InputMaybe<Scalars['ID']>;
};

export type UserNodeOrgCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    creator?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    user?: InputMaybe<Scalars['ID']>;
};

export type UserNodeOrgadmininvitationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
};

export type UserNodePollsAnswersCreatedArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodePollsCandidatesCreatedArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodePollsCreatedArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    pollType?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<Scalars['String']>;
};

export type UserNodePollsQuestionsCreatedArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodePresentationCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type UserNodePresentationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    author?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

export type UserNodePresenterPersonArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

export type UserNodeProfileDocumentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodePublicationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

export type UserNodeRecordsArgs = {
    admitted?: InputMaybe<Scalars['Date']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    discipline_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    graduated?: InputMaybe<Scalars['Date']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    program?: InputMaybe<Scalars['String']>;
    school_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeRefereeSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    number?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeSenderArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    push?: InputMaybe<Scalars['String']>;
    read?: InputMaybe<Scalars['Boolean']>;
    sms?: InputMaybe<Scalars['String']>;
    subject?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeTicketSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    earlyBirdDeadline?: InputMaybe<Scalars['Date']>;
    earlyBirdFee?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    lateBirdFee?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type UserNodeWorkexperienceSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    companyName?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    description?: InputMaybe<Scalars['String']>;
    designation?: InputMaybe<Scalars['String']>;
    endDate?: InputMaybe<Scalars['Date']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    startDate?: InputMaybe<Scalars['Date']>;
    state?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** Upload Profile Image for a user */
export type UserProfilePhoto = {
    __typename?: 'UserProfilePhoto';
    ok?: Maybe<Scalars['Boolean']>;
    photoUrl?: Maybe<Scalars['String']>;
};

/** The UserSetting object */
export type UserSettingType = {
    __typename?: 'UserSettingType';
    createdAt: Scalars['DateTime'];
    email: Scalars['Boolean'];
    id: Scalars['ID'];
    pk?: Maybe<Scalars['ID']>;
    push: Scalars['Boolean'];
    sms: Scalars['Boolean'];
    updatedAt: Scalars['DateTime'];
    user?: Maybe<UserType>;
};

/** The User model */
export type UserType = Node & {
    __typename?: 'UserType';
    /** The Admin that approved - if joining with Organization is not automatic */
    acceptor: JoinRequestTypeConnection;
    accountType: AccountsUserAccountTypeChoices;
    address?: Maybe<Scalars['String']>;
    announcementSet: AnnouncementTypeConnection;
    assignmentCreator: AssignmentTypeConnection;
    assignments: SubmittedAssignmentTypeConnection;
    attendanceCreator: AttendanceWithAttendanceCountTypeConnection;
    attendanceentrySet: AttendanceEntriesTypeConnection;
    bio?: Maybe<Scalars['String']>;
    /** The Admin that blocked the person */
    blocker: JoinRequestTypeConnection;
    conferencePayments: ConferencePaymentWithMembershipDetailsTypeConnection;
    conferenceRegistrationAttendants: ConferenceRegistrationWithRelatedPaymentTypeConnection;
    /** Indicates if a new user has confirmed email */
    confirmedEmail?: Maybe<Scalars['Boolean']>;
    /** Indicates if a new user has confirmed phone number */
    confirmedPhone?: Maybe<Scalars['Boolean']>;
    country: AccountsUserCountryChoices;
    course: CourseTypeConnection;
    creator: OrganizationTypeConnection;
    dateJoined: Scalars['DateTime'];
    /** Enter birthday in YYYY-MM-DD format  */
    dob?: Maybe<Scalars['Date']>;
    email: Scalars['String'];
    enrolledStudents: EnrollmentTypeConnection;
    enrollmentSet: EnrollmentTypeConnection;
    entries: PollEntryTypeConnection;
    faqCreator: WebsiteFaqTypeConnection;
    feedbackSet: FeedbackTypeConnection;
    firstName: Scalars['String'];
    gender?: Maybe<AccountsUserGenderChoices>;
    howdidyouhearaboutusSet: HowDidYouHearAboutUsTypeConnection;
    /** The ID of the object. */
    id: Scalars['ID'];
    importcontactSet: MemberInvitationTypeConnection;
    /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
    isActive: Scalars['Boolean'];
    kinsman: NextOfKinModelTypeConnection;
    lastLogin?: Maybe<Scalars['DateTime']>;
    lastName: Scalars['String'];
    meetingSet: MeetingWithEventRegistrationsTypeConnection;
    /** The User that wants to join the organization */
    member: JoinRequestTypeConnection;
    memberUsers: ConferenceRegistrationWithRelatedPaymentTypeConnection;
    membersMembershippayments: MembershipPaymentTypeConnection;
    middleName: Scalars['String'];
    nationality: AccountsUserNationalityChoices;
    notificationSetting?: Maybe<UserSettingType>;
    orgAdmins: OrgAdminTypeConnection;
    orgCreator: OrgAdminTypeConnection;
    orgadmininvitationSet: OrgAdminInvitationTypeConnection;
    organizationmembershiptypeSet: Array<OrgMembershipType>;
    /** Write in international phone no format (+234 or +41) */
    phone?: Maybe<Scalars['String']>;
    /** Upload size of photo should be a maximum of 2mb */
    photo?: Maybe<Scalars['String']>;
    photoUrl?: Maybe<Scalars['String']>;
    pk: Scalars['ID'];
    pollsAnswersCreated: AnswerTypeConnection;
    pollsCandidatesCreated: CandidateTypeConnection;
    pollsCreated: PollTypeConnection;
    pollsQuestionsCreated: QuestionTypeConnection;
    postal?: Maybe<Scalars['String']>;
    presentationCreator: PresenterTypeConnection;
    presentationSet: PresentationTypeConnection;
    presenterPerson: PresenterTypeConnection;
    profileDocuments: ProfileDocumentTypeConnection;
    publicationSet: PublicationTypeConnection;
    qrCode?: Maybe<Scalars['String']>;
    qrCodeFile?: Maybe<Scalars['String']>;
    records: AcademicRecordModelTypeConnection;
    refereeSet: RefereeTypeConnection;
    sender: NotificationTypeConnection;
    socialAuthPhotoUrl?: Maybe<Scalars['String']>;
    state?: Maybe<AccountsUserStateChoices>;
    ticketSet: TicketTypeConnection;
    timezone: AccountsUserTimezoneChoices;
    /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
    username: Scalars['String'];
    workexperienceSet: WorkExperienceModelTypeConnection;
};

/** The User model */
export type UserTypeAcceptorArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Email?: InputMaybe<Scalars['String']>;
    user_FirstName?: InputMaybe<Scalars['String']>;
    user_Gender?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    user_LastName?: InputMaybe<Scalars['String']>;
    user_MiddleName?: InputMaybe<Scalars['String']>;
    user_Phone?: InputMaybe<Scalars['String']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

/** The User model */
export type UserTypeAnnouncementSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    announcementType?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    body?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    organization_Slug?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypeAssignmentCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    assignmentName?: InputMaybe<Scalars['String']>;
    author_Id?: InputMaybe<Scalars['Float']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    dueDate?: InputMaybe<Scalars['Date']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    startDate?: InputMaybe<Scalars['Date']>;
};

/** The User model */
export type UserTypeAssignmentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    assignmentQuestion_Id?: InputMaybe<Scalars['Float']>;
    author_Id?: InputMaybe<Scalars['Float']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    grade?: InputMaybe<Scalars['Int']>;
    graded?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    submitted?: InputMaybe<Scalars['Boolean']>;
    submittedDate?: InputMaybe<Scalars['DateTime']>;
    topic?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypeAttendanceCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    attendanceCode?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeAttendanceentrySetArgs = {
    after?: InputMaybe<Scalars['String']>;
    attendance_AttendanceCode?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The User model */
export type UserTypeBlockerArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Email?: InputMaybe<Scalars['String']>;
    user_FirstName?: InputMaybe<Scalars['String']>;
    user_Gender?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    user_LastName?: InputMaybe<Scalars['String']>;
    user_MiddleName?: InputMaybe<Scalars['String']>;
    user_Phone?: InputMaybe<Scalars['String']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

/** The User model */
export type UserTypeConferencePaymentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The User model */
export type UserTypeConferenceRegistrationAttendantsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeCourseArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    courseName?: InputMaybe<Scalars['String']>;
    creator_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    physicalClass?: InputMaybe<Scalars['Boolean']>;
    slug?: InputMaybe<Scalars['String']>;
    startDate?: InputMaybe<Scalars['Date']>;
    startTime?: InputMaybe<Scalars['Time']>;
    tutor?: InputMaybe<Scalars['String']>;
    virtualClass?: InputMaybe<Scalars['Boolean']>;
};

/** The User model */
export type UserTypeCreatorArgs = {
    abbrev?: InputMaybe<Scalars['String']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    myOrg_Approved?: InputMaybe<Scalars['Boolean']>;
    myOrg_Blocked?: InputMaybe<Scalars['Boolean']>;
    myOrg_User?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    slug?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypeEnrolledStudentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    refundStatus?: InputMaybe<Scalars['Boolean']>;
    student_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeEnrollmentSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    course_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    paymentName?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    refundStatus?: InputMaybe<Scalars['Boolean']>;
    student_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeEntriesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The User model */
export type UserTypeFaqCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    createdBy_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeFeedbackSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

/** The User model */
export type UserTypeHowdidyouhearaboutusSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting?: InputMaybe<Scalars['ID']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    respondent?: InputMaybe<Scalars['ID']>;
};

/** The User model */
export type UserTypeImportcontactSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    firstName?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    used?: InputMaybe<Scalars['Boolean']>;
};

/** The User model */
export type UserTypeKinsmanArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    firstName?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    lastName?: InputMaybe<Scalars['String']>;
    middleName?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    phone?: InputMaybe<Scalars['String']>;
    relationship?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeMeetingSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};

/** The User model */
export type UserTypeMemberArgs = {
    after?: InputMaybe<Scalars['String']>;
    approved?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    newOrOld?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    orgNumber?: InputMaybe<Scalars['String']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    subdivision_Id?: InputMaybe<Scalars['Float']>;
    user_Email?: InputMaybe<Scalars['String']>;
    user_FirstName?: InputMaybe<Scalars['String']>;
    user_Gender?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
    user_LastName?: InputMaybe<Scalars['String']>;
    user_MiddleName?: InputMaybe<Scalars['String']>;
    user_Phone?: InputMaybe<Scalars['String']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};

/** The User model */
export type UserTypeMemberUsersArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    event_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    ticket_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeMembersMembershippaymentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    membershipType_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentType?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeOrgAdminsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    creator?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    user?: InputMaybe<Scalars['ID']>;
};

/** The User model */
export type UserTypeOrgCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    creator?: InputMaybe<Scalars['ID']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
    user?: InputMaybe<Scalars['ID']>;
};

/** The User model */
export type UserTypeOrgadmininvitationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['ID']>;
};

/** The User model */
export type UserTypePollsAnswersCreatedArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypePollsCandidatesCreatedArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypePollsCreatedArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    pollType?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypePollsQuestionsCreatedArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypePresentationCreatorArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypePresentationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    author?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypePresenterPersonArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    meeting_EventSlug?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
    person?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypeProfileDocumentsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypePublicationSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    category_Id?: InputMaybe<Scalars['Float']>;
    externalUpload?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    title?: InputMaybe<Scalars['String']>;
};

/** The User model */
export type UserTypeRecordsArgs = {
    admitted?: InputMaybe<Scalars['Date']>;
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    discipline_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    graduated?: InputMaybe<Scalars['Date']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    program?: InputMaybe<Scalars['String']>;
    school_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeRefereeSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    number?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeSenderArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    id?: InputMaybe<Scalars['Float']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    push?: InputMaybe<Scalars['String']>;
    read?: InputMaybe<Scalars['Boolean']>;
    sms?: InputMaybe<Scalars['String']>;
    subject?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeTicketSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    earlyBirdDeadline?: InputMaybe<Scalars['Date']>;
    earlyBirdFee?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    lateBirdFee?: InputMaybe<Scalars['String']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
    name?: InputMaybe<Scalars['String']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

/** The User model */
export type UserTypeWorkexperienceSetArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    companyName?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    description?: InputMaybe<Scalars['String']>;
    designation?: InputMaybe<Scalars['String']>;
    endDate?: InputMaybe<Scalars['Date']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    startDate?: InputMaybe<Scalars['Date']>;
    state?: InputMaybe<Scalars['String']>;
    user_Id?: InputMaybe<Scalars['Float']>;
};

export type UserWorkExperienceMutationInput = {
    address?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
    companyName?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    /** Indicates if this is your current work */
    current?: InputMaybe<Scalars['Boolean']>;
    /** Full description of what you duties entails */
    description?: InputMaybe<Scalars['String']>;
    designation?: InputMaybe<Scalars['String']>;
    /** YYYY-MM-DD, Leave blank if still working in that role */
    endDate?: InputMaybe<Scalars['Date']>;
    id?: InputMaybe<Scalars['Int']>;
    /** YYYY-MM-DD */
    startDate: Scalars['Date'];
    state?: InputMaybe<Scalars['String']>;
    user: Scalars['String'];
};

/** Create User's work experience record */
export type UserWorkExperienceMutationPayload = {
    __typename?: 'UserWorkExperienceMutationPayload';
    address?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    companyName?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    created?: Maybe<Scalars['DateTime']>;
    /** Indicates if this is your current work */
    current?: Maybe<Scalars['Boolean']>;
    /** Full description of what you duties entails */
    description?: Maybe<Scalars['String']>;
    designation?: Maybe<Scalars['String']>;
    /** YYYY-MM-DD, Leave blank if still working in that role */
    endDate?: Maybe<Scalars['Date']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    /** YYYY-MM-DD */
    startDate?: Maybe<Scalars['Date']>;
    state?: Maybe<Scalars['String']>;
    updated?: Maybe<Scalars['DateTime']>;
    user?: Maybe<Scalars['String']>;
    uuid?: Maybe<Scalars['String']>;
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
    __typename?: 'VerifyAccount';
    error?: Maybe<Scalars['String']>;
    ok?: Maybe<Scalars['Boolean']>;
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccountByOrganization = {
    __typename?: 'VerifyAccountByOrganization';
    error?: Maybe<Scalars['String']>;
    ok?: Maybe<Scalars['Boolean']>;
};

/** Verify reset password token sent to user email. */
export type VerifyResetPasswordToken = {
    __typename?: 'VerifyResetPasswordToken';
    error?: Maybe<Scalars['String']>;
    ok?: Maybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyToken = {
    __typename?: 'VerifyToken';
    errors?: Maybe<Scalars['ExpectedErrorType']>;
    payload?: Maybe<Scalars['GenericScalar']>;
    success?: Maybe<Scalars['Boolean']>;
};

export type WebsiteFaqCreateUpdateMutationInput = {
    answer?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
    createdBy?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['String']>;
    question?: InputMaybe<Scalars['String']>;
};

/** Create/ Update an organization Website FAQ */
export type WebsiteFaqCreateUpdateMutationPayload = {
    __typename?: 'WebsiteFAQCreateUpdateMutationPayload';
    answer?: Maybe<Scalars['String']>;
    clientMutationId?: Maybe<Scalars['String']>;
    created?: Maybe<Scalars['DateTime']>;
    createdBy?: Maybe<Scalars['String']>;
    /** May contain more than one error for same field. */
    errors?: Maybe<Array<Maybe<ErrorType>>>;
    id?: Maybe<Scalars['Int']>;
    organization?: Maybe<Scalars['String']>;
    question?: Maybe<Scalars['String']>;
    updated?: Maybe<Scalars['DateTime']>;
};

/** Delete an organization Website FAQ */
export type WebsiteFaqDeleteMutation = {
    __typename?: 'WebsiteFAQDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/** The WebsiteFAQ Model object */
export type WebsiteFaqType = Node & {
    __typename?: 'WebsiteFaqType';
    answer?: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    createdBy?: Maybe<UserType>;
    /** The ID of the object. */
    id: Scalars['ID'];
    organization?: Maybe<OrganizationType>;
    pk: Scalars['ID'];
    question?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
};

export type WebsiteFaqTypeConnection = {
    __typename?: 'WebsiteFaqTypeConnection';
    edgeCount?: Maybe<Scalars['Int']>;
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<WebsiteFaqTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `WebsiteFaqType` and its cursor. */
export type WebsiteFaqTypeEdge = {
    __typename?: 'WebsiteFaqTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<WebsiteFaqType>;
};

/** The Website Images type */
export type WebsiteImageType = Node & {
    __typename?: 'WebsiteImageType';
    category: Scalars['String'];
    /** The ID of the object. */
    id: Scalars['ID'];
    image?: Maybe<Scalars['String']>;
    imageUrl?: Maybe<Scalars['String']>;
    org?: Maybe<OrganizationType>;
    /** Especially for banner slider images */
    subtitle?: Maybe<Scalars['String']>;
    /** Especially for banner slider images */
    title?: Maybe<Scalars['String']>;
    website?: Maybe<WebsiteType>;
};

export type WebsiteImageTypeConnection = {
    __typename?: 'WebsiteImageTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<WebsiteImageTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `WebsiteImageType` and its cursor. */
export type WebsiteImageTypeEdge = {
    __typename?: 'WebsiteImageTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<WebsiteImageType>;
};

/** The website object related to an organization and event */
export type WebsiteType = Node & {
    __typename?: 'WebsiteType';
    bannerLogo?: Maybe<Scalars['String']>;
    bannerLogoUrl?: Maybe<Scalars['String']>;
    body?: Maybe<Scalars['String']>;
    /** The Body Font for the Website */
    bodyFont?: Maybe<Scalars['String']>;
    /** Custom external domain */
    customDomain?: Maybe<Scalars['String']>;
    event?: Maybe<MeetingWithEventRegistrationsType>;
    header?: Maybe<Scalars['String']>;
    headerTitle?: Maybe<Scalars['String']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    images: WebsiteImageTypeConnection;
    org?: Maybe<OrganizationType>;
    /** The primary color for website background */
    primaryBgColor?: Maybe<Scalars['String']>;
    /** The primary color for buttons */
    primaryBtnColor?: Maybe<Scalars['String']>;
    /** The primary color as theme for pages */
    primaryColor?: Maybe<Scalars['String']>;
    /** The Primary Font for the Website */
    primaryFont?: Maybe<Scalars['String']>;
    /** The primary color for texts */
    primaryTextColor?: Maybe<Scalars['String']>;
    /** The secondary color for website background */
    secondaryBgColor?: Maybe<Scalars['String']>;
    /** The secondary color for buttons */
    secondaryBtnColor?: Maybe<Scalars['String']>;
    /** The secondary color as theme for pages */
    secondaryColor?: Maybe<Scalars['String']>;
    /** The Secondary Font for the Website */
    secondaryFont?: Maybe<Scalars['String']>;
    /** The secondary color for texts */
    secondaryTextColor?: Maybe<Scalars['String']>;
    /** chosen subdomain on peddlesoft.com */
    subDomain?: Maybe<Scalars['String']>;
    webLogo?: Maybe<Scalars['String']>;
    webLogoUrl?: Maybe<Scalars['String']>;
};

/** The website object related to an organization and event */
export type WebsiteTypeImagesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    org_Id?: InputMaybe<Scalars['Float']>;
};

export type WebsiteTypeConnection = {
    __typename?: 'WebsiteTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<WebsiteTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `WebsiteType` and its cursor. */
export type WebsiteTypeEdge = {
    __typename?: 'WebsiteTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<WebsiteType>;
};

/** Delete a User's Work Experience */
export type WorkExperienceDeleteMutation = {
    __typename?: 'WorkExperienceDeleteMutation';
    ok?: Maybe<Scalars['Boolean']>;
};

/**  WorkExperience model type definition  */
export type WorkExperienceModelType = Node & {
    __typename?: 'WorkExperienceModelType';
    address?: Maybe<Scalars['String']>;
    companyName?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    /** Indicates if this is your current work */
    current?: Maybe<Scalars['Boolean']>;
    /** Full description of what you duties entails */
    description?: Maybe<Scalars['String']>;
    designation?: Maybe<Scalars['String']>;
    /** YYYY-MM-DD, Leave blank if still working in that role */
    endDate?: Maybe<Scalars['Date']>;
    /** The ID of the object. */
    id: Scalars['ID'];
    pk: Scalars['ID'];
    /** YYYY-MM-DD */
    startDate: Scalars['Date'];
    state?: Maybe<Scalars['String']>;
    updated: Scalars['DateTime'];
    user: UserType;
    uuid: Scalars['UUID'];
};

export type WorkExperienceModelTypeConnection = {
    __typename?: 'WorkExperienceModelTypeConnection';
    /** Contains the nodes in this connection. */
    edges: Array<Maybe<WorkExperienceModelTypeEdge>>;
    /** Pagination data for this connection. */
    pageInfo: PageInfo;
};

/** A Relay edge containing a `WorkExperienceModelType` and its cursor. */
export type WorkExperienceModelTypeEdge = {
    __typename?: 'WorkExperienceModelTypeEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<WorkExperienceModelType>;
};

export type RegisterUserMutationVariables = Exact<{
    email: Scalars['String'];
    accountType: Scalars['String'];
    first_name: Scalars['String'];
    last_name: Scalars['String'];
    username: Scalars['String'];
    password_1: Scalars['String'];
    password_2: Scalars['String'];
    orgId: Scalars['Int'];
}>;

export type RegisterUserMutation = {
    __typename?: 'RootMutation';
    registerByOrganization?: {
        __typename?: 'RegisterUserByOrganization';
        token?: string | null;
        success?: boolean | null;
        errors?: any | null;
    } | null;
};

export type LoginUserMutationVariables = Exact<{
    username: Scalars['String'];
    password: Scalars['String'];
}>;

export type LoginUserMutation = {
    __typename?: 'RootMutation';
    login?: {
        __typename?: 'LoginUser';
        success?: boolean | null;
        errors?: any | null;
        token?: string | null;
        user?: {
            __typename?: 'UserType';
            pk: string;
            id: string;
            username: string;
            firstName: string;
            lastName: string;
            bio?: string | null;
            accountType: AccountsUserAccountTypeChoices;
            dob?: any | null;
            qrCodeFile?: string | null;
            phone?: string | null;
            confirmedEmail?: boolean | null;
            gender?: AccountsUserGenderChoices | null;
            address?: string | null;
            postal?: string | null;
            socialAuthPhotoUrl?: string | null;
            dateJoined: any;
            isActive: boolean;
            photoUrl?: string | null;
            organizationmembershiptypeSet: Array<{
                __typename?: 'OrgMembershipType';
                name: string;
            }>;
            records: {
                __typename?: 'AcademicRecordModelTypeConnection';
                edges: Array<{
                    __typename?: 'AcademicRecordModelTypeEdge';
                    node?: {
                        __typename?: 'AcademicRecordModelType';
                        program: string;
                        admitted?: any | null;
                        graduated?: any | null;
                        school: { __typename?: 'SchoolModelType'; name: string };
                        discipline?: { __typename?: 'DepartmentModelType'; name: string } | null;
                    } | null;
                } | null>;
            };
            workexperienceSet: {
                __typename?: 'WorkExperienceModelTypeConnection';
                edges: Array<{
                    __typename?: 'WorkExperienceModelTypeEdge';
                    node?: {
                        __typename?: 'WorkExperienceModelType';
                        companyName?: string | null;
                        designation?: string | null;
                        startDate: any;
                        endDate?: any | null;
                    } | null;
                } | null>;
            };
        } | null;
    } | null;
};

export type VerifyAccountMutationVariables = Exact<{
    code: Scalars['String'];
}>;

export type VerifyAccountMutation = {
    __typename?: 'RootMutation';
    verifyAccount?: {
        __typename?: 'VerifyAccount';
        ok?: boolean | null;
        error?: string | null;
    } | null;
};

export type VerifyAccountByOrganizationMutationVariables = Exact<{
    code: Scalars['String'];
    orgId: Scalars['Int'];
}>;

export type VerifyAccountByOrganizationMutation = {
    __typename?: 'RootMutation';
    verifyAccountByOrganization?: {
        __typename?: 'VerifyAccountByOrganization';
        ok?: boolean | null;
        error?: string | null;
    } | null;
};

export type ResendActivationEmailMutationVariables = Exact<{
    email: Scalars['String'];
    organizationId: Scalars['ID'];
}>;

export type ResendActivationEmailMutation = {
    __typename?: 'RootMutation';
    resendActivationEmail?: {
        __typename?: 'ResendActivationEmail';
        ok?: boolean | null;
        error?: string | null;
    } | null;
};

export type SendPasswordResetEmailMutationVariables = Exact<{
    email: Scalars['String'];
}>;

export type SendPasswordResetEmailMutation = {
    __typename?: 'RootMutation';
    sendPasswordResetEmail?: {
        __typename?: 'SendPasswordResetEmail';
        ok?: boolean | null;
        error?: string | null;
    } | null;
};

export type VerifyResetPasswordTokenMutationVariables = Exact<{
    code: Scalars['String'];
}>;

export type VerifyResetPasswordTokenMutation = {
    __typename?: 'RootMutation';
    verifyPasswordResetToken?: {
        __typename?: 'VerifyResetPasswordToken';
        ok?: boolean | null;
        error?: string | null;
    } | null;
};

export type PasswordResetMutationVariables = Exact<{
    token: Scalars['String'];
    newPassword1: Scalars['String'];
    newPassword2: Scalars['String'];
}>;

export type PasswordResetMutation = {
    __typename?: 'RootMutation';
    passwordReset?: {
        __typename?: 'PasswordReset';
        success?: boolean | null;
        errors?: any | null;
    } | null;
};

export type NextOfKinMutationPayloadMutationVariables = Exact<{
    user: Scalars['String'];
    first_name: Scalars['String'];
    middle_name?: InputMaybe<Scalars['String']>;
    last_name: Scalars['String'];
    phone: Scalars['String'];
    email: Scalars['String'];
    relationship: Scalars['String'];
}>;

export type NextOfKinMutationPayloadMutation = {
    __typename?: 'RootMutation';
    nextOfKin?: {
        __typename?: 'NextOfKinMutationPayload';
        id?: number | null;
        user?: string | null;
        firstName?: string | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type PostUserProfilePictureMutationVariables = Exact<{
    profile_picture: Scalars['Upload'];
}>;

export type PostUserProfilePictureMutation = {
    __typename?: 'RootMutation';
    profilePicture?: {
        __typename?: 'UserProfilePhoto';
        ok?: boolean | null;
        photoUrl?: string | null;
    } | null;
};

export type PostUserPersonalInformationMutationVariables = Exact<{
    firstName: Scalars['String'];
    middleName?: InputMaybe<Scalars['String']>;
    lastName: Scalars['String'];
    dob: Scalars['String'];
    phone?: InputMaybe<Scalars['String']>;
    bio?: InputMaybe<Scalars['String']>;
    gender: Scalars['String'];
    address: Scalars['String'];
    email: Scalars['String'];
    postal?: InputMaybe<Scalars['String']>;
    state?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    nationality?: InputMaybe<Scalars['String']>;
}>;

export type PostUserPersonalInformationMutation = {
    __typename?: 'RootMutation';
    updateAccount?: {
        __typename?: 'UpdateAccount';
        success?: boolean | null;
        errors?: any | null;
    } | null;
};

export type PostUserJoinOrganizationRequestMutationVariables = Exact<{
    organizationId: Scalars['String'];
    userId: Scalars['String'];
    orgNumber?: InputMaybe<Scalars['String']>;
    otherMembershipNumbers: Scalars['String'];
    newOrOld: Scalars['String'];
    membershipCadreId?: InputMaybe<Scalars['String']>;
    specialty?: InputMaybe<Scalars['String']>;
    subSpecialty?: InputMaybe<Scalars['String']>;
    subdivision?: InputMaybe<Scalars['String']>;
}>;

export type PostUserJoinOrganizationRequestMutation = {
    __typename?: 'RootMutation';
    joinOrganization?: {
        __typename?: 'JoinOrganizationMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type UpdateUserJoinOrganizationRequestMutationVariables = Exact<{
    joinRequestId?: InputMaybe<Scalars['Int']>;
    organizationId: Scalars['String'];
    userId: Scalars['String'];
    orgNumber?: InputMaybe<Scalars['String']>;
    otherMembershipNumbers: Scalars['String'];
    newOrOld: Scalars['String'];
    membershipCadreId?: InputMaybe<Scalars['String']>;
    specialty?: InputMaybe<Scalars['String']>;
    subSpecialty?: InputMaybe<Scalars['String']>;
    subdivision?: InputMaybe<Scalars['String']>;
}>;

export type UpdateUserJoinOrganizationRequestMutation = {
    __typename?: 'RootMutation';
    joinOrganization?: {
        __typename?: 'JoinOrganizationMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type DeleteUserWorkExperienceMutationVariables = Exact<{
    workExperienceId: Scalars['ID'];
}>;

export type DeleteUserWorkExperienceMutation = {
    __typename?: 'RootMutation';
    userWorkExperienceDelete?: {
        __typename?: 'WorkExperienceDeleteMutation';
        ok?: boolean | null;
    } | null;
};

export type UpdateUserWorkExperienceMutationVariables = Exact<{
    workExperienceId: Scalars['Int'];
    userId: Scalars['String'];
    current?: InputMaybe<Scalars['Boolean']>;
    companyName: Scalars['String'];
    designation?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    country: Scalars['String'];
    state?: InputMaybe<Scalars['String']>;
    address: Scalars['String'];
    startDate: Scalars['Date'];
    endDate?: InputMaybe<Scalars['Date']>;
}>;

export type UpdateUserWorkExperienceMutation = {
    __typename?: 'RootMutation';
    userWorkExperience?: {
        __typename?: 'UserWorkExperienceMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type PostUserWorkExperienceMutationVariables = Exact<{
    userId: Scalars['String'];
    current?: InputMaybe<Scalars['Boolean']>;
    companyName: Scalars['String'];
    designation?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    country: Scalars['String'];
    state?: InputMaybe<Scalars['String']>;
    address: Scalars['String'];
    startDate: Scalars['Date'];
    endDate?: InputMaybe<Scalars['Date']>;
}>;

export type PostUserWorkExperienceMutation = {
    __typename?: 'RootMutation';
    userWorkExperience?: {
        __typename?: 'UserWorkExperienceMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type PostUserNextOfKinMutationVariables = Exact<{
    userId: Scalars['String'];
    firstName: Scalars['String'];
    middleName: Scalars['String'];
    lastName?: InputMaybe<Scalars['String']>;
    email: Scalars['String'];
    phone?: InputMaybe<Scalars['String']>;
    relationship: Scalars['String'];
}>;

export type PostUserNextOfKinMutation = {
    __typename?: 'RootMutation';
    nextOfKin?: {
        __typename?: 'NextOfKinMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type UpdateUserNextOfKinMutationVariables = Exact<{
    nextOfKinId: Scalars['Int'];
    userId: Scalars['String'];
    firstName: Scalars['String'];
    middleName: Scalars['String'];
    lastName?: InputMaybe<Scalars['String']>;
    email: Scalars['String'];
    phone?: InputMaybe<Scalars['String']>;
    relationship: Scalars['String'];
}>;

export type UpdateUserNextOfKinMutation = {
    __typename?: 'RootMutation';
    nextOfKin?: {
        __typename?: 'NextOfKinMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type DeleteUserNextOfKinMutationVariables = Exact<{
    nextOfKinId: Scalars['ID'];
}>;

export type DeleteUserNextOfKinMutation = {
    __typename?: 'RootMutation';
    nextOfKinDelete?: { __typename?: 'NextOfKinDeleteMutation'; ok?: boolean | null } | null;
};

export type PostUserRefereeMutationVariables = Exact<{
    userId: Scalars['String'];
    firstName: Scalars['String'];
    middleName: Scalars['String'];
    lastName?: InputMaybe<Scalars['String']>;
    email: Scalars['String'];
    phone?: InputMaybe<Scalars['String']>;
    number: Scalars['String'];
    organizationId: Scalars['String'];
}>;

export type PostUserRefereeMutation = {
    __typename?: 'RootMutation';
    memberReferee?: {
        __typename?: 'RefereeMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type DeleteUserRefereeMutationVariables = Exact<{
    refereeId: Scalars['ID'];
}>;

export type DeleteUserRefereeMutation = {
    __typename?: 'RootMutation';
    memberRefereeDelete?: { __typename?: 'DeleteRefereeMutation'; ok?: boolean | null } | null;
};

export type UpdateUserRefereeMutationVariables = Exact<{
    refereeId: Scalars['Int'];
    userId: Scalars['String'];
    firstName: Scalars['String'];
    middleName: Scalars['String'];
    lastName?: InputMaybe<Scalars['String']>;
    email: Scalars['String'];
    phone?: InputMaybe<Scalars['String']>;
    number: Scalars['String'];
    organizationId: Scalars['String'];
}>;

export type UpdateUserRefereeMutation = {
    __typename?: 'RootMutation';
    memberReferee?: {
        __typename?: 'RefereeMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type DeleteUserAcademicRecordMutationVariables = Exact<{
    academicRecordId: Scalars['ID'];
}>;

export type DeleteUserAcademicRecordMutation = {
    __typename?: 'RootMutation';
    academicRecordDelete?: {
        __typename?: 'AcademicRecordDeleteMutation';
        ok?: boolean | null;
    } | null;
};

export type UpdateUserAcademicInformationMutationVariables = Exact<{
    academicRecordId: Scalars['ID'];
    admitted?: InputMaybe<Scalars['Date']>;
    school?: InputMaybe<Scalars['String']>;
    graduated?: InputMaybe<Scalars['String']>;
    program?: InputMaybe<Scalars['String']>;
    discipline?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    certificate?: InputMaybe<Scalars['Upload']>;
}>;

export type UpdateUserAcademicInformationMutation = {
    __typename?: 'RootMutation';
    userAcademicInformation?: {
        __typename?: 'UserAcademicRecord';
        success?: boolean | null;
        errors?: string | null;
    } | null;
};

export type PostUserAcademicInformationMutationVariables = Exact<{
    admitted?: InputMaybe<Scalars['Date']>;
    school?: InputMaybe<Scalars['String']>;
    graduated?: InputMaybe<Scalars['String']>;
    program?: InputMaybe<Scalars['String']>;
    discipline?: InputMaybe<Scalars['String']>;
    current?: InputMaybe<Scalars['Boolean']>;
    certificate?: InputMaybe<Scalars['Upload']>;
}>;

export type PostUserAcademicInformationMutation = {
    __typename?: 'RootMutation';
    userAcademicInformation?: {
        __typename?: 'UserAcademicRecord';
        success?: boolean | null;
        errors?: string | null;
    } | null;
};

export type PostUserMembershipApplicationSubmissionMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
}>;

export type PostUserMembershipApplicationSubmissionMutation = {
    __typename?: 'RootMutation';
    membershipApplicationSubmission?: {
        __typename?: 'MembershipApplicationSubmission';
        success?: boolean | null;
    } | null;
};

export type PostCheckIfUserIsMemberElseCreateJoinRequestMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
    membershipTypeId?: InputMaybe<Scalars['ID']>;
}>;

export type PostCheckIfUserIsMemberElseCreateJoinRequestMutation = {
    __typename?: 'RootMutation';
    checkIfUserIsMemberElseCreateJoinRequest?: {
        __typename?: 'CheckIfUserIsMemberElseCreateJoinRequest';
        success?: boolean | null;
    } | null;
};

export type PostConfirmMembershipOnlinePaymentMutationVariables = Exact<{
    organizationId: Scalars['Int'];
    membershipTypeId?: InputMaybe<Scalars['Int']>;
    userId: Scalars['Int'];
    amountPaid: Scalars['Int'];
    paid: Scalars['Boolean'];
    paymentApproval: Scalars['Boolean'];
    paymentType: Scalars['String'];
    paymentDate: Scalars['String'];
    txref: Scalars['String'];
    paymentName?: InputMaybe<Scalars['String']>;
    paymentStatus?: InputMaybe<Scalars['String']>;
}>;

export type PostConfirmMembershipOnlinePaymentMutation = {
    __typename?: 'RootMutation';
    confirmMembershipOnlinePayment?: {
        __typename?: 'ConfirmMembershipOnlinePaymentMutation';
        error?: string | null;
        success?: boolean | null;
    } | null;
};

export type PostNullifyMemberOutstandingPaymentsMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
}>;

export type PostNullifyMemberOutstandingPaymentsMutation = {
    __typename?: 'RootMutation';
    nullifyMemberOutstandingPayments?: {
        __typename?: 'NullifyMemberOutstandingPayments';
        success?: boolean | null;
    } | null;
};

export type CreateOrgBioMutationVariables = Exact<{
    bio: Scalars['String'];
}>;

export type CreateOrgBioMutation = {
    __typename?: 'RootMutation';
    updateUserProfileBio?: { __typename?: 'UpdateUserProfileBio'; success?: boolean | null } | null;
};

export type CreateOrgDocumentMutationVariables = Exact<{
    cacCertificate?: InputMaybe<Scalars['Upload']>;
    companyProfile?: InputMaybe<Scalars['Upload']>;
    other?: InputMaybe<Scalars['Upload']>;
    taxClearance?: InputMaybe<Scalars['Upload']>;
}>;

export type CreateOrgDocumentMutation = {
    __typename?: 'RootMutation';
    createUpdateUserProfileDocuments?: {
        __typename?: 'CreateUpdateUserProfileDocuments';
        success?: boolean | null;
    } | null;
};

export type PostSendHelpMessageToCommunityMutationVariables = Exact<{
    domainName?: InputMaybe<Scalars['String']>;
    message: Scalars['String'];
    email?: InputMaybe<Scalars['String']>;
    pageName?: InputMaybe<Scalars['String']>;
    senderName: Scalars['String'];
    phoneNumber?: InputMaybe<Scalars['String']>;
}>;

export type PostSendHelpMessageToCommunityMutation = {
    __typename?: 'RootMutation';
    sendHelpMessageToCommunity?: {
        __typename?: 'SendHelpMessageToCommunity';
        success?: boolean | null;
    } | null;
};

export type PostDonationPaymentMutationVariables = Exact<{
    name: Scalars['String'];
    phoneNumber?: InputMaybe<Scalars['String']>;
    amount?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type PostDonationPaymentMutation = {
    __typename?: 'RootMutation';
    donate?: {
        __typename?: 'DonationMutationPayload';
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type PostTrainingPaymentMutationVariables = Exact<{
    amountPaid?: InputMaybe<Scalars['Float']>;
    paymentType?: InputMaybe<Scalars['String']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentDate?: InputMaybe<Scalars['Date']>;
    paymentName?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    course: Scalars['String'];
    student: Scalars['String'];
    transactionReference?: InputMaybe<Scalars['String']>;
    refundStatus?: InputMaybe<Scalars['Boolean']>;
}>;

export type PostTrainingPaymentMutation = {
    __typename?: 'RootMutation';
    enrollment?: {
        __typename?: 'EnrollmentMutationPayload';
        course?: string | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type PostAdminCreateUpdateCourseMutationVariables = Exact<{
    courseName: Scalars['String'];
    courseDescription: Scalars['String'];
    paid: Scalars['Boolean'];
    organizationId: Scalars['ID'];
    message?: InputMaybe<Scalars['String']>;
    amount: Scalars['Float'];
    id?: InputMaybe<Scalars['ID']>;
    courseImage?: InputMaybe<Scalars['Upload']>;
    tutor?: InputMaybe<Scalars['String']>;
    virtualClass?: InputMaybe<Scalars['Boolean']>;
    physicalClass?: InputMaybe<Scalars['Boolean']>;
    startDate: Scalars['Date'];
    startTime: Scalars['Time'];
    endDate: Scalars['Date'];
    endTime: Scalars['Time'];
}>;

export type PostAdminCreateUpdateCourseMutation = {
    __typename?: 'RootMutation';
    adminCreateUpdateCourse?: {
        __typename?: 'AdminCreateUpdateCourseMutation';
        success?: boolean | null;
        course?: {
            __typename?: 'CourseType';
            courseName: string;
            courseDescription: string;
            paid?: boolean | null;
            message?: string | null;
            id: string;
            courseImageUrl?: string | null;
            tutor?: string | null;
            virtualClass?: boolean | null;
            physicalClass?: boolean | null;
            startDate: any;
            startTime: any;
            endDate?: any | null;
            endTime?: any | null;
            slug: string;
        } | null;
    } | null;
};

export type PostAdminCreateUpdateResourcesMutationVariables = Exact<{
    courseId: Scalars['ID'];
    organizationId: Scalars['ID'];
    resources: Array<InputMaybe<ResourceInputObjectType>> | InputMaybe<ResourceInputObjectType>;
}>;

export type PostAdminCreateUpdateResourcesMutation = {
    __typename?: 'RootMutation';
    adminCreateCourseResources?: {
        __typename?: 'AdminCreateCourseResourceMutation';
        success?: boolean | null;
        resources?: Array<{
            __typename?: 'ResourceType';
            resourceName: string;
            resourceDescription?: string | null;
            resourceUrl?: string | null;
            resourceFileUrl?: string | null;
        } | null> | null;
    } | null;
};

export type PostAdminCreateUpdateAssignmentMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    courseId: Scalars['ID'];
    assignments?: InputMaybe<
        | Array<InputMaybe<AssignmentSerializerInputObjectType>>
        | InputMaybe<AssignmentSerializerInputObjectType>
    >;
}>;

export type PostAdminCreateUpdateAssignmentMutation = {
    __typename?: 'RootMutation';
    adminCreateCourseAssignments?: {
        __typename?: 'AdminCreateCourseAssignmentsMutation';
        success?: boolean | null;
        assignments?: Array<{
            __typename?: 'AssignmentType';
            assignmentName: string;
            pk?: string | null;
            id: string;
        } | null> | null;
    } | null;
};

export type UpdateWorkExperienceWithEndDateMutationVariables = Exact<{
    user: Scalars['String'];
    current: Scalars['Boolean'];
    companyName: Scalars['String'];
    designation: Scalars['String'];
    description: Scalars['String'];
    country: Scalars['String'];
    state: Scalars['String'];
    address: Scalars['String'];
    startDate: Scalars['Date'];
    endDate: Scalars['Date'];
}>;

export type UpdateWorkExperienceWithEndDateMutation = {
    __typename?: 'RootMutation';
    userWorkExperience?: {
        __typename?: 'UserWorkExperienceMutationPayload';
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type DeleteWorkExperienceMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteWorkExperienceMutation = {
    __typename?: 'RootMutation';
    userWorkExperienceDelete?: {
        __typename?: 'WorkExperienceDeleteMutation';
        ok?: boolean | null;
    } | null;
};

export type UseracademicRecordDeleteMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type UseracademicRecordDeleteMutation = {
    __typename?: 'RootMutation';
    academicRecordDelete?: {
        __typename?: 'AcademicRecordDeleteMutation';
        ok?: boolean | null;
    } | null;
};

export type UpdateUserAcademicInformationWithoutDisMutationVariables = Exact<{
    admitted: Scalars['Date'];
    school: Scalars['String'];
    graduated: Scalars['String'];
    program: Scalars['String'];
    current?: InputMaybe<Scalars['Boolean']>;
    certificate?: InputMaybe<Scalars['Upload']>;
}>;

export type UpdateUserAcademicInformationWithoutDisMutation = {
    __typename?: 'RootMutation';
    userAcademicInformation?: {
        __typename?: 'UserAcademicRecord';
        success?: boolean | null;
        errors?: string | null;
    } | null;
};

export type UpdateUserAcademicInformationEditMutationVariables = Exact<{
    id: Scalars['ID'];
    admitted: Scalars['Date'];
    school: Scalars['String'];
    discipline: Scalars['String'];
    graduated: Scalars['String'];
    program: Scalars['String'];
    current: Scalars['Boolean'];
    certificate: Scalars['Upload'];
}>;

export type UpdateUserAcademicInformationEditMutation = {
    __typename?: 'RootMutation';
    userAcademicInformation?: {
        __typename?: 'UserAcademicRecord';
        success?: boolean | null;
        errors?: string | null;
    } | null;
};

export type ContactOrganizationAdminsMutationVariables = Exact<{
    email: Scalars['String'];
    phoneNumber?: InputMaybe<Scalars['String']>;
    name: Scalars['String'];
    request: Scalars['String'];
    organization: Scalars['String'];
}>;

export type ContactOrganizationAdminsMutation = {
    __typename?: 'RootMutation';
    contactOrganizationAdmins?: {
        __typename?: 'ContactOrganizationAdminsMutationPayload';
        errors?: Array<{ __typename?: 'ErrorType'; messages: Array<string> } | null> | null;
    } | null;
};

export type ConferenceRegistrationMutationPayloadMutationVariables = Exact<{
    email?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    ticket?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    event?: InputMaybe<Scalars['String']>;
    user?: InputMaybe<Scalars['String']>;
}>;

export type ConferenceRegistrationMutationPayloadMutation = {
    __typename?: 'RootMutation';
    conferenceRegistration?: {
        __typename?: 'ConferenceRegistrationMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type CheckRegisteringEmailMutationVariables = Exact<{
    email: Scalars['String'];
    event_id: Scalars['ID'];
}>;

export type CheckRegisteringEmailMutation = {
    __typename?: 'RootMutation';
    checkRegistrationEmail?: {
        __typename?: 'ConferenceRegistrationEmailCheckMutation';
        success?: boolean | null;
        message?: string | null;
        hasPaid?: boolean | null;
        conferenceRegistrationDetails?: {
            __typename?: 'ConferenceRegistrationType';
            pk?: string | null;
            firstName?: string | null;
            middleName?: string | null;
            lastName?: string | null;
            phone?: string | null;
            email?: string | null;
            ticket?: { __typename?: 'TicketType'; id: string; pk?: string | null } | null;
            user?: { __typename?: 'UserType'; pk: string } | null;
        } | null;
    } | null;
};

export type PostConfirmConferenceOnlinePaymentMutationVariables = Exact<{
    org_id?: InputMaybe<Scalars['Int']>;
    user_id?: InputMaybe<Scalars['Int']>;
    event_id?: InputMaybe<Scalars['Int']>;
    ticket_id?: InputMaybe<Scalars['Int']>;
    first_name?: InputMaybe<Scalars['String']>;
    last_name?: InputMaybe<Scalars['String']>;
    email: Scalars['String'];
    amount_paid?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    payment_approval?: InputMaybe<Scalars['Boolean']>;
    payment_date?: InputMaybe<Scalars['String']>;
    payment_type?: InputMaybe<Scalars['String']>;
    txref?: InputMaybe<Scalars['String']>;
    payment_name?: InputMaybe<Scalars['String']>;
}>;

export type PostConfirmConferenceOnlinePaymentMutation = {
    __typename?: 'RootMutation';
    confirmConferenceOnlinePayment?: {
        __typename?: 'ConfirmConferenceOnlinePaymentMutation';
        error?: string | null;
        success?: boolean | null;
    } | null;
};

export type PostDownloadInvitationLetterMutationVariables = Exact<{
    fullName: Scalars['String'];
    addressLine1?: InputMaybe<Scalars['String']>;
    addressLine2?: InputMaybe<Scalars['String']>;
    eventId?: InputMaybe<Scalars['ID']>;
}>;

export type PostDownloadInvitationLetterMutation = {
    __typename?: 'RootMutation';
    downloadInvitationLetter?: {
        __typename?: 'DownloadInvitationLetterMutation';
        invitationLetter?: string | null;
        success?: boolean | null;
    } | null;
};

export type PostGenerateUserConferenceDpMutationVariables = Exact<{
    photo: Scalars['Upload'];
    eventId: Scalars['ID'];
    name: Scalars['String'];
}>;

export type PostGenerateUserConferenceDpMutation = {
    __typename?: 'RootMutation';
    conferenceGetDp?: {
        __typename?: 'ConferenceGetDP';
        success?: boolean | null;
        imageUrl?: string | null;
    } | null;
};

export type PostConferenceRegistrationAndPaymentMutationVariables = Exact<{
    userId?: InputMaybe<Scalars['Int']>;
    user?: InputMaybe<Scalars['String']>;
    orgId?: InputMaybe<Scalars['Int']>;
    organization?: InputMaybe<Scalars['String']>;
    event?: InputMaybe<Scalars['String']>;
    eventId?: InputMaybe<Scalars['Int']>;
    ticket?: InputMaybe<Scalars['String']>;
    ticketId?: InputMaybe<Scalars['Int']>;
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    email: Scalars['String'];
    phone?: InputMaybe<Scalars['String']>;
    amountPaid?: InputMaybe<Scalars['Int']>;
    paid?: InputMaybe<Scalars['Boolean']>;
    paymentApproval?: InputMaybe<Scalars['Boolean']>;
    paymentDate?: InputMaybe<Scalars['String']>;
    paymentType?: InputMaybe<Scalars['String']>;
    txref?: InputMaybe<Scalars['String']>;
    paymentName?: InputMaybe<Scalars['String']>;
}>;

export type PostConferenceRegistrationAndPaymentMutation = {
    __typename?: 'RootMutation';
    conferenceRegistration?: {
        __typename?: 'ConferenceRegistrationMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
    confirmConferenceOnlinePayment?: {
        __typename?: 'ConfirmConferenceOnlinePaymentMutation';
        error?: string | null;
        success?: boolean | null;
    } | null;
};

export type PostConferenceDashboardLoginMutationVariables = Exact<{
    email: Scalars['String'];
    eventId: Scalars['ID'];
}>;

export type PostConferenceDashboardLoginMutation = {
    __typename?: 'RootMutation';
    conferenceLogin?: {
        __typename?: 'ConferenceLogin';
        success?: boolean | null;
        conferenceUserToken?: string | null;
    } | null;
};

export type PostUserRegistrationAcceptanceMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
    organizationNumber?: InputMaybe<Scalars['String']>;
}>;

export type PostUserRegistrationAcceptanceMutation = {
    __typename?: 'RootMutation';
    adminApproveApplication?: {
        __typename?: 'AdminApproveNewMemberToJoinOrganizationMutation';
        request?: { __typename?: 'JoinRequestType'; verified?: boolean | null } | null;
    } | null;
};

export type PostUserRegistrationRejectionMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
    reason: Scalars['String'];
}>;

export type PostUserRegistrationRejectionMutation = {
    __typename?: 'RootMutation';
    adminRejectApplication?: {
        __typename?: 'AdminRejectNewMemberToJoinOrganizationMutation';
        request?: { __typename?: 'JoinRequestType'; verified?: boolean | null } | null;
    } | null;
};

export type PostUserRegistrationMessageMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
    message: Scalars['String'];
}>;

export type PostUserRegistrationMessageMutation = {
    __typename?: 'RootMutation';
    adminContactAboutApplication?: {
        __typename?: 'AdminContactNewMemberAboutOrganizationMutation';
        success?: boolean | null;
    } | null;
};

export type CreateOrgAnnouncementMutationVariables = Exact<{
    title: Scalars['String'];
    body: Scalars['String'];
    organization?: InputMaybe<Scalars['String']>;
}>;

export type CreateOrgAnnouncementMutation = {
    __typename?: 'RootMutation';
    announcement?: {
        __typename?: 'AnnouncementCreateUpdateMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type DeleteAdminOrgAnnouncementMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    id: Scalars['ID'];
}>;

export type DeleteAdminOrgAnnouncementMutation = {
    __typename?: 'RootMutation';
    announcementDelete?: { __typename?: 'AnnouncementDeleteMutation'; ok?: boolean | null } | null;
};

export type CreateAdminOrgConferenceMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    name: Scalars['String'];
    theme?: InputMaybe<Scalars['String']>;
    organizationId: Scalars['ID'];
    startDate: Scalars['Date'];
    startTime?: InputMaybe<Scalars['Time']>;
    isConference?: InputMaybe<Scalars['Boolean']>;
    attendance?: InputMaybe<Scalars['Boolean']>;
    category: Scalars['ID'];
    description?: InputMaybe<Scalars['String']>;
    endDate?: InputMaybe<Scalars['Date']>;
    endTime?: InputMaybe<Scalars['Time']>;
    flyer?: InputMaybe<Scalars['Upload']>;
    invitationLetter?: InputMaybe<Scalars['Upload']>;
    venue?: InputMaybe<Scalars['String']>;
}>;

export type CreateAdminOrgConferenceMutation = {
    __typename?: 'RootMutation';
    meeting?: {
        __typename?: 'MeetingCreateUpdateMutation';
        success?: boolean | null;
        meeting?: { __typename?: 'MeetingType'; pk: string; name: string } | null;
    } | null;
};

export type EditAdminOrgConferenceMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    name: Scalars['String'];
    theme?: InputMaybe<Scalars['String']>;
    organizationId: Scalars['ID'];
    startDate: Scalars['Date'];
    startTime?: InputMaybe<Scalars['Time']>;
    isConference?: InputMaybe<Scalars['Boolean']>;
    attendance?: InputMaybe<Scalars['Boolean']>;
    category: Scalars['ID'];
    description?: InputMaybe<Scalars['String']>;
    endDate?: InputMaybe<Scalars['Date']>;
    endTime?: InputMaybe<Scalars['Time']>;
    flyer?: InputMaybe<Scalars['Upload']>;
    invitationLetter?: InputMaybe<Scalars['Upload']>;
    venue?: InputMaybe<Scalars['String']>;
}>;

export type EditAdminOrgConferenceMutation = {
    __typename?: 'RootMutation';
    meeting?: {
        __typename?: 'MeetingCreateUpdateMutation';
        success?: boolean | null;
        meeting?: { __typename?: 'MeetingType'; pk: string; name: string } | null;
    } | null;
};

export type CreateAdminOrgConferenceCategoryMutationVariables = Exact<{
    name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type CreateAdminOrgConferenceCategoryMutation = {
    __typename?: 'RootMutation';
    meetingCategoryCreate?: {
        __typename?: 'MeetingCategoryUpdateMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type EditAdminOrgConferenceCategoryMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type EditAdminOrgConferenceCategoryMutation = {
    __typename?: 'RootMutation';
    meetingCategoryCreate?: {
        __typename?: 'MeetingCategoryUpdateMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type CreateAdminPublicationCategoryListMutationVariables = Exact<{
    name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type CreateAdminPublicationCategoryListMutation = {
    __typename?: 'RootMutation';
    adminCreateUpdatePublicationCategory?: {
        __typename?: 'PublicationCategoryMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type CreateAdminPublicationMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    categoryId: Scalars['ID'];
    organizationId: Scalars['ID'];
    title: Scalars['String'];
    file?: InputMaybe<Scalars['Upload']>;
    isPaidDownload?: InputMaybe<Scalars['Boolean']>;
    amountPayable?: InputMaybe<Scalars['Int']>;
    abstract?: InputMaybe<Scalars['String']>;
    externalUploadLink?: InputMaybe<Scalars['String']>;
}>;

export type CreateAdminPublicationMutation = {
    __typename?: 'RootMutation';
    adminCreatePublication?: {
        __typename?: 'PublicationCreateMutation';
        success?: boolean | null;
    } | null;
};

export type DeleteAdminPublicationMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    id: Scalars['ID'];
}>;

export type DeleteAdminPublicationMutation = {
    __typename?: 'RootMutation';
    adminPublicationDelete?: {
        __typename?: 'PublicationDeleteMutation';
        ok?: boolean | null;
    } | null;
};

export type CreateAdminOrgLeaderMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    name: Scalars['String'];
    bio?: InputMaybe<Scalars['String']>;
    photo?: InputMaybe<Scalars['Upload']>;
    startTenure?: InputMaybe<Scalars['Date']>;
    endTenure?: InputMaybe<Scalars['Date']>;
    current?: InputMaybe<Scalars['Boolean']>;
    facebook?: InputMaybe<Scalars['String']>;
    twitter?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    organization: Scalars['ID'];
    position: Scalars['ID'];
    category: Scalars['ID'];
}>;

export type CreateAdminOrgLeaderMutation = {
    __typename?: 'RootMutation';
    adminExecutive?: {
        __typename?: 'ExecutiveCreateUpdateMutation';
        success?: boolean | null;
        executive?: { __typename?: 'ExecutiveType'; pk: string } | null;
    } | null;
};

export type CreateAdminLeaderCategoryMutationVariables = Exact<{
    name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type CreateAdminLeaderCategoryMutation = {
    __typename?: 'RootMutation';
    adminLeadershipCategory?: {
        __typename?: 'LeadershipCategoryCreateUpdateMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type EditAdminLeaderCategoryMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type EditAdminLeaderCategoryMutation = {
    __typename?: 'RootMutation';
    adminLeadershipCategory?: {
        __typename?: 'LeadershipCategoryCreateUpdateMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type CreateAdminLeaderPositionMutationVariables = Exact<{
    position: Scalars['String'];
    rank: Scalars['Int'];
    job?: InputMaybe<Scalars['String']>;
    tenure?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    organization: Scalars['String'];
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type CreateAdminLeaderPositionMutation = {
    __typename?: 'RootMutation';
    adminLeadershipPosition?: {
        __typename?: 'LeadershipPositionCreateUpdateMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type EditAdminLeaderPositionMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    position: Scalars['String'];
    rank: Scalars['Int'];
    job?: InputMaybe<Scalars['String']>;
    tenure?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
    organization: Scalars['String'];
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type EditAdminLeaderPositionMutation = {
    __typename?: 'RootMutation';
    adminLeadershipPosition?: {
        __typename?: 'LeadershipPositionCreateUpdateMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type DeleteAdminLeaderMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    id: Scalars['ID'];
}>;

export type DeleteAdminLeaderMutation = {
    __typename?: 'RootMutation';
    adminExecutiveDelete?: { __typename?: 'ExecutiveDeleteMutation'; ok?: boolean | null } | null;
};

export type CreateAdminFaqMutationVariables = Exact<{
    question?: InputMaybe<Scalars['String']>;
    answer?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    createdBy?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type CreateAdminFaqMutation = {
    __typename?: 'RootMutation';
    adminWebsiteFaq?: {
        __typename?: 'WebsiteFAQCreateUpdateMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type EditAdminFaqMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    question?: InputMaybe<Scalars['String']>;
    answer?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    createdBy?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type EditAdminFaqMutation = {
    __typename?: 'RootMutation';
    adminWebsiteFaq?: {
        __typename?: 'WebsiteFAQCreateUpdateMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type DeleteAdminFaqMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    id: Scalars['ID'];
}>;

export type DeleteAdminFaqMutation = {
    __typename?: 'RootMutation';
    adminWebsiteFaqDelete?: { __typename?: 'WebsiteFAQDeleteMutation'; ok?: boolean | null } | null;
};

export type CreateAdminChaptersMutationVariables = Exact<{
    subdivision: Scalars['String'];
    chairperson?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    meetingDaysTime?: InputMaybe<Scalars['String']>;
    meetingVenue?: InputMaybe<Scalars['String']>;
    dateOfInauguration?: InputMaybe<Scalars['Date']>;
    state?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type CreateAdminChaptersMutation = {
    __typename?: 'RootMutation';
    subdivision?: {
        __typename?: 'OrgSubDivisionMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type EditAdminChaptersMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    subdivision: Scalars['String'];
    chairperson?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    meetingDaysTime?: InputMaybe<Scalars['String']>;
    meetingVenue?: InputMaybe<Scalars['String']>;
    dateOfInauguration?: InputMaybe<Scalars['Date']>;
    state?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type EditAdminChaptersMutation = {
    __typename?: 'RootMutation';
    subdivision?: {
        __typename?: 'OrgSubDivisionMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type DeleteAdminChaptersMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    id: Scalars['ID'];
}>;

export type DeleteAdminChaptersMutation = {
    __typename?: 'RootMutation';
    subdivisionDelete?: { __typename?: 'OrgSubDivisionDeleteMutation'; ok?: boolean | null } | null;
};

export type CreateAdminSpecialityMutationVariables = Exact<{
    name: Scalars['String'];
    organization?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type CreateAdminSpecialityMutation = {
    __typename?: 'RootMutation';
    adminSpecialty?: {
        __typename?: 'SpecialtyCreateUpdateMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type EditAdminSpecialityMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    name: Scalars['String'];
    organization?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type EditAdminSpecialityMutation = {
    __typename?: 'RootMutation';
    adminSpecialty?: {
        __typename?: 'SpecialtyCreateUpdateMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type DeleteAdminSpecialityMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    id: Scalars['ID'];
}>;

export type DeleteAdminSpecialityMutation = {
    __typename?: 'RootMutation';
    adminSpecialtyDelete?: { __typename?: 'SpecialtyDeleteMutation'; ok?: boolean | null } | null;
};

export type CreateAdminSubSpecialityMutationVariables = Exact<{
    name?: InputMaybe<Scalars['String']>;
    specialty?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type CreateAdminSubSpecialityMutation = {
    __typename?: 'RootMutation';
    adminSubSpecialty?: {
        __typename?: 'SubSpecialtyCreateUpdateMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type EditAdminSubSpecialityMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    specialty?: InputMaybe<Scalars['String']>;
    organization?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type EditAdminSubSpecialityMutation = {
    __typename?: 'RootMutation';
    adminSubSpecialty?: {
        __typename?: 'SubSpecialtyCreateUpdateMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type DeleteAdminSubSpecialityMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    id: Scalars['ID'];
}>;

export type DeleteAdminSubSpecialityMutation = {
    __typename?: 'RootMutation';
    adminSubSpecialtyDelete?: {
        __typename?: 'SubSpecialtyDeleteMutation';
        ok?: boolean | null;
    } | null;
};

export type CreateAdminAddDebtForMemberMutationVariables = Exact<{
    debtAmount: Scalars['Int'];
    debtReason: Scalars['String'];
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
}>;

export type CreateAdminAddDebtForMemberMutation = {
    __typename?: 'RootMutation';
    adminAddDebtForMember?: {
        __typename?: 'AdminAddDebtForMemberOrganizationMutation';
        request?: {
            __typename?: 'JoinRequestType';
            verified?: boolean | null;
            amountOwingValue?: number | null;
            amountOwingStr?: string | null;
        } | null;
    } | null;
};

export type CreateAdminConferenceOfflinePaymentMutationVariables = Exact<{
    amountPaid: Scalars['Int'];
    email: Scalars['String'];
    eventId: Scalars['ID'];
    firstName: Scalars['String'];
    lastName?: InputMaybe<Scalars['String']>;
    offlinePaymentType?: InputMaybe<Scalars['String']>;
    organizationId: Scalars['ID'];
    paymentDate?: InputMaybe<Scalars['Date']>;
    paymentName?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    ticketId?: InputMaybe<Scalars['ID']>;
}>;

export type CreateAdminConferenceOfflinePaymentMutation = {
    __typename?: 'RootMutation';
    adminOfflineConferenceRegistrationAndPayment?: {
        __typename?: 'AdminOfflineConferenceRegistrationAndPayment';
        success?: boolean | null;
    } | null;
};

export type CreateAdminConferenceBasicInfoMutationVariables = Exact<{
    name: Scalars['String'];
    venue: Scalars['String'];
    category?: InputMaybe<Scalars['String']>;
    theme?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    attendance: Scalars['Boolean'];
    virtualOnly?: InputMaybe<Scalars['Boolean']>;
    startDate: Scalars['Date'];
    endDate?: InputMaybe<Scalars['Date']>;
    startTime: Scalars['Time'];
    endTime?: InputMaybe<Scalars['Time']>;
    isConference?: InputMaybe<Scalars['Boolean']>;
    org?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type CreateAdminConferenceBasicInfoMutation = {
    __typename?: 'RootMutation';
    adminCreateUpdateConferenceBasicData?: {
        __typename?: 'AdminCreateUpdateConferenceBasicDataMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type EditAdminConferenceBasicInfoMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    name: Scalars['String'];
    venue: Scalars['String'];
    category?: InputMaybe<Scalars['String']>;
    theme?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    attendance: Scalars['Boolean'];
    virtualOnly?: InputMaybe<Scalars['Boolean']>;
    startDate: Scalars['Date'];
    endDate?: InputMaybe<Scalars['Date']>;
    startTime: Scalars['Time'];
    endTime?: InputMaybe<Scalars['Time']>;
    isConference?: InputMaybe<Scalars['Boolean']>;
    org?: InputMaybe<Scalars['String']>;
    clientMutationId?: InputMaybe<Scalars['String']>;
}>;

export type EditAdminConferenceBasicInfoMutation = {
    __typename?: 'RootMutation';
    adminCreateUpdateConferenceBasicData?: {
        __typename?: 'AdminCreateUpdateConferenceBasicDataMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type CreateAdminConferenceEventPresentersMutationVariables = Exact<{
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
    presenters: Array<InputMaybe<PresenterInputObjectType>> | InputMaybe<PresenterInputObjectType>;
}>;

export type CreateAdminConferenceEventPresentersMutation = {
    __typename?: 'RootMutation';
    adminCreateEventPresenters?: {
        __typename?: 'AdminCreateEventPresenters';
        success?: boolean | null;
        presenters?: Array<{ __typename?: 'PresenterType'; id: string } | null> | null;
    } | null;
};

export type CreateAdminConferenceSocialShareDpMutationVariables = Exact<{
    avatarImageAreaHeight: Scalars['Float'];
    avatarImageAreaWidth: Scalars['Float'];
    avatarImageXCoord: Scalars['Float'];
    avatarImageYCoord: Scalars['Float'];
    bannerImage: Scalars['Upload'];
    eventId: Scalars['ID'];
    eventSocialDpBannerId?: InputMaybe<Scalars['ID']>;
    nameTextXCoord: Scalars['Float'];
    nameTextYCoord: Scalars['Float'];
    organizationId: Scalars['ID'];
}>;

export type CreateAdminConferenceSocialShareDpMutation = {
    __typename?: 'RootMutation';
    adminCreateUpdateEventSocialDpBanner?: {
        __typename?: 'AdminCreateUpdateEventSocialDpBanner';
        success?: boolean | null;
        eventSocialDpBanner?: { __typename?: 'MeetingSocialDpBannerType'; id: string } | null;
    } | null;
};

export type CreateAdminConferenceScheduleMutationVariables = Exact<{
    description?: InputMaybe<Scalars['String']>;
    eventSlug?: InputMaybe<Scalars['String']>;
    location?: InputMaybe<Scalars['String']>;
    scheduleDate?: InputMaybe<Scalars['Date']>;
    scheduleEndTime?: InputMaybe<Scalars['Time']>;
    scheduleStartTime?: InputMaybe<Scalars['Time']>;
    speaker?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
}>;

export type CreateAdminConferenceScheduleMutation = {
    __typename?: 'RootMutation';
    createSchedule?: {
        __typename?: 'CreateSchedule';
        schedule?: { __typename?: 'ScheduleType'; id: string } | null;
    } | null;
};

export type CreateAdminConferenceEventDocumentMutationVariables = Exact<{
    certificate?: InputMaybe<Scalars['Upload']>;
    eventId: Scalars['ID'];
    invitationLetter?: InputMaybe<Scalars['Upload']>;
    organizationId: Scalars['ID'];
}>;

export type CreateAdminConferenceEventDocumentMutation = {
    __typename?: 'RootMutation';
    adminCreateUpdateEventDocuments?: {
        __typename?: 'AdminCreateUpdateEventDocumentsMutation';
        success?: boolean | null;
    } | null;
};

export type CreateAdminConferenceEventSchedulesMutationVariables = Exact<{
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
    schedules:
        | Array<InputMaybe<ScheduleSerializerInputObjectType>>
        | InputMaybe<ScheduleSerializerInputObjectType>;
}>;

export type CreateAdminConferenceEventSchedulesMutation = {
    __typename?: 'RootMutation';
    adminCreateEventSchedules?: {
        __typename?: 'AdminCreateEventSchedules';
        success?: boolean | null;
        schedules?: Array<{ __typename?: 'ScheduleType'; id: string } | null> | null;
    } | null;
};

export type CreateAdminConferenceEventPresentationMutationVariables = Exact<{
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
    presentations:
        | Array<InputMaybe<PresentationInputObjectType>>
        | InputMaybe<PresentationInputObjectType>;
}>;

export type CreateAdminConferenceEventPresentationMutation = {
    __typename?: 'RootMutation';
    adminCreateEventPresentations?: {
        __typename?: 'AdminCreateEventPresentations';
        success?: boolean | null;
    } | null;
};

export type DeleteAdminConferenceEventAttendanceMutationVariables = Exact<{
    attendanceId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type DeleteAdminConferenceEventAttendanceMutation = {
    __typename?: 'RootMutation';
    adminDeleteEventAttendance?: {
        __typename?: 'AdminDeleteEventAttendanceMutation';
        success?: boolean | null;
    } | null;
};

export type DeleteAdminConferenceEventPresentersMutationVariables = Exact<{
    presenterId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type DeleteAdminConferenceEventPresentersMutation = {
    __typename?: 'RootMutation';
    adminDeleteEventPresenter?: {
        __typename?: 'AdminDeleteEventPresenter';
        success?: boolean | null;
    } | null;
};

export type DeleteAdminConferenceEventScheduleMutationVariables = Exact<{
    scheduleId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type DeleteAdminConferenceEventScheduleMutation = {
    __typename?: 'RootMutation';
    adminDeleteEventSchedule?: {
        __typename?: 'AdminDeleteEventSchedule';
        success?: boolean | null;
    } | null;
};

export type DeleteAdminConferencePresentationMutationVariables = Exact<{
    presentationId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type DeleteAdminConferencePresentationMutation = {
    __typename?: 'RootMutation';
    adminDeleteEventPresentation?: {
        __typename?: 'AdminDeleteEventPresentation';
        success?: boolean | null;
    } | null;
};

export type CreateAdminConferenceEventFlyerMutationVariables = Exact<{
    eventId: Scalars['ID'];
    eventImage: Scalars['Upload'];
    organizationId: Scalars['ID'];
    removeImage?: InputMaybe<Scalars['Boolean']>;
}>;

export type CreateAdminConferenceEventFlyerMutation = {
    __typename?: 'RootMutation';
    adminCreateUpdateEventImage?: {
        __typename?: 'AdminCreateUpdateEventImageMutation';
        success?: boolean | null;
        event?: { __typename?: 'MeetingType'; id: string; pk: string } | null;
    } | null;
};

export type CreateAdminConferenceEventLogoMutationVariables = Exact<{
    eventId: Scalars['ID'];
    eventLogo: Scalars['Upload'];
    organizationId: Scalars['ID'];
}>;

export type CreateAdminConferenceEventLogoMutation = {
    __typename?: 'RootMutation';
    adminUpdateEventLogo?: {
        __typename?: 'AdminUpdateEventLogo';
        success?: boolean | null;
        eventLogoUrl?: string | null;
        event?: { __typename?: 'MeetingType'; pk: string } | null;
    } | null;
};

export type CreateAdminConferenceEventAttendanceMutationVariables = Exact<{
    name?: InputMaybe<Scalars['String']>;
    attendanceCode: Scalars['String'];
    openDate?: InputMaybe<Scalars['Date']>;
    closeDate?: InputMaybe<Scalars['Date']>;
    openTime?: InputMaybe<Scalars['Time']>;
    closeTime?: InputMaybe<Scalars['Time']>;
    organization: Scalars['String'];
    meeting: Scalars['String'];
}>;

export type CreateAdminConferenceEventAttendanceMutation = {
    __typename?: 'RootMutation';
    adminCreateUpdateEventAttendances?: {
        __typename?: 'AdminCreateUpdateEventAttendancesMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type EditAdminConferenceEventAttendanceMutationVariables = Exact<{
    id?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    attendanceCode: Scalars['String'];
    openDate?: InputMaybe<Scalars['Date']>;
    closeDate?: InputMaybe<Scalars['Date']>;
    openTime?: InputMaybe<Scalars['Time']>;
    closeTime?: InputMaybe<Scalars['Time']>;
    organization: Scalars['String'];
    meeting: Scalars['String'];
}>;

export type EditAdminConferenceEventAttendanceMutation = {
    __typename?: 'RootMutation';
    adminCreateUpdateEventAttendances?: {
        __typename?: 'AdminCreateUpdateEventAttendancesMutationPayload';
        id?: number | null;
        errors?: Array<{
            __typename?: 'ErrorType';
            field: string;
            messages: Array<string>;
        } | null> | null;
    } | null;
};

export type CreateConferenceDeleteAttendanceMutationVariables = Exact<{
    attendanceId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type CreateConferenceDeleteAttendanceMutation = {
    __typename?: 'RootMutation';
    adminDeleteEventAttendance?: {
        __typename?: 'AdminDeleteEventAttendanceMutation';
        success?: boolean | null;
    } | null;
};

export type CreateConferenceTakeAttendanceMutationVariables = Exact<{
    attendanceCode: Scalars['String'];
    attendeeEmail?: InputMaybe<Scalars['String']>;
    eventSlug: Scalars['String'];
}>;

export type CreateConferenceTakeAttendanceMutation = {
    __typename?: 'RootMutation';
    takeEventAttendance?: {
        __typename?: 'TakeEventAttendance';
        success?: boolean | null;
        message?: string | null;
    } | null;
};

export type CreateConferenceTakeAdminAttendanceMutationVariables = Exact<{
    attendanceCode: Scalars['String'];
    attendeeEmail: Scalars['String'];
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type CreateConferenceTakeAdminAttendanceMutation = {
    __typename?: 'RootMutation';
    adminTakeAttendanceForAttendee?: {
        __typename?: 'AdminTakeAttendanceForAttendee';
        success?: boolean | null;
        hasPreviouslyTakenAttendance?: boolean | null;
        message?: string | null;
    } | null;
};

export type CreateConferenceAdminCheckInMutationVariables = Exact<{
    attendeeEmail: Scalars['String'];
    eventId?: InputMaybe<Scalars['ID']>;
    organizationId: Scalars['ID'];
}>;

export type CreateConferenceAdminCheckInMutation = {
    __typename?: 'RootMutation';
    adminCheckInAttendee?: {
        __typename?: 'AdminCheckInAttendeeForEvent';
        success?: boolean | null;
    } | null;
};

export type DownloadConferenceCertificateMutationVariables = Exact<{
    fullName: Scalars['String'];
    eventId: Scalars['ID'];
    category: Scalars['String'];
}>;

export type DownloadConferenceCertificateMutation = {
    __typename?: 'RootMutation';
    downloadEventCertificates?: {
        __typename?: 'DownloadEventCertificatesMutation';
        certificateUrl?: string | null;
        success?: boolean | null;
    } | null;
};

export type AdminCreatePollsMutationVariables = Exact<{
    answers?: InputMaybe<
        Array<InputMaybe<AnswerInputObjectType>> | InputMaybe<AnswerInputObjectType>
    >;
    candidates?: InputMaybe<
        Array<InputMaybe<CandidateInputObjectType>> | InputMaybe<CandidateInputObjectType>
    >;
    organizationId: Scalars['ID'];
    poll?: InputMaybe<PollInputObjectType>;
    question?: InputMaybe<QuestionInputObjectType>;
}>;

export type AdminCreatePollsMutation = {
    __typename?: 'RootMutation';
    adminCreatePoll?: { __typename?: 'AdminCreatePoll'; success?: boolean | null } | null;
};

export type UserCastPollVoteMutationVariables = Exact<{
    organizationId: Scalars['ID'];
    pollEntry?: InputMaybe<PollEntryInputObjectType>;
}>;

export type UserCastPollVoteMutation = {
    __typename?: 'RootMutation';
    castPollVote?: { __typename?: 'CastPollVote'; success?: boolean | null } | null;
};

export type ConferencePageQueryQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type ConferencePageQueryQuery = {
    __typename?: 'RootQuery';
    eventByDomainName?: {
        __typename?: 'MeetingType';
        id: string;
        pk: string;
        name: string;
        description?: string | null;
        venue?: string | null;
        theme?: string | null;
        startDate: any;
        endDate?: any | null;
        startTime: any;
        endTime?: any | null;
        invitationLetter?: string | null;
        photoUrl?: string | null;
        domainName?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            id: string;
            pk: string;
            name: string;
            about?: string | null;
            twitter?: string | null;
            facebook?: string | null;
            linkedin?: string | null;
            abbrev: string;
            photoUrl?: string | null;
        } | null;
        meetingSponsor: {
            __typename?: 'SponsorTypeConnection';
            edges: Array<{
                __typename?: 'SponsorTypeEdge';
                node?: {
                    __typename?: 'SponsorType';
                    id: string;
                    name?: string | null;
                    logoUrl?: string | null;
                } | null;
            } | null>;
        };
        eventTicket: {
            __typename?: 'TicketTypeConnection';
            edges: Array<{
                __typename?: 'TicketTypeEdge';
                node?: {
                    __typename?: 'TicketType';
                    id: string;
                    name: string;
                    isClosed: boolean;
                    pk?: string | null;
                    earlyBirdFeeCurrency: string;
                    earlyBirdDeadline?: any | null;
                    lateBirdFeeCurrency: string;
                    lateBirdFee?: string | null;
                    earlyBirdFee?: string | null;
                    earlyBirdFeeStr?: string | null;
                    earlyBirdFeeValue?: number | null;
                    lateBirdFeeStr?: string | null;
                    lateBirdFeeValue?: number | null;
                } | null;
            } | null>;
        };
        presenterMeetings: {
            __typename?: 'PresenterTypeConnection';
            edges: Array<{
                __typename?: 'PresenterTypeEdge';
                node?: {
                    __typename?: 'PresenterType';
                    id: string;
                    pk?: string | null;
                    name?: string | null;
                    photoUrl?: string | null;
                    portfolio?: string | null;
                } | null;
            } | null>;
        };
        paperMeetings: {
            __typename?: 'PresentationTypeConnection';
            edges: Array<{
                __typename?: 'PresentationTypeEdge';
                node?: {
                    __typename?: 'PresentationType';
                    title: string;
                    abstract: string;
                    file: string;
                    externalUpload?: string | null;
                } | null;
            } | null>;
        };
        socialDpBanner?: {
            __typename?: 'MeetingSocialDpBannerImageType';
            bannerImageUrl?: string | null;
        } | null;
    } | null;
};

export type PageQueryIdQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type PageQueryIdQuery = {
    __typename?: 'RootQuery';
    eventByDomainName?: { __typename?: 'MeetingType'; id: string; pk: string } | null;
};

export type OrgSubDivisionQueryQueryVariables = Exact<{
    id: Scalars['Float'];
}>;

export type OrgSubDivisionQueryQuery = {
    __typename?: 'RootQuery';
    orgSubDivisionList?: {
        __typename?: 'OrgSubDivisionTypeConnection';
        edges: Array<{
            __typename?: 'OrgSubDivisionTypeEdge';
            node?: {
                __typename?: 'OrgSubDivisionType';
                pk: string;
                chairperson?: string | null;
                email?: string | null;
                subdivision: string;
                phoneNumber?: string | null;
                state?: string | null;
                meetingDaysTime?: string | null;
                meetingVenue?: string | null;
                dateOfInauguration?: any | null;
            } | null;
        } | null>;
    } | null;
};

export type WebsiteQueryQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type WebsiteQueryQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        id: string;
        primaryColor?: string | null;
        webLogo?: string | null;
        bannerLogo?: string | null;
        headerTitle?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        bodyFont?: string | null;
        org?: { __typename?: 'OrganizationType'; id: string; pk: string; name: string } | null;
    } | null;
};

export type NotificationQueryQueryVariables = Exact<{
    id: Scalars['Int'];
}>;

export type NotificationQueryQuery = {
    __typename?: 'RootQuery';
    notification?: {
        __typename?: 'NotificationType';
        pk?: string | null;
        id: string;
        subject?: string | null;
        email?: string | null;
        read: boolean;
        createdAt: any;
        user?: {
            __typename?: 'UserType';
            firstName: string;
            lastName: string;
            photoUrl?: string | null;
        } | null;
    } | null;
};

export type FetchNotificationsQueryVariables = Exact<{ [key: string]: never }>;

export type FetchNotificationsQuery = {
    __typename?: 'RootQuery';
    notifications?: {
        __typename?: 'NotificationTypeConnection';
        edges: Array<{
            __typename?: 'NotificationTypeEdge';
            node?: {
                __typename?: 'NotificationType';
                id: string;
                pk?: string | null;
                subject?: string | null;
                email?: string | null;
                read: boolean;
                createdAt: any;
                user?: {
                    __typename?: 'UserType';
                    firstName: string;
                    lastName: string;
                    photoUrl?: string | null;
                } | null;
            } | null;
        } | null>;
    } | null;
};

export type FetchUserDataQueryQueryVariables = Exact<{ [key: string]: never }>;

export type FetchUserDataQueryQuery = {
    __typename?: 'RootQuery';
    user?: {
        __typename?: 'UserType';
        pk: string;
        id: string;
        username: string;
        firstName: string;
        accountType: AccountsUserAccountTypeChoices;
        middleName: string;
        lastName: string;
        bio?: string | null;
        dob?: any | null;
        qrCodeFile?: string | null;
        phone?: string | null;
        confirmedEmail?: boolean | null;
        gender?: AccountsUserGenderChoices | null;
        address?: string | null;
        postal?: string | null;
        socialAuthPhotoUrl?: string | null;
        photoUrl?: string | null;
        dateJoined: any;
        isActive: boolean;
        photo?: string | null;
        state?: AccountsUserStateChoices | null;
        country: AccountsUserCountryChoices;
        nationality: AccountsUserNationalityChoices;
        organizationmembershiptypeSet: Array<{ __typename?: 'OrgMembershipType'; name: string }>;
        records: {
            __typename?: 'AcademicRecordModelTypeConnection';
            edges: Array<{
                __typename?: 'AcademicRecordModelTypeEdge';
                node?: {
                    __typename?: 'AcademicRecordModelType';
                    program: string;
                    admitted?: any | null;
                    graduated?: any | null;
                    school: { __typename?: 'SchoolModelType'; name: string };
                    discipline?: { __typename?: 'DepartmentModelType'; name: string } | null;
                } | null;
            } | null>;
        };
        workexperienceSet: {
            __typename?: 'WorkExperienceModelTypeConnection';
            edges: Array<{
                __typename?: 'WorkExperienceModelTypeEdge';
                node?: {
                    __typename?: 'WorkExperienceModelType';
                    companyName?: string | null;
                    designation?: string | null;
                    startDate: any;
                    endDate?: any | null;
                } | null;
            } | null>;
        };
    } | null;
};

export type FetchCurrentUserDataQueryQueryVariables = Exact<{ [key: string]: never }>;

export type FetchCurrentUserDataQueryQuery = {
    __typename?: 'RootQuery';
    user?: {
        __typename?: 'UserType';
        pk: string;
        id: string;
        username: string;
        confirmedEmail?: boolean | null;
        accountType: AccountsUserAccountTypeChoices;
    } | null;
};

export type CheckIsOrgAdminQueryQueryVariables = Exact<{
    organization_Id: Scalars['Int'];
}>;

export type CheckIsOrgAdminQueryQuery = { __typename?: 'RootQuery'; isOrgAdmin?: boolean | null };

export type TicketTypeConnectionQueryVariables = Exact<{
    org_Id: Scalars['Float'];
}>;

export type TicketTypeConnectionQuery = {
    __typename?: 'RootQuery';
    eventTicketList?: {
        __typename?: 'TicketTypeConnection';
        totalCount?: number | null;
        edgeCount?: number | null;
        edges: Array<{
            __typename?: 'TicketTypeEdge';
            node?: {
                __typename?: 'TicketType';
                id: string;
                pk?: string | null;
                name: string;
                isClosed: boolean;
                earlyBirdFee?: string | null;
                earlyBirdDeadline?: any | null;
                lateBirdFee?: string | null;
                earlyBirdFeeCurrency: string;
                lateBirdFeeCurrency: string;
                earlyBirdFeeValue?: number | null;
                lateBirdFeeValue?: number | null;
                earlyBirdFeeStr?: string | null;
                lateBirdFeeStr?: string | null;
                org?: {
                    __typename?: 'OrganizationType';
                    id: string;
                    pk: string;
                    name: string;
                } | null;
                meeting?: {
                    __typename?: 'MeetingWithEventRegistrationsType';
                    id: string;
                    pk: string;
                    name: string;
                } | null;
            } | null;
        } | null>;
    } | null;
};

export type MembershipPaymentQueryQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type MembershipPaymentQueryQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            pk: string;
            id: string;
            name: string;
            abbrev: string;
            about?: string | null;
            email?: string | null;
            officeAddress?: string | null;
            phone?: string | null;
            sponsorSet: {
                __typename?: 'SponsorTypeConnection';
                edges: Array<{
                    __typename?: 'SponsorTypeEdge';
                    node?: {
                        __typename?: 'SponsorType';
                        name?: string | null;
                        logoUrl?: string | null;
                    } | null;
                } | null>;
            };
        } | null;
    } | null;
    websiteMembershipTypes?: Array<{
        __typename?: 'OrgMembershipType';
        id: string;
        name: string;
        membershipFeeValue?: number | null;
        membershipFeeStr?: string | null;
        membershipRenewalFeeValue?: number | null;
        membershipRenewalFeeStr?: string | null;
        description?: string | null;
    } | null> | null;
    user?: {
        __typename?: 'UserType';
        id: string;
        pk: string;
        username: string;
        firstName: string;
        lastName: string;
        bio?: string | null;
        dob?: any | null;
        qrCodeFile?: string | null;
        phone?: string | null;
        confirmedEmail?: boolean | null;
        gender?: AccountsUserGenderChoices | null;
        address?: string | null;
        postal?: string | null;
        photo?: string | null;
        socialAuthPhotoUrl?: string | null;
        dateJoined: any;
        isActive: boolean;
    } | null;
};

export type GetFooterDataQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type GetFooterDataQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        id: string;
        org?: {
            __typename?: 'OrganizationType';
            id: string;
            pk: string;
            name: string;
            abbrev: string;
            about?: string | null;
            email?: string | null;
            officeAddress?: string | null;
            phone?: string | null;
        } | null;
    } | null;
};

export type AllDataQueryQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type AllDataQueryQuery = {
    __typename?: 'RootQuery';
    websiteHomePageAboutUs?: Array<string | null> | null;
    orgConference?: {
        __typename?: 'MeetingType';
        name: string;
        theme?: string | null;
        venue?: string | null;
        description?: string | null;
        startDate: any;
        endDate?: any | null;
        photoUrl?: string | null;
    } | null;
    website?: {
        __typename?: 'WebsiteType';
        id: string;
        primaryColor?: string | null;
        webLogo?: string | null;
        bannerLogo?: string | null;
        webLogoUrl?: string | null;
        bannerLogoUrl?: string | null;
        headerTitle?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        bodyFont?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            id: string;
            pk: string;
            name: string;
            abbrev: string;
            about?: string | null;
            email?: string | null;
            officeAddress?: string | null;
            phone?: string | null;
            sponsorSet: {
                __typename?: 'SponsorTypeConnection';
                edges: Array<{
                    __typename?: 'SponsorTypeEdge';
                    node?: {
                        __typename?: 'SponsorType';
                        name?: string | null;
                        logoUrl?: string | null;
                    } | null;
                } | null>;
            };
        } | null;
    } | null;
    websiteBannerSliderImages?: {
        __typename?: 'WebsiteImageTypeConnection';
        edges: Array<{
            __typename?: 'WebsiteImageTypeEdge';
            node?: {
                __typename?: 'WebsiteImageType';
                id: string;
                title?: string | null;
                subtitle?: string | null;
                image?: string | null;
                imageUrl?: string | null;
            } | null;
        } | null>;
    } | null;
    threeTopmostEvents?: Array<{
        __typename?: 'MeetingType';
        name: string;
        eventSlug?: string | null;
        theme?: string | null;
        description?: string | null;
        venue?: string | null;
        startDate: any;
        startTime: any;
        flyer?: string | null;
        photoUrl?: string | null;
    } | null> | null;
};

export type LeaderDataQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type LeaderDataQuery = {
    __typename?: 'RootQuery';
    orgExecutive?: {
        __typename?: 'ExecutiveType';
        name?: string | null;
        bio?: string | null;
        photo?: string | null;
        photoUrl?: string | null;
        startTenure?: any | null;
        endTenure?: any | null;
        facebook?: string | null;
        email?: string | null;
        position?: {
            __typename?: 'LeadershipPositionType';
            rank: number;
            job?: string | null;
            position: string;
        } | null;
    } | null;
};

export type FetchDashboardHomeDataQueryQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type FetchDashboardHomeDataQueryQuery = {
    __typename?: 'RootQuery';
    allOrganizationUpcomingEvents?: Array<{
        __typename?: 'MeetingType';
        photoUrl?: string | null;
    } | null> | null;
    allOrganizationAnnouncements?: Array<{
        __typename?: 'AnnouncementType';
        title: string;
        body?: string | null;
        created: any;
    } | null> | null;
    allOrganizationEvents?: Array<{ __typename?: 'MeetingType'; pk: string } | null> | null;
};

export type FetchDashboardAllOrganizationEventsQueryQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type FetchDashboardAllOrganizationEventsQueryQuery = {
    __typename?: 'RootQuery';
    allOrganizationEvents?: Array<{
        __typename?: 'MeetingType';
        pk: string;
        eventSlug?: string | null;
        name: string;
        photoUrl?: string | null;
        created: any;
        description?: string | null;
        category?: { __typename?: 'MeetingCategoryType'; name: string } | null;
    } | null> | null;
};

export type BirthdayQueryQueryVariables = Exact<{
    organizationId: Scalars['ID'];
}>;

export type BirthdayQueryQuery = {
    __typename?: 'RootQuery';
    birthdays?: Array<{
        __typename?: 'UserType';
        pk: string;
        id: string;
        firstName: string;
        lastName: string;
        dob?: any | null;
    } | null> | null;
};

export type DashboardAllEventsDataListQueryVariables = Exact<{
    domain_name: Scalars['String'];
    org_Id?: InputMaybe<Scalars['Float']>;
}>;

export type DashboardAllEventsDataListQuery = {
    __typename?: 'RootQuery';
    eventCategoryList?: {
        __typename?: 'MeetingCategoryTypeConnection';
        edges: Array<{
            __typename?: 'MeetingCategoryTypeEdge';
            node?: {
                __typename?: 'MeetingCategoryType';
                id: string;
                name: string;
                pk?: string | null;
                description?: string | null;
                org?: { __typename?: 'OrganizationType'; id: string; name: string } | null;
                meetingSet: {
                    __typename?: 'MeetingWithEventRegistrationsTypeConnection';
                    totalCount?: number | null;
                    edges: Array<{
                        __typename?: 'MeetingWithEventRegistrationsTypeEdge';
                        node?: {
                            __typename?: 'MeetingWithEventRegistrationsType';
                            id: string;
                            name: string;
                            description?: string | null;
                            eventSlug?: string | null;
                            photoUrl?: string | null;
                            pk: string;
                            startDate: any;
                            theme?: string | null;
                            org?: {
                                __typename?: 'OrganizationType';
                                pk: string;
                                id: string;
                                photoUrl?: string | null;
                                name: string;
                                abbrev: string;
                            } | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            abbrev: string;
            sponsorSet: {
                __typename?: 'SponsorTypeConnection';
                edges: Array<{
                    __typename?: 'SponsorTypeEdge';
                    node?: {
                        __typename?: 'SponsorType';
                        name?: string | null;
                        logoUrl?: string | null;
                    } | null;
                } | null>;
            };
        } | null;
    } | null;
};

export type GetEventAttendanceEntriesQueryVariables = Exact<{
    eventSlug: Scalars['String'];
    attendanceCode: Scalars['String'];
    openDate: Scalars['Date'];
    openTime?: InputMaybe<Scalars['Time']>;
    closeDate: Scalars['Date'];
    closeTime?: InputMaybe<Scalars['Time']>;
}>;

export type GetEventAttendanceEntriesQuery = {
    __typename?: 'RootQuery';
    getEventAttendanceEntries?: Array<{
        __typename?: 'AttendanceEntriesType';
        attendeeName?: string | null;
        attendeeEmail?: string | null;
        attendee?: { __typename?: 'UserType'; photoUrl?: string | null } | null;
        attendance?: {
            __typename?: 'AttendanceWithAttendanceCountType';
            name?: string | null;
        } | null;
    } | null> | null;
};

export type DashboardAccountDataQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type DashboardAccountDataQuery = {
    __typename?: 'RootQuery';
    user?: {
        __typename: 'UserType';
        id: string;
        pk: string;
        username: string;
        firstName: string;
        lastName: string;
        bio?: string | null;
        dob?: any | null;
        qrCodeFile?: string | null;
        phone?: string | null;
        confirmedEmail?: boolean | null;
        gender?: AccountsUserGenderChoices | null;
        address?: string | null;
        postal?: string | null;
        socialAuthPhotoUrl?: string | null;
        photoUrl?: string | null;
        dateJoined: any;
        isActive: boolean;
        photo?: string | null;
        records: {
            __typename?: 'AcademicRecordModelTypeConnection';
            edges: Array<{
                __typename?: 'AcademicRecordModelTypeEdge';
                node?: {
                    __typename?: 'AcademicRecordModelType';
                    program: string;
                    admitted?: any | null;
                    graduated?: any | null;
                    school: { __typename?: 'SchoolModelType'; name: string };
                    discipline?: { __typename?: 'DepartmentModelType'; name: string } | null;
                } | null;
            } | null>;
        };
        workexperienceSet: {
            __typename?: 'WorkExperienceModelTypeConnection';
            edges: Array<{
                __typename?: 'WorkExperienceModelTypeEdge';
                node?: {
                    __typename?: 'WorkExperienceModelType';
                    id: string;
                    companyName?: string | null;
                    designation?: string | null;
                    startDate: any;
                    endDate?: any | null;
                } | null;
            } | null>;
        };
    } | null;
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        org?: { __typename?: 'OrganizationType'; abbrev: string } | null;
    } | null;
};

export type DashboardLayoutDataQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type DashboardLayoutDataQuery = {
    __typename?: 'RootQuery';
    user?: {
        __typename?: 'UserType';
        id: string;
        pk: string;
        firstName: string;
        lastName: string;
        photoUrl?: string | null;
    } | null;
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        org?: { __typename?: 'OrganizationType'; pk: string; abbrev: string } | null;
    } | null;
};

export type GetDirectorsQueryQueryVariables = Exact<{
    id: Scalars['Float'];
}>;

export type GetDirectorsQueryQuery = {
    __typename?: 'RootQuery';
    orgLeadershipCategoryList?: {
        __typename?: 'LeadershipCategoryTypeConnection';
        edges: Array<{
            __typename?: 'LeadershipCategoryTypeEdge';
            node?: {
                __typename?: 'LeadershipCategoryType';
                name: string;
                executiveSet: {
                    __typename?: 'ExecutiveTypeConnection';
                    edges: Array<{
                        __typename?: 'ExecutiveTypeEdge';
                        node?: {
                            __typename?: 'ExecutiveType';
                            pk: string;
                            id: string;
                            name?: string | null;
                            bio?: string | null;
                            photoUrl?: string | null;
                            position?: {
                                __typename?: 'LeadershipPositionType';
                                position: string;
                            } | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
};

export type DashboardLayoutDataMembershipQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type DashboardLayoutDataMembershipQuery = {
    __typename?: 'RootQuery';
    websiteMembershipTypes?: Array<{
        __typename?: 'OrgMembershipType';
        id: string;
        name: string;
        membershipFeeValue?: number | null;
        membershipFeeStr?: string | null;
        description?: string | null;
    } | null> | null;
    user?: {
        __typename?: 'UserType';
        id: string;
        pk: string;
        username: string;
        firstName: string;
        lastName: string;
        photoUrl?: string | null;
        email: string;
    } | null;
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        org?: { __typename?: 'OrganizationType'; pk: string; abbrev: string } | null;
    } | null;
};

export type WebsiteFaqTypeQueryVariables = Exact<{
    id: Scalars['Float'];
}>;

export type WebsiteFaqTypeQuery = {
    __typename?: 'RootQuery';
    websiteFaqList?: {
        __typename?: 'WebsiteFaqTypeConnection';
        edges: Array<{
            __typename?: 'WebsiteFaqTypeEdge';
            node?: {
                __typename?: 'WebsiteFaqType';
                id: string;
                pk: string;
                question?: string | null;
                answer?: string | null;
                created: any;
                updated: any;
            } | null;
        } | null>;
    } | null;
};

export type OrgSubDivisionsQueryQueryVariables = Exact<{ [key: string]: never }>;

export type OrgSubDivisionsQueryQuery = {
    __typename?: 'RootQuery';
    orgSubDivision?: {
        __typename?: 'OrgSubDivisionType';
        pk: string;
        chairperson?: string | null;
        email?: string | null;
        subdivision: string;
        phoneNumber?: string | null;
        state?: string | null;
        meetingDaysTime?: string | null;
        meetingVenue?: string | null;
        dateOfInauguration?: any | null;
    } | null;
};

export type WebsitePublicationsQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type WebsitePublicationsQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        primaryColor?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        webLogoUrl?: string | null;
        org?: { __typename?: 'OrganizationType'; pk: string } | null;
    } | null;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = {
    __typename?: 'RootQuery';
    user?: { __typename?: 'UserType'; id: string; username: string } | null;
};

export type WebsiteAboutPagesQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type WebsiteAboutPagesQuery = {
    __typename?: 'RootQuery';
    websiteAboutPage?: Array<string | null> | null;
    website?: {
        __typename?: 'WebsiteType';
        primaryColor?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
    } | null;
};

export type WebsiteDataQueryQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type WebsiteDataQueryQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        headerTitle?: string | null;
        primaryColor?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            pk: string;
            abbrev: string;
            name: string;
            about?: string | null;
            email?: string | null;
            phone?: string | null;
            officeAddress?: string | null;
            photoUrl?: string | null;
        } | null;
    } | null;
};

export type ContactUsPageQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type ContactUsPageQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        primaryColor?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            pk: string;
            officeAddress?: string | null;
            email?: string | null;
            phone?: string | null;
        } | null;
    } | null;
};

export type RegistersPageQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type RegistersPageQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        primaryColor?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        org?: { __typename?: 'OrganizationType'; pk: string } | null;
    } | null;
};

export type NavBarDataQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type NavBarDataQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        webLogoUrl?: string | null;
        org?: { __typename?: 'OrganizationType'; name: string } | null;
    } | null;
};

export type RegisterPageQueryVariables = Exact<{
    domain_name: Scalars['String'];
}>;

export type RegisterPageQuery = {
    __typename?: 'RootQuery';
    website?: {
        __typename?: 'WebsiteType';
        primaryColor?: string | null;
        primaryFont?: string | null;
        primaryBgColor?: string | null;
        primaryTextColor?: string | null;
        primaryBtnColor?: string | null;
        secondaryColor?: string | null;
        secondaryFont?: string | null;
        secondaryBgColor?: string | null;
        secondaryTextColor?: string | null;
        secondaryBtnColor?: string | null;
        org?: { __typename?: 'OrganizationType'; pk: string } | null;
    } | null;
};

export type WebsiteEventDetailQueryVariables = Exact<{
    event_slug: Scalars['String'];
}>;

export type WebsiteEventDetailQuery = {
    __typename?: 'RootQuery';
    eventBySlug?: {
        __typename?: 'MeetingType';
        name: string;
        venue?: string | null;
        theme?: string | null;
        description?: string | null;
        attendance: boolean;
        startDate: any;
        endDate?: any | null;
        endTime?: any | null;
        minutes?: string | null;
        photoUrl?: string | null;
        paid: boolean;
        eventState: string;
        eventSlug?: string | null;
        onlineMeetingLink?: string | null;
        eventTicket: {
            __typename?: 'TicketTypeConnection';
            edges: Array<{
                __typename?: 'TicketTypeEdge';
                node?: {
                    __typename?: 'TicketType';
                    id: string;
                    name: string;
                    earlyBirdFee?: string | null;
                    earlyBirdDeadline?: any | null;
                } | null;
            } | null>;
        };
        mainEvent?: {
            __typename?: 'MeetingWithEventRegistrationsType';
            theme?: string | null;
        } | null;
        org?: { __typename?: 'OrganizationType'; name: string } | null;
        scheduleMeetings: {
            __typename?: 'ScheduleTypeConnection';
            edges: Array<{
                __typename?: 'ScheduleTypeEdge';
                node?: {
                    __typename?: 'ScheduleType';
                    title: string;
                    description?: string | null;
                    scheduleEndTime?: any | null;
                    scheduleDate?: any | null;
                    scheduleStartTime?: any | null;
                    speaker?: {
                        __typename?: 'PresenterType';
                        name?: string | null;
                        photoUrl?: string | null;
                        portfolio?: string | null;
                        person?: {
                            __typename?: 'UserType';
                            firstName: string;
                            lastName: string;
                            email: string;
                        } | null;
                        presentationSet: {
                            __typename?: 'PresentationTypeConnection';
                            edges: Array<{
                                __typename?: 'PresentationTypeEdge';
                                node?: {
                                    __typename?: 'PresentationType';
                                    meeting?: {
                                        __typename?: 'MeetingWithEventRegistrationsType';
                                        name: string;
                                        theme?: string | null;
                                    } | null;
                                } | null;
                            } | null>;
                        };
                    } | null;
                    meeting?: {
                        __typename?: 'MeetingWithEventRegistrationsType';
                        name: string;
                        venue?: string | null;
                        mainEvent?: {
                            __typename?: 'MeetingWithEventRegistrationsType';
                            name: string;
                            venue?: string | null;
                            theme?: string | null;
                            flyer?: string | null;
                        } | null;
                    } | null;
                } | null;
            } | null>;
        };
        presenterMeetings: {
            __typename?: 'PresenterTypeConnection';
            edges: Array<{
                __typename?: 'PresenterTypeEdge';
                node?: {
                    __typename?: 'PresenterType';
                    name?: string | null;
                    photoUrl?: string | null;
                    portfolio?: string | null;
                } | null;
            } | null>;
        };
        meetingSet: {
            __typename?: 'MeetingWithEventRegistrationsTypeConnection';
            edges: Array<{
                __typename?: 'MeetingWithEventRegistrationsTypeEdge';
                node?: {
                    __typename?: 'MeetingWithEventRegistrationsType';
                    name: string;
                    theme?: string | null;
                } | null;
            } | null>;
        };
        meetingSponsor: {
            __typename?: 'SponsorTypeConnection';
            edges: Array<{
                __typename?: 'SponsorTypeEdge';
                node?: {
                    __typename?: 'SponsorType';
                    name?: string | null;
                    logoUrl?: string | null;
                } | null;
            } | null>;
        };
    } | null;
};

export type GetConferenceSchedulesQueryVariables = Exact<{
    eventID: Scalars['ID'];
}>;

export type GetConferenceSchedulesQuery = {
    __typename?: 'RootQuery';
    sortedSchedules?: any | null;
};

export type WebsitesQueryQueryVariables = Exact<{
    id: Scalars['Float'];
}>;

export type WebsitesQueryQuery = {
    __typename?: 'RootQuery';
    orgSubDivisionList?: {
        __typename?: 'OrgSubDivisionTypeConnection';
        edges: Array<{
            __typename?: 'OrgSubDivisionTypeEdge';
            node?: {
                __typename?: 'OrgSubDivisionType';
                pk: string;
                chairperson?: string | null;
                email?: string | null;
                subdivision: string;
            } | null;
        } | null>;
    } | null;
};

export type WebsitePublicationCategoryListQueryVariables = Exact<{
    orgId: Scalars['Float'];
}>;

export type WebsitePublicationCategoryListQuery = {
    __typename?: 'RootQuery';
    publicationCategoryList?: {
        __typename?: 'PublicationCategoryTypeConnection';
        edges: Array<{
            __typename?: 'PublicationCategoryTypeEdge';
            node?: {
                __typename?: 'PublicationCategoryType';
                id: string;
                name: string;
                publicationSet: {
                    __typename?: 'PublicationTypeConnection';
                    edges: Array<{
                        __typename?: 'PublicationTypeEdge';
                        node?: {
                            __typename?: 'PublicationType';
                            title: string;
                            abstract: string;
                            fileUrl?: string | null;
                            externalUpload?: string | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
};

export type GetOrganizationProfessionalDataQueryVariables = Exact<{
    organization_Id: Scalars['Float'];
    domain_name: Scalars['String'];
}>;

export type GetOrganizationProfessionalDataQuery = {
    __typename?: 'RootQuery';
    orgSubDivisionList?: {
        __typename?: 'OrgSubDivisionTypeConnection';
        edges: Array<{
            __typename?: 'OrgSubDivisionTypeEdge';
            node?: {
                __typename?: 'OrgSubDivisionType';
                pk: string;
                id: string;
                subdivision: string;
            } | null;
        } | null>;
    } | null;
    specialties?: {
        __typename?: 'SpecialtyTypeConnection';
        edges: Array<{
            __typename?: 'SpecialtyTypeEdge';
            node?: {
                __typename?: 'SpecialtyType';
                id: string;
                pk: string;
                name?: string | null;
                subspecialtySet: {
                    __typename?: 'SubSpecialtyTypeConnection';
                    edges: Array<{
                        __typename?: 'SubSpecialtyTypeEdge';
                        node?: {
                            __typename?: 'SubSpecialtyType';
                            id: string;
                            pk: string;
                            name?: string | null;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
    } | null;
    websiteMembershipTypes?: Array<{
        __typename?: 'OrgMembershipType';
        id: string;
        name: string;
        membershipFeeValue?: number | null;
        membershipFeeStr?: string | null;
        membershipRenewalFeeValue?: number | null;
        membershipRenewalFeeStr?: string | null;
        description?: string | null;
    } | null> | null;
};

export type GetUserProfessionalInformationQueryVariables = Exact<{
    userId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type GetUserProfessionalInformationQuery = {
    __typename?: 'RootQuery';
    membershipJoinRequest?: {
        __typename?: 'JoinRequestType';
        pk?: string | null;
        newOrOld?: string | null;
        orgNumber?: string | null;
        otherMembershipNumbers?: string | null;
        verified?: boolean | null;
        contactMessage?: string | null;
        membershipApplicationStatus: string;
        membershipCadre?: { __typename?: 'OrgMembershipType'; id: string; name: string } | null;
        subdivision?: { __typename?: 'OrgSubDivisionType'; pk: string; subdivision: string } | null;
        specialty?: { __typename?: 'SpecialtyType'; pk: string; name?: string | null } | null;
        subSpecialty?: { __typename?: 'SubSpecialtyType'; pk: string; name?: string | null } | null;
    } | null;
};

export type GetUserWorkExperiencesQueryVariables = Exact<{
    userId: Scalars['Float'];
}>;

export type GetUserWorkExperiencesQuery = {
    __typename?: 'RootQuery';
    workExperiences?: {
        __typename?: 'WorkExperienceModelTypeConnection';
        edges: Array<{
            __typename?: 'WorkExperienceModelTypeEdge';
            node?: {
                __typename?: 'WorkExperienceModelType';
                id: string;
                pk: string;
                designation?: string | null;
                description?: string | null;
                companyName?: string | null;
                startDate: any;
                endDate?: any | null;
                current?: boolean | null;
                address?: string | null;
                state?: string | null;
                country?: string | null;
            } | null;
        } | null>;
    } | null;
};

export type GetUserAcademicRecordsQueryVariables = Exact<{
    userId: Scalars['Float'];
}>;

export type GetUserAcademicRecordsQuery = {
    __typename?: 'RootQuery';
    academicRecords?: {
        __typename?: 'AcademicRecordModelTypeConnection';
        edges: Array<{
            __typename?: 'AcademicRecordModelTypeEdge';
            node?: {
                __typename?: 'AcademicRecordModelType';
                pk: string;
                id: string;
                program: string;
                admitted?: any | null;
                graduated?: any | null;
                current?: boolean | null;
                certificate?: string | null;
                certificateUrl?: string | null;
                school: { __typename?: 'SchoolModelType'; name: string };
                discipline?: { __typename?: 'DepartmentModelType'; name: string } | null;
            } | null;
        } | null>;
    } | null;
};

export type GetUserNextOfKinsQueryVariables = Exact<{
    userId: Scalars['Float'];
}>;

export type GetUserNextOfKinsQuery = {
    __typename?: 'RootQuery';
    nextOfKins?: {
        __typename?: 'NextOfKinModelTypeConnection';
        edges: Array<{
            __typename?: 'NextOfKinModelTypeEdge';
            node?: {
                __typename?: 'NextOfKinModelType';
                pk: string;
                id: string;
                firstName: string;
                middleName: string;
                lastName: string;
                phone?: string | null;
                email: string;
                relationship?: string | null;
            } | null;
        } | null>;
    } | null;
};

export type GetUserRefereesQueryVariables = Exact<{
    userId: Scalars['Float'];
    organizationId: Scalars['Float'];
}>;

export type GetUserRefereesQuery = {
    __typename?: 'RootQuery';
    memberReferees?: {
        __typename?: 'RefereeTypeConnection';
        edges: Array<{
            __typename?: 'RefereeTypeEdge';
            node?: {
                __typename?: 'RefereeType';
                pk: string;
                id: string;
                firstName: string;
                middleName: string;
                lastName: string;
                phone?: string | null;
                email: string;
                number?: string | null;
            } | null;
        } | null>;
    } | null;
};

export type GetOrgProfileDocumentQueryVariables = Exact<{ [key: string]: never }>;

export type GetOrgProfileDocumentQuery = {
    __typename?: 'RootQuery';
    getUserProfileDocuments?: {
        __typename?: 'ProfileDocumentType';
        id: string;
        pk: string;
        companyProfile?: string | null;
        companyProfileUrl?: string | null;
        cacCertificateUrl?: string | null;
        taxClearanceUrl?: string | null;
        otherUrl?: string | null;
    } | null;
};

export type GetOrgBioQueryVariables = Exact<{ [key: string]: never }>;

export type GetOrgBioQuery = {
    __typename?: 'RootQuery';
    user?: { __typename?: 'UserType'; bio?: string | null } | null;
};

export type GetDonationsQueryVariables = Exact<{
    organizationId: Scalars['Float'];
    first?: InputMaybe<Scalars['Int']>;
    after?: InputMaybe<Scalars['String']>;
}>;

export type GetDonationsQuery = {
    __typename?: 'RootQuery';
    donations?: {
        __typename?: 'DonationTypeConnection';
        edgeCount?: number | null;
        totalCount?: number | null;
        edges: Array<{
            __typename?: 'DonationTypeEdge';
            cursor: string;
            node?: {
                __typename?: 'DonationType';
                name: string;
                amount?: string | null;
                email?: string | null;
                phoneNumber?: string | null;
                pk: string;
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};

export type GetOrganizationCourseListQueryVariables = Exact<{
    organization_Id?: InputMaybe<Scalars['Float']>;
    first?: InputMaybe<Scalars['Int']>;
    after?: InputMaybe<Scalars['String']>;
}>;

export type GetOrganizationCourseListQuery = {
    __typename?: 'RootQuery';
    coursesList?: {
        __typename?: 'CourseTypeConnection';
        edgeCount?: number | null;
        totalCount?: number | null;
        edges: Array<{
            __typename?: 'CourseTypeEdge';
            cursor: string;
            node?: {
                __typename?: 'CourseType';
                id: string;
                pk?: string | null;
                courseName: string;
                courseImageUrl?: string | null;
                courseDescription: string;
                virtualClass?: boolean | null;
                amountValue?: number | null;
                physicalClass?: boolean | null;
                startDate: any;
                endDate?: any | null;
                startTime: any;
                endTime?: any | null;
                paid?: boolean | null;
                resourceSet: {
                    __typename?: 'ResourceTypeConnection';
                    edges: Array<{
                        __typename?: 'ResourceTypeEdge';
                        node?: { __typename?: 'ResourceType'; resourceName: string } | null;
                    } | null>;
                };
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};

export type GetAdminEnrollmentsListQueryVariables = Exact<{
    course_Id: Scalars['Float'];
    organization_Id: Scalars['Float'];
    first?: InputMaybe<Scalars['Int']>;
    after?: InputMaybe<Scalars['String']>;
}>;

export type GetAdminEnrollmentsListQuery = {
    __typename?: 'RootQuery';
    adminEnrollmentsList?: {
        __typename?: 'EnrollmentTypeConnection';
        totalCount?: number | null;
        edgeCount?: number | null;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
        edges: Array<{
            __typename?: 'EnrollmentTypeEdge';
            cursor: string;
            node?: {
                __typename?: 'EnrollmentType';
                payerName?: string | null;
                paymentName?: string | null;
                paymentDate?: any | null;
                paymentType: string;
                paymentApproval?: boolean | null;
                transactionReference?: string | null;
                paid: boolean;
                createdBy?: { __typename?: 'UserType'; firstName: string; lastName: string } | null;
                student: { __typename?: 'UserType'; firstName: string; lastName: string };
                course: {
                    __typename?: 'CourseType';
                    id: string;
                    pk?: string | null;
                    courseName: string;
                    amountValue?: number | null;
                };
            } | null;
        } | null>;
    } | null;
};

export type GetCourseQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type GetCourseQuery = {
    __typename?: 'RootQuery';
    course?: {
        __typename?: 'CourseType';
        id: string;
        courseName: string;
        courseDescription: string;
        courseImageUrl?: string | null;
        paid?: boolean | null;
        amountValue?: number | null;
        pk?: string | null;
        slug: string;
        message?: string | null;
        tutor?: string | null;
        startTime: any;
        endTime?: any | null;
        startDate: any;
        endDate?: any | null;
        virtualClass?: boolean | null;
        physicalClass?: boolean | null;
        resourceSet: {
            __typename?: 'ResourceTypeConnection';
            edges: Array<{
                __typename?: 'ResourceTypeEdge';
                node?: {
                    __typename?: 'ResourceType';
                    id: string;
                    pk?: string | null;
                    resourceName: string;
                    resourceFileUrl?: string | null;
                    resourceDescription?: string | null;
                    resourceUrl?: string | null;
                } | null;
            } | null>;
        };
        assignmentSet: {
            __typename?: 'AssignmentTypeConnection';
            edges: Array<{
                __typename?: 'AssignmentTypeEdge';
                node?: {
                    __typename?: 'AssignmentType';
                    id: string;
                    pk?: string | null;
                    assignmentName: string;
                    assignmentDescription: string;
                    startDate?: any | null;
                    startTime?: any | null;
                    question: {
                        __typename?: 'SubmittedAssignmentTypeConnection';
                        edges: Array<{
                            __typename?: 'SubmittedAssignmentTypeEdge';
                            node?: {
                                __typename?: 'SubmittedAssignmentType';
                                submittedDate: any;
                                assignmentQuestion?: {
                                    __typename?: 'AssignmentType';
                                    assignmentName: string;
                                    assignmentDescription: string;
                                    dueDate?: any | null;
                                    pk?: string | null;
                                    startDate?: any | null;
                                } | null;
                            } | null;
                        } | null>;
                    };
                } | null;
            } | null>;
        };
    } | null;
};

export type GetMyEnrollmentsListQueryVariables = Exact<{
    student_Id: Scalars['Float'];
}>;

export type GetMyEnrollmentsListQuery = {
    __typename?: 'RootQuery';
    myEnrollmentsList?: {
        __typename?: 'EnrollmentTypeConnection';
        edges: Array<{
            __typename?: 'EnrollmentTypeEdge';
            node?: {
                __typename?: 'EnrollmentType';
                course: {
                    __typename?: 'CourseType';
                    courseName: string;
                    courseDescription: string;
                    courseImageUrl?: string | null;
                    id: string;
                    pk?: string | null;
                };
            } | null;
        } | null>;
    } | null;
};

export type AdminSearchUserQueryVariables = Exact<{
    organizationId: Scalars['ID'];
    username: Scalars['String'];
}>;

export type AdminSearchUserQuery = {
    __typename?: 'RootQuery';
    adminSearchForUsers?: Array<{
        __typename?: 'UserType';
        id: string;
        pk: string;
        firstName: string;
        lastName: string;
        phone?: string | null;
    } | null> | null;
};

export type ChechHasStudentRegisteredQueryVariables = Exact<{
    courseId: Scalars['ID'];
}>;

export type ChechHasStudentRegisteredQuery = {
    __typename?: 'RootQuery';
    hasStudentRegisteredForCourse?: boolean | null;
};

export type GetOrganizationPaymentApIsQueryVariables = Exact<{
    organizationId: Scalars['Float'];
}>;

export type GetOrganizationPaymentApIsQuery = {
    __typename?: 'RootQuery';
    websitePaymentApi?: {
        __typename?: 'OrganizationPaymentAPITypeConnection';
        edges: Array<{
            __typename?: 'OrganizationPaymentAPITypeEdge';
            node?: {
                __typename?: 'OrganizationPaymentAPIType';
                pk: string;
                platform?: string | null;
                testPublicKey?: string | null;
                livePublicKey?: string | null;
                organization?: {
                    __typename?: 'OrganizationType';
                    name: string;
                    photoUrl?: string | null;
                } | null;
            } | null;
        } | null>;
    } | null;
};

export type GetUserOutstandingPaymentsQueryVariables = Exact<{
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
}>;

export type GetUserOutstandingPaymentsQuery = {
    __typename?: 'RootQuery';
    membershipJoinRequest?: {
        __typename?: 'JoinRequestType';
        pk?: string | null;
        amountOwingReason?: string | null;
        amountOwingValue?: number | null;
        amountOwingStr?: string | null;
    } | null;
};

export type GetUserPaymentsHistoryQueryVariables = Exact<{
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
}>;

export type GetUserPaymentsHistoryQuery = {
    __typename?: 'RootQuery';
    membershipPaymentList?: {
        __typename?: 'MembershipPaymentTypeConnection';
        edges: Array<{
            __typename?: 'MembershipPaymentTypeEdge';
            node?: {
                __typename?: 'MembershipPaymentType';
                id: string;
                pk: string;
                paymentName?: string | null;
                txref?: string | null;
                paid: boolean;
                amountPaidValue?: number | null;
                amountPaidStr?: string | null;
            } | null;
        } | null>;
    } | null;
};

export type GetUserMembershipPaymentQueryVariables = Exact<{
    paymentId: Scalars['ID'];
}>;

export type GetUserMembershipPaymentQuery = {
    __typename?: 'RootQuery';
    membershipPayment?: {
        __typename?: 'MembershipPaymentType';
        amountPaidValue?: number | null;
        txref?: string | null;
        created: any;
        paymentName?: string | null;
        paymentType: string;
        user?: { __typename?: 'UserType'; firstName: string; lastName: string } | null;
    } | null;
};

export type GetUserConferencePaymentsListQueryVariables = Exact<{
    organizationId: Scalars['ID'];
    userId?: InputMaybe<Scalars['ID']>;
    email?: InputMaybe<Scalars['String']>;
}>;

export type GetUserConferencePaymentsListQuery = {
    __typename?: 'RootQuery';
    getConferencePaymentsList?: Array<{
        __typename?: 'ConferencePaymentType';
        amountPaidValue?: number | null;
        txref?: string | null;
        paymentName?: string | null;
        created: any;
        id: string;
        pk?: string | null;
        paid: boolean;
        user?: { __typename?: 'UserType'; firstName: string; lastName: string } | null;
    } | null> | null;
};

export type GetUserConferencePaymentDataQueryVariables = Exact<{
    organizationId: Scalars['ID'];
    paymentId: Scalars['ID'];
}>;

export type GetUserConferencePaymentDataQuery = {
    __typename?: 'RootQuery';
    getConferencePaymentData?: {
        __typename?: 'ConferencePaymentType';
        amountPaidValue?: number | null;
        txref?: string | null;
        paymentName?: string | null;
        created: any;
        user?: { __typename?: 'UserType'; firstName: string; lastName: string } | null;
    } | null;
};

export type GetAnonymouseConferencePaymentDataQueryVariables = Exact<{
    organizationId: Scalars['ID'];
    eventId: Scalars['ID'];
    email: Scalars['String'];
}>;

export type GetAnonymouseConferencePaymentDataQuery = {
    __typename?: 'RootQuery';
    getAnonymousUserConferencePaymentData?: {
        __typename?: 'ConferencePaymentWithMembershipDetailsType';
        paymentName?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        amountPaidValue?: number | null;
        txref?: string | null;
        created: any;
        membershipCadre?: string | null;
        membershipNumber?: string | null;
        org?: {
            __typename?: 'OrganizationType';
            officeAddress?: string | null;
            phone?: string | null;
            email?: string | null;
        } | null;
    } | null;
};

export type GetOrganizationUserQueryVariables = Exact<{
    organization_Id: Scalars['Float'];
}>;

export type GetOrganizationUserQuery = {
    __typename?: 'RootQuery';
    members?: {
        __typename?: 'JoinRequestTypeConnection';
        edges: Array<{
            __typename?: 'JoinRequestTypeEdge';
            node?: {
                __typename?: 'JoinRequestType';
                orgNumber?: string | null;
                verified?: boolean | null;
                user?: {
                    __typename?: 'UserType';
                    pk: string;
                    username: string;
                    firstName: string;
                    lastName: string;
                    phone?: string | null;
                    email: string;
                } | null;
                organization?: { __typename?: 'OrganizationType'; name: string } | null;
            } | null;
        } | null>;
    } | null;
};

export type GetOrgUserDataPaginatedQueryVariables = Exact<{
    organization_Id: Scalars['Float'];
    first: Scalars['Int'];
    after: Scalars['String'];
    searchQuery?: InputMaybe<Scalars['String']>;
    filterQuery?: InputMaybe<Scalars['String']>;
}>;

export type GetOrgUserDataPaginatedQuery = {
    __typename?: 'RootQuery';
    members?: {
        __typename?: 'JoinRequestTypeConnection';
        edgeCount?: number | null;
        totalCount?: number | null;
        edges: Array<{
            __typename?: 'JoinRequestTypeEdge';
            cursor: string;
            node?: {
                __typename?: 'JoinRequestType';
                membershipApplicationStatus: string;
                orgNumber?: string | null;
                verified?: boolean | null;
                user?: {
                    __typename?: 'UserType';
                    pk: string;
                    username: string;
                    firstName: string;
                    lastName: string;
                    phone?: string | null;
                    email: string;
                } | null;
                organization?: { __typename?: 'OrganizationType'; name: string } | null;
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};

export type GetOrgUserDataQueryVariables = Exact<{
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
    userId1: Scalars['Float'];
    organizationId1: Scalars['Float'];
}>;

export type GetOrgUserDataQuery = {
    __typename?: 'RootQuery';
    member?: {
        __typename?: 'JoinRequestType';
        approved?: boolean | null;
        verified?: boolean | null;
        orgNumber?: string | null;
        membershipApplicationStatus: string;
        otherMembershipNumbers?: string | null;
        membershipCadre?: { __typename?: 'OrgMembershipType'; name: string } | null;
        specialty?: { __typename?: 'SpecialtyType'; name?: string | null } | null;
        subSpecialty?: { __typename?: 'SubSpecialtyType'; name?: string | null } | null;
        subdivision?: { __typename?: 'OrgSubDivisionType'; state?: string | null } | null;
        user?: {
            __typename?: 'UserType';
            pk: string;
            username: string;
            firstName: string;
            lastName: string;
            email: string;
            gender?: AccountsUserGenderChoices | null;
            isActive: boolean;
            middleName: string;
            phone?: string | null;
            dob?: any | null;
            photoUrl?: string | null;
            nationality: AccountsUserNationalityChoices;
            state?: AccountsUserStateChoices | null;
            address?: string | null;
            country: AccountsUserCountryChoices;
            membersMembershippayments: {
                __typename?: 'MembershipPaymentTypeConnection';
                edges: Array<{
                    __typename?: 'MembershipPaymentTypeEdge';
                    node?: {
                        __typename?: 'MembershipPaymentType';
                        amountPaidValue?: number | null;
                        amountPaidStr?: string | null;
                        updated: any;
                        paymentName?: string | null;
                        proofOfPayment?: string | null;
                        paymentType: string;
                        membershipType?: { __typename?: 'OrgMembershipType'; name: string } | null;
                    } | null;
                } | null>;
            };
            conferencePayments: {
                __typename?: 'ConferencePaymentWithMembershipDetailsTypeConnection';
                edges: Array<{
                    __typename?: 'ConferencePaymentWithMembershipDetailsTypeEdge';
                    node?: {
                        __typename?: 'ConferencePaymentWithMembershipDetailsType';
                        amountPaidValue?: number | null;
                        amountPaidStr?: string | null;
                        updated: any;
                        ticket?: { __typename?: 'TicketType'; name: string } | null;
                    } | null;
                } | null>;
            };
            records: {
                __typename?: 'AcademicRecordModelTypeConnection';
                edges: Array<{
                    __typename?: 'AcademicRecordModelTypeEdge';
                    node?: {
                        __typename?: 'AcademicRecordModelType';
                        pk: string;
                        program: string;
                        admitted?: any | null;
                        graduated?: any | null;
                        current?: boolean | null;
                        certificate?: string | null;
                        certificateUrl?: string | null;
                        school: { __typename?: 'SchoolModelType'; name: string };
                        discipline?: { __typename?: 'DepartmentModelType'; name: string } | null;
                    } | null;
                } | null>;
            };
            workexperienceSet: {
                __typename?: 'WorkExperienceModelTypeConnection';
                edges: Array<{
                    __typename?: 'WorkExperienceModelTypeEdge';
                    node?: {
                        __typename?: 'WorkExperienceModelType';
                        id: string;
                        companyName?: string | null;
                        startDate: any;
                        endDate?: any | null;
                        designation?: string | null;
                        description?: string | null;
                        current?: boolean | null;
                        address?: string | null;
                        state?: string | null;
                        country?: string | null;
                        created: any;
                    } | null;
                } | null>;
            };
            kinsman: {
                __typename?: 'NextOfKinModelTypeConnection';
                edges: Array<{
                    __typename?: 'NextOfKinModelTypeEdge';
                    node?: {
                        __typename?: 'NextOfKinModelType';
                        id: string;
                        firstName: string;
                        lastName: string;
                        middleName: string;
                        email: string;
                        phone?: string | null;
                        relationship?: string | null;
                    } | null;
                } | null>;
            };
        } | null;
    } | null;
    memberReferees?: {
        __typename?: 'RefereeTypeConnection';
        edges: Array<{
            __typename?: 'RefereeTypeEdge';
            node?: {
                __typename?: 'RefereeType';
                pk: string;
                id: string;
                firstName: string;
                middleName: string;
                lastName: string;
                phone?: string | null;
                email: string;
                number?: string | null;
            } | null;
        } | null>;
    } | null;
};

export type GetOrgUserStatusDataQueryVariables = Exact<{
    organizationId: Scalars['ID'];
    userId: Scalars['ID'];
}>;

export type GetOrgUserStatusDataQuery = {
    __typename?: 'RootQuery';
    member?: {
        __typename?: 'JoinRequestType';
        membershipApplicationStatus: string;
        amountOwingStr?: string | null;
        orgNumber?: string | null;
    } | null;
};

export type GetOrgAdminDashboardDataQueryVariables = Exact<{
    organizationId: Scalars['ID'];
}>;

export type GetOrgAdminDashboardDataQuery = {
    __typename?: 'RootQuery';
    adminDashboardAnalytics?: any | null;
};

export type GetOrgAdminConferenceTicketDataQueryVariables = Exact<{
    organizationId?: InputMaybe<Scalars['Float']>;
    meeting_Id?: InputMaybe<Scalars['Float']>;
}>;

export type GetOrgAdminConferenceTicketDataQuery = {
    __typename?: 'RootQuery';
    eventTicketList?: {
        __typename?: 'TicketTypeConnection';
        edges: Array<{
            __typename?: 'TicketTypeEdge';
            node?: { __typename?: 'TicketType'; pk?: string | null; name: string } | null;
        } | null>;
    } | null;
};

export type GetOrganizationUserPaymentQueryVariables = Exact<{
    org_Id: Scalars['Float'];
}>;

export type GetOrganizationUserPaymentQuery = {
    __typename?: 'RootQuery';
    adminMembershipPayments?: {
        __typename?: 'MembershipPaymentTypeConnection';
        edges: Array<{
            __typename?: 'MembershipPaymentTypeEdge';
            cursor: string;
            node?: {
                __typename?: 'MembershipPaymentType';
                paymentStatus: string;
                amountPaidCurrency: string;
                paid: boolean;
                paymentName?: string | null;
                paymentApproval?: boolean | null;
                amountPaidStr?: string | null;
                amountPaidValue?: number | null;
                paymentType: string;
                membershipType?: { __typename?: 'OrgMembershipType'; name: string } | null;
                user?: {
                    __typename?: 'UserType';
                    pk: string;
                    firstName: string;
                    lastName: string;
                    email: string;
                } | null;
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};

export type GetAdminUserPaymentDataPaginatedQueryVariables = Exact<{
    organization_Id: Scalars['Float'];
    first: Scalars['Int'];
    after: Scalars['String'];
    searchQuery?: InputMaybe<Scalars['String']>;
}>;

export type GetAdminUserPaymentDataPaginatedQuery = {
    __typename?: 'RootQuery';
    adminMembershipPayments?: {
        __typename?: 'MembershipPaymentTypeConnection';
        edgeCount?: number | null;
        totalCount?: number | null;
        edges: Array<{
            __typename?: 'MembershipPaymentTypeEdge';
            cursor: string;
            node?: {
                __typename?: 'MembershipPaymentType';
                paymentStatus: string;
                amountPaidCurrency: string;
                paid: boolean;
                paymentName?: string | null;
                paymentApproval?: boolean | null;
                amountPaidStr?: string | null;
                amountPaidValue?: number | null;
                paymentType: string;
                membershipType?: { __typename?: 'OrgMembershipType'; name: string } | null;
                user?: {
                    __typename?: 'UserType';
                    pk: string;
                    firstName: string;
                    lastName: string;
                    email: string;
                } | null;
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};

export type GetOrgAnnouncementDataPaginatedQueryVariables = Exact<{
    organization_Id: Scalars['Float'];
    first: Scalars['Int'];
    after: Scalars['String'];
}>;

export type GetOrgAnnouncementDataPaginatedQuery = {
    __typename?: 'RootQuery';
    announcements?: {
        __typename?: 'AnnouncementTypeConnection';
        edgeCount?: number | null;
        totalCount?: number | null;
        edges: Array<{
            __typename?: 'AnnouncementTypeEdge';
            node?: {
                __typename?: 'AnnouncementType';
                id: string;
                pk: string;
                title: string;
                photoUrl?: string | null;
                updated: any;
                image?: string | null;
                announcementType: string;
                body?: string | null;
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};

export type GetAdminOrgLibraryDataPaginatedQueryVariables = Exact<{
    org_Id: Scalars['Float'];
    first: Scalars['Int'];
    after: Scalars['String'];
}>;

export type GetAdminOrgLibraryDataPaginatedQuery = {
    __typename?: 'RootQuery';
    publicationsList?: {
        __typename?: 'PublicationTypeConnection';
        edgeCount?: number | null;
        totalCount?: number | null;
        edges: Array<{
            __typename?: 'PublicationTypeEdge';
            node?: {
                __typename?: 'PublicationType';
                id: string;
                pk: string;
                title: string;
                externalUpload?: string | null;
                fileUrl?: string | null;
                updated: any;
                abstract: string;
                category?: {
                    __typename?: 'PublicationCategoryType';
                    pk: string;
                    name: string;
                } | null;
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};

export type GetAdminOrgLeadersDataPaginatedQueryVariables = Exact<{
    orgId: Scalars['Float'];
    first: Scalars['Int'];
    after: Scalars['String'];
}>;

export type GetAdminOrgLeadersDataPaginatedQuery = {
    __typename?: 'RootQuery';
    orgExecutiveList?: {
        __typename?: 'ExecutiveTypeConnection';
        edgeCount?: number | null;
        totalCount?: number | null;
        edges: Array<{
            __typename?: 'ExecutiveTypeEdge';
            node?: {
                __typename?: 'ExecutiveType';
                pk: string;
                id: string;
                name?: string | null;
                email?: string | null;
                bio?: string | null;
                photoUrl?: string | null;
                startTenure?: any | null;
                endTenure?: any | null;
                current: boolean;
                position?: {
                    __typename?: 'LeadershipPositionType';
                    pk: string;
                    position: string;
                } | null;
                category?: {
                    __typename?: 'LeadershipCategoryType';
                    pk: string;
                    name: string;
                } | null;
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};

export type GetAdminOrgChaptersDataPaginatedQueryVariables = Exact<{
    organization_Id: Scalars['Float'];
    first: Scalars['Int'];
    after: Scalars['String'];
}>;

export type GetAdminOrgChaptersDataPaginatedQuery = {
    __typename?: 'RootQuery';
    orgSubDivisionList?: {
        __typename?: 'OrgSubDivisionTypeConnection';
        edgeCount?: number | null;
        totalCount?: number | null;
        edges: Array<{
            __typename?: 'OrgSubDivisionTypeEdge';
            node?: {
                __typename?: 'OrgSubDivisionType';
                id: string;
                pk: string;
                subdivision: string;
                chairperson?: string | null;
                phoneNumber?: string | null;
                email?: string | null;
                state?: string | null;
                created: any;
                organization?: {
                    __typename?: 'OrganizationType';
                    officeAddress?: string | null;
                } | null;
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};

export type GetAdminOrgFaqsDataPaginatedQueryVariables = Exact<{
    organization_Id: Scalars['Float'];
    first: Scalars['Int'];
    after: Scalars['String'];
}>;

export type GetAdminOrgFaqsDataPaginatedQuery = {
    __typename?: 'RootQuery';
    websiteFaqList?: {
        __typename?: 'WebsiteFaqTypeConnection';
        edgeCount?: number | null;
        totalCount?: number | null;
        edges: Array<{
            __typename?: 'WebsiteFaqTypeEdge';
            node?: {
                __typename?: 'WebsiteFaqType';
                id: string;
                pk: string;
                question?: string | null;
                answer?: string | null;
                updated: any;
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};

export type AdminPublicationCategoryListDataQueryVariables = Exact<{
    organization_Id: Scalars['Float'];
}>;

export type AdminPublicationCategoryListDataQuery = {
    __typename?: 'RootQuery';
    publicationCategoryList?: {
        __typename?: 'PublicationCategoryTypeConnection';
        edges: Array<{
            __typename?: 'PublicationCategoryTypeEdge';
            node?: {
                __typename?: 'PublicationCategoryType';
                id: string;
                name: string;
                pk: string;
            } | null;
        } | null>;
    } | null;
};

export type GetAdminAboutDataPaginatedQueryVariables = Exact<{
    domainName: Scalars['String'];
}>;

export type GetAdminAboutDataPaginatedQuery = {
    __typename?: 'RootQuery';
    websiteAboutPage?: Array<string | null> | null;
};

export type GetEventCategoryDataListQueryVariables = Exact<{
    org_Id?: InputMaybe<Scalars['Float']>;
}>;

export type GetEventCategoryDataListQuery = {
    __typename?: 'RootQuery';
    eventCategoryList?: {
        __typename?: 'MeetingCategoryTypeConnection';
        edges: Array<{
            __typename?: 'MeetingCategoryTypeEdge';
            node?: {
                __typename?: 'MeetingCategoryType';
                id: string;
                name: string;
                pk?: string | null;
            } | null;
        } | null>;
    } | null;
};

export type GetAllOrgAdminConferenceDataPaginatedQueryVariables = Exact<{
    org_Id: Scalars['Float'];
    first: Scalars['Int'];
    after: Scalars['String'];
    isConference?: InputMaybe<Scalars['Boolean']>;
}>;

export type GetAllOrgAdminConferenceDataPaginatedQuery = {
    __typename?: 'RootQuery';
    eventsList?: {
        __typename?: 'MeetingTypeConnection';
        edgeCount?: number | null;
        totalCount?: number | null;
        edges: Array<{
            __typename?: 'MeetingTypeEdge';
            node?: {
                __typename?: 'MeetingType';
                id: string;
                theme?: string | null;
                description?: string | null;
                venue?: string | null;
                flyer?: string | null;
                invitationLetter?: string | null;
                pk: string;
                virtualOnly?: boolean | null;
                isConference?: boolean | null;
                paid: boolean;
                startTime: any;
                endTime?: any | null;
                attendance: boolean;
                endDate?: any | null;
                startDate: any;
                name: string;
                updated: any;
                category?: {
                    __typename?: 'MeetingCategoryType';
                    pk?: string | null;
                    name: string;
                } | null;
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};

export type GetSingleOrgAdminConferenceDataPaginatedQueryVariables = Exact<{
    Id: Scalars['Int'];
    first?: InputMaybe<Scalars['Int']>;
    after?: InputMaybe<Scalars['String']>;
}>;

export type GetSingleOrgAdminConferenceDataPaginatedQuery = {
    __typename?: 'RootQuery';
    eventById?: {
        __typename?: 'MeetingType';
        id: string;
        name: string;
        theme?: string | null;
        attendance: boolean;
        category?: { __typename?: 'MeetingCategoryType'; name: string } | null;
        conferenceEvent: {
            __typename?: 'ConferenceRegistrationWithRelatedPaymentTypeConnection';
            edgeCount?: number | null;
            totalCount?: number | null;
            edges: Array<{
                __typename?: 'ConferenceRegistrationWithRelatedPaymentTypeEdge';
                node?: {
                    __typename?: 'ConferenceRegistrationWithRelatedPaymentType';
                    pk?: string | null;
                    firstName?: string | null;
                    lastName?: string | null;
                    email?: string | null;
                    phone?: string | null;
                    ticket?: { __typename?: 'TicketType'; name: string } | null;
                } | null;
            } | null>;
            pageInfo: {
                __typename?: 'PageInfo';
                hasNextPage: boolean;
                hasPreviousPage: boolean;
                startCursor?: string | null;
                endCursor?: string | null;
            };
        };
    } | null;
};

export type GetSingleOrgAdminConferenceDataPaginatedWithSearchQueryVariables = Exact<{
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
    first?: InputMaybe<Scalars['Int']>;
    after?: InputMaybe<Scalars['String']>;
    searchByEmailQuery?: InputMaybe<Scalars['String']>;
}>;

export type GetSingleOrgAdminConferenceDataPaginatedWithSearchQuery = {
    __typename?: 'RootQuery';
    adminGetEventDetailsAndRegistrations?: {
        __typename?: 'MeetingWithEventRegistrationsType';
        id: string;
        name: string;
        isConference?: boolean | null;
        theme?: string | null;
        attendance: boolean;
        category?: { __typename?: 'MeetingCategoryType'; name: string } | null;
        eventRegistrations?: {
            __typename?: 'ConferenceRegistrationWithRelatedPaymentTypeConnection';
            edgeCount?: number | null;
            totalCount?: number | null;
            edges: Array<{
                __typename?: 'ConferenceRegistrationWithRelatedPaymentTypeEdge';
                node?: {
                    __typename?: 'ConferenceRegistrationWithRelatedPaymentType';
                    pk?: string | null;
                    firstName?: string | null;
                    lastName?: string | null;
                    email?: string | null;
                    phone?: string | null;
                    ticket?: { __typename?: 'TicketType'; name: string } | null;
                    payment?: {
                        __typename?: 'ConferencePaymentType';
                        amountPaidStr?: string | null;
                        amountPaidValue?: number | null;
                    } | null;
                } | null;
            } | null>;
            pageInfo: {
                __typename?: 'PageInfo';
                hasNextPage: boolean;
                hasPreviousPage: boolean;
                startCursor?: string | null;
                endCursor?: string | null;
            };
        } | null;
    } | null;
};

export type GetSingleOrgAdminConferenceDataPaginatedWithSearchIsConferenceQueryVariables = Exact<{
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type GetSingleOrgAdminConferenceDataPaginatedWithSearchIsConferenceQuery = {
    __typename?: 'RootQuery';
    adminGetEventDetailsAndRegistrations?: {
        __typename?: 'MeetingWithEventRegistrationsType';
        id: string;
        name: string;
        isConference?: boolean | null;
    } | null;
};

export type GetAdminSingleUserRegisteredQueryVariables = Exact<{
    id: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type GetAdminSingleUserRegisteredQuery = {
    __typename?: 'RootQuery';
    getConferenceRegistrationDetails?: {
        __typename?: 'ConferenceRegistrationType';
        firstName?: string | null;
        lastName?: string | null;
        email?: string | null;
        phone?: string | null;
        user?: {
            __typename?: 'UserType';
            firstName: string;
            lastName: string;
            email: string;
            phone?: string | null;
        } | null;
        ticket?: { __typename?: 'TicketType'; name: string } | null;
    } | null;
};

export type GetAdminLeaderCategoryListQueryVariables = Exact<{
    organization_Id: Scalars['Float'];
}>;

export type GetAdminLeaderCategoryListQuery = {
    __typename?: 'RootQuery';
    orgLeadershipCategoryList?: {
        __typename?: 'LeadershipCategoryTypeConnection';
        edgeCount?: number | null;
        totalCount?: number | null;
        edges: Array<{
            __typename?: 'LeadershipCategoryTypeEdge';
            node?: { __typename?: 'LeadershipCategoryType'; name: string; pk: string } | null;
        } | null>;
    } | null;
};

export type GetAdminLeaderPositionListQueryVariables = Exact<{
    organization_Id: Scalars['Float'];
}>;

export type GetAdminLeaderPositionListQuery = {
    __typename?: 'RootQuery';
    leadershipPositionList?: {
        __typename?: 'LeadershipPositionTypeConnection';
        edgeCount?: number | null;
        totalCount?: number | null;
        edges: Array<{
            __typename?: 'LeadershipPositionTypeEdge';
            node?: { __typename?: 'LeadershipPositionType'; position: string; pk: string } | null;
        } | null>;
    } | null;
};

export type GetAdminSpecialityPaginatedQueryVariables = Exact<{
    organization: Scalars['Float'];
    first: Scalars['Int'];
    after: Scalars['String'];
}>;

export type GetAdminSpecialityPaginatedQuery = {
    __typename?: 'RootQuery';
    specialties?: {
        __typename?: 'SpecialtyTypeConnection';
        edgeCount?: number | null;
        totalCount?: number | null;
        edges: Array<{
            __typename?: 'SpecialtyTypeEdge';
            node?: {
                __typename?: 'SpecialtyType';
                id: string;
                name?: string | null;
                pk: string;
                subspecialtySet: {
                    __typename?: 'SubSpecialtyTypeConnection';
                    totalCount?: number | null;
                    edges: Array<{
                        __typename?: 'SubSpecialtyTypeEdge';
                        node?: {
                            __typename?: 'SubSpecialtyType';
                            id: string;
                            name?: string | null;
                            pk: string;
                        } | null;
                    } | null>;
                };
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};

export type GetAdminConferenceBasicInfoQueryVariables = Exact<{
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type GetAdminConferenceBasicInfoQuery = {
    __typename?: 'RootQuery';
    adminGetConferenceBasicData?: {
        __typename?: 'AdminConferenceBasicDataType';
        id: string;
        pk: string;
        name: string;
        eventSlug?: string | null;
        description?: string | null;
        attendance: boolean;
        startDate: any;
        startTime: any;
        theme?: string | null;
        venue?: string | null;
        virtualOnly?: boolean | null;
        endDate?: any | null;
        endTime?: any | null;
        category?: { __typename?: 'MeetingCategoryType'; name: string; pk?: string | null } | null;
    } | null;
};

export type GetAdminConferencePresentersListQueryVariables = Exact<{
    meeting_Id?: InputMaybe<Scalars['Float']>;
    org_Id?: InputMaybe<Scalars['Float']>;
}>;

export type GetAdminConferencePresentersListQuery = {
    __typename?: 'RootQuery';
    presentersList?: {
        __typename?: 'PresenterTypeConnection';
        edges: Array<{
            __typename?: 'PresenterTypeEdge';
            node?: {
                __typename?: 'PresenterType';
                id: string;
                pk?: string | null;
                name?: string | null;
                portfolio?: string | null;
                photoUrl?: string | null;
            } | null;
        } | null>;
    } | null;
};

export type GetAdminConferenceScheduleListQueryVariables = Exact<{
    meeting_Id?: InputMaybe<Scalars['Float']>;
}>;

export type GetAdminConferenceScheduleListQuery = {
    __typename?: 'RootQuery';
    schedulesList?: {
        __typename?: 'ScheduleTypeConnection';
        edges: Array<{
            __typename?: 'ScheduleTypeEdge';
            node?: {
                __typename?: 'ScheduleType';
                id: string;
                pk?: string | null;
                description?: string | null;
                location: string;
                scheduleDate?: any | null;
                scheduleEndTime?: any | null;
                scheduleStartTime?: any | null;
                title: string;
                speaker?: { __typename?: 'PresenterType'; name?: string | null } | null;
            } | null;
        } | null>;
    } | null;
};

export type GetAdminConferenceEventDocumentQueryVariables = Exact<{
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type GetAdminConferenceEventDocumentQuery = {
    __typename?: 'RootQuery';
    adminGetEventDocuments?: {
        __typename?: 'AdminEventDocumentsType';
        id: string;
        invitationLetterUrl?: string | null;
        certificateUrl?: string | null;
    } | null;
};

export type GetAdminConferenceEventFlyerQueryVariables = Exact<{
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type GetAdminConferenceEventFlyerQuery = {
    __typename?: 'RootQuery';
    adminGetEventFlyer?: {
        __typename?: 'AdminEventFlyerType';
        id: string;
        pk: string;
        flyerUrl?: string | null;
    } | null;
};

export type GetAdminConferenceEventLogoQueryVariables = Exact<{
    eventId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type GetAdminConferenceEventLogoQuery = {
    __typename?: 'RootQuery';
    adminGetEventLogo?: {
        __typename?: 'AdminEventLogoType';
        eventLogo?: string | null;
        eventLogoUrl?: string | null;
    } | null;
};

export type GetAdminConferenceEventSocialDpQueryVariables = Exact<{
    eventId: Scalars['ID'];
}>;

export type GetAdminConferenceEventSocialDpQuery = {
    __typename?: 'RootQuery';
    getEventSocialDpBanner?: {
        __typename?: 'MeetingSocialDpBannerImageType';
        id: string;
        pk: string;
        bannerImageUrl?: string | null;
    } | null;
};

export type GetAdminConferenceEventPresentationListQueryVariables = Exact<{
    meeting_Id?: InputMaybe<Scalars['Float']>;
    org_Id?: InputMaybe<Scalars['Float']>;
}>;

export type GetAdminConferenceEventPresentationListQuery = {
    __typename?: 'RootQuery';
    presentationsList?: {
        __typename?: 'PresentationTypeConnection';
        edges: Array<{
            __typename?: 'PresentationTypeEdge';
            node?: {
                __typename?: 'PresentationType';
                id: string;
                pk?: string | null;
                title: string;
                abstract: string;
                externalUpload?: string | null;
                fileUrl?: string | null;
            } | null;
        } | null>;
    } | null;
};

export type GetAdminGetPollsAnalyticsPerPeriodsQueryVariables = Exact<{
    organizationId: Scalars['ID'];
    periodType: PeriodType;
    year?: InputMaybe<Scalars['Int']>;
    month?: InputMaybe<Scalars['Int']>;
}>;

export type GetAdminGetPollsAnalyticsPerPeriodsQuery = {
    __typename?: 'RootQuery';
    adminGetPollsAnalyticsPerPeriod?: any | null;
};

export type GetAdminConferenceEventAttendanceListQueryVariables = Exact<{
    meeting_Id?: InputMaybe<Scalars['Float']>;
    organization_Id?: InputMaybe<Scalars['Float']>;
    attendanceCode?: InputMaybe<Scalars['String']>;
}>;

export type GetAdminConferenceEventAttendanceListQuery = {
    __typename?: 'RootQuery';
    adminGetEventAttendances?: {
        __typename?: 'AttendanceWithAttendanceCountTypeConnection';
        edges: Array<{
            __typename?: 'AttendanceWithAttendanceCountTypeEdge';
            node?: {
                __typename?: 'AttendanceWithAttendanceCountType';
                id: string;
                pk?: string | null;
                name?: string | null;
                attendanceCode?: string | null;
                openTime?: any | null;
                closeTime?: any | null;
                openDate?: any | null;
                closeDate?: any | null;
                attendanceCount?: number | null;
            } | null;
        } | null>;
    } | null;
};

export type GetPublisedPollsQueryVariables = Exact<{
    organizationId: Scalars['ID'];
}>;

export type GetPublisedPollsQuery = {
    __typename?: 'RootQuery';
    getPublishedPolls?: Array<{
        __typename?: 'PollType';
        id: string;
        name: string;
        pk: string;
        state: EvotingPollStateChoices;
        status: EvotingPollStatusChoices;
        pollType: EvotingPollPollTypeChoices;
    } | null> | null;
};

export type GetAdminPollsQueryVariables = Exact<{
    organization_Id?: InputMaybe<Scalars['Float']>;
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    pollType?: InputMaybe<Scalars['String']>;
}>;

export type GetAdminPollsQuery = {
    __typename?: 'RootQuery';
    adminGetAllPolls?: {
        __typename?: 'PollTypeConnection';
        totalCount?: number | null;
        edgeCount?: number | null;
        edges: Array<{
            __typename?: 'PollTypeEdge';
            node?: {
                __typename?: 'PollType';
                id: string;
                pk: string;
                name: string;
                state: EvotingPollStateChoices;
                status: EvotingPollStatusChoices;
                pollType: EvotingPollPollTypeChoices;
                endTime?: any | null;
                startDate?: any | null;
                startTime?: any | null;
                endDate?: any | null;
                pollVisibility: EvotingPollPollVisibilityChoices;
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};

export type GetPublisedPollQueryVariables = Exact<{
    pollId: Scalars['ID'];
}>;

export type GetPublisedPollQuery = {
    __typename?: 'RootQuery';
    getPublishedPoll?: {
        __typename?: 'PollType';
        id: string;
        name: string;
        status: EvotingPollStatusChoices;
        pollType: EvotingPollPollTypeChoices;
        inputType: EvotingPollInputTypeChoices;
        pk: string;
        decision?: string | null;
        endTime?: any | null;
        document?: string | null;
        allowSelectionOfMultipleOptions: boolean;
        requireParticipantsName: boolean;
        resultVisibility: EvotingPollResultVisibilityChoices;
        startDate?: any | null;
        startTime?: any | null;
        endDate?: any | null;
        documentUrl?: string | null;
        candidates: {
            __typename?: 'CandidateTypeConnection';
            edges: Array<{
                __typename?: 'CandidateTypeEdge';
                node?: {
                    __typename?: 'CandidateType';
                    id: string;
                    name: string;
                    bio: string;
                    image?: string | null;
                    imageUrl?: string | null;
                    poll: {
                        __typename?: 'PollTypeConnection';
                        edges: Array<{
                            __typename?: 'PollTypeEdge';
                            node?: { __typename?: 'PollType'; name: string } | null;
                        } | null>;
                    };
                } | null;
            } | null>;
        };
        answers: {
            __typename?: 'AnswerTypeConnection';
            edges: Array<{
                __typename?: 'AnswerTypeEdge';
                node?: {
                    __typename?: 'AnswerType';
                    answer: string;
                    description: string;
                    imageUrl?: string | null;
                    poll: {
                        __typename?: 'PollTypeConnection';
                        edges: Array<{
                            __typename?: 'PollTypeEdge';
                            node?: { __typename?: 'PollType'; name: string } | null;
                        } | null>;
                    };
                } | null;
            } | null>;
        };
    } | null;
};

export type GetClientPollsAnswersQueryVariables = Exact<{
    pollId: Scalars['ID'];
}>;

export type GetClientPollsAnswersQuery = {
    __typename?: 'RootQuery';
    getPollAnswers?: Array<{
        __typename?: 'AnswerType';
        id: string;
        answer: string;
        description: string;
        imageUrl?: string | null;
        createdAt: any;
        poll: {
            __typename?: 'PollTypeConnection';
            edges: Array<{
                __typename?: 'PollTypeEdge';
                node?: {
                    __typename?: 'PollType';
                    name: string;
                    answers: {
                        __typename?: 'AnswerTypeConnection';
                        edges: Array<{
                            __typename?: 'AnswerTypeEdge';
                            node?: {
                                __typename?: 'AnswerType';
                                answer: string;
                                description: string;
                                image?: string | null;
                            } | null;
                        } | null>;
                    };
                } | null;
            } | null>;
        };
    } | null> | null;
};

export type GetClientPollsCandidatesQueryVariables = Exact<{
    pollId: Scalars['ID'];
}>;

export type GetClientPollsCandidatesQuery = {
    __typename?: 'RootQuery';
    getPollCandidates?: Array<{
        __typename?: 'CandidateType';
        poll: {
            __typename?: 'PollTypeConnection';
            edges: Array<{
                __typename?: 'PollTypeEdge';
                node?: {
                    __typename?: 'PollType';
                    id: string;
                    name: string;
                    state: EvotingPollStateChoices;
                    status: EvotingPollStatusChoices;
                    pollType: EvotingPollPollTypeChoices;
                    inputType: EvotingPollInputTypeChoices;
                    decision?: string | null;
                    document?: string | null;
                    startDate?: any | null;
                    documentUrl?: string | null;
                    requireParticipantsName: boolean;
                    candidates: {
                        __typename?: 'CandidateTypeConnection';
                        edges: Array<{
                            __typename?: 'CandidateTypeEdge';
                            node?: {
                                __typename?: 'CandidateType';
                                id: string;
                                name: string;
                                bio: string;
                                imageUrl?: string | null;
                            } | null;
                        } | null>;
                    };
                } | null;
            } | null>;
        };
    } | null> | null;
};

export type GetAdminSinglePollQueryVariables = Exact<{
    pollId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type GetAdminSinglePollQuery = {
    __typename?: 'RootQuery';
    adminGetPollCandidatesAndAnswers?: {
        __typename?: 'CandidateAndAnswerType';
        poll?: {
            __typename?: 'PollType';
            pk: string;
            id: string;
            name: string;
            pollType: EvotingPollPollTypeChoices;
            state: EvotingPollStateChoices;
            status: EvotingPollStatusChoices;
            inputType: EvotingPollInputTypeChoices;
            allowSelectionOfMultipleOptions: boolean;
            requireParticipantsName: boolean;
            resultVisibility: EvotingPollResultVisibilityChoices;
            startDate?: any | null;
            endDate?: any | null;
            startTime?: any | null;
            endTime?: any | null;
            document?: string | null;
            pollVisibility: EvotingPollPollVisibilityChoices;
            question?: { __typename?: 'QuestionType'; question: string } | null;
        } | null;
        answers?: Array<{
            __typename?: 'AnswerType';
            id: string;
            answer: string;
            imageUrl?: string | null;
            description: string;
        } | null> | null;
        candidates?: Array<{
            __typename?: 'CandidateType';
            id: string;
            name: string;
            bio: string;
            imageUrl?: string | null;
        } | null> | null;
    } | null;
};

export type GetAdminSinglePollResultQueryVariables = Exact<{
    pollId: Scalars['ID'];
    organizationId: Scalars['ID'];
}>;

export type GetAdminSinglePollResultQuery = {
    __typename?: 'RootQuery';
    adminGetPollResults?: {
        __typename?: 'PollTypeForResults';
        candidates?: any | null;
        answers?: any | null;
        poll?: {
            __typename?: 'PollType';
            name: string;
            state: EvotingPollStateChoices;
            status: EvotingPollStatusChoices;
            pollType: EvotingPollPollTypeChoices;
            question?: { __typename?: 'QuestionType'; question: string } | null;
        } | null;
    } | null;
};

export type GetPollResultQueryVariables = Exact<{
    pollId: Scalars['ID'];
}>;

export type GetPollResultQuery = {
    __typename?: 'RootQuery';
    getPollResults?: {
        __typename?: 'PollTypeForResults';
        candidates?: any | null;
        answers?: any | null;
        poll?: {
            __typename?: 'PollType';
            name: string;
            pollType: EvotingPollPollTypeChoices;
            state: EvotingPollStateChoices;
            status: EvotingPollStatusChoices;
            question?: { __typename?: 'QuestionType'; question: string } | null;
        } | null;
    } | null;
};

export type GetClientPollCandidatesandAnswersQueryVariables = Exact<{
    pollId: Scalars['ID'];
}>;

export type GetClientPollCandidatesandAnswersQuery = {
    __typename?: 'RootQuery';
    getPollCandidatesAndAnswers?: {
        __typename?: 'CandidateAndAnswerType';
        poll?: {
            __typename?: 'PollType';
            name: string;
            pk: string;
            id: string;
            documentUrl?: string | null;
            pollType: EvotingPollPollTypeChoices;
            resultVisibility: EvotingPollResultVisibilityChoices;
        } | null;
        candidates?: Array<{
            __typename?: 'CandidateType';
            id: string;
            pk: string;
            bio: string;
            imageUrl?: string | null;
            name: string;
        } | null> | null;
        answers?: Array<{
            __typename?: 'AnswerType';
            id: string;
            pk: string;
            answer: string;
            description: string;
            imageUrl?: string | null;
        } | null> | null;
    } | null;
};

export type GetAdminTopFourResultQueryVariables = Exact<{
    organizationId: Scalars['ID'];
}>;

export type GetAdminTopFourResultQuery = {
    __typename?: 'RootQuery';
    adminGetMostRecentFourPolls?: Array<{
        __typename?: 'PollWithPollEntriesType';
        pollEntries?: string | null;
        poll?: { __typename?: 'PollType'; name: string } | null;
    } | null> | null;
};

export type GetPollsForUSerQueryVariables = Exact<{
    organizationId: Scalars['ID'];
    after?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
}>;

export type GetPollsForUSerQuery = {
    __typename?: 'RootQuery';
    getPublishedPollsForUser?: {
        __typename?: 'PollWithParticipatedFieldConnection';
        totalCount?: number | null;
        edgeCount?: number | null;
        edges: Array<{
            __typename?: 'PollWithParticipatedFieldEdge';
            node?: {
                __typename?: 'PollWithParticipatedFieldType';
                participated?: boolean | null;
                pollEntries?: string | null;
                poll?: {
                    __typename?: 'PollType';
                    pk: string;
                    name: string;
                    state: EvotingPollStateChoices;
                    status: EvotingPollStatusChoices;
                    startDate?: any | null;
                    startTime?: any | null;
                    endDate?: any | null;
                    endTime?: any | null;
                    resultVisibility: EvotingPollResultVisibilityChoices;
                } | null;
            } | null;
        } | null>;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor?: string | null;
            endCursor?: string | null;
        };
    } | null;
};
