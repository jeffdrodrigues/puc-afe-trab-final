import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDeathsComponent } from './covid-deaths.component';

describe('CovidDeathsComponent', () => {
  let component: CovidDeathsComponent;
  let fixture: ComponentFixture<CovidDeathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidDeathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
