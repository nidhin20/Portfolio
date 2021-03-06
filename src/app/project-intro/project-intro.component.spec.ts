import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIntroComponent } from './project-intro.component';

describe('ProjectIntroComponent', () => {
  let component: ProjectIntroComponent;
  let fixture: ComponentFixture<ProjectIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
