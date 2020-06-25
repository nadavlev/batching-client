import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public tableDataSourceFromResponse(resData ) {
    return resData;

  }

  public getMyUserHeaders(): string[] {
    return [
      'email',
      'password',
      'passwordResetToken',
      'passwordResetExpires',
      'facebook',
      'name',
      'firstName',
      'lastName',
      'gender',
      'country',
      'city',
      'zip',
      'address',
      'lat',
      'long',
      'website',
      'ip',
      'company',
      'cardType',
      'cardNumber',
      'cardExp',
    ];
  }

  public getNgxMyUserHeaders() {
    return [
      { name: 'email'},
      { name: 'password'},
      { name: 'passwordResetToken'},
      { name: 'passwordResetExpires'},
      { name: 'facebook'},
      { prop: 'name'},
      { name: 'firstName'},
      { name: 'lastName'},
      { name: 'gender'},
      { name: 'country'},
      { name: 'city'},
      { name: 'zip'},
      { name: 'address'},
      { name: 'lat'},
      { name: 'long'},
      { name: 'website'},
      { name: 'ip'},
      { name: 'company'},
      { name: 'cardType'},
      { name: 'cardNumber'},
      { name: 'cardExp'},
    ];
  }

  public getAGColumnDefinitions() {
    return [
      {headerName: 'email', field: 'email'},
      {headerName: 'password', field: 'password'},
      {headerName: 'passwordResetToken', field: 'passwordResetToken'},
      {headerName: 'passwordResetExpires', field: 'passwordResetExpires'},
      {headerName: 'facebook', field: 'facebook'},
      {headerNrop: 'name', field: 'name'},
      {headerName: 'firstName', field: 'firstName'},
      {headerName: 'lastName', field: 'lastName'},
      {headerName: 'gender', field: 'gender'},
      {headerName: 'country', field: 'country'},
      {headerName: 'city', field: 'city'},
      {headerName: 'zip', field: 'zip'},
      {headerName: 'address', field: 'address'},
      {headerName: 'lat', field: 'lat'},
      {headerName: 'long', field: 'long'},
      {headerName: 'website', field: 'website'},
      {headerName: 'ip', field: 'ip'},
      {headerName: 'company', field: 'company'},
      {headerName: 'cardType', field: 'cardType'},
      {headerName: 'cardNumber', field: 'cardNumber'},
      {headerName: 'cardExp', field: 'cardExp'},
    ];

  }
  public async getTotalNumberOfRecords() {
    const response = await fetch('http://localhost:3000/api/getTotalNumberOfRecords');
    return await response.json();
  }

}
