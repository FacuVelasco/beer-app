import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

import { List } from "antd";

export default function Home({ beer }) {
  if (!beer) {
    return (
      <Layout>
        <h1>Error 404 - Beer not found!</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="content">
        <div className="detail-header">
          <img src={beer.image_url} alt={beer.name} height={150} />
          <div>
            <p className="title">{beer.name}</p>
            <p className="text">{beer.tagline}</p>
          </div>
        </div>
        <p className="text">{beer.description}</p>

        <div className="info">
          <ul>
            <li>IBU: {beer.ibu}</li>
            <li>ABV: {beer.abv}</li>
            <li>EBC: {beer.ebc}</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const baseUrl = `https://api.punkapi.com/v2/`;

  const response = await fetch(`${baseUrl}/beers/${params.id}`);
  const beer = await response.json();

  return {
    props: {
      beer: beer.statusCode == 404 ? null : beer[0],
    },
  };
}
