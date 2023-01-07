import { v4 as uuidv4 } from 'uuid';
import backImage from '@assets/png/trainingBg.png';
import NavbarItem from '@atoms/a-nav-item';
import HomeWrapper from '@hoc/home-wrapper';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface Props {
    children: React.ReactNode;
}

export interface Route {
    title: string;
    link: string;
}
const routesItems: Route[] = [
    { title: 'Home ', link: '/' },
    { title: '>', link: '/' },
    { title: 'Training', link: '/training' },
];
function TrainingLayout({ children }: Props) {
    return (
        <>
            <main
                className="flex  h-[18rem] flex-col items-start justify-between bg-primaryColor pl-[6rem]"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0,0.3), rgba(0, 0, 0,0.3)), url(${backImage.src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="mt-[6rem] flex flex-col items-start  md:max-w-[42rem]">
                    <p className="text-3xl font-semibold text-white ">Training</p>
                    <p className="text-justify font-light tracking-wider text-white">
                        Welcome to our Training
                    </p>
                </div>
                <nav className="flex items-center justify-center space-x-2 text-white md:h-[4rem]">
                    {routesItems.map((item: Route) => {
                        if (item.title === '>') return <MdKeyboardArrowRight key={uuidv4()} />;
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

            <div className="relative">{children}</div>
        </>
    );
}

export default HomeWrapper(TrainingLayout);
