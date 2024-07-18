import React, {Suspense} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Container from "../../component";
import {api} from "../../constants";


interface TypeFetch {
    id: string,
    name: string,
    air_date: string,
    episode: string,
    created: string
}
const HeroSingle = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data: item} = useFetch<TypeFetch>(`${api}/${id}`)
    return (
        <Suspense fallback={'Loading...'}>
            <Container>
                <div>
                    <button onClick={() => navigate(-1)}>Назад</button>
                    {
                        <h2>{item?.name}</h2>
                    }
                </div>
            </Container>
        </Suspense>
    );
};

export default HeroSingle;