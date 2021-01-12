import Layout from "../components/Layout";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <div className="content home-float top">
        <h3 className="title">Life is too short to drink bad Beer</h3>
      </div>

      <div className="content home-float bottom">
        <Link href="/beers">
          <h3 className="title white">Pick a beer!</h3>
        </Link>
      </div>
      <Image
        objectFit="cover"
        src="/imgs/alerces.png"
        alt="Los alerces"
        layout="fill"
      />
    </Layout>
  );
}
