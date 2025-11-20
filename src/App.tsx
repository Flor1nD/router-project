import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import PageOne from "./components/pageone.tsx";

function App() {


    return (
        <>
            <BrowserRouter>
                <div className="header">
                    <Link to={"/"}>
                        Home Page
                    </Link>
                    <Link to={"/pageone"}>
                        Page one
                    </Link>
                </div>

                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/pageone" element={<PageOne />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

function HomePage() {

    return (
        <>

        </>
    )
}

export default App
