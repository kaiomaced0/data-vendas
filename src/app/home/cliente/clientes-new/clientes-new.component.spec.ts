import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesNewComponent } from './clientes-new.component';

describe('ClientesNewComponent', () => {
  let component: ClientesNewComponent;
  let fixture: ComponentFixture<ClientesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
