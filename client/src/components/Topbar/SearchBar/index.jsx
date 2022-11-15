import './SearchBar.scss'
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <div className="topBarSearch">
            <div className="topBarSearchBtn">
                <SearchIcon />
            </div>
            <input className="topBarSearchInput" type="text" placeholder="Tìm kiếm" />
        </div>
    );
};

export default SearchBar;
