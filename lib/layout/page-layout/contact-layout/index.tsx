import { useState, useEffect } from 'react';
import backImage from '@assets/png/Rectangleback.png';
import HomeWrapper from '@hoc/home-wrapper';
import NavbarItem from '@atoms/a-nav-item';
import { useRouter } from 'next/router';
import { applyThemeFunc, aboutInfoFunc } from '@utils/helpers';
import useCheckSliceBeforeFetch from '@lib/hooks/fetch-query/useCheckSliceBeforeFetch';
import { WebsiteDataQueryQuery } from '@lib/types/generated';
import { dashboardOrgDataActions } from '@store/dashboard/dashboard-org-data';

interface Props {
    children: React.ReactNode;
}

export interface Route {
    title: string;
    link: string;
}

const routesItems: Route[] = [{ title: 'Contact', link: '/contact_us' }];

function ContactLayout({ children }: Props) {
    const { setDashboardOrgData } = dashboardOrgDataActions;
    const { asPath } = useRouter();
    const [sectionInfo, setSectionInfo] = useState<{ title: string; description: string }>();
    const [headerData] = useCheckSliceBeforeFetch<NonNullable<WebsiteDataQueryQuery>>(
        '/api/theme',
        'dashboardOrgData',
        setDashboardOrgData,
    );

    applyThemeFunc();
    const sectionData = aboutInfoFunc(asPath, headerData?.website?.org?.name);
    useEffect(() => {
        setSectionInfo({ ...sectionData });
    }, []);

    return (
        <>
            <main
                className="flex  h-[18rem] flex-col items-center justify-center "
                style={{
                    backgroundImage: `linear-gradient(rgb(0 0 0 / 30%), rgb(0 0 0 / 30%)), url(${backImage.src})`,
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
                <nav className="flex items-center justify-center space-x-2 self-start pt-[4rem] pl-[3.5rem] text-white md:h-[4rem]">
                    {routesItems.map((item: Route) => {
                        return (
                            <NavbarItem
                                link={item.link}
                                className=" text-white first-letter:capitalize"
                                title={item.title}
                            />
                        );
                    })}
                </nav>
            </main>
            <div className="">{children}</div>
        </>
    );
}

export default HomeWrapper(ContactLayout);
