import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChatDialogComponent
  ],
  exports: [ ChatDialogComponent ],
  providers:[ChatService]
})
export class ChatModule { }
