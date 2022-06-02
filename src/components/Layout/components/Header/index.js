import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faGears,
    faUser,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';
import routesConfig from '~/config/routes';

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
    const currentUser = true;

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
                <Button to={routesConfig.home}>
                    <img src={images.logo} alt="Tiktok" />
                </Button>
                {/* search */}
                <Search />
                {/* action */}

                <div className={cx('actions')}>
                    <Button outline to={routesConfig.upload}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Message" placement="bottom">
                                <Button to="/message" className={cx('actions-btn-user')}>
                                    <MessageIcon />
                                    <span className={cx('actions-sub-noti')}>24</span>
                                </Button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom">
                                <Button className={cx('actions-btn-user')}>
                                    <InboxIcon />
                                    <span className={cx('actions-sub-noti')}>24</span>
                                </Button>
                            </Tippy>
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
