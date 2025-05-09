//QUESTION ONE

function FeatureToggle(featureName,isEnabled,userGroupAccess){
    this.featureName = featureName
    this.isEnabled = isEnabled
    this.userGroupAccess = userGroupAccess
}

FeatureToggle.prototype.canAccess = function(userRole){
return this.userGroupAccess.includes(userRole)

}

FeatureToggle.prototype.toggleFeature = function(flag){
this.isEnabled = flag
}

const feature = new FeatureToggle("Instagram",false,["betaTester","admins"])
console.log(feature.canAccess("betaTesters"));
feature.toggleFeature(true)


//QUESTION TWO

function Timelog(freelancerName,projectDetails,logs){
    this.freelancerName = freelancerName
    this.projectDetails = projectDetails
    this.logs = logs

}
Timelog.prototype.totalEarnings= function(){
return this.logs.reduce ((total,log)=>total+loghours)

}

//QUESTION FIVE
class Course {
    constructor(title, instructor, students) {
      this.title = title;
      this.instructor = instructor; 
      this.students = students; 
    }

    getCompletedStudents() {
      return this.students
        .filter(student => student.completionStatus)
        .map(student => student.name);
    }
    countStudentsByExpertise(expertise) {
      return this.students.filter(
        student => this.instructor.expertise === expertise
      ).length;
    }
    instructorStudentMessage() {
      const studentCount = this.students.length;
      switch (true) {
        case studentCount > 5:
          return `${this.instructor.name} has a large class of ${studentCount} students!`;
        case studentCount > 0:
          return `${this.instructor.name} is teaching ${studentCount} students.`;
        default:
          return `${this.instructor.name} has no students yet.`;
      }
    }
  }
  
  const course = new Course(
    "JavaScript Basics",
    { name: "Ameer", expertise: "Programming" },
    [
      { name: "John", completionStatus: true },
      { name: "Mary", completionStatus: false },
      { name: "Susan", completionStatus: true }
    ]
  );
  console.log(course.getCompletedStudents());
  console.log(course.countStudentsByExpertise("Programming")); 
  console.log(course.instructorStudentMessage()); 


