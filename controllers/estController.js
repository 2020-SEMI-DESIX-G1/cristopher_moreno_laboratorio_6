//MODULES

//TLC
let estudiantes = ['cristopher', 'maría']

//HTTP-METHODS
exports.getAllEstudiantes = (req, res) => {
    const data = estudiantes
    res.status(200)
        .send(data)
};

