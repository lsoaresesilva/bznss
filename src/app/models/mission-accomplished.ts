import { Mission } from "./mission";

export class MissionAccomplished {
    id:number;
    enterpreneur_id:number;
    mission:Mission;
    response:string = "";

    constructor(response, mission){
        this.response = response;
        this.mission = mission;
    }

    
}