import Head from "next/head";
import { createClient } from "contentful";
import BlogPostCard from "../components/BlogPostCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "blogPost",
  });

  return {
    props: {
      blogPosts: res.items,
    },
    revalidate: 1,
  };
}

export default function Blog({ blogPosts }) {
  return (
    <>
      <Head>
        <title>Wandu | Blog</title>
        <meta name="keywords" content="wandu" />
      </Head>
      <section className="home section">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="recipe-list">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.sys.id} post={post} />
              ))}

              <style jsx>{`
                .recipe-list {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  grid-gap: 20px 60px;
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
