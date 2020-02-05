import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaikAddComponent } from './quaik-add.component';

describe('QuaikAddComponent', () => {
  let component: QuaikAddComponent;
  let fixture: ComponentFixture<QuaikAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuaikAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaikAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
