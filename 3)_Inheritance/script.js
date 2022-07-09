class User {

    #courseList = [] // This is a private variable

    // Now to access the private variable we create getters-setters

    // Setter
    enrollCourse(name) {
        this.#courseList.push(name);
    }

    // Getter
    getCourseList() {
        return this.#courseList;
    }
}

class SubAdmin extends User{

    constructor(name, email) {
        super(name, email);
    }

    getAdminInfo() {
        return "I am sub-admin!";
    }

    // Note : If we use static in a function in the base class, then the child class won't be able to access that function

}