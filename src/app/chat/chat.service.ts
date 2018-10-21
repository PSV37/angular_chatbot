import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment'
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';


export class Message {
  constructor(public content:string, public sentBy:string) {}
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly token = environment.dialogflow.AngularBot;
  readonly Client = new ApiAiClient({ accessToken : this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() { console.log(this.token)}

  update(msg: Message) {
    this.conversation.next([msg])
  }

  converse(msg: string) {
    const userMesage = new Message(msg, 'user');
    this.update(userMesage);

    return this.Client.textRequest('who are you?')
              .then(res=> {
                  const speech = res.result.fulfillment.speech;
                  const botMessage = new Message(speech, 'bot');
                  this.update(botMessage);
              })
  }
  talk() {
    this.Client.textRequest('who are you?')
            .then(res=>console.log({res}))
  }
}
