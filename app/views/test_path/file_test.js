"use strict";
var core_1 = require("@angular/core");
var fs = require("file-system");
var http = require("http");
var Toast = require("nativescript-toast");
var Sound = require("nativescript-sound");
var FileTest = (function () {
    function FileTest() {
        this.path_sound = "~/res/click_shut.mp3";
        console.log(" > constructor ");
    }
    FileTest.prototype.onClickAlert = function () {
        var self = this;
        console.log("Onclick => ", "Alert");
        alert("Hello Alert");
        //let sao_click = Sound.create("~/res/sao_click.mp3");
    };
    FileTest.prototype.onClickToast = function () {
        var self = this;
        console.log("Onclick => ", "Toast");
        var toast = Toast.makeText("Hello Toast");
        toast.show();
        self.sao_click.play();
        console.log("end click");
    };
    FileTest.prototype.changSound = function () {
        var self = this;
        console.log("Chang Sound");
        //self.sao_click = Sound.create("~/res/click_shut.mp3");
        //self.sao_click.play();
    };
    FileTest.prototype.onClickGetFile = function () {
        var self = this;
        console.log("Click onClickGetFile");
        var filePath = fs.path.join(fs.knownFolders.documents().path, "test.png");
        http.getFile("http://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=blue", filePath).then(function (r) {
            console.log(r);
            console.log("result => ", JSON.stringify(r));
            try {
                self.sao_click = Sound.create("~/data/user/0/org.nativescript.testsound/files/test.mp3");
            }
            catch (error) {
                console.log("error => ", error);
            }
        }, function (e) {
            console.log(e);
        });
    };
    FileTest.prototype.onClickGetDB = function () {
        console.log("on click => ", "get DB");
        var self = this;
        http.getFile("https://raw.githubusercontent.com/NativeScript/NativeScript/master/apps/tests/logo.png").then(function (r) {
            //// Argument (r) is File!
            console.log("result =>", JSON.stringify(r));
        }, function (e) {
            console.log("error >", e);
        });
    };
    return FileTest;
}());
FileTest = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "views/test_path/file_test.html",
    }),
    __metadata("design:paramtypes", [])
], FileTest);
exports.FileTest = FileTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZV90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZV90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUM7QUFJekMsZ0NBQW1DO0FBQ25DLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQU0xQyxJQUFhLFFBQVE7SUFJakI7UUFEUSxlQUFVLEdBQUcsc0JBQXNCLENBQUM7UUFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTywrQkFBWSxHQUFwQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRyxPQUFPLENBQUMsQ0FBQztRQUNyQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFckIsc0RBQXNEO0lBSTFELENBQUM7SUFFTywrQkFBWSxHQUFwQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8sNkJBQVUsR0FBbEI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQix3REFBd0Q7UUFDeEQsd0JBQXdCO0lBQzVCLENBQUM7SUFFTyxpQ0FBYyxHQUF0QjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyw4RUFBOEUsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25ILE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFOUMsSUFBSSxDQUFDO2dCQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1lBQzdGLENBQUM7WUFBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLENBQUM7UUFFTCxDQUFDLEVBQUUsVUFBVSxDQUFDO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTywrQkFBWSxHQUFwQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsT0FBTyxDQUFDLHdGQUF3RixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuSCwwQkFBMEI7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUMsRUFBRSxVQUFVLENBQUM7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRyxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUdQLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FBQyxBQXZFRCxJQXVFQztBQXZFWSxRQUFRO0lBSnBCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsZ0NBQWdDO0tBQ2hELENBQUM7O0dBQ1csUUFBUSxDQXVFcEI7QUF2RVksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5cclxuXHJcbmltcG9ydCBmcyA9IHJlcXVpcmUoXCJmaWxlLXN5c3RlbVwiKTtcclxudmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxudmFyIFRvYXN0ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10b2FzdFwiKTtcclxudmFyIFNvdW5kID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zb3VuZFwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy90ZXN0X3BhdGgvZmlsZV90ZXN0Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVUZXN0IHtcclxuXHJcbiAgICBwcml2YXRlIHNhb19jbGljaztcclxuICAgIHByaXZhdGUgcGF0aF9zb3VuZCA9IFwifi9yZXMvY2xpY2tfc2h1dC5tcDNcIjtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgPiBjb25zdHJ1Y3RvciBcIik7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0FsZXJ0KCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25jbGljayA9PiBcIiAsIFwiQWxlcnRcIik7XHJcbiAgICAgICAgYWxlcnQoXCJIZWxsbyBBbGVydFwiKTtcclxuICAgICAgICBcclxuICAgICAgICAvL2xldCBzYW9fY2xpY2sgPSBTb3VuZC5jcmVhdGUoXCJ+L3Jlcy9zYW9fY2xpY2subXAzXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja1RvYXN0KCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25jbGljayA9PiBcIiAsIFwiVG9hc3RcIik7XHJcbiAgICAgICAgdmFyIHRvYXN0ID0gVG9hc3QubWFrZVRleHQoXCJIZWxsbyBUb2FzdFwiKTtcclxuICAgICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICAgICAgc2VsZi5zYW9fY2xpY2sucGxheSgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZCBjbGlja1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoYW5nU291bmQoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZyBTb3VuZFwiKTtcclxuICAgICAgICAvL3NlbGYuc2FvX2NsaWNrID0gU291bmQuY3JlYXRlKFwifi9yZXMvY2xpY2tfc2h1dC5tcDNcIik7XHJcbiAgICAgICAgLy9zZWxmLnNhb19jbGljay5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrR2V0RmlsZSgpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWNrIG9uQ2xpY2tHZXRGaWxlXCIpO1xyXG4gICAgICAgIHZhciBmaWxlUGF0aCA9IGZzLnBhdGguam9pbihmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkucGF0aCwgXCJ0ZXN0LnBuZ1wiKTtcclxuICAgICAgICBodHRwLmdldEZpbGUoXCJodHRwOi8vdHJhbnNsYXRlLmdvb2dsZS5jb20vdHJhbnNsYXRlX3R0cz9pZT1VVEYtOCZ0bD1lbiZjbGllbnQ9dHctb2ImcT1ibHVlXCIsIGZpbGVQYXRoKS50aGVuKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCA9PiBcIiAsIEpTT04uc3RyaW5naWZ5KHIpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNhb19jbGljayA9IFNvdW5kLmNyZWF0ZShcIn4vZGF0YS91c2VyLzAvb3JnLm5hdGl2ZXNjcmlwdC50ZXN0c291bmQvZmlsZXMvdGVzdC5tcDNcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yID0+IFwiICwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0dldERCKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbiBjbGljayA9PiBcIiAsIFwiZ2V0IERCXCIpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaHR0cC5nZXRGaWxlKFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL05hdGl2ZVNjcmlwdC9OYXRpdmVTY3JpcHQvbWFzdGVyL2FwcHMvdGVzdHMvbG9nby5wbmdcIikudGhlbihmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICAvLy8vIEFyZ3VtZW50IChyKSBpcyBGaWxlIVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCA9PlwiICwgSlNPTi5zdHJpbmdpZnkocikpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgPlwiICwgZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19