import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

import { List } from "antd";

export default function Home({ beers = [], page, size }) {
  if (!beers.length) {
    return (
      <Layout>
        <h1>No Beers!</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <List
        itemLayout="vertical"
        size="small"
        dataSource={beers}
        renderItem={(beer) => (
          <List.Item key={beer.tagline}>
            <Link href={`/beers/${beer.id}`}>
              <div className="item-list-beer">
                <div>
                  <p className="title">{beer.name}</p>
                  <p className="text">{beer.tagline}</p>
                </div>
                <img src={beer.image_url} alt={beer.name} height={150} />
              </div>
            </Link>
          </List.Item>
        )}
      />
      <nav className="pagination">
        {page > 1 && (
          <Link
            href={`/beers?page=${parseInt(page, 10) - 1}${
              size ? `&size=${size}` : ""
            }`}
          >
            prev
          </Link>
        )}
        <p>{page}</p>

        <Link
          href={`/beers?page=${parseInt(page, 10) + 1}${
            size ? `&size=${size}` : ""
          }`}
        >
          next
        </Link>
      </nav>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const baseUrl = `https://api.punkapi.com/v2/`;

  const response = await fetch(
    `${baseUrl}/beers?page=${query.page || 1}&per_page=${query.size || 10}`
  );
  const beers = await response.json();

  return {
    props: {
      beers,
      page: query.page || 1,
      size: query.size || null,
    },
  };
}
