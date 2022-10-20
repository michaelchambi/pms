import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VariableService } from '../../../service/public/variable.service';
import { SubModulesActionService } from '../../../service/system-sub-modules-action/sub-modules-action.service';
import { ItemsService } from '../../../service/items/items.service';


@Component({
  selector: 'app-edited-item-details',
  templateUrl: './edited-item-details.component.html',
  styleUrls: ['./edited-item-details.component.css']
})
export class EditedItemDetailsComponent implements OnInit {

  image: any;
  swahili: any;
  category_icon: any;
  sub_moduleId: any;
  itemId: any;
  messageError: any;
  bfrcreating: boolean = true;
  creating: boolean = false;

  data = {
    id: '',
    project_category_name: '',
    category_icon: ''
  }
  selectedSwahili: any;
  selectedChinese: any;
  selectedImage: any;

  wordForm: boolean = false;
  swahiliForm: boolean = false;
  chineseForm: boolean = false;
  imageForm: boolean = false;


  constructor(
    public variable: VariableService,
    public subaction: SubModulesActionService,
    private activeRoute: ActivatedRoute,
    public item: ItemsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.sub_moduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.itemId = this.activeRoute.snapshot.paramMap.get('id2');
    this.getItem();
  }

  getItem() {
    this.data.id = this.itemId;
    this.item.showItem(this.data).subscribe(
      res => {
        this.image = res.image;
        this.data.project_category_name = res.categoryName;
        this.category_icon = this.variable.CATEGORY_FILE_PATH + '/' + res.categoryIcon;
      },
      err => {
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }

      }
    );
  }


  swahiliUpload(e: any) {
    this.selectedSwahili = e.target.files[0];
  }

  chineseUpload(e: any) {
    this.selectedChinese = e.target.files[0];
  }

  imageUpload(e: any) {
    this.selectedImage = e.target.files[0];
  }


  words() {
    this.wordForm = true;
    this.swahiliForm = false;
    this.chineseForm = false;
    this.imageForm = false;
  }

  swahiliAudio() {
    this.wordForm = false;
    this.swahiliForm = true;
    this.chineseForm = false;
    this.imageForm = false;
  }



  imageItem() {
    this.wordForm = false;
    this.swahiliForm = false;
    this.chineseForm = false;
    this.imageForm = true;
  }

  editWords() {
    this.data.id = this.itemId;
    this.bfrcreating = false;
    this.creating = true;

    this.item.editItems(this.data).subscribe(
      res => {
        this.variable.appSuccess = true;
        this.variable.successMessage = res.message;
        this.router.navigate(['/view-item-details/' + this.sub_moduleId + '/' + this.itemId]);

      },

      err => {
        this.variable.appError = true;
        this.bfrcreating = true;
        this.creating = false;
        this.messageError = err.error.message;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

  editSwahili() {
    this.bfrcreating = false;
    this.creating = true;

    let formData = new FormData();
    formData.append('id', this.itemId);
    formData.append('category_icon', this.selectedSwahili);

    this.item.editSwahili(formData).subscribe(
      res => {
        this.variable.appSuccess = true;
        this.variable.successMessage = res.message;
        this.router.navigate(['/view-item-details/' + this.sub_moduleId + '/' + this.itemId]);

      },

      err => {
        this.variable.appError = true;
        this.bfrcreating = true;
        this.creating = false;
        this.messageError = err.error.message;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );

  }

 

  editImage() {
    this.bfrcreating = false;
    this.creating = true;

    let formData = new FormData();
    formData.append('id', this.itemId);
    formData.append(' category_icon', this.selectedImage);

    this.item.editImage(formData).subscribe(
      res => {
        this.variable.appSuccess = true;
        this.variable.successMessage = res.message;
        this.router.navigate(['/view-item-details/' + this.sub_moduleId + '/' + this.itemId]);

      },

      err => {
        this.variable.appError = true;
        this.bfrcreating = true;
        this.creating = false;
        this.messageError = err.error.message;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );
  }

}

