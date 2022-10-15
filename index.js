const fs=require("fs");// fs module ko fs name k conts m store kra diya h fr use kiya usko
fs.writeFileSync("vnu.txt","welcome Bro");//creating new file  nd writing in this 
// sync vaale m data overwrite ho jata hai agr dobara same file pr use kre to 
fs.writeFileSync("vnu.txt","welcome");
// exiting m add krne krne k liye
fs.appendFileSync("vnu.txt", "thnku");
// read data
const buf_=fs.readFileSync('vnu.txt');
console.log(buf_);
//<Buffer 77 65 6c 63 6f 6d 65 74 68 6e 6b 75> ye data milega node bufer data typ bna deta hai
org_data=buf_.toString();
console.log(org_data);//welcomethnku
fs.renameSync('vnu.txt','zapy.txt');//rename file
