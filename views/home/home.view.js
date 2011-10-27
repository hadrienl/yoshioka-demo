YUI().add('demo_home_view', function(Y) {

	var

	NS = 'demo',

	HomeView = function(config)
	{
		HomeView.superclass.constructor.apply(this, arguments);
	};

	/**
	 * Home view
	 */
	Y.namespace(NS).HomeView = Y.extend(HomeView, Y.ys.View, {
		template: {$home.tpl},
		
		renderUI: function()
		{
			this.container.append(
				this.compileTpl()
			);
			
		}
	},
	{
		NAME: 'HomeView'
	});
	
}, '1.0', {requires: ["ys_view"]})