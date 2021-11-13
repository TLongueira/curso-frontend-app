import React from 'react'
import profile from '../../assets/profile.jpg'
import './cuentaScreen.css'

export const CuentaScreen = ({ history }) => {
    const handleReturn = () => {

        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }

    }
    return (
        <div className="row mt-5">
            <div className="col-3">
            </div>

            <div className="col-6 animate__animated animate__fadeIn">
                <img
                    src={profile}
                    alt={"FOTO DE PERFIL"}
                    className="img-thumbnail fotoPerfil mx-auto d-block animate__animated animate__fadeInLeft "
                />
                <h3 className="text-center mt-5"> NOMBRE USUARIO </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> EDAD </li>
                    <li className="list-group-item"> <b> Publisher: </b> DNI </li>
                    <li className="list-group-item"> <b> First appearance: </b> EMAIL </li>
                </ul>
                <hr />
                <h3 className="text-center mt-2"> DATOS DE ACCESO </h3>
                <ul className="list-group list-group-flush mt-5">
                    <li className="list-group-item"> <b> Alter ego: </b> NICK </li>
                    <li className="list-group-item"> <b> Publisher: </b> CLAVE </li>
                </ul>

                <h5 className="text-center mt-2"> ACCIONES </h5>
                <div class="btn-group d-flex justify-content-around" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-primary acciones">Ver datos de Acceso</button>
                    <button type="button" class="btn btn-outline-primary acciones">Editar mi Cuenta</button>
                    <button type="button" class="btn btn-outline-danger acciones">Eliminar mi Cuenta</button>
                </div>
                <button
                    className="btn btn-outline-info w-100 mt-4"
                    onClick={handleReturn}
                >
                    Regresar a la página anterior!
                </button>

            </div>
            <div className="col-3">
            </div>

        </div>
    )
}

