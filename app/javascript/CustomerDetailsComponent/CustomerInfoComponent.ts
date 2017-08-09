import { Component } from "@angular/core";
import   template    from "./CustomerInfoComponent.html";

var CustomerInfoComponent = Component({
  selector: "shine-customer-info",
  inputs: [
    "customer"
  ],
  template: template
}).Class({
  constructor: [
    function() {
    }
  ]
});

export { CustomerInfoComponent };
