export interface Employee {
  id?: number | undefined;
  name: string;
  departmentId: number;
  employeeIdentification: string;
  employeePhone?: string;
  employeeMobile: string;
  active: boolean;
  hireDate: Date;
  position: string;
}

// department.model.ts
export interface Department {
  id?: number;
  name: string;
  details: string;
  order: number;
  active: boolean;
  employees?: Employee[];
}
export interface LoggedEntry {
  id: number;
  service: string;
  level: string;
  message: string;
  timeStamp: Date;
}
export interface IAPIResponse<T> {
  succeeded: boolean;
  message: string;
  errors: string[];
  data: T;
}

export interface IPagedResponse<T> {
  page: number;
  pageSize: number;
  count: number;
  hasNext: boolean;
  filteredList: T;
}
export interface IPagedRequest {
  page: number;
  pageSize: number;
}

