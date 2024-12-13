import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { loggedEntriesComponent } from './loggedEntries/loggedEntries.component';
import { IdentityComponent } from './identity/identity.component';

// antd components
import { NzTableModule } from 'ng-zorro-antd/table';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { logDialogComponent } from './components/log-dialog/log-dialog.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { CompanySectionComponent } from './components/company-section/company-section.component';
import { DepartmentsSectionComponent } from './components/departments-section/departments-section.component';
import { FooterComponent } from './components/footer/footer.component';

import { register } from 'swiper/element/bundle';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { httpInterceptor } from './Interceptors/interceptors/http.interceptor';
register();

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    loggedEntriesComponent,
    IdentityComponent,
    logDialogComponent,
    TopNavComponent,
    CompanySectionComponent,
    DepartmentsSectionComponent,
    FooterComponent,
    LanguageSwitcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    // ngx-translate
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient],
      },
    }),

    // antd components
    NzTableModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    NzSelectModule,
    NzIconModule,

    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },provideHttpClient(withInterceptors([httpInterceptor]))],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
