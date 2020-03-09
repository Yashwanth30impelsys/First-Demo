import { Component, OnInit } from '@angular/core';
import { TeamService } from "../team.service";
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  jersyno = new FormControl('', [Validators.required]);
  country = new FormControl('', [Validators.required]);
  sport = new FormControl('', [Validators.required]);
  player;
  model: any;

  constructor(private teamservice: TeamService, private route: Router) { }

  ngOnInit() {
    this.player = this.teamservice.getplayer();
    this.name = new FormControl(this.player.name, [Validators.required]);
    this.description = new FormControl(this.player.description, [Validators.required]);
    this.jersyno = new FormControl(this.player.jersyno, [Validators.required]);
    this.country = new FormControl(this.player.country, [Validators.required]);
    this.sport = new FormControl(this.player.sport, [Validators.required]);
  }

  save() {
    let requestObj = {};
    requestObj['name'] =  this.name.value;
    requestObj['description'] =  this.description.value;
    requestObj['jersyno'] =  this.jersyno.value;
    requestObj['country'] =  this.country.value;
    requestObj['sport'] =  this.sport.value;
    console.log('requestObj', requestObj);
  }


}
