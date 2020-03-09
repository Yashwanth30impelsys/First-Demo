import { Component, OnInit } from '@angular/core';
import { TeamService } from "../team.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private teamservice: TeamService, private route: Router) { }
  playerlist = [];
  players: any;

  ngOnInit() {
    this.players = [
      {
        id: 1, name: "Ronaldo", description: "Famous Football player", sport: "Football", jersyno: 7,
        image: ["assets/images/index.jpeg"], country: "Portugal"
      },
      {
        id: 2, name: "Roman", description: " Famous wrestler", sport: "Wrestling", team: "The Sheild",
        image:['assets/images/download (1).jpeg'], country: "USA" , jersyno:3
      },
      {
        id: 3, name: "sachin", description: "Famous cricket player", sport: "Cricket", jersyno: 10,
        image: ['assets/images/download.jpeg'], country: "India"
      }
    ];
    this.fetchplayers();
  }
  viewPlayer(n) {
    this.teamservice.setplayer(n);
    this.route.navigate(['home/view']);
  }
  fetchplayers() {
    this.playerlist = this.players;

  };


}
