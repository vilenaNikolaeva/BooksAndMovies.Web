import "./App.css";
import { UserProvider } from "./context/UserCtx";
import AppRouter from "./api/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./wrappers/PageWrapper";
import { ModalProvider } from "./context/ModalCtx";
import { CatalogProvider } from "./context/CatalogCtx";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <CatalogProvider>
          <Header />
          <ModalProvider>
            <PageWrapper>
              <AppRouter />
            </PageWrapper>
          </ModalProvider>
          <Footer />
        </CatalogProvider>
      </UserProvider>
      <ToastContainer
          theme="light"
          style={{ fontSize: "1em", fontWeight: "bold" }}
        />
    </div>
  );
}

export default App;
