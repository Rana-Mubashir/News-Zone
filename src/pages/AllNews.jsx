import React, { useEffect, useState } from 'react'
import config from '../config/config';
import NewsCard from '../components/NewsCard';
function AllNews({ category, country }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${config.Apikey}`)
        const data = await response.json();
        setNews(data.articles)
      } catch (error) {
        console.log("There is an error in fetching news api" + error)
      }
    }
    fetchNews();
  }, [category, country])
  return (
    <div className='flex justify-center items-center gap-5 p-5 flex-wrap '>
      {
        news.map((each) =>
          <NewsCard
            key={each.title}
            title={each.title}
            description={each.description}
            imageUrl={each.urlToImage}
            url={each.url}
          />
        )
      }
    </div>
  )
}

export default AllNews
