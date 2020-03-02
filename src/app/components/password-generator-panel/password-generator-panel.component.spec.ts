import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGeneratorPanelComponent } from './password-generator-panel.component';

describe('PasswordGeneratorPanelComponent', () => {
  let component: PasswordGeneratorPanelComponent;
  let fixture: ComponentFixture<PasswordGeneratorPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordGeneratorPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordGeneratorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
