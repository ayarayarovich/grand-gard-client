import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTransform, useScroll, motion, useSpring } from 'framer-motion';

import blackLogoSrc from '@assets/black-logo.svg';
import whiteLogoSrc from '@assets/white-logo.svg';
import beachSrc from '@assets/beach.png';
import deserveSrc from '@assets/deserve.png';
import footerSrc from '@assets/footer.png';
import { useMemo, useRef } from 'react';
import { RouteAnimatedSection } from '@network/route-animated-section.tsx';

const Header: FC = () => {
    return (
        <>
            <RouteAnimatedSection className='flex'>
                <div className='relative w-2/5'>
                    <motion.div
                        className='flex justify-center border-b-2 p-4'
                        layoutId='topbar'
                        layout='position'
                        transition={{
                            ease: 'linear',
                            duration: 0.25,
                        }}>
                        <Link to='/'>
                            <img className='h-20' src={blackLogoSrc} alt='' />
                        </Link>
                    </motion.div>
                    <div className='flex justify-center gap-4 border-b-2 p-4 text-sm'>
                        <a href='#about'>О курорте</a>
                        <a href='#rooms'>Номера</a>
                        <a href='#infrastructure'>Инфраструктура</a>
                        <a href='#contacts'>Контакты</a>
                    </div>
                    <h1 className='my-[10vh] max-w-[14ch] px-12 font-display text-7xl font-bold uppercase text-gray-600'>
                        отель для ваших эмоций
                    </h1>
                    <form className='my-16 ml-12 w-max bg-gray-100 p-8 shadow-xl' method='get' action='/booking'>
                        <div className='flex w-max items-center gap-10 font-body text-xs font-bold leading-6 tracking-widest'>
                            <div className='shrink-0 p-4 uppercase'>
                                <div className='text-green'>дата заезда</div>
                                <input
                                    type='date'
                                    name='date_in'
                                    required
                                    className='w-10/12 border-0 bg-transparent p-0 font-semibold text-gray-700'
                                />
                            </div>
                            <div className='h-8 w-0.5 bg-gray-300'></div>
                            <div className='shrink-0  p-4 uppercase'>
                                <div className='text-green'>дата отъезда</div>
                                <input
                                    type='date'
                                    name='date_out'
                                    required
                                    className='w-10/12 border-0 bg-transparent p-0 font-semibold text-gray-700'
                                />
                            </div>
                            <div className='h-8 w-0.5 bg-gray-300'></div>
                            <div className='shrink-0  p-4 uppercase'>
                                <div className='text-green'>количество гостей</div>
                                <input
                                    type='number'
                                    min='0'
                                    name='number_of_guests'
                                    defaultValue='0'
                                    required
                                    className='focus:border-1 w-10/12 border-0 border-green bg-transparent p-0 font-semibold text-gray-700'
                                />
                            </div>
                            <div className='h-8 w-0.5 bg-gray-300'></div>
                            <div className='shrink-0  p-4 uppercase'>
                                <input
                                    type='submit'
                                    value='Забронировать'
                                    className='cursor-pointer bg-green p-4 font-bold uppercase text-white'
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div
                    className='flex-grow bg-cover bg-center text-right'
                    style={{ backgroundImage: `url(${beachSrc})` }}>
                    <Link
                        to='/my'
                        className='m-6 inline-block border-4 border-current p-2 font-raleway font-bold uppercase text-white transition-colors hover:border-white hover:bg-white hover:text-black hover:mix-blend-screen'>
                        Управление моим отелем
                    </Link>
                </div>
            </RouteAnimatedSection>
        </>
    );
};

const WhiteSection: FC = () => {
    return (
        <>
            <section className='h-24 bg-white'></section>
        </>
    );
};

interface RoomCardProps {
    name: string;
    number_of_guests: number;
    area: number;
    pictureUrl: string;
}
const RoomCard: FC<RoomCardProps> = ({ name, number_of_guests, area, pictureUrl }) => {
    return (
        <>
            <div>
                <img className='block aspect-[8/5] w-full object-cover' src={pictureUrl} alt={name} />
                <div className='border-2 border-t-0 p-4 text-center font-display text-2xl'>{name}</div>
                <div className='flex items-center justify-between border-2 border-t-0 p-4 text-center font-display text-lg'>
                    <span className='font-body text-base'>Гостей</span>
                    <span>до {number_of_guests} человек</span>
                </div>
                <div className='flex items-center justify-between border-2 border-t-0 p-4 text-center font-display text-lg'>
                    <span className='font-body text-base'>Площадь</span>
                    <span>
                        {area} м<sup>2</sup>
                    </span>
                </div>
            </div>
        </>
    );
};

