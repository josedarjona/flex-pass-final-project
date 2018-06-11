import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { SessionService } from './service/auth.service';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SearchComponent } from './Components/search/search.component';
import { SearchService } from './service/search.service';
import { GooglemapComponent } from '../app/Components/googlemap/googlemap.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { MainNavComponent } from './Components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {MatStepperModule} from '@angular/material/stepper';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { BusygraphComponent } from '../app/Components/busygraph/busygraph.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'signup', component: SignUpComponent },
  { path: 'search', component: SearchComponent },
  { path: 'mapTest', component: GooglemapComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'index', component: HomeComponent },
  { path: 'main', component: MainNavComponent },
  { path: 'busygraph', component: BusygraphComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SearchComponent,
    GooglemapComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    MainNavComponent,
    BusygraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHsQ5mbZ20-fri8maikgz2H_6Wmt64LZ0',
    }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,

    MatListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    ChartsModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [
    SessionService,
    SearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
