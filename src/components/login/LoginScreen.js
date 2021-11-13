import React from 'react'

import './Login.css';
export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        // history.push('/');
        history.replace('/');
    }

    return (
        // <div className="container mt-15">

        //     <div >
        //         <form>
        //             <label>
        //                 <p>Nickname</p>
        //                 <input type="text" />
        //             </label>
        //             <label>
        //                 <p>Clave</p>
        //                 <input type="password" />
        //             </label>
        //             <div>

        //             </div>
        //         </form>
        //     </div>
        // </div>
        <div className="row mt-5">
            <div className="col-3">
            </div>

            <div className="col-6 animate__animated animate__fadeIn">

                <div class="card text-center">
                    <div class="card-header">
                        Ingresá a la Aplicación!
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Ingresá tu Nickname</label>
                                <input type="text" class="form-control" id="inputNickname"  placeholder="nickname..."/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Ingresá tu Clave</label>
                                <input type="password" class="form-control" id="inputClave" placeholder="clave..."/>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-muted">
                        <button
                            className="btn btn-primary"
                            onClick={handleLogin}
                        >
                            Ingresar
                        </button>
                    </div>
                </div>

            </div>
            <div className="col-3">
            </div>

        </div>
    )
}
