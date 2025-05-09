//QUESTION ONE

function FeatureToggle(featureName,isEnabled,userGroupAccess){
    this.featureName = featureName
    this.isEnabled = isEnabled
    this.userGroupAccess = userGroupAccess
}

FeatureToggle.prototype.canAccess = function(userRole){
if (`{this.isEnabled}`)return false;{
return this.userGroupAccess.includes(userRole)
}
}

FeatureToggle.prototype.toggleFeature = function(flag){
this.isEnabled = flag
}

const feature = FeatureToggle("Instagram",false["betaTester","admins"])
console.log(feature.canAccess("betaTesters"));
feature.toggleFeature(true)
console.log(feature.canAccess("betaTesters"))
console.log(feature.canAccess("regular"))


//QUESTION TWO

function Timelog(freelancerName,projectDetails,logs){
    this.freelancerName = freelancerName
    this.projectDetails = projectDetails
    this.logs = logs
}
Timelog.prototype.totalEarnings= function(){

}
