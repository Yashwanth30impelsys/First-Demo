import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TeamService } from '../team.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  player;

  constructor(private route:Router, private service: TeamService) { }

  ngOnInit() {
    this.player=this.service.getplayer();

  }
  editPlayer(){
    this.service.editplayer(this.player);
    this.route.navigate(['./home/edit']);
  }
  deletePlayer(){
    this.route.navigate(['./home/delete'])
  }
  

}
