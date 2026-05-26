import './BlogDetails.css'
import {useParams, Link} from "react-router-dom";
import blogData from '../../constants/data.json'
import dateToDutch from '../../helper/dateToDutch.jsx';
import { Clock } from "@phosphor-icons/react";



function BlogDetails() {
    const {id} = useParams();
    const selectedBlog = blogData.find((blog) => blog.id === Number(id));


    return (
        <div className="blog-wrapper">
            <h1>{selectedBlog.title}</h1>
            <h3>{selectedBlog.subtitle}</h3>
            <p>Geschreven door {selectedBlog.author} op {dateToDutch(selectedBlog.created)} </p>
            <h5><Clock size={15} />{selectedBlog.readTime} minuten lezen</h5>

            <p>{selectedBlog.content}</p>

            <p>{selectedBlog.comments} reacties - {selectedBlog.shares} keer gedeeld</p>

            <p className="home-link">
                <Link to="/">
                    « Terug naar de overzichtspagina
                </Link>
            </p>

        </div>
    )
}

export default BlogDetails