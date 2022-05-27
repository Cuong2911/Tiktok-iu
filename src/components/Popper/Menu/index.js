import Tippy from '@tippyjs/react/headless';
import className from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWraper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = className.bind(styles);

const defaultFunc = () => {};

const Menu = ({ children, items = [], onChange = defaultFunc }) => {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
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
                        {history.length > 1 && (
                            <Header
                                title="language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
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
