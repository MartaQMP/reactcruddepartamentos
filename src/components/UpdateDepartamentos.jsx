import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate } from "react-router-dom";

export default class UpdateDepartamentos extends Component {
    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        status: false,
    };

    updateDept = event => {
        event.preventDefault();
        let request = "api/departamentos";
        let id = parseInt(this.cajaNumero.current.value);
        let dept = {
            numero: id,
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value,
        };
        axios.put(Global.urlDepartamentos + request, dept).then(response => {
            this.setState({
                status: true,
            });
        });
    };
    render() {
        return (
            <div>
                {this.state.status === true && <Navigate to="/" />}
                <h1>Update</h1>
                <form onSubmit={this.updateDept} style={{ width: "50%", margin: "auto" }}>
                    <label className="form-label">Id</label>
                    <input type="text" className="form-control" ref={this.cajaNumero} defaultValue={this.props.id} disabled/>
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" ref={this.cajaNombre} defaultValue={this.props.nombre} />
                    <label className="form-label">Localidad</label>
                    <input type="text" className="form-control" ref={this.cajaLocalidad} defaultValue={this.props.localidad} />
                    <br />
                    <button style={{width:"100%"}} className="btn btn-info">Actualizar</button>
                </form>
            </div>
        );
    }
}
