import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './style.scss'
import { Accordion, Card, Button } from "react-bootstrap";

const CategoryList = ({ className, categories }) => {
    return (            
    <Grid className={className ? `${className} cetagoryWrap` : 'cetagoryWrap'}>
    <h3 className="cetagoryTitle">Categories</h3>
        <Accordion key={0} >
              <Card style = {{"marginLeft":"10px"}}>
                <Card.Header>

                  <Accordion.Toggle eventKey={0}>
                    +
                  </Accordion.Toggle> <Link to={ {    
                                pathname: '/products'
                            }}>All</Link>
                </Card.Header>
              </Card>
            </Accordion>  
        {categories.map((item,index) => (

            <Accordion key={index+1} >
              <Card style = {{"marginLeft":"10px"}}>
                <Card.Header>

                  <Accordion.Toggle eventKey={index+1}>
                    +
                  </Accordion.Toggle> <Link to={ {    
                                pathname: '/products',
                                state:{categorySearch:item.name}
                            }}>{item.name}</Link>
                </Card.Header>
                <Accordion.Collapse eventKey={index+1}>
                <Card.Body>{item.suppliers.map((supplier) =>(
                        <Link to={ {    
                            pathname: '/author',
                            state:{supplier_id:supplier.supplier_id}
                        }}>{supplier.supplier_name}<br></br></Link>
                    ))
                }</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            
          ))}
          </Grid>/*
        <Grid className={className ? `${className} cetagoryWrap` : 'cetagoryWrap'}>
            <h3 className="cetagoryTitle">Categories</h3>
            <ul className="cetagoryList" >
                <li>
                <Link to={ {    
                                pathname: '/products',
                            }}
                        >
                    All
                  
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
        </Grid>*/
    );
}

export default CategoryList;
