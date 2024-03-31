import { useState } from 'react';

const useSearch = () => {

  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [storageItems, setStorageItems] = useState([])

  const handleNewBooks = (event) => {
    setValue(event.target.value);
  };

  const searchBooks = async (event) => {
    event.preventDefault();
    if (value === '') return;
    const endpoint = 'https://www.googleapis.com/books/v1';
    const res = await fetch(`${endpoint}/volumes?q=${value}`);
    const data = await res.json();
    const dataFormat = data.items.map(item => {
    const Info = item.volumeInfo;
    return {
        title: Info.title,
        description: Info.description,
        link: Info.infoLink,
        image: Info.imageLinks ? Info.imageLinks.smallThumbnail : '',
      };
    });
    setItems(dataFormat);
  }

  // 取得
  const getBooks = () => {
    const bookListdetail = []
    for (const key in localStorage) {
      bookListdetail.push(JSON.parse(localStorage.getItem(key)))  
    }
    bookListdetail.splice(-6, 6)
    setStorageItems(bookListdetail)
  }

  // 全削除
  const deleteBooks = () => {
    localStorage.clear()
    window.location.reload()
  }

  // 単一削除
  const deleteSelectBooks = (title_key) => {
    console.log(title_key)
    if (title_key) {
      // window.confirm('本当にこの本を削除しますか？')
    }
    localStorage.removeItem(title_key)
  }

  return {
    handleNewBooks,
    searchBooks, 
    getBooks,
    deleteBooks,
    deleteSelectBooks,
    items,
    storageItems,
    value 
  }

}
export default useSearch;