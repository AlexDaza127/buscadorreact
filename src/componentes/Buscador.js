import React, { Component } from 'react'

class Buscador extends Component {
    state = {

    }
    render() {
        return (
            <form>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text" className="form-control for-control-lg" 
                        placeholder="Busca tu Imagen. Ejemplo: Furbol"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block"
                        placeholder="Busca tu Imagen"></input>
                    </div>
                </div>
               
            </form>
        );
    }
}

export default Buscador 