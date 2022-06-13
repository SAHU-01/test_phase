const express=require('express');
const zip=require('express-zip');

const app=express();

app.get('/',(req,res)=>{
    res.zip([
        {
            path:"00  Prüfdokumentation Mantelbogen CC allg.docx",
            name:"00  Prüfdokumentation Mantelbogen CC allg"
        },
        {
            path:"1.1 Anh 1 zu PD Mantelbogen CC RKZ 2.DOCX",
            name:"1.1 Anh 1 zu PD Mantelbogen CC RKZ 2"
        },
        {
            path:"2.1 Anh 2 zu PD Mantelbogen CC SKR.DOCX",
            name:"2.1 Anh 2 zu PD Mantelbogen CC SKR"
        },
        {
            path:"2.2 Anl.B zu Anh.2 SchwKZ PB Fachrecht",
            name:"2.2 Anl.B zu Anh.2 SchwKZ PB Fachrecht.docx"
        },
    ])
})

app.listen(4000,()=>{
    console.log("Backend is Running");
})