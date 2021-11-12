import React from 'react'

export const HospitalScreen = ({history}) => {
    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                IMAGEN HOSPITAL
                {/* <img 
                    src={ `../assets/heroes/${ heroeId }.jpg` }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                /> */}
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> NOMBRE HOSPITAL </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> DIRECCION HOSPITAL </li>
                    <li className="list-group-item"> <b> Publisher: </b> TELEFONO HOSPITAL </li>
                    <li className="list-group-item"> <b> First appearance: </b> ENVIAR UN EMAIL </li>
                </ul>

                <h5> Characters </h5>
                <p>MEDICOS DEL HOSPI PA </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}
