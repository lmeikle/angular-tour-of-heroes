import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateExampleComponent } from './ng-template-example.component';

describe('NgTemplateExampleComponent', () => {
  let component: NgTemplateExampleComponent;
  let fixture: ComponentFixture<NgTemplateExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
