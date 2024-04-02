import { FC, CSSProperties, useState, useCallback, useEffect } from "react";
import { Layout } from "antd";
import { UserInfo } from "./UserInfo";
import { Filterbar, TFilterbarProps } from "./Filterbar";
import { LessonList, TLessonListProps } from "./LessonList";
import { lessons } from "../model/answers/data";
import { TerminList } from "./TerminList";
import { LessonApi } from "../model/answers/dataApi";

const contentStyle: CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  padding: "5px",
};

type TLessonFilter = {
  selectValue?: string;
  inputValue?: string;
};

export const Content: FC = () => {
  const [currentCourse, setCorrentCourse] = useState("");
  const [compliteCourse, setCompliteCourse] = useState(0);
  const [tabsFilter, setTabsFilter] = useState("1");
  const [courseLessons, setCourseLessons] = useState(lessons);
  const [lessonFilter, setLessonFilter] = useState<TLessonFilter>({});

  const onTabs: TFilterbarProps["onTabs"] = useCallback((key) => {
    setTabsFilter(key);
  }, []);

  const onCurrentCourse: TLessonListProps["onCurrentCourse"] = useCallback((title, complite) => {
    setCorrentCourse(title);
    setCompliteCourse(complite);
  }, []);
  //
  const onFilter: TFilterbarProps["onFilter"] = useCallback(
    (selectValue, inputValue) => {
      const newLessonFilter = { ...lessonFilter };
      if (selectValue) newLessonFilter.selectValue = selectValue;
      if (inputValue) newLessonFilter.inputValue = inputValue;
      setLessonFilter(newLessonFilter);
    },
    [lessonFilter]
  );

  useEffect(() => {
    const newLessonData = new LessonApi();
    newLessonData.getLesson()
      .then(async (data) => {
        if(data) console.log(data);
      })
      .catch(() => {
        console.log('ERROR')
      })
      
    const newFilterLessons = lessons
      .filter((lesson) => {
        if (lessonFilter.selectValue === "all") return true; //TODO значение selectValue должно браться из фильтербар
        if (lessonFilter.selectValue === "passed") return lesson.complete === 100;
        if (lessonFilter.selectValue === "new") return lesson.complete !== 100;
        return true;
      })
      .filter((lesson) => {
        if (!lessonFilter.inputValue) return true;
        return lesson.title.toLowerCase().includes(lessonFilter.inputValue.toLowerCase());
      });
      setCourseLessons(newFilterLessons);
  }, [lessonFilter]);
  return (
    <Layout.Content style={contentStyle}>
      <UserInfo compliteCourse={compliteCourse} currentCourse={currentCourse} />
      <Filterbar onTabs={onTabs} currentTabs={tabsFilter} onFilter={onFilter} />
      {tabsFilter === "1" ? (
        <LessonList courses={courseLessons} currentCourse={currentCourse} onCurrentCourse={onCurrentCourse} />
      ) : (
        <TerminList />
      )}
    </Layout.Content>
  );
};
