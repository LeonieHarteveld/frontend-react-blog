import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import NewPosts from "./pages/NewPosts/NewPosts.jsx";
import AllPosts from "./pages/AllPosts/AllPosts.jsx";
import Error from "./pages/Error/Error.jsx";
import Navigation from "./pages/Navigation/Navigation.jsx";
import BlogDetails from "./pages/BlogDetails/BlogDetails.jsx";

function App() {
    return (

        <div>
        <Navigation/>

        <main >

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new-posts" element={<NewPosts/>}/>
                <Route path="/all-posts" element={<AllPosts/>}/>
                <Route path="*" element={<Error/>}/>
                <Route path="/posts/:id" element={<BlogDetails/>}/>
            </Routes>

        </main>
        </div>
    )

}

export default App
