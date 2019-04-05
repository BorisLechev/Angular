import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IFurniture from '../models/IFurniture';

const baseUrl = 'http://localhost:9999/furniture';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  constructor(private http: HttpClient) { }

  createFurniture(data) { // data след submit на формата
    return this.http.post(baseUrl + '/create', data);
  }

  getAllFurniture(): Observable<IFurniture[]> {
    return this.http.get<IFurniture[]>(baseUrl + '/all'); // cast-ване към interface IFurniture
  }

  getDetails(id): Observable<IFurniture> {
    return this.http.get<IFurniture>(baseUrl + `/details/${id}`); // cast=wame към interface
  }

  getUserFurniture(): Observable<IFurniture[]> {
    return this.http.get<IFurniture[]>(baseUrl + '/user');
  }

  deleteFurniture(id) {
    return this.http.delete(baseUrl + `/delete/${id}`);
  }
}
