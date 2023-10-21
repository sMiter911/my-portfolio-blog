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
          <div>
            {blogPosts.map((post) => (
              <BlogPostCard key={post.sys.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
