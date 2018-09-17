/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojprogress'],
 function(oj, ko, $) {

    function IncidentsViewModel() {
      var self = this;
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      self.button2Text = "Button 2";

      self.clickedButton = ko.observable("(None clicked yet)");
      self.buttonClick = function(event){
          self.clickedButton(event.currentTarget.id);
          return true;
      }

      this.isAdvanced = ko.observableArray([]);

      self.selectedMenuItem = ko.observable("");

      self.menuItemAction = function( event ) {
        self.selectedMenuItem(event.target.value);
      };

      self.progressValue = ko.observable(0);
      self.progressValue.subscribe(function(newValue) {
        if(newValue == 100) {
          $("#loadingRegion").text("Done!");
          $("#loadingRegion").removeAttr("aria-busy");
          $("#loadingRegion").removeAttr("aria-describedby");
        }
      });
      window.setInterval(function() {
        if (self.progressValue() !== -1)
          self.progressValue(self.progressValue() + 1);
      }, 30);

          // if the contents of the array can change, then replace the [...] with ko.observableArray([...])
      this.drinkValues = [
          {id: 'coffee', label: 'Coffee'},
          {id: 'tea',    label: 'Tea'},
          {id: 'milk',   label: 'Milk'},
      ];

      // if the contents of the array can change, then replace the [...] with ko.observableArray([...])
      this.someButtons = [
          {id: 'Library',  icon: 'demo-icon-font demo-library-icon-24'},
          {id: 'Home', icon: 'demo-icon-font demo-home-icon-24'},
          {id: 'Grid',  icon: 'oj-fwk-icon-grid oj-fwk-icon'}
      ];

      this.toolbarClassNames = ko.observableArray([]);

      this.toolbarClasses = ko.computed(function() {
          return this.toolbarClassNames().join(" ");
      }, this);

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);
