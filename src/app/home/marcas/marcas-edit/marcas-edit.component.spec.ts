import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasEditComponent } from './marcas-edit.component';

describe('MarcasEditComponent', () => {
  let component: MarcasEditComponent;
  let fixture: ComponentFixture<MarcasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcasEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
