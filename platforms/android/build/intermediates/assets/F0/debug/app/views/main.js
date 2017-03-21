"use strict";
var core_1 = require("@angular/core");
var Toast = require("nativescript-toast");
var Sound = require("nativescript-sound");
var ViewComponent = (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.onClickAlert = function () {
        console.log("Onclick => ", "Alert");
        alert("Hello Alert");
    };
    ViewComponent.prototype.onClickToast = function () {
        console.log("Onclick => ", "Toast");
        var toast = Toast.makeText("Hello Toast");
        //var toast_long = Toast.maketext("Hello Toast _ long");
        toast.show();
    };
    return ViewComponent;
}());
ViewComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "views/main.html",
    })
], ViewComponent);
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUt6QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQU0xQyxJQUFhLGFBQWE7SUFBMUI7SUFrQkEsQ0FBQztJQWhCVyxvQ0FBWSxHQUFwQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU8sb0NBQVksR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTFDLHdEQUF3RDtRQUV4RCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUlMLG9CQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxhQUFhO0lBSnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsaUJBQWlCO0tBQ2pDLENBQUM7R0FDVyxhQUFhLENBa0J6QjtBQWxCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcblxyXG5cclxuXHJcbnZhciBUb2FzdCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdG9hc3RcIik7XHJcbnZhciBTb3VuZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc291bmRcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbWFpbi5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWaWV3Q29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tBbGVydCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25jbGljayA9PiBcIiAsIFwiQWxlcnRcIik7XHJcbiAgICAgICAgYWxlcnQoXCJIZWxsbyBBbGVydFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tUb2FzdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25jbGljayA9PiBcIiAsIFwiVG9hc3RcIik7XHJcbiAgICAgICAgdmFyIHRvYXN0ID0gVG9hc3QubWFrZVRleHQoXCJIZWxsbyBUb2FzdFwiKTtcclxuXHJcbiAgICAgICAgLy92YXIgdG9hc3RfbG9uZyA9IFRvYXN0Lm1ha2V0ZXh0KFwiSGVsbG8gVG9hc3QgXyBsb25nXCIpO1xyXG5cclxuICAgICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19