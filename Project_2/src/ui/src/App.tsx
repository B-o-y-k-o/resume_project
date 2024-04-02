import Content from "./components/Content/Content";
import { Header } from "./components/Header/Header";
import { IModalProps, Modal } from "./components/Modal/Modal";
import { useCallback, useState } from "react";
import { AnswersApi } from "./model/answer/api";
import { TContainerProps } from "./components/Content/Content";

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal: TContainerProps["onAddQuestion"] = useCallback(() => setShowModal(true), []);
  const newAnswerApi = new AnswersApi();

  const sendQuestion: IModalProps["onSendQuestion"] = useCallback((question, language, skill, answer, name) => {
    if (question && name === "admin" && answer) {
      newAnswerApi.setAnswer(question, language, skill, answer);
      setShowModal(false);
    } else {
      setShowModal(false);
    }
  }, []);

  return (
    <>
      <Modal visible={showModal} onSendQuestion={sendQuestion} />
      <Header />
      <Content onAddQuestion={openModal} />
    </>
  );
}

export default App;
