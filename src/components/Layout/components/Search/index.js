import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWraper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResearchResult] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResearchResult([]);
            return;
        }
        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
        return () => {};
    }, [searchValue]);

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
                            {searchResult.map((result) => {
                                return <AccountItem key={result.id} data={result} />;
                            })}
                            <Button className={cx('end-search')}>All results found of '{searchValue}'</Button>
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
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClearSearchValue}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
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
