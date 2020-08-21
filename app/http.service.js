import axios from "axios";

export default axios.create({
    baseURL: "http://baseline.southcentralus.cloudapp.azure.com:5000",
    responseType: "json"
  });