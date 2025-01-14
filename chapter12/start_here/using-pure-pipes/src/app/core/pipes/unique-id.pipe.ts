import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueId'
})
export class UniqueIdPipe implements PipeTransform {
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  transform(index: number): string {
    return this.idUsingFactorial(index);
  }

  createUniqueId(length) {
    var result = '';
    
    var charactersLength = this.characters.length;
    for (var i = 0; i < length; i++) {
      result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  idUsingFactorial(num, length = 1) {
    if (num === 1) {
      return this.createUniqueId(length);
    } else {
      const fact = length * (num - 1);
      return this.idUsingFactorial(num - 1, fact);
    }
  }

}
