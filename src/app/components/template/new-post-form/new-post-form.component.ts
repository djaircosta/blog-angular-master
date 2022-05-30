import { PostServiceService } from './../../../services/post-service.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './post-for.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent implements OnInit {
  disabled = true;
  post: Post = {
    user: '',
    title: '',
    postContent: '',
  };

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<NewPostFormComponent>,
    private PostsService: PostServiceService
  ) {

  }

  ngOnInit(): void {
  }


  publish(): void {
    this.PostsService.newPost(this.post).subscribe(() => {
      this.dialog.closeAll();
      this.PostsService.showMessage('New post added!', true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }

  cancel() {
    if (this.post.postContent != '') {
      this.dialog.open(NewPostFormComponent);
    } else {
      this.dialogRef.close();
    }
  }
}

