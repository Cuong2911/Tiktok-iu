import classNames from 'classnames';

import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = ({ src, className, fallback: fallbackCustom = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallbackCustom);
    };

    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            {...props}
            src={fallback || src}
            onError={handleError}
        />
    );
};

export default forwardRef(Image);
