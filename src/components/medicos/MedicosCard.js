import React from 'react'
import { Link } from 'react-router-dom'

export const MedicosCard = () => {
    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 500 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    FOTO MEDICO
                    {/* <img src={ `./assets/heroes/${ id }.jpg` } className="card-img" alt={ superhero } /> */}
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> NOMBRE MEDICO </h5>
                        <p className="card-text"> ESPECIALIDAD </p>

                        <p className="card-text">
                            <small className="text-muted"> Telefono Medico </small>
                        </p>

                        <Link to={ `./medicos/pepito` }>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}
