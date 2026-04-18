const User=require("../models/User");
const PDFDocument = require('pdfkit');
const path=require("path");

exports.submitData=async(req,res)=>{
    try{
            console.log("FILE:", req.file); 
    console.log("BODY:", req.body);
    const data=await User.create({...req.body, photograph: req.file ? req.file.path : null});
    res.json(data);
     console.log("Body received",req.body);
    }catch (err) {
    console.log(err);
    res.status(500).send("error");
  }}

   
    //generate pdf
   
exports.generatePDF=async(req,res)=>{
    try{
     const user=await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    const doc=new PDFDocument();
    res.setHeader('Content-Type','application/pdf');  
    const safeName=(user.name.toLocaleLowerCase()+"@generated-report(" + new Date().toLocaleString().toLocaleLowerCase() + ")").replace(/\s+/g, '').replace(/[^a-z0-9\-()_.@]/g,"-").toLowerCase();
    if(req.query.preview==="true"){
        res.setHeader('Content-Disposition',"inline");          
    }else{
        res.setHeader('Content-Disposition',`filename=${safeName}.pdf`);

    }  
    res.setHeader('Content-Disposition',`attachment; filename=${safeName}.pdf`);
    doc.pipe(res);
    doc.font("Helvetica-Bold").fontSize(30).text(`Report for ${user.name}`,50);
    doc.moveDown(10);
    //  TO BE READ FOR UNDERSTANDING
    const photoboxX=490;
    const photoboxY=40;
    const photoboxWidth=100;
    const photoboxheight=100
    doc.rect(photoboxX,photoboxY,photoboxWidth,photoboxheight).stroke();
    if(user.photograph){
        
            doc.image(path.resolve(user.photograph),photoboxX+5,photoboxY+5, 
                {width:photoboxWidth-10,
                height:photoboxheight-10,
                fit:[photoboxWidth-10,photoboxWidth-10],
                align:"center",
                valign:"center"});
                }
    else{
        doc.fontSize(11).text(
            "PHOTO NOT FOUND",
            photoboxX+8,
            photoboxY+photoboxheight/4
        )
    }

    // additional user details to the PDF
    let y=140;
    const checkpage=()=>{
        if(y>700){
            doc.addPage();
            y=50;
        
        }
    ;}
    // section function

    const section=(title)=>{
        checkpage();
        y+=20;
        doc.font("Helvetica-Bold").fontSize(20).text(title,50,y);
        y+=30;
    };

    // field fucntion
    const field=(label,value)=>{
        checkpage();
        doc.rect(40,y,200,20).stroke();
        doc.rect(240,y,300,20).stroke();
        doc.font("Helvetica-Bold").fontSize(12).text(label + ":",45,y+5);
        doc.font("Helvetica").text(String(value || "N/A") ,245,y+5,{width:300});
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
