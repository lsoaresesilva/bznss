import { Injectable } from "@angular/core";
import { Mission } from "../models/mission";
import { Enterpreneur } from "../models/enterpreneur";
import { MissionAccomplishedService } from "./mission-accomplished.service";
import { Storage } from '@ionic/storage';
import { Observable } from "rxjs/Observable";

@Injectable()
export class EnterpreneurService {

    enterpreneur: Enterpreneur;

    constructor(private storage: Storage, private missionService: MissionAccomplishedService) {
        this.enterpreneur = new Enterpreneur();
        this.get().subscribe(result => {
            this.enterpreneur = result;
        });
        /*this.storage.get("enterpreneur").then(response=>{
            if(response != null){
                this.enterpreneur = JSON.parse(response);
            }
        }).catch(err=>{

        });*/
    }

    get() {
        return new Observable<any>(observer => {
            this.missionService.listAll(null).subscribe(result => {

                if (this.enterpreneur == null) {
                    observer.next(new Enterpreneur());
                } else {
                    observer.next(this.enterpreneur);
                }
                
                this.enterpreneur.missionsAccomplished = result;
                this.enterpreneur.calculateScore();
                observer.complete();

            });


        });
    }

}