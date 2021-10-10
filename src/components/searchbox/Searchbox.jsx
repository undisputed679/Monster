import React from "react";

import './searchboxstyle.css';

export const SearchBox = ({placeholder,handleChange}) => (
    <input
    className='search'
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
);

