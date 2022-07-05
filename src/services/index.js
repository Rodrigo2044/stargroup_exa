import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export async function getEmpleados() {
  try {
    const response = await axios({
      url: `${baseUrl}/empleado`,
      method: 'GET',
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

// export async function getAreas() {
//   try {
//     const response = await axios({
//       url: `${baseUrl}/area`,
//       method: 'GET',
//     });
//     // console.log(response.data.data);
//     return response.data.data;
//   } catch (e) {
//     console.log(e);
//   }
// }

export async function saveEmpleados(empleadoData) {
  try {
    // console.log(empleadoData);
    const response = await axios({
      url: `${baseUrl}/empleado`,
      method: 'POST',
      data: empleadoData,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function saveAreas(areaData) {
  try {
    // console.log(areaData);
    const response = await axios({
      url: `${baseUrl}/area`,
      method: 'POST',
      data: areaData,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}
