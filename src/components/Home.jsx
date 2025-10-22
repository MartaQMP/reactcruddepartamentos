import React, { Component } from "react";
import cargando from "../assets/images/cargando.webp";
import axios from "axios";
import Global from "../Global";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
    state = {
        status: false,
        departamentos: [],
    };

    cargarDepartamentos = () => {
        let request = "api/departamentos";
        axios.get(Global.urlDepartamentos + request).then(response => {
            this.setState({
                departamentos: response.data,
                status: true,
            });
        });
    };

    componentDidMount = () => {
        this.cargarDepartamentos();
    };

    deleteDepartamento = id => {
        let request = "api/departamentos/" + id;
        axios.delete(Global.urlDepartamentos + request).then(response => {
            console.log("Eliminado");
            this.cargarDepartamentos();
        });
    };

    render() {
        if (this.state.status === false) {
            return (
                <div>
                    <h1>Home</h1>
                    <img alt="Cargando" src={cargando} />
                </div>
            );
        } else {
            return (
                <div>
                    <h1 style={{ textAlign: "center" }}>Departamentos</h1>
                    <br />
                    <table style={{ margin: "auto", width: "50%", border: "2px solid black" }}>
                        <thead>
                            <tr style={{ border: "2px solid black" }}>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.departamentos.map((dept, index) => {
                                return (
                                    <tr style={{ border: "1px solid gray" }} key={index}>
                                        <td>{dept.numero}</td>
                                        <td>{dept.nombre}</td>
                                        <td>{dept.localidad}</td>
                                        <td>
                                            <NavLink className="btn btn-success" to={"/update/" + dept.numero + "/" + dept.nombre + "/" + dept.localidad}>
                                                Update
                                            </NavLink>
                                            <button className="btn btn-danger"
                                                onClick={() => {
                                                    this.deleteDepartamento(dept.numero);
                                                }}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}
