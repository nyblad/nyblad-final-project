// Set up a welcome to admin pages
// Routes to guestlist and todos here
// Maybe a summary of quantity of guests who has rsvp:d
// Different navbar?

// How to do this if I don't have "secret route in backend"?
// Can I just have guarded routes in frontend?

// useEffect(() => {
//   const abortController = new AbortController();
//   fetch('http://localhost:8080/secrets', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `${accessToken}`
//     },
//     signal: abortController.signal
//   })
//     .then(res => res.json())

//   return () => {
//     abortController.abort();
//   };
// }, [accessToken]);

