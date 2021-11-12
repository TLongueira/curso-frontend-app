import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';


import { SearchScreen } from '../components/search/SearchScreen';
import { CuentaScreen } from '../components/cuenta/CuentaScreen';
import { HospitalesScreen } from '../components/hospitales/HospitalesScreen';
import { MedicosScreen } from '../components/medicos/MedicosScreen';
import { HospitalScreen } from '../components/hospitales/HospitalScreen';
import { MedicoScreen } from '../components/medicos/MedicoScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid mt-2">
                <Switch>
                    <Route exact path="/hospitales" component={ HospitalesScreen } />
                    <Route exact path="/hospitales/:hospitalId" component={ HospitalScreen } />
                    <Route exact path="/medicos" component={ MedicosScreen } />
                    <Route exact path="/medicos/:medicosId" component={ MedicoScreen } />
                    <Route exact path="/search" component={ SearchScreen } />
                    <Route exact path="/cuenta" component={ CuentaScreen } />

                    <Redirect to="/hospitales" />
                </Switch>
            </div>


        </>
    )
}
