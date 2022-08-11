import React, { useEffect, useState } from 'react';
const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

function debounce(cb, delay = 1000) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    console.log('clearing');

    timerId = setTimeout(() => {
      console.log('running!');
      cb.call(this, ...args);
    }, delay);
  };
}

const fetchWords = async (term, setResults, setIsOpen) => {
  const res = await fetch(URL + term);
  const wordList = await res.json();
  console.log('wordList: ', wordList);
  // console.log('title: ', wordList.title);
  if (wordList.title) {
    setResults([]);
  } else {
    const results = wordList[0]?.meanings[0]?.definitions;
    console.log('results: ', results);
    setResults(results);
  }
  setIsOpen(true);
};

const debouncedFetchWords = debounce(fetchWords);

function Autocomplete() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(0);
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowDown':
          setSelectedRow((prevSelection) => {
            if (prevSelection < results.length - 1) {
              return prevSelection + 1;
            } else {
              setSelectedRow(0);
            }
          });
          break;
        case 'ArrowUp':
          setSelectedRow((prevSelection) => {
            if (prevSelection > 0) {
              return prevSelection - 1;
            } else {
              setSelectedRow(results.length - 1);
            }
          });
          break;
        case 'Escape':
          setSelectedRow(0);
          setIsOpen(false);
          break;
        case 'Enter':
          setSelection(results[selectedRow]);
          // console.log('selection: ', results[selectedRow]);
          setSelectedRow(0);
          setIsOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [results]);

  useEffect(() => {
    setSelectedRow(0);
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query) {
      setResults('');
      debouncedFetchWords(query, setResults, setIsOpen);
    }
  }, [query]);

  return (
    <div>
      <input type='text' value={query} onChange={handleChange} />
      <div className='results-container'>
        {results.length && isOpen
          ? results.map((result, idx) => {
              return (
                <div
                  className={`result-row ${
                    idx === selectedRow ? 'selected-row' : ''
                  }`}
                  key={Math.random() * 999}
                >
                  {result.definition}
                </div>
              );
            })
          : ''}
      </div>
      <div className='selection'>{selection ? selection?.definition : ''}</div>
    </div>
  );
}

export default Autocomplete;
