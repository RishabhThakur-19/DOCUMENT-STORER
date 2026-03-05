const User=require("../models/User");
const PDFDocument = require('pdfkit');

exports.submitData=async(req,res)=>{
    const data=await User.create(req.body);
    res.json(data);
     console.log("Body received",req.body);
    };

   
    //generate pdf
   
exports.generatePDF=async(req,res)=>{
    try{
     const user=await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    const doc=new PDFDocument();
    res.setHeader('Content-Type','application/pdf');  
    const safeName=(user.name || "user").replace(/[^a-z0-9]/g,"_").toLowerCase();
    if(req.query.preview==="true"){
        res.setHeader('Content-Disposition',"inline");          
    }else{
        res.setHeader('Content-Disposition',`filename=${safeName}.pdf`);

    }  
    res.setHeader('Content-Disposition',`attachment; filename=${safeName}.pdf`);
    doc.pipe(res);
    doc.fontSize(20).text(`Report for ${user.name}`,{align:'center'});
    doc.moveDown();

    // additional user details to the PDF
    let y=90;
    const checkpage=()=>{
        if(y>700){
            doc.addPage();
            y=50;
        
        }
    ;}
    // section function

    const section=(title)=>{
        checkpage();
        doc.moveTo(40,y).lineTo(550,y).stroke("#bbbbbb");
        y+=10;
        doc.font("Helvetica-Bold").fontSize(16).text(title,40,y);
        y+=20;
    };

    // field fucntion
    const field=(label,value)=>{
        checkpage();
        doc.font("Helvetica-Bold").fontSize(12).text(label + ":",50,y);
        doc.font("Helvetica").text(String(value || "N/A") ,220,y,{width:300});
        y+=20;

    };

// personal details section
    section("Personal Details");
    field("Name", user.name);
    field("Father Name", user.fatherName);
    field("Mother Name", user.motherName);
    field("Spouse", user.spouse);
    field("Date of Birth", user.dob);
    field("Birth Place", user.birthPlace);
    field("Mobile", user.mobile);
    field("Email", user.email);
    field("Address", user.address);

//Document details section 
    
    section("Document Details");
    field("PAN", user.pan);
    field("Aadhar", user.aadhar);
    field("Bank Account", user.bankAccount);

// Nominee details section
    section("Nominee Details");
    field("Nominee Name", user.nomineeName);
    field("Nominee Aadhar", user.nomineeAadhar);
    field("Nominee Bank", user.nomineeBank);

// occupation details section    
    section("Occupation & income");
    field("Education", user.education);
    field("Occupation", user.occupation);
    field("Employer", user.employer);
    field("Income Source", user.incomeSource);
    field("Annual Income", user.annualIncome);
    field("Duty Nature", user.dutyNature);
    field("Service Length", user.serviceLength);
    field("Previous Policies", user.previousPolicies);

// personal physical details section    
    section("Personal & Physical Details");
    field("table Term", user.tableTerm);
    field("Husband Policy", user.husbandPolicy);
    field("Height", user.height);
    field("weight", user.weight);
    field("Brother's Age", user.brothersAge);
    field("Sister's Age", user.sistersAge);
    field("Children's Age",user.childrenAge);

// other documents
     section("OTHER DOCUMENTS")
     field("Other Document",user.otherDocs);
     field("ITRS",user.itrs);
     field("NACH sign",user.nachSign);
     field("Photograph",user.photograph);
    doc.end();
}catch(error){
    console.log(error);
    res.status(500).send("server error");
}
};