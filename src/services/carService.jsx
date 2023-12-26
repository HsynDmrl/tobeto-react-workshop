import axios from 'axios';

export default class CarService {
  getCars() {
    return axios.get('http://localhost:8080/api/cars/getAll');
  }
  
  getByCarId(id){
    return axios.get(`http://localhost:8080/api/cars/${id}`);
}
}
