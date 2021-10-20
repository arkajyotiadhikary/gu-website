import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import InfoFooter from "./components/footer/InfoFooter";
import EndFooter from "./components/footer/EndFooter";

function App() {
    return (
        <>
            <div className="top-header">
                <Navbar />
                <Header />
            </div>

            <InfoFooter />
            <EndFooter />
        </>
    );
}

export default App;
