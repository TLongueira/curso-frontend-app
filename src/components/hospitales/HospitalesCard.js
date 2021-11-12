import React from 'react'
import { Link } from 'react-router-dom'

export const HospitalesCard = () => {
    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 500 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    FOTO HOSPITAL
                    {/* <img src={ `./assets/heroes/${ id }.jpg` } className="card-img" alt={ superhero } /> */}
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> NOMBRE HOSPITAL </h5>
                        <p className="card-text"> DIRECCION HOSPITAL </p>

                        <p className="card-text">
                            <small className="text-muted"> Telefono Hospital </small>
                        </p>

                        <Link to={ `./hospitales/almagro` }>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}
