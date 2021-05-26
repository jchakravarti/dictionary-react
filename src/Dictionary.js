import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }


function search() {
 let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
}

function load() {
    setLoaded(true);
    search();
}
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    if (loaded) {
return (
<div className="Dictionary">
    <section>
        <h1> What word do you want to look up?</h1>
<form onSubmit={handleSubmit}>
    <input type="search" onChange={handleKeywordChange} />
</form>
<div className= "suggestions">Get definitions, synonyms and more</div>
</section>
<Results results={results}/>

</div>

    )
    } else {
        load();
        return "Loading";
    }
    
}