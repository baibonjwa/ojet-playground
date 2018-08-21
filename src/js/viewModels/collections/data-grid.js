/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojdatagrid',
'ojs/ojcollectiondatagriddatasource', 'ojs/ojvalidation-datetime', 'ojs/ojvalidation-number'
],
 function(oj, ko, $) {

    function DataGridViewModel() {
      var self = this;
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      var collection = new oj.Collection(null, {
          url: 'http://5b5ac2e250bab80014e5f7c4.mockapi.io/api/v1/users'
      });

      this.dataSource = new oj.CollectionDataGridDataSource(collection,
        { rowHeader: 'id', columns: [
          'avatar',
          'name',
          'title',
          'country',
          'createdAt'
        ]}
      );

      console.log(collection)

      this.getCellClassName = function(cellContext)
      {
          var key = cellContext['keys']['column'];
          if (key === 'createdAt')
          {
              return 'oj-helper-justify-content-right';
          }
          else if (key === 'name' || key === 'avatar') {
              return 'oj-sm-justify-content-flex-start';
          }
      };

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
    return new DataGridViewModel();
  }
);
