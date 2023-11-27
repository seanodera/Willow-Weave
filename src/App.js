
import './css/App.scss';
import Logo from "./components/logo";
import Header from "./components/header";
import Footer from "./components/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
            <main className={'h-100'}>
                <Routes>
                    <Route path={'/'} element={<Logo className={'h-100'}/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
