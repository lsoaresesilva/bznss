import { MissionAccomplished } from "./mission-accomplished";

export class Mission {
    id: number;
    title: string;
    description: string;
    objective: string;
    score: number;
    nextMission: Mission;
    previousMission: Mission;


    constructor(title, description, objective, score) {
        this.title = title;
        this.description = description;
        this.objective = objective;
        this.score = score;
    }

    defineCSS(missionsAccomplished: MissionAccomplished[]){
        if( this.isMissionAccomplished(missionsAccomplished) ){
            return "missionAccomplished";
        }else{
            return "missionPending";
        }
    }

    isMissionAccomplished(missionsAccomplished: MissionAccomplished[]) {
        let result = false;
        let mission = this;
        if (missionsAccomplished != null && missionsAccomplished != undefined) {
            missionsAccomplished.filter(function (missionAccomplished) {
                if (missionAccomplished.mission.id == mission.id) {
                    result = true;
                }

            });
        }

        return result;
    }
}