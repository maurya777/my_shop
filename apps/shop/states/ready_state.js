Shop.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Shop.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    Shop.getPath('mainPage.mainPane').remove();
  }

});

