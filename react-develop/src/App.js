// import { Routes, Route } from "react-router-dom";
import useSearch from "./hooks/useSearch";
import BooksResult from "./components/BooksResult";
// import BookStorage from "./components/BookStorage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const BooksSearch = () => {

  const {
    handleNewBooks, 
    searchBooks, 
    getBooks, 
    deleteBooks,
    deleteSelectBooks,
    storageItems, 
    value, 
    items 
  } = useSearch();

  return (
    
    <div className="m-4">
      <Stack 
        direction="horizontal" 
        gap={3}
      >
        <div className="p-2">
        <h2 style={{color: "#666666"}}>保存した本</h2>
          <a href="#searchResult">
            <Button 
              onClick={getBooks} 
              variant="primary"
            >
              読み込む
            </Button>
          </a>
        </div>
        <div className="p-2">
          <h2 style={{color: "#666666"}}>本の検索</h2>
          <form 
            onSubmit={searchBooks} 
            className="text-xl"
          >
            <Form.Control
              onChange={handleNewBooks} 
              value={value} 
            />
          </form>
        </div>
        <div className="p-2 ms-auto">
          <h2 style={{color: "#666666"}}>本の削除</h2>
          <Button 
            onClick={deleteBooks} 
            variant="secondary"
          >
            保存した本の全件削除
          </Button>
        </div>
      </Stack>
    <hr/>
      <ListGroup.Item className="">
        <BooksResult className="m-5" items={items} />
      </ListGroup.Item>
      <ListGroup id="searchResult" className="mt-4" style={{height: "15em"}}>
        {storageItems.map((item, index) => {
          return (
            <ListGroup.Item variant="light">
            <Stack direction="horizontal" gap={2}>
              <div className="p-2">
                {item.title}
              </div>
              <div className="p-2 ms-auto">            
                <Button
                  href={item.link} 
                  variant="primary"
                  className="me-3"
                >
                  詳細ページ
                </Button>
                <Button
                  onClick={deleteSelectBooks(item.title)} 
                  variant="secondary"
                >
                  削除
                </Button>
              </div>
            </Stack>
            </ListGroup.Item>
          )
        })}
        {/* <BookStorage items={storageItems} /> */}
      </ListGroup>
    </div>
  );

}
export default BooksSearch;