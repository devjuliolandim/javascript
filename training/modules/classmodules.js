class Courses{

    static courses = ["Java", "C", "HTML", "CSS", "JavaScript"]

    static getCourses = () =>{
        return this.courses
    }

    static setCourse = (newCourse) =>{
        this.courses.push(newCourse)
    }

    static cleanCourses = () => {
        this.courses = []
    }

    static resetCourses = () => {
        this.courses = ["Java", "C", "HTML", "CSS", "JavaScript"]
    }
}

export default Courses