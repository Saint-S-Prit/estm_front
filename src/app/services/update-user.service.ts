import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor() { }


  convertObjetToFormData(objet: any, avatar?: any)
  {
    const formData = new FormData();

    let value: any;

    for(const [k, v] of Object.entries(objet))
    {
      if (Array.isArray(v) || typeof v === 'object') {
        value =  JSON.stringify(v);
      }
      else
      {
        value = v;
      }

      formData.append(k, value);
    }

      if (avatar) {
        formData.append('avatar', avatar);
      }



    return formData;
  }
}
