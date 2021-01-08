import React from "react";
import Link from "next/link";
import { Layout } from "antd";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const { Header, Sider } = Layout;

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
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      )}
    </Header>
  );
}
