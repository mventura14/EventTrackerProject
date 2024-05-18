import { Time } from "@angular/common";
import { Timestamp } from "rxjs";

export class Combat {

    id: number;
    name: string;
    time: string;
    category: string;
    count: number;
    combatStle: string;
    gp: number;
    // createdAt: string;

    constructor(
        id: number = 0,
        name: string = '',
        time: string = '00:00:00',
        category: string = "",
        count: number = 1,
        combatStle: string = '',
        gp: number = 0,

    ) {
        this.id = id;
        this.name = name;
        this.time = time;
        this.category = category;
        this.count = count;
        this.combatStle = combatStle;
        this.gp = gp;
    }

}
