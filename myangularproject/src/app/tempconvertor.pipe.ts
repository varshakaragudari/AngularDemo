import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempconvertor',
  standalone: true
})
export class TempconvertorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): number {
    let retval;
    console.log(value)
    console.log(args[0]+"--- "+args[1])
    args[0]=="degree"? retval= 10: retval  = 20;
    return retval
  }
  
}
