import React, {useState} from 'react'
import axios from 'axios'

function useFetchApi(url, param) {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const getData = async () => {
        setIsLoading(true)
        try {
            const res = await axios(url + param)
            setData(res.data)
            res && setError(false)
        } catch (error) {
            setError(new Error(error))
        }finally{
            setIsLoading(false)
        }
    }

    return {data, isLoading, error, getData}
    
}

export default useFetchApi