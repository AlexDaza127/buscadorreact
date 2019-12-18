//se crea el function component de la paginacion de la pagina web
//se crea con todos sus instancias
import React from 'react';

const Paginacion = props => {
    return(
        <div className="py-3">
            <button type="button" className="btn btn-info mr-1">Anterior &larr;</button>
            <button type="button" className="btn btn-info">Siguiente &rarr;</button>
            
        </div>
    )
}

export default Paginacion;