import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
    return (
        <Link to={`@${data.nickname}`}>
            <div className={cx('wrapper')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.full_name}</span>
                        {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                    </h4>
                    <span className={cx('username')}>{data.nickname}</span>
                </div>
            </div>
        </Link>
    );
};

export default AccountItem;
