Shop.statechart = SC.Statechart.create({

  initialState: 'readyState',

  readyState: SC.State.plugin('Shop.ReadyState')
  // someOtherState: SC.State.plugin('Shop.SomeOtherState')

});
