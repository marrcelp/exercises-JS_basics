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

    getSubjectAvg(subject) {
        const subjectSum = this.grades[subject].reduce((acc, element) => acc + element);
        const subAvg = subjectSum / this.grades[subject].length;
        console.log(`Srednia arytmetyczna z ${subject} wynosi ${subAvg}`);
        return subAvg;
    }

    getAvg() {
        const allGrades = Object.values(this.grades).flat();
        const gradesSum = allGrades.reduce((acc, element) => acc + element);
        const gradesAvg = (gradesSum / allGrades.length).toFixed(2);
        console.log(`Srednia wszystkich ocen ucznia wynosi ${gradesAvg}`);
        return gradesAvg;
    }

}


const student1 = new Student('Marek', 'Nowak');
student1.addGrade('math', 4);
student1.addGrade('math', 6);
student1.addGrade('english', 3);
student1.addGrade('english', 1);
student1.addGrade('english', 5);
student1.addGrade('english', 5);
student1.addGrade('english', 4);
student1.getSubjectAvg('english');
student1.getAvg();

console.log(student1)


const student2 = new Student('Jan', 'Kowalski');
student2.addGrade('math', 3);
student2.addGrade('math', 5);
student2.addGrade('english', 4);
student2.addGrade('english', 3);
student2.getSubjectAvg('english');
student2.getAvg();

console.log(student2)