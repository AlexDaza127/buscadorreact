import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {

  state = {
    termino: '',
    imagenes: []

  }

  paginacAnterior = () => {
    console.log('anterior...');
  }

  
  paginacSiguiente = () => {
    console.log('seguiente...');
  }


  //se utiliza un fetch api con la url de la api de pixabay
  consultarApi = () => {
    const url = 'https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${' + this.state.termino + '}&per_page=30';

    // toda respuesta se guarda en un json 
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))

  }

  //metodo que recibe el parametro recibido del input
  datosBusqueda = (termino) => {
    //se imprime lo recibido en la consola
    this.setState({
      termino
    }, () => {
      //ejecutar la funcion de la api 
      this.consultarApi();
    })
  }


  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
          {/*Utilizando el componente Buscador para lanzarlo en la aplicación*/}
          <Buscador
            datosBusqueda={this.datosBusqueda}>

          </Buscador>
        </div>
        <div className="row justify-content.center">
          <Resultado
            imagenes={this.state.imagenes}
            paginacAnterior={this.paginacAnterior}
            paginacSiguiente={this.paginacSiguiente}>
          </Resultado>
        </div>
      </div>
    );
  }
}

export default App;
