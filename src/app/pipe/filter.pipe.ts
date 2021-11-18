import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {



  //   transform(value: any, search:string): any {
  //  if (value.length===0 || search.length===0){
  //    return value
  //  }
  //   return value.filter( (_:any)=>JSON.stringify(_).toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  // }



  transform(value: any, seach: string, propName: string): any {

     if (value) {

    if (value.length == 0 ||  seach.length===0){
      return value;
    }

      const resultArray = [];
      for(const item of value){
        //if(item[propName] === seach)
        //if(item[propName].startsWith(seach))
        if(item[propName].includes(seach)){
          resultArray.push(item);
        }
      }
      return resultArray;
  }

  }

}
