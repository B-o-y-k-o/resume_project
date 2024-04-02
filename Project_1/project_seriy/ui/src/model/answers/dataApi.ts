export class LessonApi {
    async getLesson () {
        const url = 'http://localhost:3000/lesson';
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}