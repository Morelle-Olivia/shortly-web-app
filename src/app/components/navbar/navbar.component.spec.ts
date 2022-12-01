import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  it('should create', function () {
    TestBed.configureTestingModule({declarations: [NavbarComponent]});
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
