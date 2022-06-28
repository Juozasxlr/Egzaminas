import {Link} from 'react-router-dom'

function BookList({knygos, title}) {

  return (
    <div className="book-list">
        <h2>{title}</h2>
        {knygos.map(knyga => (
          <div className="book-preview" key={knyga.id}>
            <Link to={`/knygos/${knyga.id}`}>
              <h2>{knyga.title}</h2>
              <p>Autorius {knyga.author}</p>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default BookList