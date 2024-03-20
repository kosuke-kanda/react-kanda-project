import useSearch from "./hooks/useSearch";
import BooksResult from "./components/BooksResult";
// import { Input } from '@chakra-ui/react';
// import { Heading } from '@chakra-ui/react';

const BooksSearch = () => {

  const { handleNewBooks, searchBooks, value, items } = useSearch();

  return (
    <div>
      <h1>本を検索する</h1>
      <form onSubmit={searchBooks} className="text-xl">
        <input onChange={handleNewBooks} value={value} />
      </form>
      <BooksResult items={items} />
    </div>
  );

}
export default BooksSearch;