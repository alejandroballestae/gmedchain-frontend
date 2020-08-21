import React, { Fragment, Component } from 'react';
import { Grid, Tab, Tabs, Button,TextField } from '@material-ui/core'


// components 
import { useFieldArray } from "react-hook-form";
import 'containers/BlogPage/style.scss'
import './style.scss'

// images 
import image1 from 'images/blogs/img4.jpg'
import avarar1 from 'images/blogs/avatar1.png'

const blogs = [
    {
        title: 'How to estublish a team with a great way?',
        date: 'Sep 25,2019',
        author_name: 'themekhr',
        author: avarar1,
        like: '34',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        image: image1,
        id: 1
    }
]
const notItem ={
    textAlign: 'right',
    marginLeft:'5px'
}
const InputClass ={
    marginLeft:'5px',
    textAlign:'center'
}
const itemCenter ={
    textAlign: 'center'
    
}
const totalPrice = {
    float: 'right'
}
const itemContainer ={
    padding: '0px',
}
const controlStyle={
    textAlign: "right"
}

let renderCount = 0;

export default function Fields({ control, register, defaultValues, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });

  renderCount++;

  return (
    <>
      <ul>
      <br></br>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>

                <Grid className=" ptb-104" style = {itemContainer}>
                    <Grid container  >
                        <Grid item md={12} xs={12}>
                            <Grid className="authorBox">
                                <Grid className="authorContent" container>
                                    <Grid item md={2} xs={2} style = {controlStyle}>
                                        <h4>From</h4>
                                    </Grid>
                                        <Grid item md={2} xs={2}  >
                                                <TextField inputRef={register} name = {`tiers[${index}].start`} inputProps={{min: 0, style: { textAlign: 'center' }}}></TextField>
                                        </Grid>
                                        <Grid item md={2} xs={2} style = {controlStyle}>
                                            <h4>to</h4>
                                        </Grid>
                                        <Grid item md={2} xs={2} style = {control}  >
                                                <TextField inputRef={register} name = {`tiers[${index}].end`} inputProps={{min: 0, style: { textAlign: 'center' }}} style={InputClass}></TextField>
                                        </Grid>
                                        <Grid item md={2} xs={2} style = {itemCenter}  >
                                            <h4>=</h4>
                                        </Grid>
                                        <Grid item md={2} xs={2}  >
                                        <TextField inputRef={register} name = {`tiers[${index}].price`} inputProps={{min: 0, style: { textAlign: 'center' }}}></TextField>
                                        <button type="button" onClick={() => remove(index)}>
                                            X
                                        </button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </li>
          );
        })}
      </ul>
<br></br>
      <Grid xs={12} sm={6} md={12}  >
        <Button onClick={() => {append({ name: "append" }); }} className = "btn" >
             Add Tier +
         </Button>
      </Grid>
    
    </>
  );
}

