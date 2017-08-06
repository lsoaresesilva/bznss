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

    it("should calculate the score", function () {
        let enterpreneur: Enterpreneur;
        let missionsAccomplished:MissionAccomplished[] = [];
        let mission = new Mission("", "", "", 10);
        missionsAccomplished.push( new MissionAccomplished("", mission));
        enterpreneur = new Enterpreneur(missionsAccomplished);
        enterpreneur.calculateScore()
        expect(enterpreneur.score).toBe(10);
        enterpreneur.calculateScore()
        expect(enterpreneur.score).toBe(10);
    })
});