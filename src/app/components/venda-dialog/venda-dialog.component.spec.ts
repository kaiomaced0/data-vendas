import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaDialogComponent } from './venda-dialog.component';

describe('VendaDialogComponent', () => {
  let component: VendaDialogComponent;
  let fixture: ComponentFixture<VendaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendaDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
