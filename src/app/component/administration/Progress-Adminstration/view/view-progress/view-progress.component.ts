import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general/general.service';
@Component({
  selector: 'app-view-progress',
  templateUrl: './view-progress.component.html',
  styleUrls: ['./view-progress.component.css']
})
export class ViewProgressComponent implements OnInit {

 

  token: any;
  constructor(
    private general: GeneralService
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.general.verifyToken();
    //this.fileInfos = this.fileupload.getFiles();
 
  this.hardCopy = false;
  this.softCopy=true;
  }

 
  public hardCopy: boolean=false;
  public softCopy: boolean=true;
 
  selectedFiles?: FileList;
  currentFile?: File;
  selectedCovers?: FileList;
  currentCover?: File;
  progress1 = 0;
  progress = 0;
  imageURL!: string;
  imageURLd!: string;

  message = '';
 
  public showFileUploader:boolean=false;

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  



showHard() {
  this.hardCopy = true;
  this.softCopy=false;
  
}

showSoft() {
  this.softCopy=true;
  this.hardCopy = false;
  
}

submitSoftOnly(){
 //  this.uploadOnlyFile();
}

}
