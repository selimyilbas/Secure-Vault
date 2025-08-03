import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { Customer, CreateCustomer } from '../models/customer.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private api: ApiService) { }

  createCustomer(customer: CreateCustomer): Observable<ApiResponse<Customer>> {
    return this.api.post<ApiResponse<Customer>>('/Customer', customer);
  }

  getCustomerById(id: number): Observable<ApiResponse<Customer>> {
    return this.api.get<ApiResponse<Customer>>(`/Customer/${id}`);
  }

  getCustomerByNumber(customerNumber: string): Observable<ApiResponse<Customer>> {
    return this.api.get<ApiResponse<Customer>>(`/Customer/by-number/${customerNumber}`);
  }

  getCustomerByTCKN(tckn: string): Observable<ApiResponse<Customer>> {
    return this.api.get<ApiResponse<Customer>>(`/Customer/by-tckn/${tckn}`);
  }

  getCustomerWithAccounts(id: number): Observable<ApiResponse<Customer>> {
    return this.api.get<ApiResponse<Customer>>(`/Customer/${id}/with-accounts`);
  }

  getAllCustomers(pageNumber: number = 1, pageSize: number = 10): Observable<ApiResponse<any>> {
    return this.api.get<ApiResponse<any>>(`/Customer?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}