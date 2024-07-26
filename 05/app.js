class Student {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.grades = {}
    };

    addGrade(subject, grade) {
        if (!this.grades[subject]){
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
    }
}

const marek = new Student('Marek', 'Nowak');
console.log(marek);
