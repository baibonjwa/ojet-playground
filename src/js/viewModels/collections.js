/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery'],
 function(oj, ko, $, moduleUtils) {
    oj.ModuleBinding.defaults.modelPath = 'viewModels/collections/';
    oj.ModuleBinding.defaults.viewPath = 'text!views/collections/';

    function CollectionsViewModel() {
      var self = this;
      self.collectionsRouter = oj.Router.rootInstance.createChildRouter('collections').configure({
        'data-grid':   { label: 'Data Grid',  isDefault: true },
        'indexer':  { label: 'Indexer' },
        'list-view': { label: 'List View' },
        'paging-control': { label: 'Paging Control' },
        'pull-to-refresh': { label: 'Pull To Refresh(Touch)' },
        'row-expander': { label: 'Row Expander' },
        'swipe-to-reveal': { label: 'Swipe To Reveal(Touch)' },
        'table': { label: 'Table' },
        'tree-view': { label: 'Tree View' },
      });

      self.display = ko.observable("all");
      self.edge = ko.observable("end");

      // this.selectedItem = ko.observable("home");

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
        oj.Router.sync().then(
          null,
          function(error) {
            oj.Logger.error('Error during refresh: ' + error.message);
          }
        );
      }

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
        self.collectionsRouter.dispose();
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete. * That includes any possible animation between the old and the new View. */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new CollectionsViewModel();
  }
);
