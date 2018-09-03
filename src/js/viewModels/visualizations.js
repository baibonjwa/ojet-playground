/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart', 'ojs/ojthematicmap', 'ojs/ojlegend'],
 function(oj, ko, $) {

    function VisualizationsViewModel() {
      var self = this;

      self.orientationValue = ko.observable('vertical');
      self.lineTypeValue = ko.observable('curved');

      /* chart data */
      var lineSeries = [{name : "Millenials", items : [18, 52, 25, 53, 59, 48, 41, 58, 82, 61, 33, 66, 71]},
                        {name : "Frequent buyers", items : [25, 48, 30, 48, 50, 41, 48, 50, 88, 78, 60, 72, 50]},
                        {name : "Seniors", items : [23, 29, 22, 42, 45, 32, 51, 32, 38, 42, 50, 42, 52]}]

      var lineGroups = ["Jan 1", "Jan 15", "Jan 29", "Feb 12", "Feb 26", "Mar 12", "Mar 26", "Mar 31", "Apr 14", "Apr 28", "May 12", "May 26", "May 31"];

      this.lineSeriesValue = ko.observableArray(lineSeries);
      this.lineGroupsValue = ko.observableArray(lineGroups);

      var lineSeries2 = [{name : "Millenials", items : [98, 290, 360, 470]}]
      var lineGroups2 = ["Jan 01", "Feb 01", "Mar 01", "Apr 01"];
      self.lineSeriesValue2 = ko.observableArray(lineSeries2);
      self.lineGroupsValue2 = ko.observableArray(lineGroups2);
      self.lineTypeValue2 = ko.observable('straight');

      /* toggle buttons*/
      self.lineTypeOptions = [
          {id: 'straight', label: 'straight', value: 'straight'},
          {id: 'curved', label: 'curved', value: 'curved'},
          {id: 'stepped', label: 'stepped', value: 'stepped'},
          {id: 'centeredStepped', label: 'centeredStepped', value: 'centeredStepped'},
          {id: 'segmented', label: 'segmented', value: 'segmented'},
          {id: 'centeredSegmented', label: 'centeredSegmented', value: 'centeredSegmented'},
          {id: 'none', label: 'none', value: 'none'},
      ];

      /* toggle button variables */
      self.stackValue = ko.observable('off');
      self.orientationValue = ko.observable('vertical');
      /* chart data */
      var barSeries = [{name: "Number of Customers", items: [5.2, 13, 3]},
                      {name: "Converter Percentage", items: [11, 10, 8]}];

      var barGroups = ["Millenials", "Home Owners", "Sports Enthusiast"];

      self.barSeriesValue = ko.observableArray(barSeries);
      self.barGroupsValue = ko.observableArray(barGroups);


      // https://www.oracle.com/webfolder/technetwork/jet/cookbook/dataVisualizations/thematicMap/resources/maps/usa_states.json
      // https://www.oracle.com/webfolder/technetwork/jet/cookbook/dataVisualizations/thematicMap/resources/data/usaRainfall.json
      // this.mapProvider = {
      //   geo: JSON.parse(geo),
      //   propertiesKeys: {
      //     id: 'lLabel',
      //     shortLabel: 'sLabel',
      //     longLabel: 'lLabel'
      //   }
      // };

      // var getRainfallColor = function(rainfall) {
      //   // Bucket rainfall data into categories to color
      //   if (rainfall <= 20)
      //     return '#42C0FB';
      //   else if (rainfall <= 30)
      //     return '#35A4DF';
      //   else if (rainfall <= 40)
      //     return '#2888C3';
      //   else if (rainfall <= 50)
      //     return '#1A6BA7';
      //   else
      //     return '#0D4F8B';
      // };

      // this.areaData = [];
      // var data = JSON.parse(jsonData);
      // for (var i = 0; i < data.length; i++) {
      //   var rainfall = data[i]["Inches"];
      //   this.areaData.push({id: i.toString(),
      //     color: getRainfallColor(rainfall),
      //     location: data[i]["State"],
      //     shortDesc: rainfall.toString() + ' inches of annual rainfall'});
      // }

      // this.legendSections = [{items: [
      //   {text: "0-20", color: getRainfallColor(20)},
      //   {text: "21-30", color: getRainfallColor(30)},
      //   {text: "31-40", color: getRainfallColor(40)},
      //   {text: "41-50", color: getRainfallColor(50)},
      //   {text: "51+", color: getRainfallColor(51)},
      // ]}];

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
    return new VisualizationsViewModel();
  }
);
