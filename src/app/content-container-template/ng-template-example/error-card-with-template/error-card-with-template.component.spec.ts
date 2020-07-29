import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCardWithTemplateComponent } from './error-card-with-template.component';

describe('ErrorCardWithTemplateComponent', () => {
  let component: ErrorCardWithTemplateComponent;
  let fixture: ComponentFixture<ErrorCardWithTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorCardWithTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCardWithTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
