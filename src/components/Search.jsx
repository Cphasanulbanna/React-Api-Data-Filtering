import React, { useEffect, useState } from "react";

//css
import "./search.css";

//packages
import axios from "axios";

//components
import SearchBar from "./search-bar/SearchBar";
import SearchResultList from "./search-result/SearchResultList";

function Search() {
    //states
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    //fetching products api call
    const fetchData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products/search", {
                params: {
                    q: query,
                },
            });
            setResults(response?.data?.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchProfucts = setTimeout(() => {
            fetchData();
        }, 400);
        return () => {
            clearTimeout(fetchProfucts);
        };
    }, [query]);

    return (
        <div className="main-container">
            <div className="wrapper">
                <div className="content-box">
                    <SearchBar
                        setQuery={setQuery}
                        query={query}
                    />
                    <SearchResultList results={results} />
                </div>
            </div>
        </div>
    );
}

export default Search;
