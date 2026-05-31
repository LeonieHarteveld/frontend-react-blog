import './BlogDetails.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import dateToDutch from '../../helper/dateToDutch.jsx';
import { Clock } from "@phosphor-icons/react";



function BlogDetails() {
    const {id} = useParams();
    const API_KEY = "69197f2a-8d89-464a-8b9c-04da62d6ea68";
    const endpoint = 'https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts';
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [error, toggleError] = useState(false);

    async function fetchBlogDetails() {
        try {
            toggleError(false);

            const result = await axios.get(`${endpoint}/${id}`, {
                headers: {
                    'novi-education-project-id': API_KEY,
                },
            });

            console.log(result.data);
            setSelectedBlog(result.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    useEffect(() => {
        fetchBlogDetails();
    }, [id]);


    if (error) {
        return <p>Er ging iets mis bij het ophalen van de blogpost.</p>;
    }

    if (!selectedBlog) {
        return <p>De blogpost wordt geladen...</p>;
    }

    return (
        <div className="blog-wrapper">
            {error && <p>Er ging iets mis</p>}
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