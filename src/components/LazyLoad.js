import './LazyLoad.css';
import { useEffect, useRef, useState } from 'react';
import ContentBlock from './ContentBlock';
// const URL = `https://jsonplaceholder.typicode.com/posts?_limit=10&_start=5`;
const URL = `https://jsonplaceholder.typicode.com/posts?_limit=10`;

// const allPosts = [];

const LazyLoad = () => {
  const allPosts = useRef();
  const [posts, setPosts] = useState(allPosts);
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(URL);
      const fetchedPosts = await res.json();
      setPosts(fetchedPosts);
      allPosts.current = fetchedPosts;
    };

    if (allPosts.current) {
      setPosts(allPosts.current);
    } else {
      fetchPosts();
    }
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      const pageHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;

      if (pageHeight + scrollTop >= scrollHeight - 20) {
        loadPosts();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (allPosts.current?.length) {
      console.log('allPosts.length: ', allPosts.current.length);
      const lastPostId = allPosts.current[allPosts.current.length - 1].id;
      console.log('id updated: ', lastPostId);
      setLastId(lastPostId);
      console.log('lastPostId: ', lastPostId);
    }
  }, []);

  async function loadPosts() {
    const lastPostId = allPosts.current[allPosts.current.length - 1].id;
    const res = await fetch(`${URL}&_start=${lastPostId}`);
    const newPosts = await res.json();
    allPosts.current.push(...newPosts);
    setPosts([...allPosts.current]);
  }

  return (
    <div className='lazy-load-container'>
      {posts.length
        ? posts.map((post) => (
            <ContentBlock content={post} key={Math.random()} />
          ))
        : null}
    </div>
  );
};

export default LazyLoad;
