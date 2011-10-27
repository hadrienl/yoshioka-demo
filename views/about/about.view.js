YUI().add('demo_about_view', function(Y) {

	var

	NS = 'demo',

	AboutView = function(config)
	{
		AboutView.superclass.constructor.apply(this, arguments);
	};

	/**
	 * About view
	 */
	Y.namespace(NS).AboutView = Y.extend(AboutView, Y.ys.View, {
		template: {$about.tpl},
		
		renderUI: function()
		{
			this.container.append(
				this.compileTpl()
			);
			
		}
	},
	{
		NAME: 'AboutView'
	});
	
}, '1.0', {requires: ["ys_view"]})