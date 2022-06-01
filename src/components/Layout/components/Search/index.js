import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWraper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchResult, setSearchResearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        const timerId = setTimeout(() => {
            setSearchResearchResult([1]);
        }, 2000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    const handleClearSearchValue = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResults(!showResults);
    };
    return (
        <div>
            <HeadlessTippy
                offset={[0, 8]}
                visible={showResults && searchResult.length > 0}
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
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                        value={searchValue}
                        placeholder="Search accounts and video"
                        spellCheck="false"
                        onFocus={handleHideResult}
                    />
                    {searchValue && (
                        <button className={cx('clear')} onClick={handleClearSearchValue}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                    <span></span>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon className={cx('')} icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
