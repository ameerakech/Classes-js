// //QUESTION ONE

 function FeatureToggle(featureName,isEnabled,userGroupAccess){
    this.featureName = featureName
    this.isEnabled = isEnabled
    this.userGroupAccess = userGroupAccess
 }

 FeatureToggle.prototype.canAccess = function(userRole){
if (feature.userGroupAccess == "admins"){
    return true
}
 }

 FeatureToggle.prototype.toggleFeature = function(flag){
this.isEnabled = flag
 }

 const feature = new FeatureToggle("Payroll",true,["betaTesters","admins"])
 feature.toggleFeature(false)
 console.log(feature)
 feature.canAccess("admins")
 const role = "chef"

 if (feature.payroll == "admins"){
    return true
 }
 else{
    switch (role){
        case "admins":
        case "betaTesters":
            console.log("can have access")
            break

        default:
            console.log("does not have access")
            break
    }
    
 }
console.log("===========================")

// //QUESTION TWO

function Timelog(freelancerName,projectDetails,logs){
    this.freelancerName = freelancerName
    this.projectDetails = projectDetails
    this.logs = []
}

Timelog.prototype.totalEarnings = function(){
return this.logs.reduce((a,b)=> a + b.hoursWorked, 0) * this.projectDetails.hourlyRate
}

Timelog.prototype.filterLogs = function(startDate,endDate){
return this.logs.filter(log => new Date(log.date) >= new Date(startDate) && new Date(log.date)  <= new Date (endDate))
}

Timelog.prototype.weeklyHours = function(hours){
if (hours >40){
    console.log("exceeded")
}
else{
    console.log("not exceeded")
}
}

Timelog.prototype.addLogs = function(date, hoursWorked){
    this.logs.push({date, hoursWorked})
}

const timeLog = new Timelog ("developer",{name:"Website",hourlyRate:50000})
timeLog.addLogs("20/2/2025",20)
timeLog.addLogs("20/2/2025",10)

console.log(timeLog);
console.log(timeLog.totalEarnings())
console.log(timeLog.weeklyHours(30))

console.log("=======================");


//QUESTION THREE
function Order(customer, items, status) {
  this.customer = customer;
  this.items = items;
  this.status = status;
}
Order.prototype.calculateTotalCost = function() {
  let totalCost = 0;
  this.items.forEach(item => {
  totalCost += item.quantity * item.unitPrice;
  });
  return totalCost;
};
Order.prototype.updateStatus = function(paymentStatus) {
  if (paymentStatus === 'paid') {
  this.status = 'paid';
  } else {
  this.status = 'unpaid';
  }
};
Order.prototype.categorizeUrgency = function() {
  switch (this.status) {
  case 'paid':
  return 'Low urgency';
  case 'unpaid':
  if (this.items.length > 0) {
  return 'High urgency';
  } else {
  return 'Medium urgency';
  }
  default:
  return 'Medium urgency';
  }
};
const order = new Order("Mary", [{name: "cutlery", quantity: 1, unitPrice: 10}], "paid");
console.log(order.calculateTotalCost());
order.updateStatus('paid');
console.log(order.status);
console.log(order.categorizeUrgency());

console.log("===========================================")

//QUESTION FOUR
class Employee{
    constructor(id,name,performanceMetrics,feedback){
        this.id = id
        this.name= name
        this.performanceMetrics = performanceMetrics
        this.feedback = feedback
    }
}

Employee.prototype.averageScore = function(){
return this.performanceMetrics.reduce((total,grade)=> a+ b.grade,0)/this.performanceMetrics.length
}
Employee.prototype.perfomanceLevel = function(){
if (this.averageScore >= 90){
    console.log("Execellent")
}
else if (this.averageScore = 60){
    console.log("Good")
}
else{
    console.log("Improve");
}
}

Employee.prototype.addFeedback = function(newFeedback){
if (typeof newFeedback == "string" && this.newFeedback.length > 0){
    this.feedback.push(newFeedback);
    return true
} else{
    return false
}
}
const employee = new Employee ("cd054","Mary",94,{communication:"60", efficiency:"90",reliabilty:"40"},["Execellent","good","Improve"])
console.log(employee);
console.log(employee.perfomanceLevel(90))
console.log(employee.addFeedback())

console.log("====================================")

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

console.log('==========================================')


