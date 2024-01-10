import React, { useState, useEffect } from "react";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import CarService from "../services/carService";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function CarList() {
  
  const dispatch = useDispatch();

  const [cars, setCars] = useState([]);

  useEffect(() => {
    let carService = new CarService();
    carService
      .getCars()
      .then((result) => setCars(result.data));
  }, []);
  
const handleAddToCart = (car) => {
  dispatch(addToCart({ ...car, cartItemId: car.id })); // cartItemId eklendi
  toast.success(`${car.plate} sepete eklendi!`)
};


  return (
    <div>
      <Table celled>
        <Table.Header>   
          <Table.Row>
            <Table.HeaderCell>Plaka</Table.HeaderCell>
            <Table.HeaderCell>Kilometre</Table.HeaderCell>
            <Table.HeaderCell>Günlük Fiyat</Table.HeaderCell>
            <Table.HeaderCell>Model Yılı</Table.HeaderCell>
            <Table.HeaderCell>Model</Table.HeaderCell>
            <Table.HeaderCell>Rengi</Table.HeaderCell>
            <Table.HeaderCell>Sepet</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cars.map((car) => (
            <Table.Row key={car.id}>
            <Table.Cell><Link to={`/cars/${car.id}`}>{car.plate}</Link></Table.Cell>
              {/* <Table.Cell>{car.plate}</Table.Cell> */}
              <Table.Cell>{car.kilometer}</Table.Cell> 
              <Table.Cell>{car.dailyPrice} ₺</Table.Cell>
              <Table.Cell>{car.year}</Table.Cell> 
              <Table.Cell>{car.modelName}</Table.Cell> 
              <Table.Cell>{car.colorName}</Table.Cell> 
              <Table.Cell>
                <Button onClick={()=>handleAddToCart(car)}>Sepete ekle</Button>
              </Table.Cell> 
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}