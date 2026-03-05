const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
   name:String,
  fatherName:String,
  motherName:String,
  spouse:String,
  dob:String,
  birthPlace:String,
  mobile:String,
  email:String,
  address:String,

  pan:String,
  aadhar:String,
  bankAccount:String,

  nomineeName:String,
  nomineeAadhar:String,
  nomineeBank:String,

  education:String,                             
  occupation:String,
  employer:String,
  incomeSource:String,
  annualIncome:String,  
  dutyNature:String,                               
  serviceLength:String,
  previousPolicies:String,

  tableTerm:String,
  husbandPolicy:String,
  height:String,
  weight:String,
  brothersAge:String,
  sistersAge:String,
  childrenAge:String,

  otherDocs:String,
  itrs:String,
  nachSign:String,
  photograph:String,
},{timestamps:true});
module.exports = mongoose.model("User",userSchema);


