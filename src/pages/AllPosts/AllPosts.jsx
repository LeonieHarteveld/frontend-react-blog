import './AllPosts.css';
import blogData from '../../constants/data.json';
import {Link} from "react-router-dom";

function AllPosts() {
    const blogResult = blogData.map((post) => (
        <div className='post-info-wrapper' key={post.id}>

            <h4><Link to={`/posts/${post.id}`}><span className="post-name">{post.title}</span> ({post.author})</Link></h4>
            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
            </div>
    ));

    return (
        <div className="all-posts">
        <h1>Bekijk alle 17 posts op het platform</h1>
        <div className="post-info">
            {blogResult}
        </div>
            </div>
    );
}

export default AllPosts;