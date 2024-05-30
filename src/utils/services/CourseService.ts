import { baseApiUrl } from "utils/constants"

export const CourseService = {
    async getTags() {
        const res = await fetch(`${baseApiUrl}/courses.json`);
        const data = await res.json();
        const courses: Course[] = data;

        const tags: string[] = Array.from(new Set(courses?.flatMap((course: Course) => course.tags)));
        return tags
    },
    async getCourses({ query }: { query: string }) {
        const res = await fetch(`${baseApiUrl}/courses.json`);
        const data = await res.json();
        const courses: Course[] = data;

        const filteredCourses =
            query === "all" || query === "" ?
                courses
                :
                courses.filter(course => course.tags.includes(query));

        await new Promise(resolve => setTimeout(resolve, 1500));//добавила для демонстрации спинера 

        return filteredCourses

    }
}