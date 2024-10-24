class Veicolo {
    marca
    anno
    colore
    porte
    carburante

    constructor(marca, anno, colore, porte, carburante) {
        this.marca = marca
        this.anno = anno
        this.colore = colore
        this.porte = porte
        this.carburante = carburante
    }

    informazioni() {
        return `${this.marca} ${this.anno} ${this.colore}`
    }

    calcEtà() {
        const date = new Date()
        const year = date.getFullYear()
        return `La macchina ha ${year - this.anno} anni`   
    }

}

const fiat = new Veicolo('Fiat', 2019, 'blu')
console.log(fiat.informazioni(), fiat.calcEtà());


