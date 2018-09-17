/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojarraydataprovider',
'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojanimation', 'ojs/ojtable', 'ojs/ojchart'],
 function(oj, ko, ArrayDataProvider) {

    // Keep track of whether the front or back is showing
    self.showingFront = true;
    self.buttonClick = function() {
      var elem = document.getElementById('animatable');
      // Determine startAngle and endAngle
      var startAngle = self.showingFront ? '0deg' : '180deg';
      var endAngle = self.showingFront ? '180deg' : '0deg';
      // Animate the element
      oj.AnimationUtils['flipOut'](elem, {'flipTarget': 'children',
                                          'persist': 'all',
                                          'startAngle': startAngle,
                                          'endAngle': endAngle});
      self.showingFront = !self.showingFront;
    };
    self.dataSeries = [{name: "Series 1", items: [42]},
                        {name: "Series 2", items: [55]},
                        {name: "Series 3", items: [36]},
                        {name: "Series 4", items: [10]},
                        {name: "Series 5", items: [5]}];
    self.dataprovider = new ArrayDataProvider(this.dataSeries, {keyAttributes: 'name'});

    function AboutViewModel() {
      var self = this;
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

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
    return new AboutViewModel();
  }
);
