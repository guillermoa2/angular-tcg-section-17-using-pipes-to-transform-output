import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //default is true
  // Pipe will recalculate whenever ANYTHING changes on the page
  // vs purely focusing on whether the pipe arguments changed
  // Downside: might lead to performance issues for large data, but IF you know what you're doing and need this behavior its fine.
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    if (value.length === 0 || filterString === '' ) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}
