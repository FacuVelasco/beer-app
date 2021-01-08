import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "antd";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function HeaderComponent() {
  const [showSidebar, setSidebar] = React.useState(false);

  return (
    <Header>
      <Link href="/">
        <h3>Beer App</h3>
      </Link>
      <MenuOutlined onClick={() => setSidebar(!showSidebar)} />
      {showSidebar && (
        <nav className="navbar">
          <CloseOutlined onClick={() => setSidebar(false)} />
          <ul>
            <Link href="/">
              <li className="text">HOME</li>
            </Link>
            <Link href="/about">
              <li className="text">ABOUT</li>
            </Link>
          </ul>
          <Image
            src="/imgs/beer.png"
            alt="Beer"
            layout="responsive"
            width={500}
            height={500}
          />
        </nav>
      )}
    </Header>
  );
}
