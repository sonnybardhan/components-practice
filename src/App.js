import { useEffect, useRef, useState } from 'react';

// const URL = 'https://jsonplaceholder.typicode.com/comments?_limit=200';
const URL = 'https://jsonplaceholder.typicode.com/comments?';
const PAGE_SIZE = 5;
const BUTTON_WIDTH = 35;
//_limit=2&_start=3

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [from, setFrom] = useState(0); //comments index
  const [err, setErr] = useState(null);
  const [maxPage, setMaxPage] = useState(0);
  const buttonsContainerRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const comments = await res.json();
        setData(comments);
        setMaxPage(Math.floor(data.length / PAGE_SIZE));
      } catch (err) {
        setErr(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setMaxPage(Math.floor(data.length / PAGE_SIZE));
  }, [data]);

  useEffect(() => {
    const width = window
      .getComputedStyle(buttonsContainerRef.current)
      .width.slice(0, -2);
    console.log('container width: ', width);
    const maxButtons = Math.floor(width / BUTTON_WIDTH);
    console.log('Max buttons: ', maxButtons);
  }, []);

  // console.log('data: ', data);
  // console.log('err: ', err);
  console.log('from: ', from);
  console.log('page: ', page);
  console.log('maxPage: ', maxPage);
  console.log('data.length: ', data.length);

  const previousClickHandler = () => {
    if (page > 1) {
      setFrom(from - PAGE_SIZE);
      setPage(page - 1);
    }
  };

  const nextClickHandler = () => {
    if (page <= maxPage) {
      setFrom(from + PAGE_SIZE);
      setPage(page + 1);
    }
  };

  function generatePageButtons() {
    const totalPages = Math.ceil(data.length / PAGE_SIZE);

    const pageNumButtons = [];

    for (let pageNum = 0; pageNum < totalPages; pageNum++) {
      pageNumButtons.push(
        <div
          className='pagination-nums-button'
          key={Math.random()}
          onClick={() => {
            setFrom(pageNum * PAGE_SIZE);
            setPage(pageNum + 1);
          }}
        >
          {pageNum + 1}
        </div>
      );
    }
    return pageNumButtons;
  }

  return (
    <div className='main-container'>
      <h1>Pagination Demo</h1>
      <div className='comments'>
        {data.length &&
          data.slice(from, from + PAGE_SIZE).map((dataBlock) => {
            return (
              <div className='data-block' key={dataBlock.id}>
                <p className='id'>{dataBlock.id}</p>
                <p className='name'>{dataBlock.name}</p>
                <p className='body'>{dataBlock.body}</p>
              </div>
            );
          })}
      </div>
      <div className='pagination-buttons-container' ref={buttonsContainerRef}>
        <span
          className='pagination-button previous'
          onClick={previousClickHandler}
        >
          Previous
        </span>
        {generatePageButtons().slice(0, 10)}
        <span className='pagination-button next' onClick={nextClickHandler}>
          Next
        </span>
      </div>
    </div>
  );
}

export default App;
