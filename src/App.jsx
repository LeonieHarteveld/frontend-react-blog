import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import NewPosts from "./pages/NewPosts/NewPosts.jsx";
import AllPosts from "./pages/AllPosts/AllPosts.jsx";
import Error from "./pages/Error/Error.jsx";
import Navigation from "./pages/Navigation/Navigation.jsx";

function App() {
    return (
        <div className="page-container">
           <Navigation />

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/new-posts" element={<NewPosts/>} />
                <Route path="/all-posts" element={<AllPosts/>} />
                <Route path="*" element={<Error/>} />
                <Route path="/new-posts/:id" element={<NewPosts/>} />
            </Routes>

        </div>
    )
}

export default App
