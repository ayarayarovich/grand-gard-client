import { FC } from 'react';
import { RouteAnimatedSection } from '@network/route-animated-section.tsx';
import { Route } from 'react-router-dom';

export const Booking: FC = () => {
    return (
        <RouteAnimatedSection className='flex h-screen items-center justify-center text-center font-display text-4xl'>
            СТРАНИЦА С ЗАКАЗОМ И ФИЛЬТРОМ НОМЕРОВ <br />
            ПОКА ПУСТО
        </RouteAnimatedSection>
    );
};
