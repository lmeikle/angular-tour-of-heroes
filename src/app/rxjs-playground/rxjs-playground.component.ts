import { Component, OnInit } from '@angular/core';
import { of, pipe, range, concat, merge } from 'rxjs';
import { map, filter, concatMap, delay, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-playground',
  templateUrl: './rxjs-playground.component.html',
  styleUrls: ['./rxjs-playground.component.css'],
})
export class RxjsPlaygroundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.rangeExample();
    // this.mapExample();
    // this.pipeExample();
    // this.concatMapExample();
    // this.mergeMapExample();
    // this.concatExample();
    this.mergeExample();
  }

  rangeExample() {
    range(1, 20)
      .pipe(
        filter((x) => x % 2 === 1), // odd numbers
        map((x) => x + x)
      )
      .subscribe((x) => console.log(x));
  }

  mapExample() {
    const nums = of(1, 2, 3);
    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);
    squaredNums.subscribe((x) => console.log('V1:' + x));

    // alternative way to write it
    of(1, 2, 3)
      .pipe(map((val: number) => val * val))
      .subscribe((x) => console.log('V2:' + x));
  }

  pipeExample() {
    const nums = of(1, 2, 3, 4, 5);
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map((n) => n * n)
    );
    const squareOdd = squareOddVals(nums);
    squareOdd.subscribe((x) => console.log('V1:' + x));

    // alternative way to write it
    of(1, 2, 3, 4, 5)
      .pipe(
        filter((n) => n % 2 !== 0),
        map((n) => n * n)
      )
      .subscribe((x) => console.log('V2:' + x));
  }

  /**
   * Note the difference between concatMap and mergeMap.
   * Because concatMap does not subscribe to the next observable until the previous completes,
   * the value from the source delayed by 2000ms will be emitted first.
   * Contrast this with mergeMap which subscribes immediately to inner observables, the observable with the lesser delay (1000ms) will emit,
   * followed by the observable which takes 2000ms to complete.
   */
  concatMapExample() {
    // emit delay value
    const source = of(2000, 1000);
    // map value from source into inner observable, when complete emit result and move to next
    const example = source.pipe(
      concatMap((val) => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );
    // output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
    const subscribe = example.subscribe((val) =>
      console.log(`With concatMap: ${val}`)
    );
  }

  mergeMapExample() {
    // showing the difference between concatMap and mergeMap
    const mergeMapExample = of(2000, 1000)
      .pipe(
        // just so we can log this after the first example has run
        delay(5000),
        mergeMap((val) => of(`Delayed by: ${val}ms`).pipe(delay(val)))
      )
      .subscribe((val) => console.log(`With mergeMap: ${val}`));
  }

  concatExample() {
    concat(
      of(1, 2, 3),
      // subscribed after first completes
      of(4, 5, 6),
      // subscribed after second completes
      of(7, 8, 9)
    )
      // log: 1, 2, 3, 4, 5, 6, 7, 8, 9
      .subscribe(console.log);
  }

  mergeExample() {
    merge(
      of(1, 2, 3),
      // subscribed after first completes
      of(4, 5, 6),
      // subscribed after second completes
      of(7, 8, 9)
    )
      // log: 1, 2, 3, 4, 5, 6, 7, 8, 9
      .subscribe(console.log);
  }
}
