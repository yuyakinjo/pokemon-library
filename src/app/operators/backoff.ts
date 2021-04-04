import { of, pipe, range, throwError, timer, zip } from 'rxjs';
import { map, mergeMap, retryWhen } from 'rxjs/operators';

export const backoff = (maxTries: number, delay: number) =>
  pipe(
    retryWhen((attempts) =>
      zip(range(1, maxTries + 1), attempts).pipe(
        mergeMap(([i, error]) => (i > maxTries ? throwError(error) : of(i))),
        map((i) => i * i),
        mergeMap((v) => {
          console.log(v * delay);
          return timer(v * delay);
        })
      )
    )
  );
