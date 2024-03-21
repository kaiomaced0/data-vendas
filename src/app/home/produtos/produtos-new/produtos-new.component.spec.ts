import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosNewComponent } from './produtos-new.component';

describe('ProdutosNewComponent', () => {
  let component: ProdutosNewComponent;
  let fixture: ComponentFixture<ProdutosNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
