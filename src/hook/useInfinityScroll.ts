import {useEffect, useState} from "react";
import axios, {Canceler} from "axios";


interface TypeObject {
    count: number,
    pages: number,
    next: string,
    prev: null
    results: TypeData[]
}

interface TypeData {
    id: number,
    name: string,
    type: string,
    dimension: string,
}

export const useInfinityScroll = (query: string, page: number) => {
    const [data, setData] = useState<TypeData[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        setData([])
    }, [query])

    useEffect(() => {
        let cancel: Canceler
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: 'https://rickandmortyapi.com/api/location',
            params: {q: query, page: page},
            cancelToken: new axios.CancelToken((c) => cancel = c)
        }).then((res) => {
            setData(prevState => [...prevState, res.data.results])
            setError(false)
            setLoading(false)
        }).catch(error => {
            if (axios.isCancel(error)){
                return
            }
            setError(false)
        })
        return () => cancel()
    }, [query, page])

    return {loading, data, error}
}