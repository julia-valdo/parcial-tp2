class NotasMem {

    constructor() {
        this.notas = [
            {
                "nota": 7
            },
            {
                "nota": 8
            },
            {
                "nota": 9
            },
            {
                "nota": 10
            } 
        ]
    }

    getNext_Id(notas) {
        const lg = notas.length
        return lg ? parseInt(notas[lg - 1]?.id || 0) + 1 : 1
    }

    obtenerNotas = async () => {
        try {
            return this.notas
        }
        catch(error) {
            console.log('error en obtenerNotas', error)
            return []
        }
    }

    guardarNota = async nota => {
        try {
            this.notas.push(nota)
            return nota
        }
        catch(error) {
            console.log('Error en guardarNota:', error)
            let nota = {}

            return nota
        }
    }
}

export default NotasMem