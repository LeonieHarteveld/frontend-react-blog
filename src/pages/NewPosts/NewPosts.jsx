import './NewPosts.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewPosts() {
    const API_KEY = '69197f2a-8d89-464a-8b9c-04da62d6ea68';
    const endpoint = 'https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts';

    const navigate = useNavigate();

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const newPost = {
            ...formState,
            readTime: 1,
            comments: 0,
            shares: 0,
            created: new Date().toISOString(),
        };

        try {
            setError(false);
            setLoading(true);

            const result = await axios.post(
                endpoint,
                newPost,
                {
                    headers: {
                        'novi-education-project-id': API_KEY,
                    },
                }
            );

            console.log(result.data);
            navigate('/');
        } catch (e) {
            console.error(e);
            console.log(e.response?.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="new-posts-wrapper">
            <h1>Post toevoegen</h1>

            {error && <p>Er ging iets mis. Probeer het opnieuw.</p>}

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Titel</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={formState.title}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="subtitle">Subtitel</label>
                <input
                    type="text"
                    name="subtitle"
                    id="subtitle"
                    value={formState.subtitle}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="author">Auteur</label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    value={formState.author}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="content">Bericht</label>
                <textarea
                    name="content"
                    id="content"
                    value={formState.content}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={2000}
                />

                <button type="submit" disabled={loading}>
                    {loading ? 'Bezig met toevoegen...' : 'Toevoegen'}
                </button>
            </form>
        </div>
    );
}

export default NewPosts;