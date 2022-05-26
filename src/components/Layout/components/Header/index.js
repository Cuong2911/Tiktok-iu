import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWraper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

const Header = () => {
    const [searchResult, setSearchResearchResult] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log('xin chao');
            setSearchResearchResult([]);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <img src={images.logo} alt="Tiktok" />

                {/* search */}
                <Tippy
                    visible={searchResult.length > 0}
                    interactive="true"
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWraper>
                                <h4 className={cx('search-title')}>Accout</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWraper>
                        </div>
                    )}
                >
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
                </Tippy>

                {/* action */}
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
};

export default Header;
