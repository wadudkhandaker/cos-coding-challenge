import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatHour'
})
export class FormatHourPipe implements PipeTransform {
  transform(sec: number): string {
    return new Date(sec * 1000).toISOString().substr(11, 8);
  }

}
