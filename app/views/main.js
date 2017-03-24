"use strict";
var core_1 = require("@angular/core");
var fs = require("file-system");
var http = require("http");
var Toast = require("nativescript-toast");
var Sound = require("nativescript-sound");
var ViewComponent = (function () {
    function ViewComponent() {
        this.path_sound = "~/res/click_shut.mp3";
        console.log(" > constructor ");
    }
    ViewComponent.prototype.onClickAlert = function () {
        var self = this;
        console.log("Onclick => ", "Alert");
        alert("Hello Alert");
        //let sao_click = Sound.create("~/res/sao_click.mp3");
    };
    ViewComponent.prototype.onClickToast = function () {
        var self = this;
        console.log("Onclick => ", "Toast");
        var toast = Toast.makeText("Hello Toast");
        toast.show();
        self.sao_click.play();
        console.log("end click");
    };
    ViewComponent.prototype.changSound = function () {
        var self = this;
        console.log("Chang Sound");
        //self.sao_click = Sound.create("~/res/click_shut.mp3");
        //self.sao_click.play();
    };
    ViewComponent.prototype.onClickGetFile = function () {
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
    ViewComponent.prototype.onClickGetDB = function () {
        console.log("on click => ", "get DB");
        var self = this;
        http.getFile("http://self.enconcept.com:8090/addict_databases/EngToTha.db").then(function (r) {
            //// Argument (r) is File!
            console.log("result =>", JSON.stringify(r));
        }, function (e) {
            console.log("error >", e);
        });
    };
    return ViewComponent;
}());
ViewComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "views/main.html",
    }),
    __metadata("design:paramtypes", [])
], ViewComponent);
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUl6QyxnQ0FBbUM7QUFDbkMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzFDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBTTFDLElBQWEsYUFBYTtJQUl0QjtRQURRLGVBQVUsR0FBRyxzQkFBc0IsQ0FBQztRQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLG9DQUFZLEdBQXBCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVyQixzREFBc0Q7SUFJMUQsQ0FBQztJQUVPLG9DQUFZLEdBQXBCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV0QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxrQ0FBVSxHQUFsQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLHdEQUF3RDtRQUN4RCx3QkFBd0I7SUFDNUIsQ0FBQztJQUVPLHNDQUFjLEdBQXRCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsT0FBTyxDQUFDLDhFQUE4RSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5QyxJQUFJLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLHlEQUF5RCxDQUFDLENBQUM7WUFDN0YsQ0FBQztZQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUcsS0FBSyxDQUFDLENBQUM7WUFDckMsQ0FBQztRQUVMLENBQUMsRUFBRSxVQUFVLENBQUM7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVPLG9DQUFZLEdBQXBCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUcsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksQ0FBQyxPQUFPLENBQUMsNkRBQTZELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3hGLDBCQUEwQjtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQXZFRCxJQXVFQztBQXZFWSxhQUFhO0lBSnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsaUJBQWlCO0tBQ2pDLENBQUM7O0dBQ1csYUFBYSxDQXVFekI7QUF2RVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5cclxuXHJcbmltcG9ydCBmcyA9IHJlcXVpcmUoXCJmaWxlLXN5c3RlbVwiKTtcclxudmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxudmFyIFRvYXN0ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10b2FzdFwiKTtcclxudmFyIFNvdW5kID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zb3VuZFwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2aWV3cy9tYWluLmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIFZpZXdDb21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgc2FvX2NsaWNrO1xyXG4gICAgcHJpdmF0ZSBwYXRoX3NvdW5kID0gXCJ+L3Jlcy9jbGlja19zaHV0Lm1wM1wiO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiA+IGNvbnN0cnVjdG9yIFwiKTsgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrQWxlcnQoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbmNsaWNrID0+IFwiICwgXCJBbGVydFwiKTtcclxuICAgICAgICBhbGVydChcIkhlbGxvIEFsZXJ0XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vbGV0IHNhb19jbGljayA9IFNvdW5kLmNyZWF0ZShcIn4vcmVzL3Nhb19jbGljay5tcDNcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrVG9hc3QoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbmNsaWNrID0+IFwiICwgXCJUb2FzdFwiKTtcclxuICAgICAgICB2YXIgdG9hc3QgPSBUb2FzdC5tYWtlVGV4dChcIkhlbGxvIFRvYXN0XCIpO1xyXG4gICAgICAgIHRvYXN0LnNob3coKTtcclxuICAgICAgICBzZWxmLnNhb19jbGljay5wbGF5KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5kIGNsaWNrXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hhbmdTb3VuZCgpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nIFNvdW5kXCIpO1xyXG4gICAgICAgIC8vc2VsZi5zYW9fY2xpY2sgPSBTb3VuZC5jcmVhdGUoXCJ+L3Jlcy9jbGlja19zaHV0Lm1wM1wiKTtcclxuICAgICAgICAvL3NlbGYuc2FvX2NsaWNrLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tHZXRGaWxlKCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2sgb25DbGlja0dldEZpbGVcIik7XHJcbiAgICAgICAgdmFyIGZpbGVQYXRoID0gZnMucGF0aC5qb2luKGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKS5wYXRoLCBcInRlc3QucG5nXCIpO1xyXG4gICAgICAgIGh0dHAuZ2V0RmlsZShcImh0dHA6Ly90cmFuc2xhdGUuZ29vZ2xlLmNvbS90cmFuc2xhdGVfdHRzP2llPVVURi04JnRsPWVuJmNsaWVudD10dy1vYiZxPWJsdWVcIiwgZmlsZVBhdGgpLnRoZW4oZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0ID0+IFwiICwgSlNPTi5zdHJpbmdpZnkocikpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2FvX2NsaWNrID0gU291bmQuY3JlYXRlKFwifi9kYXRhL3VzZXIvMC9vcmcubmF0aXZlc2NyaXB0LnRlc3Rzb3VuZC9maWxlcy90ZXN0Lm1wM1wiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgPT4gXCIgLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrR2V0REIoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uIGNsaWNrID0+IFwiICwgXCJnZXQgREJcIik7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBodHRwLmdldEZpbGUoXCJodHRwOi8vc2VsZi5lbmNvbmNlcHQuY29tOjgwOTAvYWRkaWN0X2RhdGFiYXNlcy9FbmdUb1RoYS5kYlwiKS50aGVuKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIC8vLy8gQXJndW1lbnQgKHIpIGlzIEZpbGUhXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0ID0+XCIgLCBKU09OLnN0cmluZ2lmeShyKSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciA+XCIgLCBlKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=