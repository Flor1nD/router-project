import '../App.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import apiUrl from "./api.tsx";
import {Link} from "react-router-dom";

interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function PageOne() {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [userId, setUserId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');


    useEffect(() => {
        axios.get(apiUrl).then((response) => {
            setPosts(response.data);
        })
    }, [setPosts]);

    const sendToDo = async (userId: number, id: number, title: string, body: string) => {
        await axios.post(apiUrl, {
            userId: userId,
            id: id,
            title: title,
            body: body,
        })

        // Очищаем поля ввода
        setUserId(0)
        setTitle('');
        setBody('');

        console.log("Пост отправлен");
    }


    return (
        <>

            <div className="content">
                <div className="container">
                    <input type="number" value={userId} onChange={(e) => setUserId(e.target.valueAsNumber)} />
                    <br/>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <br/>
                    <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
                    <br/>
                    <Link to={"/"}><button onClick={() => sendToDo(userId, posts.length, title, body)}>Добавить пост</button></Link>

                </div>
            </div>


        </>
    )
}

export default PageOne;