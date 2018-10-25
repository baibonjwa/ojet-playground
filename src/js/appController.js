/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojmodule-element-utils', 'ojs/ojmodule-element', 'ojs/ojarraytabledatasource'],
  function(oj, ko, moduleUtils) {
     function ControllerViewModel() {
       var self = this;

      // Router setup
      self.router = oj.Router.rootInstance;
      self.router.configure({
        'collections': {label: 'Collections', isDefault: true},
        'controls': {label: 'Controls'},
        'forms': {label: 'Forms'},
        'framework': {label: 'Framework'},
        'layout': {label: 'Layout'},
        'patterns': {label: 'Patterns'},
        'visualizations': {label: 'Visualizations'}
      });

      self.collectionsRouter = self.router.createChildRouter('collections').configure({
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

      self.modulePath = ko.pureComputed(
        function() {
          return self.router.moduleConfig.name()
        }
      );

      // Default is urlPathAdapter
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

      // self.moduleConfig = ko.observable({'view':[], 'viewModel':null});

      // self.loadModule = function() {
      //   ko.computed(function() {
      //     var name = self.router.moduleConfig.name();
      //     // var viewPath = 'views/' + self.router.getCurrentChildRouter() + '/' + name + '.html';
      //     var viewPath = 'views/' + name + '.html';
      //     var modelPath = 'viewModels/' + name;
      //     var masterPromise = Promise.all([
      //       moduleUtils.createView({'viewPath':viewPath}),
      //       moduleUtils.createViewModel({'viewModelPath':modelPath})
      //     ]);
      //     masterPromise.then(
      //       function(values){
      //         self.moduleConfig({'view':values[0],'viewModel':values[1]});
      //       },
      //       function(reason){}
      //     );
      //   });
      // };

      // Navigation setup
      var navData = [
        // {
        //   name: 'Collections', id: 'collections',
        //   iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'
        // },
        // {
        //   name: 'Controls', id: 'controls',
        //   iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24'
        // }, {
        //   name: 'Forms', id: 'forms',
        //   iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-people-icon-24'
        // }, {
        //   name: 'Framework', id: 'framework',
        //   iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'
        {
          name: 'Custom Dashboard', id: 'layout',
          iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-people-icon-24'
        }, {
          name: 'Data Visualization Designer', id: 'patterns',
          iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'
        }, {
          name: 'Visualizations', id: 'visualizations',
          iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'
        }
      ];
      self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});

      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("CDP Dashboard Spike Demo");
      // User Info used in Global Navigation area
      self.userLogin = ko.observable("byron.bai@oracle.com");
    }

    return new ControllerViewModel();
  }
);
