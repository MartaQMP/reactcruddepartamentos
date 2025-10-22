import React, { Component } from "react";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import MenuDepartamentos from "./MenuDepartamentos";
import Home from "./Home";
import CreateDepartamentos from "./CreateDepartamentos";
import UpdateDepartamentos from "./UpdateDepartamentos";

export default class Router extends Component {
    render() {
        function UpdateDept() {
            let { id, nombre, localidad } = useParams();
            return <UpdateDepartamentos id={id} nombre={nombre} localidad={localidad} />;
        }

        return (
            <BrowserRouter>
                <MenuDepartamentos />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateDepartamentos />} />
                    <Route path="/update/:id/:nombre/:localidad" element={<UpdateDept />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
