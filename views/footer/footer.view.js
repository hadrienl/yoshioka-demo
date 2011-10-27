YUI().add('demo_footer_view', function(Y) {

	var
	
	NS = 'demo',
	
	FooterView = function(config)
	{
		FooterView.superclass.constructor.apply(this, arguments);
	};
	
	/**
	 * Footer view
	 */
	Y.namespace(NS).FooterView = Y.extend(FooterView, Y.ys.View, {
		template: {$footer.tpl},
		
		renderUI: function()
		{
			this.container.append(
				this.compileTpl()
			);
			
		}
	},
	{
		NAME: 'FooterView'
	});
	
}, '1.0', {requires: ["ys_view", "css_footer_skin"]});
