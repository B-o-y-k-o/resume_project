import { CSSProperties, FC } from "react";
import { Layout, Flex } from "antd";
import { Header } from "./Header";
import { Sider } from "./Sider";
import { Content } from "./Content";

const layoutStyle: CSSProperties = {
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "1440px",
  height: "100vh",
};

export const App: FC = () => (
  <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyle}>
      <Sider />
      <Layout>
        <Header />
        <Content />
      </Layout>
    </Layout>
  </Flex>
);
