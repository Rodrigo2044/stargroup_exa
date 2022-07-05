import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import Navbar from './Navbar';
import axios from 'axios';
import '../estilos.css';
import { saveAreas } from '../services';

const Area = () => {
  const [areas, setAreas] = useState([]);

  const [formValues, handleInputChange] = useForm({
    descripcion: '',
  });
  const { descripcion } = formValues;

  const startRegister = () => {
    saveAreas(formValues);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    // console.log(lArea);
    startRegister();
    fetchData();
  };

  const fetchData = async () => {
    await axios.get('api/area').then((response) => {
      const dataArea = response.data.data;
      console.log(dataArea);
      setAreas(dataArea);
    });
  };

  useEffect(() => {
    // getAreas();
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 login-form-2">
            <h3>Crear área</h3>
            <form onSubmit={formSubmit}>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Introduce el área"
                  name="descripcion"
                  value={descripcion}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group mb-2">
                <input type="submit" className="btnSubmit" value="guardar" />
              </div>
            </form>
          </div>
          <div className="col-md-6 login-form-1">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Descripcion</th>
                </tr>
              </thead>
              <tbody>
                {areas.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{value.id}</td>
                      <td>{value.descripcion}</td>
                    </tr>
                  );
                })}
                {/* {areas ? (
                  <>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </>
                ) : (
                  <>
                    {areas.map((area) => (
                      <tr key={area.id}>
                        <td>{area.id}</td>
                        <td>{area.descripcion}</td>
                      </tr>
                    ))}
                    
                  </>
                )} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Area;
