import BookList from './BookList'
import useFetch from './useFetch'

function Home() {

  const {data, loading, error} = useFetch("http://localhost:8000/knygos")

  return (
    <div className="home">
      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}
      {data && <BookList knygos={data} title="Visos knygos"/>}
    </div>
  )
}

export default Home