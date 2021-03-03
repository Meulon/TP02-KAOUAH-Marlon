import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-compte-formulaire',
  templateUrl: './compte-formulaire.component.html',
  styleUrls: ['./compte-formulaire.component.css']
})

export class CompteFormulaireComponent implements OnInit {

  constructor() { }

  pass : string = "";
  passConfirmation : string = "";

  validatorPass : boolean = false;
  validator : boolean = false;


  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.pass == this.passConfirmation)
    this.validator = true;
  }



}
