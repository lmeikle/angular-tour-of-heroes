import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from './services/question-control.service';
import { QuestionBase } from './models/question-base';

@Component({
  selector: 'app-dynamic-form',
  styleUrls: ['./dynamic-form.component.css'],
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],
  encapsulation: ViewEncapsulation.None, // this is the one needed to style child components
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
