// import "../styles/globals.css";
// import { Provider } from 'react-redux';
// import store from "../redux/store"

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

import "../styles/globals.css";
import { Provider } from 'react-redux';
import store from "../redux/store";
require('dotenv').config()
console.log('process.env: ', process.env) // remove this after you've confirmed it is working

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
