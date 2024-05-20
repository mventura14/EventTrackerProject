import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RSCombatService } from '../../services/rscombat.service';
import { Combat } from '../../models/combat';

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

  combatLogs: Combat[] = [];

  wikipage: string = '';

  //----------------------------------------------------------------------------------------
  constructor(
    private rscombatService: RSCombatService,
  ) { }
  //----------------------------------------------------------------------------------------

  ngOnInit(): void {
    this.reload();
    this.test();
  }

  //----------------------------------------------------------------------------------------

  reload() {
    this.rscombatService.index().subscribe({
      next: (combatLogs: Combat[]) => {
        this.combatLogs = combatLogs
      },
      error: () => { }
    })
  }

  test(){
    this.rscombatService.test().subscribe({
      next:(resp)=>{
        console.log(resp);
        this.wikipage = resp;
      },
      error:()=>{}
    })
  }

}
