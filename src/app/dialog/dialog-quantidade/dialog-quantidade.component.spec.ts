import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogQuantidadeComponent } from './dialog-quantidade.component';

describe('DialogQuantidadeComponent', () => {
  let component: DialogQuantidadeComponent;
  let fixture: ComponentFixture<DialogQuantidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogQuantidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogQuantidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
