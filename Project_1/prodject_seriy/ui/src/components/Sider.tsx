import { FC, CSSProperties } from "react";
import { Layout } from "antd";

const siderStyle: CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#fff",
};

export const Sider: FC = () => {
  return <Layout.Sider width="25%" style={siderStyle}></Layout.Sider>;
};
