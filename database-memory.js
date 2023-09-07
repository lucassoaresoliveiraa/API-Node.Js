import { randomUUID } from "crypto"

export class DataBaseMemory {
    #videos = new Map()

    list(){
        return this.#videos.values()
    } 

    create(video){
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    update(id, video){
        this.#videos.set(id, video)
    }

    delete(id){
        this.#videos.delete(id)
    }
}