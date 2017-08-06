import { Enterpreneur } from "./enterpreneur";
import { EnterpreneurService } from "../services/enterpreneur.service";
import { TestBed } from "@angular/core/testing";
import { MissionAccomplished } from "./mission-accomplished";
import { Mission } from "./mission";

describe('Enterpreneur model tests', () => {

    
    let enterpreneurService: EnterpreneurService;

    /*beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EnterpreneurService]
        });
        enterpreneurService = TestBed.get(EnterpreneurService);
        
    });*/

    it("should return TRUE for a mission which was answered", function () {
        let mission = new Mission("", "", "", "");
        mission.id = 1;
        let missionAccomplished = new MissionAccomplished("", mission);
        let missionsAccomplished = [];
        missionsAccomplished.push(missionAccomplished);
        let result = mission.isMissionAccomplished(missionsAccomplished);
        expect(result).toBeTruthy();
    })
});