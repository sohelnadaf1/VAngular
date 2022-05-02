import { Component } from "@angular/core";

@Component({
    selector: 'app-classBind',
    templateUrl: './cbind.component.html',
    styleUrls: ['./cbind.component.css'],
})


export class ClassBind {
    applystyle = 'applyBold applyItalic'

    applyItalic: boolean = true;


    addClass() {
        let classes = {
            italiclass: this.applyItalic
        };

        return classes;
    }

}




