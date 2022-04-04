import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'size'
})
export class CustomPipe implements PipeTransform  {
    //arg2 we are not going to use here
    transform(arg1: string) {
        return arg1.length;
    }
}