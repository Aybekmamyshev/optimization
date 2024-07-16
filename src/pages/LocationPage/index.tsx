import React, {useState} from 'react';
import Container from "../../component";
import {useInfinityScroll} from "../../hook/useInfinityScroll";


const Location = () => {

    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    const {data, loading, error} = useInfinityScroll(query, page)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        setPage(1)
    }

    return (
        <Container>
            <>
                <h2 style={{textAlign: 'center'}}>All titles</h2>
                <input type="text" value={query} onChange={handleChange}
                       name={'search'}/>
                {
                    data?.map((item) => (
                        <h2>{item.name}</h2>
                    ))
                }
                {loading && <div>Loading...</div>}
                {error && <div>Error</div>}


            </>
        </Container>
    );
};

export default Location;