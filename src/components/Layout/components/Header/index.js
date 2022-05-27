import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWraper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'En',
                    title: 'English',
                },
                {
                    code: 'Vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'Fr',
                    title: 'France',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const Header = () => {
    const [searchResult, setSearchResearchResult] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setSearchResearchResult([]);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <img src={images.logo} alt="Tiktok" />
                {/* search */}
                <div>
                    <Tippy
                        // visible={searchResult.length > 0}
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
                </div>
                {/* action */}
                <div className={cx('actions')}>
                    <Button outline to="/upload">
                        Upload
                    </Button>
                    <Button primary>Log in</Button>

                    <div>
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
