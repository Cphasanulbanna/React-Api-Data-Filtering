import React from "react";

//css
import "./search-bar.css";

//images
import search from "../../assets/images/search.svg";
import close from "../../assets/images/close.svg";

function SearchBar({ query, setQuery }) {
    //storing search query to state
    const handleQueryChange = (e) => {
        const { value } = e.target;
        setQuery(value.toLowerCase());
    };

    //clearing input field function
    const clearQuery = () => {
        setQuery("");
    };
    return (
        <div className="search-bar">
            <div className="search-icon">
                <img
                    src={search}
                    alt="search"
                />
            </div>
            <input
                type="text"
                placeholder="search here"
                value={query}
                onChange={handleQueryChange}
            />
            <div
                className="close-icon"
                onClick={clearQuery}
            >
                <img
                    src={close}
                    alt="close"
                />
            </div>
        </div>
    );
}

export default SearchBar;
