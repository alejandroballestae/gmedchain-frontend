import React,{useState, useEffect} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";


// core components
import { Button, Select, MenuItem, TextField, FormControl, FormHelperText, Chip, Paper } from '@material-ui/core'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import NoticeLayout from "components/NoticeLayout";
import TierItem from 'components/TierItem/Loadable';
import CategoryItem from 'components/CategoryItem/Loadable';
import CertificationItem from 'components/CertificationItem/Loadable';
import InputLabel from "@material-ui/core/InputLabel";


import { useHistory, Link } from 'react-router-dom';
import http from 'http.service';
import { useForm, Controller } from "react-hook-form";


import avarar1 from 'images/blogs/avatar1.png'
import styles from "assets/css/material-dashboard-react.css";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTc4NjU5NjMsIm5iZiI6MTU5Nzg2NTk2MywianRpIjoiZGU0OTJmMjctMDYzMi00YTJiLTk0ZWEtNjYyOWZjNDdmOTg0IiwiZXhwIjoxNTk3OTUyMzYzLCJpZGVudGl0eSI6IjVmMzk4ZDQzM2NjZDUyMzRhNDYzNzg1YiIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.t5KzxETRRu6q7QH9WswE9TFPdoMAVLqvQYKLfSUhkSs";
const useStyles = makeStyles(styles);

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

const theme= {
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    float: "right",
  },
  combo:{
      marginLeft: "50px",
      marginRight: "200px",
      marginBottom:"0px"

  },
  productImg:{
    width:'100%',
    height:'150px'
  }
};
const error = {
  color: "red"
}
const chipStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    margin: 0,
}


export default function Language() {
  const history = useHistory();
  const [defaultValues, setListCategories] = useState([]);
  const [serverErrors, setServerErrors] = useState([]);
  const [chipData, setChipData] = React.useState([
    
  ]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    console.log(chipData);
  };
 /* const handleAdd = () => () => {
    setListCategories(defaultValues.concat(addCategory));
  //  setChipData(chipData.concat({ key: addCategory, label: categories.find(data => data._id === addCategory).name}));
  };
*/

  const classes = useStyles();



  const { register, handleSubmit, watch, errors, setError, control,getValues } = useForm();

  const onSubmit = data => {
      console.log(data);
      http.post('/product',data, config).then(res => {
          console.log(res.data);
          console.log(JSON.stringify(res.data));
          Object.keys(res.data).forEach(function(key) {
              setError(key, {
                  type: "manual",
                  message: res.data[key]
              });
          });
          if(res.data.user_id){
              data.user_id = res.data.user_id;
              //history.push("/verification",data);
          }
      }).catch(error => {
          if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              setServerErrors({main:{message:error.response.data['error']}});
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            };
      });
  }
  return (
    <NoticeLayout>
      <br></br>
      <GridContainer justify="center" spacing={2}>
      <form className="contactForm" onSubmit={handleSubmit(onSubmit)} >
      <h3>New Product</h3>
      <Card style = {theme.combo}>
        <CardBody>
                <GridItem md = {12} >
                    <br></br>  
                <InputLabel id="demo-simple-select-label">Product Name</InputLabel>
                        <TextField
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth 
                        name="name"
                        inputRef={register}
                        />
                </GridItem>    
              <br></br>
          </CardBody>
      </Card>
      <Card style = {theme.combo}>
        <CardBody>
                <GridItem md = {12} >
                    <br></br>
                <InputLabel id="demo-simple-select-label">Upload the Pictures of your Product</InputLabel><br>
                </br>
                    <GridContainer md = {12} >
                      <GridItem md = {4} >
                      <img src = {avarar1} style ={theme.productImg}></img>
                      </GridItem>
                      <GridItem md = {4} >
                      <img src = {avarar1} style = {theme.productImg}></img>
                      </GridItem>
                      <GridItem md = {4} >
                        <img src = {avarar1} style = {theme.productImg}></img>
                      </GridItem>
                    </GridContainer>
                </GridItem>    
              <br></br>
          </CardBody>
      </Card>
      <Card style = {theme.combo}>
          <CardBody>
            <GridItem md = {12} >
                <br></br>
                  <InputLabel id="demo-simple-select-label">Select the Category of your Product</InputLabel><br></br>
                  <CategoryItem
                    {...{ control, register, defaultValues, getValues, errors }}
                  />
                  <FormControl
                      style={{ minWidth: 300 }}
                      error={Boolean(errors.wordlevel)}
                      key = {1}
                  >         
                  <FormHelperText>
                  <p >{errors.category && errors.category.message}</p>
                  </FormHelperText>
            </FormControl>
            
            <span> </span>
                 
            </GridItem>    
                <br></br>
          </CardBody>
      </Card>
      <Card style = {theme.combo}>
          <CardBody>
            <GridItem md = {12} >
                <br></br>
                <InputLabel id="demo-simple-select-label">Type Brand</InputLabel>
                <TextField
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  fullWidth 
                  name = "manufacturing"
                  inputRef={register}
                />
            </GridItem>    
            <br></br>
            </CardBody>
        </Card>
        <Card style = {theme.combo}>
           <CardBody>
                <GridItem md = {12} >
                    <br></br>
                    <InputLabel id="demo-simple-select-label">Description</InputLabel>
                    <TextField
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      fullWidth
                      inputRef={register}
                      name="description"
                      />
                </GridItem>    
              <br></br>
            </CardBody>
        </Card>
        <Card style = {theme.combo}>
           <CardBody>
                <GridItem md = {12} >
                    <br></br>
                    <InputLabel id="demo-simple-select-label">Select the Certifications of your Product</InputLabel><br></br>
                  <CertificationItem
                    {...{ control, register, defaultValues, getValues, errors }}
                  />
                  <FormControl
                      style={{ minWidth: 300 }}
                      error={Boolean(errors.wordlevel)}
                      key = {1}
                  >         
                      <FormHelperText>
                      <p >{errors.category && errors.category.message}</p>
                      </FormHelperText>
                  </FormControl>

                </GridItem>    
              <br></br>
            </CardBody>
        </Card>
        <Card style = {theme.combo}>
           <CardBody>
                <GridItem md = {12} >
                    <br></br>
                    
                <InputLabel id="demo-simple-select-label">Price Tiers</InputLabel>
                    
                    <TierItem
                      {...{ control, register, defaultValues, getValues, errors }}
                    />
                </GridItem>    
              <br></br><br></br>
            </CardBody>
        </Card>
        <Card style = {theme.combo}>
           <CardBody>
                <GridItem md = {12} >
                    <br></br>
                    
                <h4>All Fields Completed? </h4>
                    
                </GridItem>    
                <GridItem xs={12} sm={6} md={12} style={theme.control} >
                      <p style={error}> {serverErrors.main && serverErrors.main.message}</p><br></br>
                     <Button className = "btn" name = "main"  onClick={handleSubmit((d) => onSubmit(d))}  >Publish Product</Button>
                 </GridItem>
              <br></br><br></br>
            </CardBody>
        </Card>      
        </form>
      </GridContainer>
      <br></br>
    </NoticeLayout>
  );
}
