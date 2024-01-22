import { Person } from './../shared/model/person';
import { Component} from '@angular/core';
import { BindingComponent } from './binding/binding.component';
import { CommunicationComponent } from './communication/communication.component';
import { NgforDemoComponent } from './ngfor-demo/ngfor-demo.component';
import { NgifDemoComponent } from './ngif-demo/ngif-demo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BindingComponent, CommunicationComponent, NgforDemoComponent, NgifDemoComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo4';

  isChildButtonEnabled = false;

  printLightStatus(status : boolean) {
    console.log("Is the light on? " + status);
  }
}
