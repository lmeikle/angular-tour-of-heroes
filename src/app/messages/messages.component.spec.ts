import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';
import { MessageService } from '../message.service';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  let messageServiceStub: Partial<MessageService>;

  beforeEach(async(() => {
    messageServiceStub = {
      messages: [],
      add: (message: string) => {},
      clear: () => {},
    };

    TestBed.configureTestingModule({
      declarations: [MessagesComponent],
      providers: [{ provide: MessageService, useValue: messageServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render nothing when no messages', () => {
    expect(fixture.nativeElement.querySelector('h2')).toBeNull();
  });

  it('should add a message', () => {
    component.messageService.messages = ['foo bar'];
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual(
      'Messages'
    );
    expect(
      fixture.nativeElement.firstChild.querySelector('div').textContent
    ).toEqual('foo bar');
  });
});
