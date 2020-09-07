import React, { Fragment, Component, useState, useEffect } from 'react';
import { Grid, Tab, Tabs, Button,TextField, Select, MenuItem, InputLabel, FormControl} from '@material-ui/core'


// components 
import { useFieldArray } from "react-hook-form";
import 'containers/BlogPage/style.scss'
import './style.scss'
import http from 'http.service';
// images 
import image1 from 'images/blogs/img4.jpg'
import avarar1 from 'images/blogs/avatar1.png'

async function getCategories(){
    const response = await http.get('/category').then(data => {
        return data;
    }).catch(error => {
        console.error(error);
    })
    return response;
  }

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
    padding: '0px'
    
}
const control={
    textAlign: "right"
}

let renderCount = 0;

export default function Fields({ control, register, defaultValues, errors }) {
  const [categories, setCategories] = useState([]);
  const [addCategory, setAddCategory] = useState({});
  const [isBusy, setBusy] = useState(true);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"

  });
  console.log(defaultValues);
  renderCount++;

  useEffect(()=>{
    async function categoriesCall(){
        setBusy(true);
        const response = await getCategories();
        console.log(response.data);
        setCategories(response.data);
        setBusy(false) ;
    }
    categoriesCall();
  },[]);

  const handleCategorieChange = (e) => {
    setAddCategory(categories.find(data => data._id === e.target.value))
  }

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
                <Grid className=" ptb-104" style = {itemContainer}>
                    <Grid container  >
                        <Grid item md={12} xs={12}>
                                <Grid className="authorBox">
                                    <Grid className="authorContent" container>
                                        <input type = "hidden" value = {item._id} name = {`category_id[${index}]`} ref={register} ></input>
                                        <TextField  inputProps={{min: 0, style: { textAlign: 'center' }}} defaultValue={`${item.name}`} disabled></TextField>
                                            <button type="button" onClick={() => remove(index)}>
                                                X
                                            </button>
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
      <FormControl style={{minWidth: 150}}> 
        <InputLabel id="demo-simple-select-label">Select a Category</InputLabel>
        <Select
                labelId="demo-simple-select-label"
                onChange={e => handleCategorieChange(e)}
                defaultValue="Select a Category"
            >
            {isBusy ? (
                <></>
            ) : (
                categories.map((category) => (
                    <MenuItem value={category._id}>{category.name}</MenuItem>
                ))
            )}
            </Select>
        </FormControl><span> </span>
        <Button onClick={() => {append(addCategory); }} className = "btn" >
             Add Category +
         </Button>
      </Grid>
    
    </>
  );
}

