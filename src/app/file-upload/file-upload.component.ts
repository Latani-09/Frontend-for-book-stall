import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-uplaod',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class fileuploadComponent {
   array = ['<q id="a"><span id="b">hey!</span></q>'];
   blob = new Blob(this.array, { type: "text/html" }); // the blob
  baseurl="https://localhost:5001"
      book=
        {
          "Name":"new",
          "Image":"",
          "IsOutOfStock":true,
          "Price":800
      }
      
      constructor(private http: HttpClient) {}
       enc = new TextDecoder("utf-8");
      onFileSelected(event:any) {
        
        
        

        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
        //me.modelvalue = reader.result;
        console.log("image");
         console.log(reader.result);

        };
        reader.onerror = function (error) {
        console.log('Error: ', error);
        };
        if (reader.result!=null){

          this.book.Image = reader.result as string;
        }

  
        
        const upload$ = this.http.post(this.baseurl+"/api/gallery/movie",this.book);
  
        upload$.subscribe();
          }
      }
  
  
  

const convertBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};


