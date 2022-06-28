import { useState } from 'react';
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';

function Edit() {
    const [editedTitle, setEditedTitle] = useState('');
    const [editedBody, setEditedBody] = useState('');
    const [editedAuthor, setEditedEdAuthor] = useState('');

    const [editingTitle, setEditingTitle] = useState(false);
    const [editingBody, setEditingBody] = useState(false);
    const [editingAuthor, setEditingAuthor] = useState(false);

    const history = useHistory();

    const { id } = useParams();

    const { data: knyga, error, isPending } = useFetch('http://localhost:8000/knygos/' + id);

    const handleSave = (e) => {
        e.preventDefault();

        let title = editingTitle ? editedTitle : knyga.title;
        let body = editingBody ? editedBody : knyga.body;
        let author = editingAuthor ? editedAuthor : knyga.author;

        console.log(title, body, author)

        const editedKnyga = { title, body, author };

        fetch('http://localhost:8000/knygos/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedKnyga)
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Koreguoti - {id}</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {knyga && (<form>
                <label>Knygos pavadinimas:</label>
                <input type="text" value={editingTitle ? editedTitle : knyga.title} onChange={(e) => {
                    setEditingTitle(true);
                    setEditedTitle(e.target.value);
                }} />

                <label>Knygos aprašymas:</label>
                <textarea value={editingBody ? editedBody : knyga.body} onChange={(e) => {
                    setEditingBody(true);
                    setEditedBody(e.target.value);
                }} ></textarea>

                <label>Knygos autorius:</label>
                <input value={editingAuthor ? editedAuthor : knyga.author} onChange={(e) => {
                    setEditingAuthor(true);
                    setEditedEdAuthor(e.target.value);
                }} />

                <button onClick={handleSave}>Išsaugoti</button>
            </form>)}
        </div>
    );
}

export default Edit;