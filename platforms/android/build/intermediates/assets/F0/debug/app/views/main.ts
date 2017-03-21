import { Component} from "@angular/core";




var Toast = require("nativescript-toast");
var Sound = require("nativescript-sound");

@Component({
    selector: "ns-app",
    templateUrl: "views/main.html",
})
export class ViewComponent {

    private onClickAlert(){
        console.log("Onclick => " , "Alert");
        alert("Hello Alert");
    }

    private onClickToast(){
        console.log("Onclick => " , "Toast");
        var toast = Toast.makeText("Hello Toast");

        //var toast_long = Toast.maketext("Hello Toast _ long");

        toast.show();
    }



}
