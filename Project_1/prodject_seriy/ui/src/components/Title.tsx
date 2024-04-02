import { CSSProperties, FC } from "react";
import { Flex, Typography } from "antd";

const titleSlyle: CSSProperties = {
    
}

export const Title: FC = () => {
    return <Flex align="center" style={titleSlyle}>
        <Typography.Title style={{color: 'gray', margin: '0'}} level={4}> Добро пожаловать в обучающий курс CML-Bench!</Typography.Title>
    </Flex>
    
}