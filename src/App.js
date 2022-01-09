import "./App.css";
import { UserProvider } from "./context/UserCtx";
import AppRouter from "./api/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./wrappers/PageWrapper";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <PageWrapper>
          <AppRouter />
        </PageWrapper>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
