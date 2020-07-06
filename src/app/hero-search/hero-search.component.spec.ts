import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;
  //let heroServiceStub: Partial<HeroService>;
  let searchHeroesSpy;

  beforeEach(async(() => {
    /* heroServiceStub = {
      searchHeroes: (term: string): Observable<Hero[]> => {
        return of([
          {
            id: 1,
            name: 'foo',
          },
        ]);
      },
    };*/

    const heroService = jasmine.createSpyObj('HeroService', ['searchHeroes']);
    searchHeroesSpy = heroService.searchHeroes.and.returnValue(
      of([
        {
          id: 1,
          name: 'foo',
        },
      ])
    );

    TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      providers: [{ provide: HeroService, useValue: heroService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('does not call searchHeroesSpy until the user types some search terms', () => {
    fixture.detectChanges(); // onInit()

    expect(searchHeroesSpy.calls.any()).toBe(
      false,
      'searchHeroesSpy not called'
    );
  });

  it('calls searchHeroesSpy when user types some search terms and renders the result', fakeAsync(() => {
    const searchInputEl = fixture.nativeElement.querySelector('#search-box');

    // simulate user entering a new name into the input box
    searchInputEl.value = 'f';

    // dispatch a DOM event so that Angular learns of input value change.
    searchInputEl.dispatchEvent(new Event('input'));

    // Wait for the debounceTime(500)
    tick(500);

    fixture.detectChanges();

    console.log(fixture.nativeElement.innerHTML);

    expect(searchHeroesSpy.calls.any()).toBe(true, 'searchHeroesSpy called');

    expect(fixture.nativeElement.querySelector('li').textContent).toEqual(
      'foo'
    );
  }));
});
