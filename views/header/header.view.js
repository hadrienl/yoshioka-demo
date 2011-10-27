YUI().add('demo_header_view', function(Y) {

	var
	
	NS = 'demo',
	
	HeaderView = function(config)
	{
		HeaderView.superclass.constructor.apply(this, arguments);
	};
	
	/**
	 * Header view
	 */
	Y.namespace(NS).HeaderView = Y.extend(HeaderView, Y.ys.View, {
		template: {$header.tpl},
		
		renderUI: function()
		{
			this.container.append(
				this.compileTpl()
			);
		}
	},
	{
		NAME: 'HeaderView'
	});
	
}, '1.0', {requires: ["ys_view", "css_header_skin"]});
