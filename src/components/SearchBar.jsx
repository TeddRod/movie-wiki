import React, {useEffect, useState} from 'react';
import {fromJson} from '../api/testData/toObject'

function SearchBar({setList}) {

        const [textInput, setInput] = useState("what movie ?")

        const listFromJson = () => {
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
