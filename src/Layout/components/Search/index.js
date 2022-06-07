import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWraper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import Button from '~/components/Button';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResults([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const results = await searchService.search(debounced);
            setSearchResults(results);

            setLoading(false);
        };
        fetchApi();

        // cleanup function
        return () => {};
    }, [debounced]);

    const handleChangeInput = (e) => {
        if (!e.target.value.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };
    const handleClearSearchValue = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResults(false);
    };
    const handleShowResult = () => {
        setShowResults(true);
    };
    const handleSearchSubmit = (e) => {};
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
                        onChange={handleChangeInput}
                        value={searchValue}
                        placeholder="Search accounts and video"
                        spellCheck="false"
                        onFocus={handleShowResult}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClearSearchValue}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <span></span>
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                        onClick={handleSearchSubmit}
                    >
                        <FontAwesomeIcon className={cx('')} icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
