import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectTreeRendererComponent } from './object-tree-renderer.component';

describe('ObjectTreeRendererComponent', () => {
  let component: ObjectTreeRendererComponent;
  let fixture: ComponentFixture<ObjectTreeRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectTreeRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectTreeRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
