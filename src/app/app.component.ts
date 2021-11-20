import { Component } from '@angular/core';
import { MessagingService } from './service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-test';
  message: any ;
  notification: any;
  notificationTitle: any ;
  constructor(private messagingService: MessagingService) { }

  onSave() {
    this.messagingService.requestPermission()
  }
  ngOnInit() {

    
    this.messagingService.receiveMessage()
    this.notification = JSON.parse(JSON.stringify(this.messagingService.currentMessage));
    this.message = this.notification!.body;
    this.title = this.notification!.title;
   }
}
