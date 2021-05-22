import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
<div className="Dictionary">
<form onSubmit={search}>
    <input type="search" placeholder="What word do you want to look up?" onChange={handleKeywordChange} />
</form>

<Results results={results}/>

</div>

    )
}