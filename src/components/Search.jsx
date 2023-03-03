import React from "react";

const Search = ({handleSearch}) => {
    const handleSearchChanges = (e) => {
        handleSearch(e.target.value);
    };


    return (
        <div className='search-input'>
            <input type='text' placeholder = "Introduce your search value... " onChange= {handleSearchChanges} />
        </div>
    );
};

export default Search;