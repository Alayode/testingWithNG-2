import {Component} from '@angular/core';

// TODO:  use Input  Decorators instead of declaring them within the @Component

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    inputs: ['headCollapseState']
})


export class AppComponent {

    constructor(){
      console.log("Intializing app instance")
    }

    public isCollapsed = true;

    title = 'app works!';


    isCollapsedEvent(ev: boolean) {
        this.isCollapsed = ev;
    }
}
