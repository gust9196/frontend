import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://fdm.dk/rssfeeds/1');
        const parsedNews = parseRssData(response.data);
        setNews(parsedNews);
      } catch (error) {
        console.error('Fejl ved hentning af nyheder:', error);
      }
    };

    fetchNews();
  }, []);

  const parseRssData = (rssData) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rssData, 'text/xml');
    const items = xmlDoc.querySelectorAll('item');

    return Array.from(items).map((item) => ({
      title: item.querySelector('title').textContent,
      link: item.querySelector('link').textContent,
      description: item.querySelector('description').textContent,
    }));
  };


  return (
    <div>
      <h2>Nyheder fra FDM</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
