import React, { useEffect, useState } from 'react';
import Axios from 'axios'
function App() {

    const [data,setData]=useState()
    const getData=async()=>{
        const resp=await Axios.get("http://localhost:5000/getData")
        setData(resp.data)
    }

    useEffect(()=>{
        getData()
    },[])




    return (
        <div>
            {data}
        </div>
    );
}

export default App;