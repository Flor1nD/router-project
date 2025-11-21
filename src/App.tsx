import './App.css'
import {HashRouter, Routes, Route, Link} from "react-router-dom"
import PageOne from "./components/pageone.tsx";
import {useState, useEffect} from "react";
import axios from 'axios'
import apiUrl from "./components/api.tsx";


interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function App() {


    return (
        <>
            <HashRouter>
                <div className="header">
                    <Link to={"/"} className={"headerLink"}>
                        Posts monitoring
                    </Link>
                </div>

                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/pageone" element={<PageOne />}></Route>
                </Routes>
            </HashRouter>
        </>
    )
}

function HomePage() {
    const [posts, setPosts] = useState<Posts[]>([]);

    useEffect(() => {
        axios.get(apiUrl).then((response) => {
            setPosts(response.data);
        })
    }, [setPosts]);

    return (
        <>
            <div className="content">
                <div className="container">
                    <h1>
                        Список постов
                    </h1>

                    <div className="content">
                        {posts.slice(0, posts.length).map((post) => (
                            <div key={post.id} className="todo-block">
                                <p style={{maxWidth: "30%"}}>{post.userId}</p>
                                <h2 style={{maxWidth: "30%"}}>{post.title}</h2>
                                <p style={{maxWidth: "30%"}}>{post.body}</p>

                            </div>
                        ))}
                    </div>

                    <Link to={"/pageone"} >
                        Добавить пост
                    </Link>


                </div>
            </div>
        </>
    )
}

export default App
