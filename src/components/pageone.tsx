import '../App.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import apiUrl from "./api.tsx";

interface Flights {
    flight_number: number;
    mission_name: string;
    launch_year: string | undefined;
}

function PageOne() {
    const [flights, setFlights] = useState<Flights[]>([]);
    const [launch_year, setLaunchYear] = useState('');
    const [mission_name, setMissionName] = useState('');


    useEffect(() => {
        axios.get(apiUrl).then((response) => {
            setFlights(response.data);
        })
    }, [setFlights]);

    const sendToDo = async (flight_number: number, mission_name: string, launch_year: string) => {
        await axios.post(apiUrl, {
            flight_number: flight_number,
            mission_name: mission_name,
            launch_year: launch_year
        })

        // Очищаем поля ввода
        setLaunchYear('');
        setMissionName('');
    }


    return (
        <>

            <div className="content">
                <div className="container">

                    <input type="text" value={mission_name} onChange={(e) => setMissionName(e.target.value)} />
                    <br/>
                    <input type="text" value={launch_year} onChange={(e) => setLaunchYear(e.target.value)} />
                    <br/>
                    <button onClick={() => sendToDo(flights.length, mission_name, launch_year)}>Добавить пост</button>

                </div>
            </div>


        </>
    )
}

export default PageOne;