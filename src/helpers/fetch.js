const baseUrl = process.env.REACT_APP_API_URL;

const fetchSinToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`; // localhost:4000/api/

  // Esta url la veremos en la consola de powerShell
  // console.log(url);

  if (method === 'GET') {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
};

export { fetchSinToken };

// const startRegister = (email, password, name) => {
//   return async () => {
//     // El startRegister hace todo el proceso de la creación
//     const resp = await fetchSinToken(
//       'area',
//       { email, password, name },
//       'POST'
//     );
//     const body = await resp.json();

//     // Y si se crea, graba el token, inicia la sesción, y dispara el login nuevamente
//     if (body.ok) {
//       // localStorage.setItem('token', body.token);
//       // localStorage.setItem('token-init-date', new Date().getTime());
//     } else {
//       Swal.fire('Error', body.msg, 'error');
//     }
//   };
// };
