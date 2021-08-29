// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";

import "../styles/movies.css";

import { APIContextProvider } from "../apiContext";

function MyApp({ Component, pageProps }) {
  return (
    <APIContextProvider>
      <Component {...pageProps} />
    </APIContextProvider>
  );
}

export default MyApp;
