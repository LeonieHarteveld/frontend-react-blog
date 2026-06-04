import './AllPosts.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function AllPosts() {
    const API_KEY = "69197f2a-8d89-464a-8b9c-04da62d6ea68";
    const endpoint = 'https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts';
    const [posts, setPosts] = useState([]);
    const [error, toggleError] = useState(false);

    useEffect(() => {
    async function fetchBlogData() {
        try {
            toggleError(false);
            const result = await axios.get(endpoint, {
                headers: {'novi-education-project-id': API_KEY}
            });
            setPosts(result.data);
            console.log(result.data);
        } catch (e) {
            console.log(e);
            toggleError(true);
        }
    }

        fetchBlogData();
    }, []);


    const blogResult = posts.length > 0 && posts.map((post) => (
        <div className='post-info-wrapper' key={post.id}>
            <h4>
                <Link to={`/posts/${post.id}`}>
                    <span className="post-name">{post.title}</span> ({post.author})
                </Link>
            </h4>

            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
        </div>
    ));

    return (

        <>

    <div className="all-posts">
        <h1>Bekijk alle 17 posts op het platform</h1>
        {error && <p>Er ging iets mis</p>}
        <div className="post-info">
            {blogResult}
        </div>

    </div>
</>

)
    ;
}

export default AllPosts;