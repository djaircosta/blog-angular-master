import { NewPostFormComponent } from './../new-post-form/new-post-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-post-card',
  templateUrl: './new-post-card.component.html',
  styleUrls: ['./new-post-card.component.css']
})
export class NewPostCardComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  newPost() {
    console.log("Qualquer coisa");
    this.dialog.open(NewPostFormComponent);
  }

}
