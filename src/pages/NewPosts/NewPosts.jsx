import './NewPosts.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";



function NewPosts () {
    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',

    });

    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
            readtime: +1,
            comments: 0,
            shares: 0,
            created: new Date(),
        });

    }

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        navigate("/");

    }

    return (
        <div className='new-posts-wrapper'>
            <h1>Post toevoegen</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title" >Titel</label>
                <input
                    type="text"
                    name='title'
                    id='title'
                    value={formState.title}
                    onChange={handleChange}
                    required={true}
                />

                <label htmlFor="subtitle" >Subtitel</label>
                <input
                    type="text"
                    name='subtitle'
                    id='subtitle'
                    value={formState.subtitle}
                    onChange={handleChange}
                    required={true}
                />

                <label htmlFor="author" >Auteur</label>
                <input
                    type="text"
                    name='author'
                    id='author'
                    value={formState.author}
                    onChange={handleChange}
                    required={true}
                />

                <label htmlFor="content" >Bericht</label>
                <textarea
                    name='content'
                    id='content'
                    value={formState.content}
                    onChange={handleChange}
                    required={true}
                    minLength={2}
                    maxLength={2000}
                />

                <button type="submit">Toevoegen</button>


            </form>

        </div>
    )
}

export default NewPosts
