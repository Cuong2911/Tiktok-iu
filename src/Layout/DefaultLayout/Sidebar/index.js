import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <aside>
            <div className={cx('wrapper')}>
                <h2>Sidebar</h2>
            </div>
        </aside>
    );
};

export default Sidebar;
