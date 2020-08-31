import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button  } from '@material-ui/core'
import { Link } from 'react-router-dom'
import bgImg from 'images/bg/hero.jpg'
import './style.scss'
const Breadcumb = ({ title, menus, searchText }) => {
    const [cetagory, setCetagory] = useState('all');
    const [search, setSearch] = useState(searchText);
    return (
        <Grid className="breadcumbArea">
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <Grid className="breadcumbWrap">
                        <h2>{title}</h2>
                        <ul>
                            {menus.map((item, i) => (
                                <li key={i}>
                                    {
                                        item.link ?
                                            <Link to={item.link}>{item.name}</Link> :
                                            <span>{item.name}</span>
                                    }
                                </li>
                            ))}
                        </ul>
                    </Grid>
                    <br></br>
                    <Grid className="heroContentTwo">
                    <form className="heroForm">
                            <TextField
                                select
                                value={cetagory}
                                onChange={(e) => setCetagory(e.target.value)}
                                classes={{
                                    root: 'heroSelectBox',
                                }}
                            >
                                <MenuItem selected value='all'>All</MenuItem>
                                <MenuItem value='html'>PPE-4</MenuItem>
                                <MenuItem value='PHP'>PPE-5</MenuItem>
                                <MenuItem value='wordpress'>PPE-7</MenuItem>
                            </TextField>
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                                placeholder="Get Started Now"
                            />
                            <Link to ={{pathname:'/products',state:{searchText:search}}}><Button >Search</Button></Link>
                        </form>
                        </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Breadcumb;
