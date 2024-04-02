import "./Content.scss";
import { QuestionContainer } from "../QuestionContainer/QuestionsContainer";
import { Menu } from "../Menu/Menu";
import { memo, useCallback, useState, FC } from "react";
import { IMenuProps } from "../Menu/Menu";

export type TContainerProps = {
  onAddQuestion: IMenuProps["onAddQuestion"];
};

const Content: FC<TContainerProps> = memo(function Content(props) {
  const { onAddQuestion } = props;

  const [sortQuestions, setSortQuestion] = useState("questions");
  const [skillQuestion, setSkillQuestion] = useState("junior");

  const onSortQuestion: IMenuProps["onClick"] = useCallback((type) => {
    setSortQuestion(type);
  }, []);

  const onSkillQuestion: IMenuProps["onSkillQuestion"] = useCallback((skill) => {
    setSkillQuestion(skill);
  }, []);

  return (
    <div className="content">
      <Menu onAddQuestion={onAddQuestion} onClick={onSortQuestion} onSkillQuestion={onSkillQuestion} />
      <QuestionContainer type={sortQuestions} skill={skillQuestion} />
    </div>
  );
});

export default Content;
