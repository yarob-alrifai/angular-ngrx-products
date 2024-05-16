import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemProductDialogComponent } from './update-item-product-dialog.component';

describe('UpdateItemProductDialogComponent', () => {
  let component: UpdateItemProductDialogComponent;
  let fixture: ComponentFixture<UpdateItemProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateItemProductDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateItemProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
