import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../store/product/product';

@Pipe({ name: 'value' })
export class ValuesPipe implements PipeTransform {
  transform(object: any): Product | undefined {
    if (object) {
      const key = this.objectKeys(object);
      return object[key];
    }
    return undefined;
  }
  objectKeys(obj: any): any {
    return Object.keys(obj);
  }
}
