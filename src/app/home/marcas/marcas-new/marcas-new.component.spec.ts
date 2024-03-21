import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasNewComponent } from './marcas-new.component';

describe('MarcasNewComponent', () => {
  let component: MarcasNewComponent;
  let fixture: ComponentFixture<MarcasNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcasNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
