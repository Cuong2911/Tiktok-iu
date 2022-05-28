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
    faCoins,
    faGears,
    faUser,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWraper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';

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

    const currentUser = true;

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

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@HoangCuong',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGears} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <img src={images.logo} alt="Tiktok" />
                {/* search */}
                <div>
                    <HeadlessTippy
                        offset={[0, 8]}
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
                        placement="bottom"
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
                    </HeadlessTippy>
                </div>
                {/* action */}

                <div className={cx('actions')}>
                    <Button outline to="/upload">
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Button to="/message" className={cx('actions-btn-user')}>
                                <Tippy content="Message" placement="bottom">
                                    <>
                                        <MessageIcon />
                                    </>
                                </Tippy>
                            </Button>

                            <Button className={cx('actions-btn-user')}>
                                <Tippy content="Inbox" placement="bottom">
                                    <>
                                        <InboxIcon />
                                    </>
                                </Tippy>
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <div>
                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                // eslint-disable-next-line jsx-a11y/alt-text
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://1.bp.blogspot.com/-Vw30ZajH6Ow/X7EArE3z2jI/AAAAAAAAk_4/VPcABJelXkkTibD2i3W0afsaPvlEiulGACNcBGAsYHQ/s0/taoanhdep-hinh-nen-among-us.jpg"
                                    fallback="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
