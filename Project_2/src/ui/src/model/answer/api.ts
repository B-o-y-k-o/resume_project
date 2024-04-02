export type TElem = {
  question: string;
  skill: string;
  languege: string;
  answer: string;
  id: number;
};

export class AnswersApi {

  async sortQuestions(type: string, skill: string) {
    let data = await this.fetchAdd();
    const result: TElem[] = [];
    if (type === "questions") {
      data.map((elem: TElem) => {
        if (elem.skill === skill) {
          result.push(elem);
        }
      });
    }
    if (type) {
      data.map((elem: TElem) => {
        if (elem.languege === type && elem.skill === skill) {
          result.push(elem);
        }
      });
      return result;
    }
  }

  async setAnswer(question = "", language = "", skill = "", answer = "") {
    await fetch("http://localhost:3000/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
        language: language,
        skill: skill,
        answer: answer,
      }),
    });
  }
  
  async fetchAdd() {
    const url = "http://localhost:3000/answers";
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
}
