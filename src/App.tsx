import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import PageOne from "./components/pageone.tsx";
import {useState, useEffect} from "react";
import axios from 'axios'
import apiUrl from "./components/api.tsx";


interface Flights {
    flight_number: number;
    mission_name: string;
    launch_year: string | undefined;
}

function App() {


    return (
        <>
            <BrowserRouter>
                <div className="header">
                    <Link to={"/"}>
                        SPACE X monitoring
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
    const [flights, setFlights] = useState<Flights[]>([]);

    useEffect(() => {
        axios.get(apiUrl).then((response) => {
            setFlights(response.data);
        })
    }, [setFlights]);

    return (
        <>
            <div className="content">
                <div className="container">
                    <h1>
                        Список полётов
                    </h1>

                    <div className="content">
                        {flights.slice(0, flights.length).map((flight) => (
                            <div key={flight.flight_number} className="todo-block">

                                <h2>{flight.mission_name}</h2>
                                <p>{flight.launch_year}</p>

                            </div>
                        ))}
                    </div>

                    <Link to={"/pageone"}>
                        Добавить полёт
                    </Link>


                </div>
            </div>
        </>
    )
}

export default App
