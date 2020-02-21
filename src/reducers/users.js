// Reducer to handle users and login in to admin pages
// Set a user for myself and a demo user for others
// action: setLoggedInUser?
// action: setAccessToken?
// thunk for login: something like this:

// export const fetchUser = (loginValues) => {
//  return dispatch => {
//   localStorage.removeItem('accessToken');

//   fetch('http://localhost:8080/login', {
//     method: 'POST',
//     body: JSON.stringify(loginValues),
//     headers: { 'Content-Type': 'application/json' }
//   })
//     .then(res => res.json())
//     .then(json => {
//      dispatch(users.actions.setLoggedInUser(json));
//      localStorage.setItem('accessToken', data.accessToken);
// }
//     .catch(err => console.log('error', err);
// };


// How to handle logout?
