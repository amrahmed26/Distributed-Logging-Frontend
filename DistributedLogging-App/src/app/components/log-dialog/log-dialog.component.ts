import { Component, ChangeDetectorRef, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Department, Employee, LoggedEntry } from '../../common';
import { loggedEntriesService } from '../../loggedEntries/loggedEntries.service';
import { IdentityService } from '../../identity/identity.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-log-dialog',
  templateUrl: './log-dialog.component.html',
  styleUrl: './log-dialog.component.scss',
})
export class logDialogComponent {
  // ***************** Variables ***************** //
  title: string = this.translateService.instant('Log Details');
  @Input() createEmployee?: boolean;
  employee?: Employee;
  loggedEntry?: LoggedEntry;
  isVisible: boolean = false;
  validateForm: FormGroup<{
    service: FormControl<string>;
    level: FormControl<string>;
    message: FormControl<string>;
    timeStamp: FormControl<Date>;
  }> = this.fb.group({
    service: ['', [Validators.required]],
    level: ['', [Validators.required]],
    message: ['',[Validators.required]],
    timeStamp: [new Date(), [Validators.required]],
  });

  // ***************** Constructor ***************** //
  constructor(
    private fb: NonNullableFormBuilder,
    public loggedEntriesService: loggedEntriesService,
    public cdr: ChangeDetectorRef,
    private translateService: TranslateService
  ) {}


  // ***************** Functions ***************** //
  showModal(): void {
    this.isVisible = true;
  }
  showModalForEdit(loggedEntry: LoggedEntry): void {
    this.isVisible = true;
    this.loggedEntry = loggedEntry;
    this.validateForm.patchValue({
      service: loggedEntry.service,
      level: loggedEntry.level,
      message: loggedEntry.message,
      timeStamp: loggedEntry.timeStamp,

    });
  }

  handleCancel(): void {
    this.isVisible = false;
    this.clearData();
  }

 
  clearData(): void {
    this.validateForm.reset();
  }
}
