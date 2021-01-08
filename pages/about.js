import Layout from "../components/Layout";

import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <Image
        src="/imgs/patagonia.png"
        alt="Picture of the author"
        layout="responsive"
        width={500}
        height={200}
      />
      <div className="content">
        <h3 className="title">SOBRE NOSOTROS</h3>
        <p className="text">Somos una empresa de gente copada que hace birra</p>
      </div>
    </Layout>
  );
}
