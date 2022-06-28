import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'


function Create() {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const formSubmitHandler = (e) => {
    e.preventDefault()

    const knyga = {title, body, author }

    setLoading(true)

    fetch('http://localhost:8000/knygos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(knyga)
    }).then(() => {
      setLoading(false)
      history.push('/')
    })

    setTitle('')
    setBody('')
    setAuthor('')

  }

  return (
    <div className="create">
        <h2>Pridėti naują knygą</h2>
        <form onSubmit={(e) => formSubmitHandler(e)}>
          <label>Knygos pavadinimas: </label>
          <input 
            type="text"
            required
            value={title}
            onChange={(e) => (setTitle(e.target.value))}
          />

          <label>Knygos aprašymas: </label>
          <textarea
          required
          value={body}
          onChange={(e) => (setBody(e.target.value))}
          ></textarea>

          <label>Knygos autorius: </label>
          <input 
            type="text"
            required
            value={author}
            onChange={(e) => (setAuthor(e.target.value))}
          />

        {loading && <button disabled>Loading...</button>}
        {!loading && <button type='submit'>Prideti knygą</button>}
        </form>
    </div>

  )
}

export default Create