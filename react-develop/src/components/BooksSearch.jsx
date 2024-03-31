import useSearch from "../hooks/useSearch";
import BooksResult from "../components/BooksResult";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const BooksSearch = () => {

  const { handleNewBooks, searchBooks, value, items } = useSearch();

  return (
    <div>
      <div onSubmit={searchBooks} className="text-xl">
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={handleNewBooks} value={value}
          />
      </div>
      <BooksResult items={items} />
    </div>
  );

}
export default BooksSearch;