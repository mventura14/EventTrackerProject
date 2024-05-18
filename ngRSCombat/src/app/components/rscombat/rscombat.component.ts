import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RSCombatService } from '../../services/rscombat.service';
import { Combat } from '../../models/combat';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rscombat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './rscombat.component.html',
  styleUrl: './rscombat.component.css'
})
export class RSCombatComponent implements OnInit {

    combatLogs : Combat[] = [];

    rsData: any;

  //----------------------------------------------------------------------------------------
  constructor(
    private rscombatService: RSCombatService,
    private http: HttpClient
  ) { }
  //----------------------------------------------------------------------------------------



  ngOnInit(): void {
    this.reload();
    this.rs();
  }
  //----------------------------------------------------------------------------------------
  
  reload(){
    this.rscombatService.index().subscribe({
      next:(combatLogs: Combat[])=>{
          console.log(combatLogs)
      },
      error:()=>{}
    })
  }

  rs(){
    this.http.jsonp('https://secure.runescape.com/m=itemdb_rs/bestiary/beastData.json?beastid=89', 'JSONP_CALLBACK')
  .subscribe(response => {
    console.log(response);
  });
  }




}
