// ==========================================================================
// Project:   Shop
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals Shop */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Shop.main = function main() {
  var statechart = Shop.statechart;

  SC.RootResponder.responder.set('defaultResponder', statechart);
  statechart.initStatechart();
};


function main() { Shop.main(); }
