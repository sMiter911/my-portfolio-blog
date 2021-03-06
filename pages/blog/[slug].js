import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "../../components/Skeleton";
import { BLOCKS } from "@contentful/rich-text-types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const renderOption = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className={paragraphClass(node)}>{children}</p>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt="image"
        />
      );
    },
  },
};
function paragraphClass(node) {
  const className = "paragraph";
  return className;
}

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  const paths = res.items.map((post) => {
    return {
      params: { slug: post.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  return {
    props: { blogPost: items[0] },
    revalidate: 1,
  };
}

export default function BlogDetails({ blogPost }) {
  if (!blogPost) return <Skeleton />;

  const { title, featuredImage, post } = blogPost.fields;

  return (
    <section className="home section">
      <div className="home__container container grid">
        <div>
          <div className="banner">
            <Image
              src={"https:" + featuredImage.fields.file.url}
              height={featuredImage.fields.file.details.image.height}
              width={featuredImage.fields.file.details.image.width}
              alt={featuredImage.fields.title}
            />
            <h2>{title}</h2>
          </div>
          <div className="blog-post">
            <br />
            <div>{documentToReactComponents(post, renderOption)}</div>
          </div>

          <style jsx>{`
            h2,
            h3 {
              text-transform: uppercase;
            }
            .banner h2 {
              margin: 0;
              background: #fff;
              display: inline-block;
              padding: 20px;
              position: relative;
              top: -60px;
              left: -10px;
              transform: rotateZ(-1deg);
              box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
            }
            .info p {
              margin: 0;
            }
            .info span::after {
              content: ", ";
            }
            .info span:last-child::after {
              content: ".";
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
