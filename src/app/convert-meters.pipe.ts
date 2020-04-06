import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMeters'
})
export class ConvertMetersPipe implements PipeTransform {

  transform(value: any, ...targetUnits: string[]): any {
    if (!value) {
      return '';
    }

    switch ( targetUnits[0] ) {
      case 'm': return parseFloat( value ) * 1000;
      case 'cm': return parseFloat( value ) * 1000 * 1000;
      default: throw new Error('Target unit not supported');
    }
  }

}
