import { Injectable } from "@angular/core";
import { Mission } from "../models/mission";
import { MissionAccomplished } from "../models/mission-accomplished";
import { Enterpreneur } from "../models/enterpreneur";
import { Storage } from '@ionic/storage';
import { EnterpreneurService } from "./enterpreneur.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MissionAccomplishedService {

    //missionsAccomplished: MissionAccomplished[];

    constructor(private storage: Storage) {


        //let missionOne = new MissionAccomplished();
        //missionOne.mission_id = 1;
        //this.missionsAccomplished.push(missionOne);
    }

    orderByMissionAccomplished() {

    }

    listAll(enterpreneur: Enterpreneur) {
        return new Observable<any>(observer => {
            //this.storage.ready().then(() => {
            this.storage.get("missionsAccomplished").then(response => {
                let missionsAccomplished = [];
                if (response != null) {
                    missionsAccomplished = JSON.parse(response);

                    //this.enterpreneurService.get().calculateScore();
                }
                observer.next(missionsAccomplished);
                observer.complete();
            }).catch(err => {

            });
            //});

        });
    }

    getByMission(mission: Mission): Observable<MissionAccomplished> {
        return new Observable<MissionAccomplished>(observer => {
            this.listAll(null).subscribe(result => {
                let missionAccomplished = null;
                result.filter(function (element) {
                    if (element.mission.id == mission.id) {
                        missionAccomplished = element;
                    }
                });

                observer.next(missionAccomplished);
                observer.complete();
            });
        });

    }

    save(missionAccomplished: MissionAccomplished) {

        return new Observable<any>(observer => {
            this.listAll(null).subscribe(result => {
                let save = true;
                result.filter(function (mAccomplished) {
                    if (mAccomplished.id == missionAccomplished.id) {
                        mAccomplished.response = missionAccomplished.response;
                        save = false;
                    }
                });

                if (save) {
                    missionAccomplished.id = Math.random();
                    result.push(missionAccomplished);
                    this.storage.set("missionsAccomplished", JSON.stringify(result));

                }
                observer.next(true);
                observer.complete();
            });
        });

    }



}