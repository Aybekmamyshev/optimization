import React, {useContext, useState} from 'react';
import Container from "../../component";
import useFetch from "../../hook/useFetch";
import styles from './hero.module.scss'
import {Link} from "react-router-dom";
import {api} from "../../constants";
import useCategory from "../../hook/useCategory";
import {CustomContext} from "../../hook/Context";




const Hero = () => {
    const category = useContext(CustomContext)
    const [next, setNext] = useState(1)
    const {data, loading, error} = useCategory(category?.category, next)
    return (
        <Container>
            <>
                <h2 className={styles.title}> All heroes</h2>
                <button onClick={() => setNext(prevState => prevState + 1)}>next page</button>

                <div className={styles.wrapper}>
                    {error && <p>Ошибка</p>}
                    {data && !loading &&
                        data?.map((item) => (
                            <Link className={styles.link} to={`${item.id}`}>
                                <div key={item.id} className={styles.card}>
                                    <div>
                                        {/*<img src={item.image} alt=""/>*/}
                                    </div>
                                    <h2>{item.name}</h2>

                                </div>
                            </Link>
                        ))
                    }
                </div>

            </>
        </Container>
    );
};

export default Hero;