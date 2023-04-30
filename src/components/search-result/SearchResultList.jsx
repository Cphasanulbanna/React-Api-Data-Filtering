import React from "react";

//css
import "./searc-result.css";

function SearchResultList({ results }) {
    return (
        <div className="search-result-container">
            <div className="sub-container">
                <div className="content-box">
                    {results?.map((result, index) => (
                        <div
                            className="result"
                            key={index}
                        >
                            <div className="result-image">
                                <img
                                    src={result?.thumbnail}
                                    alt="result-img"
                                />
                            </div>
                            <h1 className="title">{result?.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchResultList;
