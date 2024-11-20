import fs from 'node:fs'

export class Anime {
    instance;
    listaAnimes;
    constructor() {
        if (typeof Anime.instance === 'object') {
            return Anime.instance
        }
        Anime.instance = this
        this.listaAnimes = this.getDataFromFile()
        return this
    }

    getDataFromFile() {
        const archivo = new Promise((resolve, reject) => {
            fs.readFile('animes.json', (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(JSON.parse(data.toString()))
            })
        })
        return archivo
    }
    writeNewData(data) { 
        return new Promise((resolve, reject) => {
            fs.writeFile('animes.json', JSON.parse(data), (err) => {
                if (err) {
                    reject(false)
                }
                resolve(true)
            })
        })
    }

    all() {
        return this.listaAnimes
    }
    findById(id){
        if(this.listaAnimes.length < id){
            return this.listaAnimes[id]
        }
        return null
    }

    update(id, data) {

    }

    delete() {

    }

}

