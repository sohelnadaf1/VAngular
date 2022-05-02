import { Component } from "@angular/core";

@Component({
    selector:'app-binding',
    templateUrl:'./binding.component.html',
})

export class BindingComponent
{

    image:string = "";
    Propimg = "https://images.pexels.com/photos/11796388/pexels-photo-11796388.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    clickme()
    {
        this.image=  "https://images.pexels.com/photos/7752165/pexels-photo-7752165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    }
}