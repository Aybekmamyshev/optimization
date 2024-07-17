import React, {useContext} from 'react';
import useCategory from "../../hook/useCategory";
import {CustomContext} from "../../hook/Context";

const Location = () => {
    const category = useContext(CustomContext)
    const {data , loading, error} = useCategory(category?.category, 1)
    return (
        <div>
            {error && <div>Error</div>}
            {loading ? <div>Loading...</div> :
                data.map((item) => (
                    <div>{item.name}</div>
                ) )
            }
        </div>
    );
};

export default Location;