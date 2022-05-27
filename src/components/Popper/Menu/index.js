import Tippy from '@tippyjs/react/headless';
import className from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWraper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = className.bind(styles);

const Menu = ({ children, items = [] }) => {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    console.log(current);

    const renderItems = () => {
        return current.data.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };

    return (
        <Tippy
            // visible
            delay={[0, 600]}
            interactive="true"
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWraper className={cx('p-bt8px')}>
                        <Header title="language" />
                        {renderItems()}
                    </PopperWraper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
