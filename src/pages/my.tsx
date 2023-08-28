import { FC } from 'react';
import { Navigate } from 'react-router-dom';

export const My: FC = () => {
    return <Navigate to='/login' replace />;
};
