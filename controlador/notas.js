import ServicioNotas from '../servicio/notas.js'

class ControladorNotas {

    constructor() {
        this.servicioNotas = new ServicioNotas()
    }

    obtenerNotas = async (req,res) => {
        try {
            const notas = await this.servicioNotas.obtenerNotas()
            res.json({notas})
        }
        catch(error) {
            console.log('Error en obtenerNotas', error)
        }
    }

    obtenerPromedio = async (req,res) => {
        try {
            const promedio = await this.servicioNotas.obtenerPromedio()
            res.json({promedio})
        }
        catch(error) {
            console.log('Error en obtenerPromedio', error)
        }
    }

    obtenerMinMax = async (req,res) => {
        try {
            const notaMin = await this.servicioNotas.obtenerMin()
            const notaMax = await this.servicioNotas.obtenerMax()
            res.json({min: notaMin.nota, max: notaMax.nota})
        }
        catch(error) {
            console.log('Error en obtenerMinMax', error)
        }
    }

    obtenerCantidad = async (req,res) => {
        try {
            const cantidad = await this.servicioNotas.obtenerCantidad()
            res.json({cantidad})
        }
        catch(error) {
            console.log('Error en obtenerCantidad', error)
        }
    }    

    guardarNota = async (req,res) => {
        try {
            let nota = req.body
            let notaGuardada = await this.servicioNotas.guardarNota(nota)
            res.json(notaGuardada)
        }
        catch(error) {
            console.log('Error en guardarNota', error)
        }
    }
}

export default ControladorNotas
