function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
  
    this.inputNewGrade = function(newGrade) {
      this.grades.push(newGrade);
    };
  
    this.computeAverage = function() {
      if (this.grades.length === 0) {
        return 0;
      }
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    };
  }
  
 
  const student1 = new Student("Ivan", "Agaba");
  const student2 = new Student("Tina", "Smith");
  
  student1.inputNewGrade(90);
  student1.inputNewGrade(85);
  
  student2.inputNewGrade(95);
  student2.inputNewGrade(88);
  
  console.log(`${student1.firstName} ${student1.lastName}'s Average Grade: ${student1.computeAverage()}`);
  console.log(`${student2.firstName} ${student2.lastName}'s Average Grade: ${student2.computeAverage()}`);
  