import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneIntervention } from './zone-intervention';

describe('ZoneIntervention', () => {
  let component: ZoneIntervention;
  let fixture: ComponentFixture<ZoneIntervention>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneIntervention]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneIntervention);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
