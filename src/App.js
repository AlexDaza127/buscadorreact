import React, {Component} from 'react';
import Buscador from './componentes/Buscador';


class App extends Component {

  datosBusqueda = (termino) => {
    console.log(termino);
  }


  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
          {/*Utilizando el componente Buscador para lanzarlo en la aplicación*/}
          <Buscador  datosBusqueda={this.datosBusqueda}>
           
          </Buscador>
        </div>
      </div>
    );
  }
}

export default App;
