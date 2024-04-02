import { FC, CSSProperties, useState, useCallback } from "react";
import { Button, Flex, Typography } from "antd";
import { ILesson } from "../model/answers/data";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  DownOutlined,
  UpOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

const lessonStyle: CSSProperties = {
  border: "1px solid gray",
  borderRadius: "4px",
  marginBottom: "10px",
  padding: "10px",
};

type TLessonProps = {
  course: ILesson;
  currentCourse: string;
  onCurrentCourse: (title: string, complite: number) => void;
};

export const Lesson: FC<TLessonProps> = (props) => {
  const { course, onCurrentCourse, currentCourse } = props;
  const [isActiveLesson, setIsActiveLesson] = useState(false);

  const onHandlerClick = useCallback(() => {
    onCurrentCourse(course.title, course.complete);
  }, [course.complete, course.title, onCurrentCourse])

  const toggleActiveLesson = useCallback(() => {
    setIsActiveLesson((prev) => !prev);
  }, [])

  const iconStyle: CSSProperties ={
    color: 'gray',
    width: '2em',
  }

  return (
    <Flex className="lesson" vertical gap={20} justify="center" align="start" style={lessonStyle}>
      <Flex
        className="lesson__header"
        style={{ cursor: "pointer", width: "100%" }}
        justify="space-between"
        onClick={toggleActiveLesson}
      >
        <Flex className="lesson__header_title" justify="left">
          {course.complete === 100 ? <CheckCircleOutlined style={{color: 'green', width: '2em'}}/> : <ClockCircleOutlined style={{color: 'black', width: '2em'}} />}
          <Typography.Title level={4} style={{ margin: "0" }}>
            {course.title}
          </Typography.Title>
        </Flex>
        {isActiveLesson ? <UpOutlined style={iconStyle} color="gray" width="4em" /> : <DownOutlined style={iconStyle}/>}
      </Flex>
      {isActiveLesson ? (
        <Flex className="lesson__main" vertical gap={10} align="start" style={{ padding: "5px" }}>
          <Flex className="lesson__main_description" gap={10}>
            <Typography.Title style={{ textWrap: "nowrap" }} level={5}>
              Информация о курсе:{" "}
            </Typography.Title>
            <Typography.Paragraph style={{ textAlign: "start" }}>{course.description}</Typography.Paragraph>
          </Flex>
          <Flex className="lesson__main_passageTime" gap={10}>
            <Typography.Title level={5} style={{ textAlign: "start" }}>
              Время прохождения:{" "}
            </Typography.Title>
            <Typography.Text>{course.passageTime}</Typography.Text>
          </Flex>

          {course.complete || currentCourse === course.title ? (
            <Flex gap={10}>
              <Button>Начать сначала</Button>
              <Button color="#4096ff" onClick={onHandlerClick}>
                Продолжить обучение <CaretRightOutlined />
              </Button>
            </Flex>
          ) : (
            <Button onClick={onHandlerClick}>
              Запустить тур <CaretRightOutlined />
            </Button>
          )}
        </Flex>
      ) : null}
    </Flex>
  );
};
