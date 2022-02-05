import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <section className="home section">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="not-found">
            <h1>404</h1>
            <h2>Oops! That page cannot be found 😭</h2>
            <p>
              Redirecting to{" "}
              <Link href="/">
                <a>Homepage</a>
              </Link>
            </p>

            <style jsx>{`
              .not-found {
                background: #fff;
                padding: 30px;
                box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
                transform: rotateZ(-1deg);
              }
              h1 {
                font-size: 3em;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
