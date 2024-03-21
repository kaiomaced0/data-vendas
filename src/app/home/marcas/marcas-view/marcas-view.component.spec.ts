import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasViewComponent } from './marcas-view.component';

describe('MarcasViewComponent', () => {
  let component: MarcasViewComponent;
  let fixture: ComponentFixture<MarcasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcasViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
