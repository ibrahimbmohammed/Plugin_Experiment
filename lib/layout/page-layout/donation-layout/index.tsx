import { v4 as uuidv4 } from 'uuid';
import backImage from '@assets/png/Rectangleback.png';
import NavbarItem from '@atoms/a-nav-item';
import HomeWrapper from '@hoc/home-wrapper';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { fetchAndSetOrganizationPaymentAPIsData } from '@store/payment-apis';
import { useAppDispatch } from '@lib/hooks/redux-hooks';

interface Props {
    children: React.ReactNode;
}

export interface Route {
    title: string;
    link: string;
}
const routesItems: Route[] = [
    { title: 'Home ', link: '/' },
    { title: '>>', link: '/' },
    { title: 'Donation', link: '/donation' },
];
function DonationLayout({ children }: Props) {
    const dispatch = useAppDispatch();
    dispatch(fetchAndSetOrganizationPaymentAPIsData());
    return (
        <>
            <main
                className="flex  h-[18rem] flex-col bg-primaryColor "
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0,0.3), rgba(0, 0, 0,0.3)), url(${backImage.src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className=" flex flex-col items-center justify-center ">
                    <div className="mt-[4rem] flex max-w-[12rem] flex-col items-center justify-center pt-[3rem] md:max-w-[42rem]   ">
                        <p className="font-semibold text-white md:text-lg ">Donation</p>
                        <p className="text-center font-light tracking-wider text-white">
                            Kindly Donate Now to support our causes
                        </p>
                    </div>
                </div>
                <nav className="flex items-center justify-center space-x-2 self-start pt-[4rem] pl-[3.5rem] text-white md:h-[4rem]">
                    {routesItems.map((item: Route) => {
                        if (item.title === '>>') return <MdKeyboardArrowRight key={uuidv4()} />;
                        return (
                            <NavbarItem
                                link={item.link}
                                title={item.title}
                                key={uuidv4()}
                                className="text-white"
                            />
                        );
                    })}
                </nav>
            </main>

            <div className="">{children}</div>
        </>
    );
}

export default HomeWrapper(DonationLayout);
