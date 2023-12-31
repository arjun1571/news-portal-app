import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/catagories")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h2>All Categories: {categories.length}</h2>
            {
                categories?.map(categorie => <p key={categorie.id}><Link to={`category/${categorie.id}`}>{categorie.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideNav;