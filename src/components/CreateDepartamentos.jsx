import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate } from "react-router-dom";

export default class CreateDepartamentos extends Component {
    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();
    state = {
        status: false,
    };

    crearDepartamento = event => {
        event.preventDefault();
        let request = "api/departamentos";
        let id = parseInt(this.cajaNumero.current.value);
        let dept = {
            numero: id,
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value,
        };
        axios.post(Global.urlDepartamentos + request, dept).then(response => {
            this.setState({
                status: true,
            });
        });
    };

    render() {
        return (
            <div>
                {this.state.status === true && <Navigate to="/" />}
                <h1>Create</h1>
                <form onSubmit={this.crearDepartamento} style={{ width: "50%", margin: "auto" }}>
                    <label className="form-label">Id</label>
                    <input className="form-control" ref={this.cajaNumero} />
                    <label className="form-label">Nombre</label>
                    <input className="form-control" ref={this.cajaNombre} />
                    <label className="form-label">Localidad</label>
                    <input className="form-control" ref={this.cajaLocalidad} />
                    <br />
                    <button style={{width:"100%"}} className="btn btn-info">Insertar</button>
                </form>
            </div>
        );
    }
}
