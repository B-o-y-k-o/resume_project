import { FC, CSSProperties } from "react";
import { Layout } from "antd";
import { EntityName } from "./EntityName";
import { Title } from "./Title";

const headerStyle: CSSProperties = {
    textAlign: "center",
    height: 64,
    paddingInline: 0,
    lineHeight: "64px",
    backgroundColor: "#fff",
    display: 'flex',
    gap: '30px'

  };

  export const Header: FC = () => {
    return <Layout.Header style={headerStyle}>
            <EntityName />
            <Title />
    </Layout.Header>
  }