import type { WebsiteDataQueryQuery } from '@lib/types/generated';
import { useState, useEffect } from 'react';
import backImage from '@assets/png/Rectangleback.png';
import NavbarItem from '@atoms/a-nav-item';
import HomeWrapper from '@hoc/home-wrapper';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { applyThemeFunc, aboutInfoFunc } from '@utils/helpers';
import useCheckSliceBeforeFetch from '@lib/hooks/fetch-query/useCheckSliceBeforeFetch';
import { dashboardOrgDataActions } from '@store/dashboard/dashboard-org-data';

interface Props {
    children: React.ReactNode;
}

export interface Route {
    title: string;
    link: string;
}
const routesItems: Route[] = [
    { title: 'Who We Are', link: '/about' },
    { title: 'Leadership', link: '/leadership' },
    { title: 'Chapters', link: '/chapters' },
    { title: 'Events', link: '/events' },
    { title: 'Publications', link: '/publications' },
    { title: 'FAQ', link: '/faq' },
];
function AboutLayout({ children }: Props) {
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
            <main
                className="flex  h-[18rem] flex-col items-center justify-center bg-primaryColor"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0,0.3), rgba(0, 0, 0,0.3)), url(${backImage.src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="mt-5 flex max-w-[12rem] flex-col items-center justify-center pt-[3rem] md:max-w-[42rem]">
                    <p className=" text-sm font-semibold text-white md:text-lg ">
                        {sectionInfo?.title}
                    </p>
                    <p className="text-justify text-xs font-light text-white md:text-lg ">
                        {sectionInfo?.description}
                    </p>
                </div>
                <nav className="flex items-center justify-center space-x-2 self-start  pt-[4rem] pl-4 text-white md:h-[4rem] lg:pl-[3.3rem]">
                    {currentRoute.map((item: string, i: number) => {
                        if (i >= 1)
                            return (
                                <>
                                    <MdKeyboardArrowRight className="text-white" />
                                    <NavbarItem
                                        link={`/${currentRoute[0]}/${item}`}
                                        className=" text-white line-clamp-1 first-letter:capitalize"
                                        title={item}
                                        key={uuidv4()}
                                    />
                                </>
                            );
                        return (
                            <NavbarItem
                                link={`/${item}`}
                                className=" text-white first-letter:capitalize"
                                title={item}
                                key={uuidv4()}
                            />
                        );
                    })}
                </nav>
            </main>
            {/* <nav className="flex h-[4rem] snap-mandatory scroll-pl-[1rem] px-0.5 items-center justify-center space-x-4 overflow-x-auto bg-[#F3FAF9] pl-[18.5rem] pr-[0rem] scrollbar-hide md:h-[4rem] md:space-x-10 md:pl-[2rem] md:pr-[0rem] lg:md:pl-[0rem]"> */}
            <nav className="no-scrollbar flex snap-mandatory snap-center snap-always gap-5 overflow-scroll scroll-smooth py-6 px-4 lg:justify-center">
                {routesItems.map((item: Route) => {
                    if (item.title === 'Login' || item.title === 'Register') return null;
                    return (
                        <div className="snap-center">
                            <NavbarItem
                                key={uuidv4()}
                                link={item.link}
                                title={item.title}
                                className="min-w-[6rem] text-center md:w-fit "
                            />
                        </div>
                    );
                })}
            </nav>
            <div className="">{children}</div>
        </>
    );
}

export default HomeWrapper(AboutLayout);