const Rooms: FC = () => {
    const rooms: RoomCardProps[] = useMemo(() => {
        return [
            {
                name: 'Rich Beach Villa',
                number_of_guests: 11,
                area: 250,
                pictureUrl: deserveSrc,
            },
            {
                name: 'Rich Beach Villa',
                number_of_guests: 11,
                area: 250,
                pictureUrl: deserveSrc,
            },
            {
                name: 'Rich Beach Villa',
                number_of_guests: 11,
                area: 250,
                pictureUrl: deserveSrc,
            },
            {
                name: 'Rich Beach Villa',
                number_of_guests: 11,
                area: 250,
                pictureUrl: deserveSrc,
            },
            {
                name: 'Rich Beach Villa',
                number_of_guests: 11,
                area: 250,
                pictureUrl: deserveSrc,
            },
            {
                name: 'Rich Beach Villa',
                number_of_guests: 11,
                area: 250,
                pictureUrl: deserveSrc,
            },
            {
                name: 'Rich Beach Villa',
                number_of_guests: 11,
                area: 250,
                pictureUrl: deserveSrc,
            },
            {
                name: 'Rich Beach Villa',
                number_of_guests: 11,
                area: 250,
                pictureUrl: deserveSrc,
            },
        ];
    }, []);

    return (
        <>
            <section id='rooms' className='container mx-auto my-16 px-24'>
                <h2 className='py-16 text-center font-display text-4xl'>Номера GrandGard</h2>
                <div className='grid grid-flow-dense grid-cols-3 gap-8 xl:gap-32'>
                    {rooms.map((roomProps) => (
                        <RoomCard {...roomProps} />
                    ))}
                </div>
            </section>
        </>
    );
};

const Footer: FC = () => {
    return (
        <>
            <section className='bg-cover bg-center p-12' style={{ backgroundImage: `url(${footerSrc})` }}>
                <div className='flex items-center justify-between'>
                    <img className='h-20' src={whiteLogoSrc} alt='' />
                    <p className='font-display font-bold uppercase tracking-widest text-gray-100'>
                        Обеспечьте себе Незабываемыйый отдых
                    </p>
                </div>
                <div className='mt-32 flex items-end justify-start gap-24 font-display font-bold leading-relaxed text-gray-100'>
                    <div className='text-center uppercase'>
                        <p className='mb-4 text-lg'>Авторы</p>
                        <p>Айяр</p>
                        <p>Никита</p>
                        <p>Алла</p>
                        <p>Настя</p>
                        <p>Влад</p>
                        <p>Никита</p>
                        <p>Даниела</p>
                        <p>Женя</p>
                        <p>Даня</p>
                        <p>Артём</p>
                    </div>
                    <div className='text-center uppercase'>
                        <p className='mb-4 text-lg'>Код</p>
                        <p>Айяр</p>
                        <p>Никита</p>
                        <p>Алла</p>
                        <p>Настя</p>
                        <p>Даниела</p>
                        <p>Женя</p>
                    </div>
                    <div className='text-center uppercase'>
                        <p className='mb-4 text-lg'>Дизайн</p>
                        <p>Никита</p>
                        <p>Айяр</p>
                        <p>Влад</p>
                        <p>Даня</p>
                    </div>
                    <div className='text-center uppercase'>
                        <p className='mb-4 text-lg'>Тесты</p>
                        <p>Никита</p>
                        <p>Артём</p>
                    </div>
                </div>
            </section>
        </>
    );
};

const YouDeserveRest: FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const smoothScrollYProgress = useSpring(scrollYProgress);
    const x = useTransform(smoothScrollYProgress, [0, 1], ['-50%', '50%']);
    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

    return (
        <>
            <section>
                <motion.div
                    ref={ref}
                    style={{
                        backgroundPositionY,
                        backgroundImage: `url(${deserveSrc})`,
                    }}
                    className='relative my-16 overflow-hidden bg-cover bg-center py-[25vh]'>
                    <motion.h2
                        style={{ x }}
                        className='text-center font-display text-7xl leading-none text-white drop-shadow-lg'>
                        Вы заслужили отдых премиум-класса!
                    </motion.h2>
                    <div className='absolute left-0 top-0 z-10 h-16 w-full bg-gradient-to-b from-[rgba(0,0,0,60%)] to-transparent'></div>
                    <div className='absolute bottom-0 left-0 z-10 h-16 w-full bg-gradient-to-t from-[rgba(0,0,0,60%)] to-transparent'></div>
                </motion.div>
            </section>
        </>
    );
};

const HorizontalMovement: FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const smoothScrollYProgress = useSpring(scrollYProgress);
    const x = useTransform(smoothScrollYProgress, [0, 1], ['-50%', '50%']);
    const paddingLeft = useTransform(smoothScrollYProgress, [0, 1], ['0%', '85%']);
    const paddingRight = useTransform(smoothScrollYProgress, [0, 1], ['85%', '0%']);

    return (
        <>
            <section>
                <motion.div
                    ref={ref}
                    style={{
                        paddingLeft,
                        paddingRight,
                        backgroundImage: `url(${deserveSrc})`,
                    }}
                    className='relative my-16 h-[50vh] w-full overflow-hidden bg-cover bg-clip-content bg-center'>
                    {/*<div className='absolute left-0 top-0 z-10 h-16 w-full bg-gradient-to-b from-[rgba(0,0,0,60%)] to-transparent'></div>*/}
                    {/*<div className='absolute bottom-0 left-0 z-10 h-16 w-full bg-gradient-to-t from-[rgba(0,0,0,60%)] to-transparent'></div>*/}
                </motion.div>
            </section>
        </>
    );
};

export const Landing: FC = () => {
    return (
        <>
            <Header />
            <Rooms />
            <YouDeserveRest />
            {/*<HorizontalMovement />*/}
            <Footer />
        </>
    );
};
