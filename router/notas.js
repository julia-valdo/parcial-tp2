import express from 'express'
import ControladorNotas from '../controlador/notas.js'

class RouterNotas {

    constructor() {
        this.controladorNotas = new ControladorNotas()
        this.router = express.Router()
    }

    start() {
        this.router.get('/listado', this.controladorNotas.obtenerNotas)
        this.router.get('/promedio', this.controladorNotas.obtenerPromedio)
        this.router.get('/minmax', this.controladorNotas.obtenerMinMax)
        this.router.get('/cantidad', this.controladorNotas.obtenerCantidad)
        this.router.post('/ingreso', this.controladorNotas.guardarNota)
        return this.router
    }
}

export default RouterNotas