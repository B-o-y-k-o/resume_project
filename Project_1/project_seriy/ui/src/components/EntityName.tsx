import {CSSProperties, FC} from "react";
import { Flex, Typography } from "antd";
import { LikeOutlined } from "@ant-design/icons";

const entityNameStyle: CSSProperties = {
    backgroundColor: "#4096ff",
    color: "#fff",
    padding: '10px 20px',
    borderRadius: '4px',
    marginLeft: '5px'
}

const nameStyle: CSSProperties = {
    color: '#fff',
    margin: '0'
}

export const EntityName: FC = () => {
    return <Flex justify="center" align="center" gap={10} className="entity-name" style={entityNameStyle}>
        <LikeOutlined height={3}/>
        <Typography.Title  style={nameStyle} level={3}>ОБУЧЕНИЕ</Typography.Title>
    </Flex>
}