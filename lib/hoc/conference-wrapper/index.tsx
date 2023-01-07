import type { NextPageContext } from 'next';
import Head from 'next/head';
import { applyThemeFunc } from '@utils/helpers';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import ConferenceNavbar from '@molecules/m-navbar-conference';
import ConferenceFooter from '@molecules/m-footer-conference';
import backImage from '@assets/png/Rectangle919.png';

let location: string | null | undefined;
let locationb: string | null | undefined;

function withWrapper(WrappedComponent: any) {
    // TODO : make this a function, params: url, setFunc, toast
    // after the first query, we can store the theme data anywhere
    let outerValue: {
        website: {
            webLogoUrl: string | undefined;
            org: {
                name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                about: string;
                photoUrl: string;
            };
            headerTitle: string | undefined;
        };
        bannerSlider: { bannerSlider1: { bannerBgImage1Url: any } };
    };

    if (typeof window !== 'undefined') {
        location = window.location.pathname as string;
        locationb = window?.location?.pathname as string;
    }

    const localData = applyThemeFunc();
    localData.then((data) => {
        outerValue = data;
    });

    const withThing = (props: any) => {
        const fullUrlDomain = props?.host?.host;
        locationb = props;

        return (
            <>
                <Head>
                    <title>{outerValue?.website?.org?.name}</title>
                    <link
                        rel="icon"
                        href={`${process.env.NEXT_PUBLIC_PHOTO_URL}/${
                            outerValue?.website?.org?.photoUrl ?? outerValue?.website?.webLogoUrl
                        }`}
                    />
                    <meta name="title" content={outerValue?.website?.headerTitle} />
                    <meta
                        name="description"
                        content={outerValue?.website?.org?.about?.substring(0, 50)}
                    />
                    <meta
                        property="og:image"
                        content={`${process.env.NEXT_PUBLIC_PHOTO_URL}/${
                            outerValue?.website?.org?.photoUrl ?? outerValue?.website?.webLogoUrl
                        }`}
                        key="og:image"
                    />

                    {/* <!-- Open Graph / Facebook --> */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={fullUrlDomain} />
                    <meta property="og:title" content={outerValue?.website?.headerTitle} />
                    <meta
                        property="og:description"
                        content={outerValue?.website?.org?.about?.substring(0, 50)}
                    />
                    <meta
                        property="og:image"
                        content={`${process.env.NEXT_PUBLIC_PHOTO_URL}/${
                            outerValue?.website?.org?.photoUrl ?? outerValue?.website?.webLogoUrl
                        }`}
                        key="og:image"
                    />

                    {/* <!-- Twitter --> */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content={fullUrlDomain} />
                    <meta property="twitter:title" content={outerValue?.website?.headerTitle} />
                    <meta
                        property="twitter:description"
                        content={outerValue?.website?.org?.about?.substring(0, 50)}
                    />
                    <meta
                        property="twitter:image"
                        content={`${process.env.NEXT_PUBLIC_PHOTO_URL}/${
                            outerValue?.website?.org?.photoUrl ?? outerValue?.website?.webLogoUrl
                        }`}
                        key="og:image"
                    />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                {location === '/' && locationb && Object.keys(locationb).length === 0 ? (
                    <div
                        className="h-[50vh] w-full bg-cover bg-top bg-no-repeat font-Theme md:h-[75vh] lg:h-[100vh]"
                        style={{
                            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backImage.src})`,
                        }}
                    >
                        <ConferenceNavbar />
                        <main className="min-h-[100vh]">
                            <WrappedComponent {...props} />
                        </main>
                        <ConferenceFooter />
                    </div>
                ) : (
                    <>
                        <ConferenceNavbar />
                        <main className="min-h-[100vh]">
                            <WrappedComponent {...props} />
                        </main>
                        <ConferenceFooter />
                    </>
                )}
            </>
        );
    };

    withThing.getInitialProps = async ({ req }: NextPageContext) => {
        const host = req?.headers;
        return { host };
    };

    return withThing;
}
export default withWrapper;
