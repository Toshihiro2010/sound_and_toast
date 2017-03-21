import { Component} from "@angular/core";




var Toast = require("nativescript-toast");
var Sound = require("nativescript-sound");

@Component({
    selector: "ns-app",
    templateUrl: "views/main.html",
})
export class ViewComponent {

    private sao_click = Sound.create("~/res/click_shut.mp3");

    constructor(){
        console.log(" > constructor ");
        
    }


    private onClickAlert(){
        let self = this;
        console.log("Onclick => " , "Alert");
        alert("Hello Alert");
        //var sao_click = Sound.create("~/res/sao_click.mp3");
        //sao_click.play();
        self.sao_click.play();

    }

    private onClickToast(){
        let self = this;
        console.log("Onclick => " , "Toast");
        var toast = Toast.makeText("Hello Toast");
        
        //var toast_long = Toast.maketext("Hello Toast _ long");
        self.changSound();
        toast.show();
    }

    private changSound(){
        let self = this;
        console.log("Chang Sound");
        //self.sao_click = Sound.create("~/res/click_shut.mp3");
        self.sao_click.play();
    }



}
