import React, {/*useEffect,*/ useState, useLayoutEffect} from 'react';
// import {fromJson} from '../api/testData/toObject';
import { loadingMoviesFromApi } from '../api/apiHandler';

function SearchBar({setList}) {

        const [fromApi, setFromApi] = useState()
        const [textInput, setInput] = useState("what movie ?")

        // const listFromJson = () => {
        //         setList(fromJson)
        // }

        const searchMovies = (e) => {
                setInput(e.target.value);
                let results = fromApi.filter(x => x.title.toUpperCase().indexOf(e.target.value.toUpperCase()) !== -1);
                setList(results)
        }

        const setToBlank = () => {
                setInput("")
        }

        const eraseInput = () => {
                setInput("what movie...")
                setList(fromApi)
        }

        // useEffect(()=>{
        //         listFromJson()
        // },[])

        useLayoutEffect(() => {
                loadingMoviesFromApi()
                .then((res) =>{
                //   console.log(res)
                  setFromApi(res)
                  setList(res)
                })
              },[])

        //       console.log(fromApi);

        return (
                <div id="searchBarDiv" className="green-background shdw">
                        <div id="inputDiv" className="inset-shdw">
                                <input id="input" className="clrGrey  fontRegular" type="text" value={textInput} onChange={(e) => searchMovies(e)} onClick={setToBlank}></input>
                                <button id="button" className="shdw" style={{ fontSize: "12px"}} onClick={eraseInput}>✕</button>
                        </div>   
                </div>
        )
}

export default SearchBar
