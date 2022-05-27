import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss';

const cx = className.bind(styles);

const Menu = ({ title, onBack }) => {
    return (
        <header className={cx('header')}>
            <button className={cx('back-button')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
};

export default Menu;
