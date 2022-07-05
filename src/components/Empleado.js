import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import '../estilos.css';
import { useForm } from '../hooks/useForm';
import { saveEmpleados } from '../services';

const Empleado = () => {
  const [empleados, setEmpleados] = useState([]);
  const [areas, setAreas] = useState([]);
  const [combo, setCombo] = useState('');

  const [formValues, handleInputChange] = useForm({
    nombre: '',
    edad: '',
    correo: '',
    idArea: '',
  });
  const { nombre, edad, correo, idArea } = formValues;

  // const onChangeComboBox = (e) => {
  //   const selectedId = e.target.value;
  //   // console.log(selectedId);
  //   setCombo(selectedId);
  //   idArea.value = selectedId;
  // };

  const startRegister = () => {
    const formData = new FormData();
    formData.set('nombre', formValues.nombre);
    formData.set('edad', formValues.edad);
    formData.set('correo', formValues.correo);
    formData.set('idArea', formValues.idArea);

    // console.log(Number(formData.get('edad')));
    // console.log(formData.get('edad'));

    saveEmpleados({
      idArea: Number(formData.get('idArea')),
      nombre: formData.get('nombre'),
      edad: Number(formData.get('edad')),
      correo: formData.get('correo'),
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    // console.log({ idArea, nombre, edad, correo });
    startRegister();
    fetchData();
  };

  const fetchData = async () => {
    await axios.get('api/empleado').then((response) => {
      const dataEmpleado = response.data.data;
      // console.log(dataEmpleado);
      setEmpleados(dataEmpleado);
    });
  };

  const comboData = async () => {
    await axios.get('api/area').then((response) => {
      const dataArea = response.data.data;
      console.log(dataArea);
      setAreas(dataArea);
    });
  };

  useEffect(() => {
    fetchData();
    comboData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 login-form-2">
            <h3>Alta empleado</h3>
            <form onSubmit={formSubmit}>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Edad"
                  name="edad"
                  value={edad}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  name="correo"
                  value={correo}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group mb-2">
                <input
                  type="text"
                  id="textArea"
                  className="form-control"
                  placeholder="Área"
                  name="idArea"
                  value={idArea}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">
                  Seleccione el área
                </label>
                <select className="form-control" onChange={handleInputChange}>
                  {areas.map((area) => (
                    <option key={area.id} value={area.id}>
                      {area.descripcion}
                    </option>
                  ))}
                </select>
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
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Area</th>
                  <th scope="col">Correo</th>
                  {/* <th scope="col">Eliminar</th> */}
                </tr>
              </thead>
              <tbody>
                {empleados.map((value, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{value.id}</th>
                      <td>{value.nombre}</td>
                      <td>{value.idArea}</td>
                      <td>{value.correo}</td>
                      {/* <td>
                        <button type="button" className="btn btn-primary">
                          Delete
                        </button>
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Empleado;
