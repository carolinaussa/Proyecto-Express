const express = require("express");
const app = express();
const PORT = 5001;
app.use(express.json());

app.get("/inicio", (req, res) => {
    res.json({ "mensaje": "Bienvenido a mi API" });
});

app.get("/informacion", (req, res) => {
    res.json({ "mensaje": "informacion del servicio" });
})

app.post("/solicitudes", (req, res) => {
    const { nombre, apellido, correo } = req.body;
    if (!correo.includes('@') || !correo.includes('.')) {
        return res.status(400).json({
            error: "El correo electrónico no es válido"
        });
    }

    res.json({
        "nombre": nombre,
        "apellido": apellido,
        "correo": correo,
        "mensaje": "Solicitud recibida"
    })
})
/*puerto*/
app.listen(PORT, () => {
    console.log("servidor ejecutandose correctamente " + PORT);
});