import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }


function search() {
 let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f917000010000019da5265f07254e0fbe3176757a94b6d5";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
}

function load() {
    setLoaded(true);
    search();
}
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handlePexelsResponse(response) {
setPhotos(response.data.photos);
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
<Photos photos={photos} />

</div>

    )
    } else {
        load();
        return "Loading";
    }
    
}