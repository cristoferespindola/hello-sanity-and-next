import React from "react";

import { createClient } from "next-sanity";
const client = createClient({
  projectId: "vjmznsrb",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default function IndexPage({ articles }) {
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>Articles</h2>
        {articles.length > 0 && (
          <ul>
            {articles.map((article) => (
              <li key={article._id}>{article?.title}</li>
            ))}
          </ul>
        )}
        {!articles.length > 0 && <p>No articles to show</p>}
        {articles.length > 0 && (
          <div>
            <pre>{JSON.stringify(articles, null, 2)}</pre>
          </div>
        )}
        {!articles.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const articles = await client.fetch(`*[_type == "article"]`);

  return {
    props: {
      articles,
    },
  };
}
