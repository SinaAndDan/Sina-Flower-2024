import { GlobalProvider } from "context/GlobalContext";
import '../../styles/globals.css'; // Ensure Tailwind is imported
import '../../styles/fonts.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
