import axios from 'axios';

export default class CarService {
  getCars() {
    return axios.get("http://nexgenrent.azurewebsites.net/api/cars/getAll");
  }
  
  getByCarId(id){
    return axios.get(`http://nexgenrent.azurewebsites.net/api/cars/${id}`);
}
}
