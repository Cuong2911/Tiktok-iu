import Tippy from '@tippyjs/react/headless';
import className from 'classnames/bind';

import { Wrapper as PopperWraper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = className.bind(styles);

const Menu = ({ children, items = [] }) => {
    console.log();
    const renderItems = () => {
        return items.map((item, index) => {
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
                    <PopperWraper className={cx('p-bt8px')}>{renderItems()}</PopperWraper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
