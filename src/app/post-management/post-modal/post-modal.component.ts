import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PostForm } from 'src/app/models/post-form';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit { 

  title: string = "Title";
  formControlValue = '';
  
  @Input() modalTitle: string = "";
  @Input() postForm: PostForm;

  public imagePath: any; 
  public bannerUploadMessage: string; // validation error
  public banner: any = null;

  constructor(public activeModal: NgbActiveModal, private postService: PostService) {}

  ngOnInit() {
    if(this.postForm.post.tags.length){
      this.formControlValue = "#" + this.postForm.post.tags.join(" #");
    }

    let bannerUrl = this.postForm.post.bannerUrl;
    if(bannerUrl !== null && bannerUrl !== ''){
      this.postService.getImage(this.postForm.post.bannerUrl).subscribe(
        res => {
          console.log(res);
          this.previewBannerImg([res]);
        },
        err => {}
      );
    }
  }

  /**
   * Event that checks for upload file reference.
   * 
   * @param files 
   */
  previewBannerImg(files: any) {
    
    if(files[0] == null) return; // empty selection

    this.postForm.images[0] = files[0];

    var mimeType = files[0].type;
    if(mimeType.match(/image\/*/) == null){
      this.bannerUploadMessage = "Only images are supported";
      return;
    }

    // load file from computer asynchronously
    const reader = new FileReader();
    const file = files[0];
    this.imagePath = files;
    reader.onload = (event: any) => { // once finished
      this.banner = reader.result;
    }

    reader.readAsDataURL(file); // raw binary data format
    
  }
  
  findChoices(searchText: string) {
    return [ 'ai', 'java', 'docker', 'java', 'angular' ].filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }
 
  getChoiceLabel(choice: string) {
    return `#${choice} `;
  }

  closeModal(){
    this.activeModal.close();
  }

  /**
   * Converts a base64 image format to a file.
   * 
   * @param dataurl 
   * @param filename 
   */
  dataURLtoFile(dataurl: string, filename: string): File {
 
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], 
      filename + "." + mime.split('/')[1], {type:mime});
  }

  /**
   * Gets an html body and replace image content (base 64 format) by 
   * the respective image link. This method also saves the images
   * into the FormPost images array.
   */
  processData(){
    let body = this.postForm.post.body;
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(body, 'text/html');
    let htmlImgs = htmlDoc.getElementsByTagName('img');
    console.log("Imagens encontradas: " + htmlImgs.length);
    for(let i = 0; i < htmlImgs.length; i++){
      let image = htmlImgs[i];

      if(image.src.includes('/images/')) continue; 

      let fileName = `${i}`;
      let fileImg: File = this.dataURLtoFile(image.src, fileName);
      this.postForm.images.push(fileImg);
      htmlImgs[i].src = `/images/${this.postForm
        .post.id}/${fileName}.${fileImg.type.split('/')[1]}`;
    }
    this.postForm.post.body = htmlDoc.body.innerHTML;
  }

  submit() {
    let tagString = this.formControlValue
      .replace(/ /g, "")
      .replace(/#/g, " ");
    let tagList = tagString.slice(1, tagString.length).split(" ");

    if(!tagList.length){
      console.log("Error. At least one tag is necessary.")
    }else{
      this.postForm.post.tags = tagList;
      this.processData();
      this.activeModal.close(this.postForm);
    }
  }

}
