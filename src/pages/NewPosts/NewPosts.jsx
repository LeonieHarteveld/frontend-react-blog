import './NewPosts.css'
import {useState} from "react";


function NewPosts () {
    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: ''
    });

    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className='new-posts-wrapper'>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="title" >Titel</label>
                <input
                    type="text"
                    name='title'
                    id='title'
                    value={formState.title}
                    onChange={handleChange}
                />

                <label htmlFor="subtile" >Subtitel</label>
                <input
                    type="text"
                    name='subtile'
                    id='subtile'
                    value={formState.subtile}
                    onChange={handleChange}
                />

                <label >Titel</label>
                <input
                    type="text"
                    name='title'
                    id='title'
                    value={formState.title}
                    onChange={handleChange}
                />

                <label >Titel</label>
                <input
                    type="text"
                    name='title'
                    id='title'
                    value={formState.title}
                    onChange={handleChange}
                />


            </form>

        </div>
    )
}

export default NewPosts
