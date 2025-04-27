import { Component, inject, model } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { PostComponent } from "../post/post.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

const post :Post = {
     
  title: '',
  img: '',
  description: '',
 
}
@Component({
  selector: 'app-postview',
  imports: [MatGridListModule, PostComponent],
  templateUrl: './postview.component.html',
  styleUrl: './postview.component.scss'
})
export class PostviewComponent {

  private _postsService = inject(PostService);
  private _fb = inject(FormBuilder)
  readonly dialog = inject(MatDialog);
  private _router = inject(Router)
  posts: Post[] = [];
  postForm: FormGroup;

  constructor()
  {
    this.postForm = this._fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      img:['', Validators.required]
    })
    this._postsService.getAllPosts().subscribe((p)=>{
        this.posts = p;
        
    })
  }

  createPost()
  {
    {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this._router.navigateByUrl(this._router.url)
      });
    }


  }
}

@Component({
  selector: 'post-dialog',
  templateUrl: 'post-creation.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule
  ],
})
export class DialogOverviewExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
  readonly data = inject<Post>(MAT_DIALOG_DATA);
  private _fb = inject(FormBuilder);
  private _postService = inject(PostService)
  postForm: FormGroup;
  constructor()
  {
    this.postForm = this._fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      img:['', Validators.required]
    })
  }
  post()
  {
    const post :Post = {
     
      title: this.postForm.get('title')?.value,
      img: this.postForm.get('img')?.value,
      description: this.postForm.get('description')?.value,
     
    }
    this._postService.addPost(post).subscribe((res)=>{
      console.log(res);
      this.dialogRef.close()
      
    })
   }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
