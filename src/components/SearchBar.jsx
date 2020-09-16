import React, {useEffect, useState} from 'react';
import {fromJson} from '../api/testData/toObject'

function SearchBar({setList}) {

        const [textInput, setInput] = useState("what movie ?")

        const listFromJson = () => {
                setList(fromJson)
        }

        const searchMovies = (e) => {
                setInput(e.target.value);
                let results = fromJson.filter(x => x.title.toUpperCase().indexOf(e.target.value.toUpperCase()) !== -1);
                setList(results)
        }

        const setToBlank = () => {
                setInput("")
        }

        const eraseInput = () => {
                setInput("what movie...")
                setList(fromJson)
        }

        useEffect(()=>{
                listFromJson()
        },[])

        return (
                <div>
                     <input type="text" value={textInput} onChange={(e) => searchMovies(e)} onClick={setToBlank}></input>
                     <button onClick={eraseInput}>✕</button>   
                </div>
        )
}

export default SearchBar
