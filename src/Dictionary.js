import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert (`Searching for ${keyword}`);

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






</div>

    )
}