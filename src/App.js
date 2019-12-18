import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''

  }


  //Esta par de funciones permiten hacer un rastreo de las paginas anterior y siguiente
  paginaAnterior = () => {
    //leer el state de la pagina actual 
    let pagina = this.state.pagina;
    //leer si la pagina es igual 1, entonces no ir mas hacia atras
    if (pagina === 1) return null;
    //sumar uno a la pagina actual
    pagina --;
    //agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
    }
    );
    console.log(pagina);
  }


  paginaSiguiente = () => {
    //leer el state de la pagina actual 
    let pagina = this.state.pagina;
    //sumar uno a la pagina actual
    pagina ++;
    //agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
    });
    console.log(pagina);
  }


  //se utiliza un fetch api con la url de la api de pixabay
  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = 'https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${'+termino+'}&per_page=30&page='+pagina+'';
console.log(url);
    // toda respuesta se guarda en un json 
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))

  }

  //metodo que recibe el parametro recibido del input
  datosBusqueda = (termino) => {
    //se imprime lo recibido en la consola
    this.setState({
      termino: termino,
      pagina: 1
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
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
            >
          </Resultado>
        </div>
      </div>
    );
  }
}

export default App;
