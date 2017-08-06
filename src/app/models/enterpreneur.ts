import { MissionAccomplished } from "./mission-accomplished";

export class Enterpreneur {
    id: number;
    score: number;
    missionsAccomplished:MissionAccomplished[];

    constructor(missionsAccomplished?: MissionAccomplished[]) {
        
        this.missionsAccomplished = missionsAccomplished;
        this.calculateScore();
        //this.score = this.calculateScore();
        
    }

    calculateScore() {
        this.score = 0;
        if (this.missionsAccomplished != null && this.missionsAccomplished != undefined) {
            for (let i = 0; i < this.missionsAccomplished.length; i++) {

                this.score += this.missionsAccomplished[i].mission.score;
            }
        }

        //return score;
    }
}