import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public tableDataSourceFromResponse(resData = []) {
    return resData.map( row => {
      return {
        ...row,
        name: row.profile.name,
        gender: row.profile.gender,
        location: row.profile.location,
        website: row.profile.website,
        picture: row.profile.picture
      };
    });

  }

  public getMyUserHeaders(): string[] {
    return ['_id', 'name', 'gender', 'location', 'website', 'picture', 'facebook', 'password',
      'passwordResetExpires', 'profile', 'createdAt', 'updatedAt'];
  }

  public async getTotalNumberOfRecords() {
    const response = await fetch('http://localhost:3000/api/getTotalNumberOfRecords');
    return await response.json();
  }

}
