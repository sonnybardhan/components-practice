import './LazyLoad.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import ContentBlock from './ContentBlock';
// const URL = `https://jsonplaceholder.typicode.com/posts?_limit=10&_start=5`;
const URL = `https://jsonplaceholder.typicode.com/posts?_limit=10`;

const LazyLoad = () => {
  const [posts, setPosts] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [getMorePosts, setGetMorePosts] = useState(false);

  const fetchPosts = useCallback(async () => {
    const res = await fetch(URL + '&_start=' + lastId);
    const fetchedPosts = await res.json();
    setPosts((previousPosts) => [...previousPosts, ...fetchedPosts]);
    setLastId(fetchedPosts[fetchedPosts.length - 1].id);
    setGetMorePosts(false);
  }, [lastId]);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (posts.length) {
      setLastId(posts[posts.length - 1].id);
    }
  }, [posts]);

  useEffect(() => {
    if (getMorePosts) {
      fetchPosts();
    }
  }, [getMorePosts]);

  useEffect(() => {
    const handleScroll = (e) => {
      const pageHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      if (pageHeight + scrollTop >= scrollHeight - 20) {
        setGetMorePosts(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
