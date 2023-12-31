import React from "react";
import CarList from "../pages/CarList";
import CarDetail from "../pages/CarDetail";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Routes, Route } from "react-router-dom";
import CartDetail from "../pages/CartDetail";
import WelcomePage from "../pages/WelcomePage";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="top-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" element={<WelcomePage />} />
              <Route exact path="/cars" element={<CarList />} />
              <Route path="/cars/:id" element={<CarDetail />} />
              <Route path="/cart" element={<CartDetail />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
