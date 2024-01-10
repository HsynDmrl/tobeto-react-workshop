import axios from 'axios';

export default class CarService {
  getCars() {
    return axios.get("https://nexgenrent.azurewebsites.net/api/cars/getAll");
  }
  
  getByCarId(id){
    return axios.get(`https://nexgenrent.azurewebsites.net/api/cars/${id}`);
}
}
