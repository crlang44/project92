export class Clock{
    time: number;
    
    constructor(){
    }

    start(play: ()=>void){
        this.time = 0;
        // Execute a play iteration every second
        setInterval(play, 1000);
    }
}