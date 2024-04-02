import { FC, CSSProperties, useState, useCallback } from "react";
import { Flex, Typography, Button, Progress } from "antd";
import { AvatarContainer } from "./AvatarContainer";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { lessons, sumCompliteCourse } from "../model/answers/data";

type TUserInfoProps = {
  compliteCourse: number;
  currentCourse: string;
};

const userInfoStyle: CSSProperties = {
  border: "1px solid gray",
  borderRadius: "4px",
  padding: "5px",
};

export const UserInfo: FC<TUserInfoProps> = (props) => {
  const { compliteCourse, currentCourse } = props;

  const [isActiveUserInfo, setIsActiveUserInfo] = useState(true);

  const toggleActiveUserInfo = useCallback(() => {
    setIsActiveUserInfo((prev) => !prev);
  }, [])

  const iconStyle: CSSProperties = {
    color: "gray",
    width: "2em",
  };

  return (
    <Flex vertical style={userInfoStyle} gap={10}>
      <Flex style={{ cursor: "pointer" }} onClick={toggleActiveUserInfo} justify="space-between">
        <Typography.Title level={4} style={{ margin: "0" }}>
          Основное
        </Typography.Title>
        {!isActiveUserInfo && currentCourse ? (
          <Flex gap={10}>
            <Typography.Title level={5} style={{ margin: "0" }}>
              {currentCourse}
            </Typography.Title>{" "}
            <Button>Запустить курс</Button>
          </Flex>
        ) : null}
        {isActiveUserInfo ? (
          <UpOutlined style={iconStyle}/>
        ) : (
          <DownOutlined style={iconStyle} />
        )}
      </Flex>
      {isActiveUserInfo ? (
        <Flex gap={20} align="center" justify="space-around">
          <AvatarContainer name="Тест Тестов" />
          <Flex vertical justify="space-between">
            <Typography.Title level={5}>Текущий курс: {currentCourse}</Typography.Title>
            {compliteCourse ? <Button>Продолжить обучение</Button> : <Button>Запустить курс</Button>}
          </Flex>
          <Flex gap={20}>
            {currentCourse ? <Flex vertical>
              <Progress type="circle" percent={compliteCourse} size={80} />
              <Typography.Text>Курс пройден на {compliteCourse} %</Typography.Text>
            </Flex> : null}
            <Flex vertical>
              <Progress type="circle" percent={Math.round(sumCompliteCourse() / lessons.length)} size={80} />
              <Typography.Text>Всего пройдено {Math.round(sumCompliteCourse() / lessons.length)} %</Typography.Text>
            </Flex>
          </Flex>
        </Flex>
      ) : null}
    </Flex>
  );
};
