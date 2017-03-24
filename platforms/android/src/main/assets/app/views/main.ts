import { Component} from "@angular/core";



import fs = require("file-system");
var http = require("http");
var Toast = require("nativescript-toast");
var Sound = require("nativescript-sound");

@Component({
    selector: "ns-app",
    templateUrl: "views/main.html",
})
export class ViewComponent {

    private sao_click;
    private path_sound = "~/res/click_shut.mp3";
    constructor(){
        console.log(" > constructor ");       
    }

    private onClickAlert(){
        let self = this;
        console.log("Onclick => " , "Alert");
        alert("Hello Alert");
        
        //let sao_click = Sound.create("~/res/sao_click.mp3");
        
       

    }

    private onClickToast(){
        let self = this;
        console.log("Onclick => " , "Toast");
        var toast = Toast.makeText("Hello Toast");
        toast.show();
        self.sao_click.play();

        console.log("end click");
    }

    private changSound(){
        let self = this;
        console.log("Chang Sound");
        //self.sao_click = Sound.create("~/res/click_shut.mp3");
        //self.sao_click.play();
    }

    private onClickGetFile(){
        let self = this;
        console.log("Click onClickGetFile");
        var filePath = fs.path.join(fs.knownFolders.documents().path, "test.png");
        http.getFile("http://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=blue", filePath).then(function (r) {
            console.log(r);
            console.log("result => " , JSON.stringify(r));
            
            try {
                self.sao_click = Sound.create("~/data/user/0/org.nativescript.testsound/files/test.mp3");
            } catch (error) {
                console.log("error => " , error);
            }
            
        }, function (e) {
           console.log(e);
           
        });

    }

    private onClickGetDB(){
        console.log("on click => " , "get DB");
        let self = this;

        http.getFile("http://self.enconcept.com:8090/addict_databases/EngToTha.db").then(function (r) {
            //// Argument (r) is File!
            console.log("result =>" , JSON.stringify(r));
        }, function (e) {
            console.log("error >" , e);
        });


    }

}
