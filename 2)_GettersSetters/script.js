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

module.export = User; // Exporting the class

const rock = new User("rock", "rock@gmail.com"); // Importing the class

console.log(rock.getCourseList());
