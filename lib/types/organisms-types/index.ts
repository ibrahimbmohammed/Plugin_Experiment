export interface PublicationPaginatedListProps {
    pageData:
        | {
              __typename?: 'PublicationCategoryTypeEdge' | undefined;
              node?:
                  | {
                        __typename?: 'PublicationCategoryType' | undefined;
                        id: string;
                        name: string;
                        publicationSet: {
                            __typename?: 'PublicationTypeConnection' | undefined;
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
                    }
                  | null
                  | undefined;
          }
        | null
        | undefined;
}

export interface LeadersPaginatedTableProps {
    pageData:
        | {
              __typename?: 'LeadershipCategoryTypeEdge' | undefined;
              node?:
                  | {
                        __typename?: 'LeadershipCategoryType' | undefined;
                        name: string;
                        executiveSet: {
                            __typename?: 'ExecutiveTypeConnection' | undefined;
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
                    }
                  | null
                  | undefined;
          }
        | null
        | undefined;
}

export interface EventsPaginatedTableProps {
    pageData:
        | {
              __typename?: 'MeetingCategoryTypeEdge' | undefined;
              node?:
                  | {
                        __typename?: 'MeetingCategoryType' | undefined;
                        id: string;
                        name: string;
                        pk?: string | null | undefined;
                        description?: string | null;
                        org?: { __typename?: 'OrganizationType'; id: string; name: string } | null;
                        meetingSet: {
                            __typename?: 'MeetingTypeConnection';
                            totalCount?: number | null;
                            edges: Array<{
                                __typename?: 'MeetingTypeEdge';
                                node?: {
                                    __typename?: 'MeetingType';
                                    id: string;
                                    name: string;
                                    description?: string | null;
                                    url?: string | null;
                                    photoUrl?: string | null;
                                    eventSlug?: string | null;
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
                    }
                  | null
                  | undefined;
          }
        | null
        | undefined;
}
