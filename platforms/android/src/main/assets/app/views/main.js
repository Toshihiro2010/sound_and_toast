"use strict";
var core_1 = require("@angular/core");
var Toast = require("nativescript-toast");
var Sound = require("nativescript-sound");
var ViewComponent = (function () {
    function ViewComponent() {
        this.sao_click = Sound.create("~/res/click_shut.mp3");
        console.log(" > constructor ");
    }
    ViewComponent.prototype.onClickAlert = function () {
        var self = this;
        console.log("Onclick => ", "Alert");
        alert("Hello Alert");
        //var sao_click = Sound.create("~/res/sao_click.mp3");
        //sao_click.play();
        self.sao_click.play();
    };
    ViewComponent.prototype.onClickToast = function () {
        var self = this;
        console.log("Onclick => ", "Toast");
        var toast = Toast.makeText("Hello Toast");
        //var toast_long = Toast.maketext("Hello Toast _ long");
        self.changSound();
        toast.show();
    };
    ViewComponent.prototype.changSound = function () {
        var self = this;
        console.log("Chang Sound");
        //self.sao_click = Sound.create("~/res/click_shut.mp3");
        self.sao_click.play();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUt6QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQU0xQyxJQUFhLGFBQWE7SUFJdEI7UUFGUSxjQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBR3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUVuQyxDQUFDO0lBR08sb0NBQVksR0FBcEI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUcsT0FBTyxDQUFDLENBQUM7UUFDckMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JCLHNEQUFzRDtRQUN0RCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUUxQixDQUFDO0lBRU8sb0NBQVksR0FBcEI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUcsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUxQyx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sa0NBQVUsR0FBbEI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQix3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBSUwsb0JBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLGFBQWE7SUFKekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxpQkFBaUI7S0FDakMsQ0FBQzs7R0FDVyxhQUFhLENBdUN6QjtBQXZDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcblxyXG5cclxuXHJcbnZhciBUb2FzdCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdG9hc3RcIik7XHJcbnZhciBTb3VuZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc291bmRcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbWFpbi5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3Q29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHNhb19jbGljayA9IFNvdW5kLmNyZWF0ZShcIn4vcmVzL2NsaWNrX3NodXQubXAzXCIpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgPiBjb25zdHJ1Y3RvciBcIik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0FsZXJ0KCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25jbGljayA9PiBcIiAsIFwiQWxlcnRcIik7XHJcbiAgICAgICAgYWxlcnQoXCJIZWxsbyBBbGVydFwiKTtcclxuICAgICAgICAvL3ZhciBzYW9fY2xpY2sgPSBTb3VuZC5jcmVhdGUoXCJ+L3Jlcy9zYW9fY2xpY2subXAzXCIpO1xyXG4gICAgICAgIC8vc2FvX2NsaWNrLnBsYXkoKTtcclxuICAgICAgICBzZWxmLnNhb19jbGljay5wbGF5KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja1RvYXN0KCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25jbGljayA9PiBcIiAsIFwiVG9hc3RcIik7XHJcbiAgICAgICAgdmFyIHRvYXN0ID0gVG9hc3QubWFrZVRleHQoXCJIZWxsbyBUb2FzdFwiKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3ZhciB0b2FzdF9sb25nID0gVG9hc3QubWFrZXRleHQoXCJIZWxsbyBUb2FzdCBfIGxvbmdcIik7XHJcbiAgICAgICAgc2VsZi5jaGFuZ1NvdW5kKCk7XHJcbiAgICAgICAgdG9hc3Quc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hhbmdTb3VuZCgpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nIFNvdW5kXCIpO1xyXG4gICAgICAgIC8vc2VsZi5zYW9fY2xpY2sgPSBTb3VuZC5jcmVhdGUoXCJ+L3Jlcy9jbGlja19zaHV0Lm1wM1wiKTtcclxuICAgICAgICBzZWxmLnNhb19jbGljay5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19