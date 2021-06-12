const express = require('express');
const db = require('./data/database')
const estudio = require("./routers/estudio")
const titulo = require("./routers/titulos")

/// -------------------------------------------------
/* Instanciando */ const app = express();


/*********/  db.connect();

/** configs */  
app.use(express.json());


app.use("/estudio", estudio)
app.use("/titulo", titulo)

// app.get("*", (req,res) => res.status(404).json({ message : 'pagina nao encontrada'}))

/* exports */ module.exports = app;