/* eslint-disable no-unused-vars */
import type { ConferencePageQueryQuery, WebsiteDataQueryQuery } from '@lib/types/generated';
import { useState, useEffect } from 'react';
import NavbarItem from '@atoms/a-nav-item';
import ConferenceWrapper from '@hoc/conference-wrapper';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { applyThemeFunc, aboutInfoFunc } from '@utils/helpers';
import useCheckSliceBeforeFetch from '@lib/hooks/fetch-query/useCheckSliceBeforeFetch';
import { dashboardOrgDataActions } from '@store/dashboard/dashboard-org-data';
import dayjs from 'dayjs';
import Section from '@atoms/a-section';
import backImage from '@assets/png/Background.png';
import { conferenceHomeActions } from '@store/conference/conference-home';

interface Props {
    children: React.ReactNode;
}

export interface Route {
    title: string;
    link: string;
}
const routesItems: Route[] = [
    { title: 'Dashboard', link: '/conference-dashboard' },
    { title: 'Schedules', link: '/schedules' },
    { title: 'Downloadables', link: '/downloadables' },
    { title: 'Notifications', link: '/notifications' },
];

function ConferenceDashboardLayout({ children }: Props) {
    const { setConferenceHomeData } = conferenceHomeActions;

    const [resData] = useCheckSliceBeforeFetch<ConferencePageQueryQuery>(
        '/api/conference/',
        'conferenceHome',
        setConferenceHomeData,
    );

    const { asPath, pathname } = useRouter();
    const { setDashboardOrgData } = dashboardOrgDataActions;
    const [sectionInfo, setSectionInfo] = useState<{ title: string; description: string }>();
    const [currentRoute, setCurrent] = useState<Array<string>>([]);
    const [headerData] = useCheckSliceBeforeFetch<NonNullable<WebsiteDataQueryQuery>>(
        '/api/theme',
        'dashboardOrgData',
        setDashboardOrgData,
    );

    const LinkObj = (_asPath: string) => {
        const structuredVal = _asPath.split('/').slice(1);
        return structuredVal;
    };

    applyThemeFunc();
    const sectionData = aboutInfoFunc(asPath, headerData?.website?.org?.name);
    useEffect(() => {
        setSectionInfo({ ...sectionData });
        if (asPath) {
            setCurrent(LinkObj(asPath));
        }
    }, [pathname, asPath]);

    return (
        <>
            <div
                className="mx-3 flex h-[18rem] flex-col items-center justify-center text-white md:mx-10 md:mt-5"
                style={{
                    backgroundImage: `url(${backImage.src})`,
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="flex flex-col space-y-1 text-center text-sm font-normal leading-5 md:text-lg">
                    <p>{resData?.eventByDomainName?.theme}</p>
                    <span>
                        <time>
                            {dayjs(resData?.eventByDomainName?.startDate).format('DD MMMM, YYYY')}
                        </time>
                        {' - '}
                        <time>
                            {dayjs(resData?.eventByDomainName?.endDate).format('DD MMMM, YYYY')}
                        </time>
                    </span>
                </div>
                <div className="md:px-10">
                    <h1 className="pt-2 text-center text-base font-bold leading-5 sm:text-xl md:pt-0 md:text-2xl lg:text-4xl ">
                        {resData?.eventByDomainName?.name}
                    </h1>
                </div>
                {/* <div className="sm:w-3/5">
                    <span className="leading px-3 text-center text-xs  font-light md:px-8 md:text-base">
                        {resData?.eventByDomainName && (
                            <div
                                className={` `}
                                key={resData?.eventByDomainName ? 'oldkey' : 'newkwy'}
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{
                                    __html:
                                        resData?.eventByDomainName?.description?.substring(
                                            0,
                                            200,
                                        ) || 'annual conference',
                                }}
                            />
                        )}
                    </span>
                </div> */}
            </div>
            <nav className="flex h-[4rem] snap-x scroll-pl-[1rem] items-center justify-center space-x-4 overflow-x-auto bg-[#F3FAF9] pl-[3.5rem] pr-[0rem] scrollbar-hide md:h-[4rem] md:space-x-10 md:pl-[2rem] md:pr-[0rem] lg:md:pl-[0rem]">
                {routesItems.map((item: Route) => {
                    if (item.title === 'Login' || item.title === 'Register') return null;
                    return (
                        <NavbarItem
                            key={uuidv4()}
                            link={item.link}
                            title={item.title}
                            className="min-w-[6rem]  text-center md:w-fit "
                        />
                    );
                })}
            </nav>
            <div className="">{children}</div>
        </>
    );
}

export default ConferenceWrapper(ConferenceDashboardLayout);
