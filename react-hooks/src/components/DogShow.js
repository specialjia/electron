import React, {useState, useEffect} from 'react'

import axios from 'axios'

const DogShow = () => {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [fetch, setFetch] = useState(false)
    const style = {
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        border: '1px solid black'
    }
    useEffect(()=>{
        setLoading(true)
        axios.get('https://dog.ceo/api/breeds/image/random').then(result =>{
            console.log(result)
            setUrl(result.data.message)
            setLoading(false)
        })
    },[fetch])

    return(
        <>
            {loading ? <p>🐕读取中</p>
                :<img src={url} alt="dog" style={style}></img>
            }
            <button onClick={()=>{setFetch(!fetch)}}>再看一张图片</button>
        </>
    )
}

export default DogShow