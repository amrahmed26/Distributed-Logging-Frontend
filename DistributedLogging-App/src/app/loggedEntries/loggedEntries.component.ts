import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoggedEntry } from '../common'; // Define this interface in your 'common' module
import { logDialogComponent } from '../components/log-dialog/log-dialog.component';
import { loggedEntriesService } from './loggedEntries.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loggedEntries',
  templateUrl: './loggedEntries.component.html',
  styleUrls: ['./loggedEntries.component.scss'], // Corrected "styleUrl" to "styleUrls"
})
export class loggedEntriesComponent implements OnInit {
  // Variables
  createEmployee?: boolean; 
  @ViewChild(logDialogComponent) logDialogComponent!: logDialogComponent;
  logsList$ = new BehaviorSubject<any[]>([]);
  filters = {
    service: '',
    level: '',
    fromDate: '',
    toDate: '',
  };
  total: number = 0; // Total number of items (for pagination)
  loading: boolean = false; // Loading state for the table
  pageSize: any = 5; // Default page size
  pageIndex: any = 1; // Default page index
  filteredLogsList: LoggedEntry[] = []; // Filtered data to be shown in the table
  pageSizeOptions:any = [10, 20, 30, 50]; // Page size options


  // Constructor
  constructor(
    public loggedEntriesService: loggedEntriesService,
    public cdr: ChangeDetectorRef
  ) {}

  // Initialization
  ngOnInit(): void {
    this.fetchLogs();
  }

  // Fetch employees' logs from the service
  fetchLogs(): void {
    this.loggedEntriesService.getloggedEntries(null,null,null,null,this.pageIndex,this.pageSize).subscribe((response) => {
      this.logsList$.next(response.data.filteredList || []); // Update with fetched data or fallback to empty array
      this.total=response.data.count 
      this.loading = false;

      this.cdr.detectChanges(); // Trigger change detection to update the UI
    });
  }
 

  onNextPage(): void {
    if (this.pageIndex < this.total) {
      this.pageIndex++;
      this.fetchLogs();  // Fetch the next page of data
    }
  }

  // Handle "Previous" button click
  onPreviousPage(): void {
   // this.logsList=[];
    if (this.pageIndex > 1) {
      this.pageIndex--;
      this.fetchLogs();  // Fetch the previous page of data
    }
  }

  applyFilters(): void {
    const { service, level, fromDate, toDate } = this.filters;

        this.loggedEntriesService.getloggedEntries(service,level,fromDate!=null? new Date(fromDate):null,toDate!=null? new Date(toDate):null,this.pageIndex,this.pageSize).subscribe((response) => {
          this.logsList$.next(response.data.filteredList || []); // Update with fetched data or fallback to empty array
          this.cdr.detectChanges(); // Trigger change detection to update the UI
        });
    
  }
  // Show modal for creating a new employee
  showRegisterEmployeeDialog(): void {
    this.logDialogComponent.showModal();
  }

  // Handle editing an employee
  handleEdit(id: number): void {
    this.loggedEntriesService.getloggedEntry(id).subscribe((response) => {
      console.log(response.data)
      this.logDialogComponent.showModalForEdit(response.data); // Show modal for editing
    });
  }
}
