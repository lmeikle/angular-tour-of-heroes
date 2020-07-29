import { Component, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-error-card-with-template',
  templateUrl: './error-card-with-template.component.html',
  styleUrls: ['./error-card-with-template.component.scss'],
})
export class ErrorCardWithTemplateComponent {
  @Input() template: TemplateRef<any>;
}
