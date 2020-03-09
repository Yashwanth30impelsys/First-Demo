import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name=new FormControl('',[Validators.required]);
  country=new FormControl('',[Validators.required]);
  sport=new FormControl('',[Validators.required]);
  description=new FormControl('',[Validators.required]);
  jersyno=new FormControl('',[Validators.required]);
  id=new FormControl('',[Validators.required]);

  constructor(private teamservice:TeamService) { }

  ngOnInit() {

  }

}
