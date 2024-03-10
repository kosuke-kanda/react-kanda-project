import useSearch from "./hooks/useSearch";
import BooksResult from "./components/BooksResult";
import { Input } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

const BooksSearch = () => {

  const { handleNewBooks, searchBooks, value, items } = useSearch();

  return (
    <div>
      <Heading as='h1' size='xl' mb='5'>本を検索する</Heading>
      <form onSubmit={searchBooks} className="text-xl">
        <Input onChange={handleNewBooks} value={value} />
      </form>
      <BooksResult items={items} />
    </div>
  );

}
export default BooksSearch;