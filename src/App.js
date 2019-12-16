import React, {Component} from 'react';
import Buscador from './componentes/Buscador';


class App extends Component {

state = {
  termino : 'Desarrollo'

}

//se utiliza un fetch api con la url de la api de pixabay
consultarApi = () => {
  const url = 'https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}';
  console.log(url);
}

  //metodo que recibe el parametro recibido del input
  datosBusqueda = (termino) => {
    //se imprime lo recibido en la consola
    this.setState({
      termino
    })
  }


  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
          {/*Utilizando el componente Buscador para lanzarlo en la aplicación*/}
          <Buscador datosBusqueda={this.datosBusqueda}>
           
          </Buscador>
        </div>
        {this.state.termino}
      </div>
    );
  }
}

export default App;
