import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationModalComponent } from 'src/app/notification-modal/notification-modal.component';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  userEmail: string = "";

  constructor(private modalService: NgbModal, private utilService: UtilsService) { }

  ngOnInit() {}

  submit(valid: any){

    // Verify if the form is valid
    if(!valid){
      this.openNotificationModal("Email inválido",  
      "Por favor, insira um email válido para realizar inscrição no blog." , null);
      return;
    }

    this.utilService.postSubscription(this.userEmail).subscribe(
      res => {
        this.userEmail = "";
        this.openNotificationModal("Inscrição realizada com sucesso.", 
          "Mensalmente você receberá um resumo de tudo que rolou aqui no blog. " +
          "Para mais informações entre em contato comigo."  , null);
      },
      err => {
        this.openNotificationModal("Falha ao realizar inscrição.", 
          err.error.errors[0].message, null);
      }
    );
    
  }
  
  openNotificationModal(modalTitle: string, modalContent: string, formCallback: any) {
    const modalRef = this.modalService.open(NotificationModalComponent,
       { size: 'sm', backdrop: 'static' });
    modalRef.componentInstance.modalTitle = modalTitle; 
    modalRef.componentInstance.modalContent = modalContent;
    
    modalRef.result.then((result) => {
      
      if(result){
        //formCallback(result);
      }else{
        // TODO Gera mensagem de erro
      }

    }).catch((error) => {
      console.log(error);
    });
  }

}
