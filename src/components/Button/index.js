import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = (
    {
        // type Button Component
        to,
        href,
        // types button
        primary = false,
        outlinePrimary = false,
        outline = false,
        rounded = false,
        disable = false,
        // size button
        small = false,
        medium = true,
        large = false,
        square = false,
        // props
        className,
        leftIcon,
        rightIcon,
        children,
        onClick,
        ...passProps
    },
    ref,
) => {
    const props = {
        onClick,
        ...passProps,
    };
    let Component = 'button';
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    // romove event listeners when button is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        outlinePrimary,
        outline,
        rounded,
        disable,
        small,
        medium,
        large,
        square,
        [className]: className,
    });

    return (
        <Component ref={ref} className={classes} {...props}>
            {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
            <>{children}</>
            {rightIcon && <span className={cx('right-icon')}>{rightIcon}</span>}
        </Component>
    );
};

export default forwardRef(Button);
