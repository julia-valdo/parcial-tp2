import NotasMem from '../model/DAOs/notasMem.js'

class ServicioNotas {

    constructor() {
        this.notasMem = new NotasMem()
    }

    async obtenerNotas() { 
        let notas = await this.notasMem.obtenerNotas()
        return notas.map(n => n.nota).join(',')
    }

    obtenerPromedio = async () => {
        const notas = await this.notasMem.obtenerNotas()
        const suma = notas.map(n => n.nota).reduce((acc, nota) => acc + nota, 0)
        return suma / notas.length
    }

    obtenerMin = async () => {
        const notas = await this.notasMem.obtenerNotas()
        const nota = notas.sort((a,b) => a.nota - b.nota)[0]
        return nota
    }

    obtenerMax = async () => {
        const notas = await this.notasMem.obtenerNotas()
        const nota = notas.sort((a,b) => b.nota - a.nota)[0]
        return nota
    }

    obtenerCantidad = async () => {
        const notas = await this.notasMem.obtenerNotas()
        return notas.length
    }

    async guardarNota(nota) { 
        return await this.notasMem.guardarNota(nota) 
    }
}

export default ServicioNotas
