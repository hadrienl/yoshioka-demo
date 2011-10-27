YUI().add('index_user_model_test', function(Y) {
	var suite = new Y.Test.Suite("User");
	
	suite.add(
		new Y.Test.Case({

			name: "User",
		
			setUp: function()
			{
				Y.ys.I18nManager.set('locale', 'en');
				this.data = new Y.demo.HeaderView();
			},
			tearDown: function()
			{
				this.data.destroy();
			},
		
			testName : function ()
			{
				this.data.render();
				
				Y.Assert.areEqual(
					1,
					this.data.container.all('h1').size(),
					"Value must be 1"
				);
			}
		})
	);
	
	Y.Test.Runner.add(suite);
}, '1.0', {requires: ["demo_header_view"]});
