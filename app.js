const express = require("express");
const app = express();
const path = require("path");



let producto ={
    tipoProducto : null,
    precio : null,
    cantidad : null
}



app.get("/",(req,res)=> {
    res.send("Bienvenido A Mi Pagina");
});
app.get("/home",(req,res)=> {
    res.send("Bienvenido Al home");
});
app.get("/perfil",(req,res) => {
    res.send(saludo);
});
app.get("/producto/agregar",(req,res)=>{
    res.send(producto);
});

app.get("/home/ver",(req,res)=>{
    let pathtml = path.join(__dirname,"./views/home.html");
    res.sendFile(pathtml);
});










app.listen(1998,()=> {
    console.log("Levantó el Navegador");
})

