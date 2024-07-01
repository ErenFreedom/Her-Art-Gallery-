// src/pages/dashboard.jsx
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import styles from '../styles/Dashboard.module.css';
import ArtCard from '../components/ArtCard';
import Filter from '../components/Filter';
import { generatePlaceholderArts } from '../placeholderArts';

const Dashboard = () => {
  const [arts, setArts] = useState([]);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchArts(filter, 1);
  }, [filter]);

  const fetchArts = async (filter, page) => {
    const placeholderArts = generatePlaceholderArts(8 * page);
    if (page === 1) {
      setArts(placeholderArts);
    } else {
      setArts((prevArts) => [...prevArts, ...placeholderArts]);
    }
    setHasMore(true);
  };

  const loadMoreArts = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchArts(filter, nextPage);
  };

  const handleCardClick = (art) => {
    router.push({
      pathname: '/art/[id]',
      query: { id: art._id },
    });
  };

  return (
    <>
      <Header hideAuthLinks={false} showSlider={true} />
      <div className={styles.dashboardContainer}>
        <div className={styles.topControls}>
          <Filter setFilter={setFilter} />
        </div>
        <InfiniteScroll
          dataLength={arts.length}
          next={loadMoreArts}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          className={styles.artGrid}
        >
          {arts.map((art, index) => (
            <ArtCard key={art._id} art={art} index={index} onClick={() => handleCardClick(art)} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Dashboard;
