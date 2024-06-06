abstract class TakePhoto {
    constructor(
        public cameraMode : string,
        public filter : string
    
    ){}

    abstract getSepia() : void
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode : string,
        public filter : string,
        public bust : number
    ){
        super(cameraMode,filter)
    }

    getSepia() : void {
        console.log("Speia")
    }
}