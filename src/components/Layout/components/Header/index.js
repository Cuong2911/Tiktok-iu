import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

console.log(images.logo);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                {/* search */}
                <div className={cx('search')}>
                    <input placeholder="Search accounts and video" spellCheck="false" />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <span></span>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon className={cx('')} icon={faMagnifyingGlass} />
                    </button>
                </div>

                {/* action */}
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
};

export default Header;
