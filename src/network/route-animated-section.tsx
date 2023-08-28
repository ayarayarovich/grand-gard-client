import { FC } from 'react';
import { motion } from 'framer-motion';

export const RouteAnimatedSection: FC<any> = (props) => {
    return (
        <motion.section
            {...props}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 1, ease: 'backInOut' }}>
            {props.children}
        </motion.section>
    );
};
