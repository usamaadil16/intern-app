import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [data , setData] = useState(null);
    const [error, setError] = useState(null)

    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{    
        fetch(url, {signal: abortCont.signal})
        .then((res)=>{
            return res.json();
        })
        .then((data) => {
            setData(data);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            } else{console.log("some other error")
                }
        })
    },1000);


    }, [url]);

    return {data , error} ;
    }
 
export default useFetch;