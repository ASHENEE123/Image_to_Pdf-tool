import express from "express"
import {PDFDocument,rgb} from "pdf-lib"
import fs from "fs/promises"
import multer from "multer"
const app=express()

//creating new pdf
const pdf=await PDFDocument.create()
const page=pdf.addPage()
const {width,height}=page.getSize()
console.log(width+" "+height)
page.drawText("hello this is first pdf created by me",{
    x:200,
    y:height-4*30,
    color:rgb(0,0.56,0.34)
})
//loading the existing file
try{
const path=await fs.readFile("Add File path")
const newpdf=await PDFDocument.load(path)
const page1=newpdf.getPages()
const firstpage=page1[0]
const{width1,height1}=firstpage.getSize()
firstpage.drawText("hello modified file ...",{
    x:0,
    y:height1
})

}
catch(err){
    console.log(err.message)
}

//embeddding the image and testing it 
const img="Add file path"
try{
const imgread= await fs.readFile(img)
const jpeg =await pdf.embedJpg(imgread)
const jpg= jpeg.scale(0.5)
console.log(jpg.width+" "+jpg.height)
const page2=pdf.addPage()
console.log(page2.getWidth()+" "+page2.getHeight())
page2.drawImage(jpeg,{
    x:page2.getWidth()/2-jpg.width/2,
    y:page2.getHeight()/2-jpg.height/2,
    width:jpg.width,
    height:jpg.height
})
const save=await pdf.save();
const rout="./views/output1.pdf" ##create folder of views for the result
await fs.writeFile(rout,save)
setTimeout(async function clear(){
    await fs.unlink(rout)
    console.log("file deleted")
},60000)
}
catch(err){
    console.log(err.message)
}


