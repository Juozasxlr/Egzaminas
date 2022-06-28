import useFetch from './useFetch'
import {useParams, Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function BookDetails() {
    const {id} = useParams()
    const {data: knyga, loading, error} = useFetch(`http://localhost:8000/knygos/${id}`)
    const history = useHistory();
    const deleteHandler = () => {
      fetch('http://localhost:8000/knygos/' + knyga.id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/');
      })
    }
    

  return (
    <div className="book-details">
        <h2>Knygos numeris - {id} </h2>
        { loading && <div>Loading...</div>}
        { error && <div>{error}</div>}
        { knyga && (
            <article>
                <h2>{knyga.title}</h2>
                <p>Autorius {knyga.author}</p>
                <div className="book-buttons">{knyga.body}
                <button onClick={deleteHandler}>Ištrinti</button>
                <Link to={`edit/${knyga.id}`}>Koreguoti knygą</Link>
                </div>
            </article>
        )}
    </div>
  )
}

export default BookDetails