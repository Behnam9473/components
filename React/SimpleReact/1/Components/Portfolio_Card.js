import classes from './Portfolio_Card.module.css';
import { useState, useEffect } from "react";

function Portfolio_Card({ portfolio }) {
  const BASE_URL = "http://localhost:8000/companies/";

  // State to hold fetched data
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data using Promise with the Fetch API
    const fetchUsingPromiseWithFetchApi = () => {
      fetch(BASE_URL) // Fetch data based on the current page
        .then((response) => response.json()) // Parse the response as JSON
        .then((data) => {
          setPosts(data); // Set the fetched data
        });
    };

    // Trigger fetching method on component mount and when portfolio changes
    fetchUsingPromiseWithFetchApi();
  }, [portfolio.company]); // Run the effect on component mount and when portfolio changes

  // Filter posts based on the portfolio prop
  const filteredPosts = posts.filter(post => portfolio.company.includes(post.id));
console.log(filteredPosts)
  return (
    <div className={classes.articles}>
      {filteredPosts.map((post) => (
        <article key={post.name}>
          <h1>{post.title}</h1>
          <div className={classes['article-wrapper']}>
            <figure>
              <img src={post.photo} alt={post.name} />
            </figure>
            <div className={classes['article-body']}>
              <h2>{post.name}</h2>
              <p className={classes.portfolio_decription}>
                {/* {post.description} */}
              </p>
              <a href="#" className={classes['read-more']}>
                Read more <span className={classes['sr-only']}>about {post.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={classes.icon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Portfolio_Card;
