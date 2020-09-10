import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './style.scss'



const CategoryList = ({ className, categories }) => {

    return (
        <Grid className={className ? `${className} cetagoryWrap` : 'cetagoryWrap'}>
            <h3 className="cetagoryTitle">Categories</h3>
            <ul className="cetagoryList">
                <li>
                <Link to={ {    
                                pathname: '/products',
                            }}
                        >
                    All
                    <span>All</span>
                </Link>
                </li>
                {categories.map((item, i) => (
                    <li key={i}>
                        <Link to={ {    
                                pathname: '/products',
                                state:{categorySearch:item.name}
                            }}
                        >
                            {item.name}
                            <span>{item.value}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </Grid>
    );
}

export default CategoryList;
