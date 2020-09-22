import { Component } from '@angular/core';
import { QuestionBase } from '../dynamic-form/models/question-base';
import { QuestionService } from '../dynamic-form/services/question.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
