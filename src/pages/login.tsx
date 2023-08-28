import type { FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import blackLogoSrc from '@assets/black-logo.svg';
import { useEffect, useLayoutEffect, useRef, useState, useContext } from 'react';
import { AuthContext } from '@context/auth-provider.tsx';
import axios from '@network/axios.ts';
import { motion } from 'framer-motion';
import { RouteAnimatedSection } from '@network/route-animated-section.tsx';

const LOGIN_URL = '/api/auth';

export const Login: FC = () => {
    const { setAuth } = useContext<any>(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const usernameInputRef = useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
        usernameInputRef.current!.focus();
    }, []);

    useEffect(() => {
        setErrorMessage(null);
    }, [username, password]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({
                    username,
                    password,
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                },
            );
            const accessToken = response.data.accessToken;
            const permissions = response.data.permissions;
            setAuth({ username, password, permissions, accessToken });
            setUsername('');
            setPassword('');
            setSuccess(true);
        } catch (err: any) {
            if (!err.response) {
                setErrorMessage('Сервер не отвечает :(');
            } else if (err.response.status === 400) {
                setErrorMessage('Забыли ввести логин или пароль...');
            } else if (err.response.status === 401) {
                setErrorMessage('Неверный логин или пароль');
            } else {
                setErrorMessage('Не удача. Уже работаем над проблемой!');
            }
        }
    };

    return (
        <>
            <RouteAnimatedSection className='flex h-screen flex-col'>
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
                <div className='flex w-auto flex-grow flex-col items-center justify-center'>
                    <h2 className='mb-32 text-center font-display text-3xl uppercase'>
                        До вашего отдыха премиум-класса осталось совсем немного
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <h3 className='mb-8 text-center font-display text-xl uppercase'>
                            Войти в управление моим отелем
                        </h3>
                        <input
                            ref={usernameInputRef}
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            name='username'
                            autoComplete='off'
                            required
                            className='mb-4 block w-full border-0 border-b-2 border-gray-400 px-4 focus:border-black focus:ring-0'
                            placeholder='Ваш логин'
                            type='text'
                        />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            name='password'
                            autoComplete='off'
                            required
                            className='mb-4 block w-full border-0 border-b-2 border-gray-400 px-4 focus:border-black focus:ring-0'
                            placeholder='Ваш пароль'
                            type='password'
                        />
                        <input
                            type='submit'
                            className='block w-full cursor-pointer bg-gray-800 px-4 py-2 text-white hover:bg-black'
                            value='Войти'
                        />
                    </form>
                </div>
            </RouteAnimatedSection>
        </>
    );
};
