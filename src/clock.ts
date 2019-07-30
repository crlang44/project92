export class Clock{
    time: number;
    
    constructor(){
    }

    start(play: ()=>void){
        this.time = 0;
        // Execute a play iteration every 1 second
        setInterval(play, 1000);
    }
}