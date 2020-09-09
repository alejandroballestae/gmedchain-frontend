import axios from "axios";

/*const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTg1NTUwNDksIm5iZiI6MTU5ODU1NTA0OSwianRpIjoiZGFiZDZmNzctODA0Mi00ZmMxLTk1OGItZjdjNWFkMDgwMTM1IiwiZXhwIjoxNTk4NjQxNDQ5LCJpZGVudGl0eSI6IjVmM2M0YzYxMjliZWU5MDUxNWM0OGE3MCIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.GvuDq5rwjfYfLgOn6m5a1nFSsS_CBuu8oKmQwTHmVA8';
const config = {
  headers: { Authorization: `Bearer ${token}` }
};
axios.defaults.headers = config.headers;
*/
const instance =  axios.create({
  baseURL: "http://172.31.22.45:5000",
  responseType: "json"
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});



  export default instance;