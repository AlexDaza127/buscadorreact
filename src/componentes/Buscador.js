import React, { Component } from 'react'

class Buscador extends Component {
    busquedaRef = React.createRef();

/* Este metodo permite obtener los datos del componente impreso en pantala */
    obtenerDatos =(e) => {
        e.preventDefault();
        console.log(this.busquedaRef.current.value);
        
    }

    render(){
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    {/*Codigo de la barra de busqueda*/}
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control for-control-lg" 
                        placeholder="Busca tu Imagen. Ejemplo: Futbol"></input>
                    </div>
                    {/*Codigo del boton de busqueda*/}
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block"
                        placeholder="Busca tu Imagen"
                        value="Buscar...">
                        </input>
                    </div>
                </div>
               
            </form>
        );
    }
}

export default Buscador 