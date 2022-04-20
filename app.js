const express = require("express");
const app = express();
app.get("/",(req,res)=> {
    res.send("Bienvenido A Mi Pagina");
});
app.listen(1998,()=> {
    console.log("Levantó el Navegador");
})