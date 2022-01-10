import "./App.css";
import { UserProvider } from "./context/UserCtx";
import AppRouter from "./api/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./wrappers/PageWrapper";
import app from "./api/firebaseConfig.js";
import { ModalProvider } from "./context/ModalCtx";
import { CatalogProvider } from "./context/CatalogCtx";

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
    </div>
  );
}

export default App;
