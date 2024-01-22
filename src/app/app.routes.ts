import { Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CommunicationComponent } from './communication/communication.component';
import { NgifDemoComponent } from './ngif-demo/ngif-demo.component';
import { NgforDemoComponent } from './ngfor-demo/ngfor-demo.component';
import { HomeDemoComponent } from './home-demo/home-demo.component';
import { RouterDemoComponent } from './router-demo/router-demo.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { FormsDemoFruitsComponent } from './forms-demo-fruits/forms-demo-fruits.component';
import { PersonListComponent } from './person-list/person-list.component';
import { ErrorHandlingDemoComponent } from './error-handling-demo/error-handling-demo.component';
import { PersonFormComponent } from './person-form/person-form.component';

export const routes: Routes = [
    {path: 'binding', component: BindingComponent},
    {path: 'communication', component: CommunicationComponent},
    {path: 'ngif', component: NgifDemoComponent},
    {path: 'ngfor', component: NgforDemoComponent},
    {path: '', component: HomeDemoComponent},
    {path: 'routerdemo/:id', component: RouterDemoComponent},
    {path: 'person/:stringId', component: PersonFormComponent},
    {path: 'newperson', component: PersonFormComponent},
    {path: 'persons', component: PersonListComponent},
    {path: 'fruitsform', component: FormsDemoFruitsComponent},
    {path: 'errors', component: ErrorHandlingDemoComponent},
];
