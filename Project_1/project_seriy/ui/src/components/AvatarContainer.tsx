import { FC, CSSProperties } from "react";
import { Flex, Avatar, Typography } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

const avatarContainerStyle: CSSProperties = {

}

type TAvatarContainerProps = {
    name?: string;
}

export const AvatarContainer: FC<TAvatarContainerProps> = (props) => {

    const {name} = props;

    return <Flex style={avatarContainerStyle} vertical>
        <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={<AntDesignOutlined />}
        />
        {name ? <Typography.Text>{name}</Typography.Text> : null}
    </Flex>
}