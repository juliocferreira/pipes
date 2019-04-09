import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value.length || !args)
      return value;
    
    return value.filter(item => 
      item.titulo.toLocaleLowerCase()
        .includes(args.toLocaleLowerCase())
    
    )
  }

}
