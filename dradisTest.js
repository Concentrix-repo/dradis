//Script per Adcentral, apre il numero di telefono
//SETTINGS:
var timer = 100;
//END SETTINGS
function adcentral(){
   //console.log("11111111111111111");
   //link1 = $("div.supporting-text-bottom>div:nth-child(1)>div:nth-child(2)>a")[0].click(); //opening the link
   phoneNum = $("li:contains('Contact Phone')").text();
   if (checkNum(phoneNum)){
       googleIt(fmt(getNum(phoneNum)))
   }
   else
   {
       alert("Not a number")
   }
}
function basestar(){
   //open Id link
   //open email
   //$("i#lde-2")[0].click();
   //search name + company name
   var name = $("div.supporting-text-bottom>div:nth-child(2)>div:nth-child(2)>span").text();
   var company = $("div.supporting-text-bottom>div:nth-child(6)>div:nth-child(2)>span").text();
   var company2 = $("td.jobCompany").text();
   var location = $("td.jobLocation").text();
   var email1 = $("span#clip-0").text();
   var email2 = $("span#clip-3").text();
   if (company.toUpperCase() !== company2.toUpperCase()){ //entrambe le ricerche
    alert("Search company and location?")
           googleIt(company, location);
           googleIt(company2, location); 
       
   }
   else
    {
    alert("Search secondary company and the location?")
            googleIt(company2, location);    
       
   }
   if( company.toUpperCase() !== name.toUpperCase() ){
   alert("Search name and company?")
            googleIt(name, company);
       
           
    }
   if(confirm("Open Job description?")){
        $("td.jobId>a:nth-child(2)")[0].click();
   }
   
   //searching mail
   if (email1.toLowerCase() === email2.toLowerCase()){
       if(confirm("Open email?")){
            $("i#lde-2")[0].click();
        }
   }
   else{
       if(confirm("Open both emails?")){
            $("i#lde-2")[0].click();
            $("i#lde-5")[0].click();
        }
   }
    if (confirm("Check AdCard?")){
        $("div.supporting-text-bottom>div:nth-child(1)>div:nth-child(2)>a")[0].click()
    }
    
}
function googleIt(str1, str2){
   var qry = ""
   for (var i = 0; i < arguments.length; i++) {
       qry += fmt(arguments[i]) + " ";
       if (i === 2) {
           break;
       }
 }
 window.open('https://www.google.com/search?q=' + fmt(qry), '_blank');
}
function fmt(str1){ //format strings to google it
   return str1.replace(" ", "+");
}
function getNum(str1){
   str2 = str1.slice(str1.indexOf(":")+1); //slice the query row to get the query keyword
   return str2
}
function checkNum(str1){
   if(str1.indexOf("x") >= 0) {
       return false
   }
   return true
}
$().ready(function(){
   if (window.location.href.indexOf("adcentral") >= 0) { //check if we're on the correct page
       //alert("Adcentral Detected");
       setTimeout(adcentral, timer);
   }
   else if (window.location.pathname.indexOf("tier") >= 0) {
       //alert("basestar Detected");
       setTimeout(basestar, timer);
   }
       else if (window.location.pathname.indexOf("manual") >= 0) {
       //alert("basestar Detected");
       setTimeout(basestar, timer);
   }
   });
