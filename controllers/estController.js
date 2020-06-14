//MODULES

//TLC
let estudiantes = ['cristopher', 'maría']

//HTTP-METHODS: CRUD
exports.getAllEstudiantes = (req, res) => {
    const output = JSON.parse(JSON.stringify(estudiantes))
    console.log(`Listado de estudiantes:`)
    console.log(`${output}`)
    res.status(200).send(estudiantes)
};

exports.createEstudiantes = (req, res) => {
    //console.log(`Cantidad de estudiantes antes: ${estudiantes.length + 1}`)
    estudiantes.push(`Estudiante#${estudiantes.length + 1}`)
    //console.log(`Cantidad de estudiantes después: ${estudiantes.length + 1}`)
    res.status(200).send(`Estudiante creado: ${estudiantes[estudiantes.length - 1]}`)
};

exports.getEstudiante = (req, res) => {
    console.log(req.params)
    const id = req.params.id * 1
    res.status(200).send(`Estudiante Solicitado: ${estudiantes[id - 1]}`)
};

exports.updateEstudiante = (req, res) => {
    console.log(req.params)
    const id = req.params.id * 1
    estudiantes[id - 1] = `Estudiante_Actualizado#${id}`
    res.status(200).send(`Estudiante Actualizado: ${estudiantes[id - 1]}`)
};

exports.deleteEstudiante = (req, res) => {
    console.log(req.params)
    const id = req.params.id * 1
    estudiantes.splice(id - 1, 1)
    res.status(200).send(`Estudiante Eliminado estudiantes[${id - 1}]`)
};