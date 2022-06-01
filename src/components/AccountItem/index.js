import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://1.bp.blogspot.com/-Vw30ZajH6Ow/X7EArE3z2jI/AAAAAAAAk_4/VPcABJelXkkTibD2i3W0afsaPvlEiulGACNcBGAsYHQ/s0/taoanhdep-hinh-nen-among-us.jpg"
                alt="Avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoang Cuong</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>HoangCuong</span>
            </div>
        </div>
    );
};

export default AccountItem;
