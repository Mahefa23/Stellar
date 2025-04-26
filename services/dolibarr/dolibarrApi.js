import axios from "axios";

const dolibarrInstance = axios.create({
  baseURL: "http://localhost/dolibarr-21.0.0/htdocs/api/index.php",
  headers: {
    'DOLAPIKEY': 'jW6ezb0TExTbHM4W3D63mU3v6FaU15yd',  
    'Accept': 'application/json',
  },
});

export default dolibarrInstance;
