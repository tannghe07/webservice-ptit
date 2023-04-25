import { Component } from '@angular/core';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent {
  url="assets/img/smile.png"
  selectFile(event: any){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) =>{
        this.url = event.target.result
      }
    }
  }
}
