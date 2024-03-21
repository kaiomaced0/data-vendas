import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasNewComponent } from './categorias-new.component';

describe('CategoriasNewComponent', () => {
  let component: CategoriasNewComponent;
  let fixture: ComponentFixture<CategoriasNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
