YUI().add('demo_footer_subview', function(Y) {

	var
	
	NS = 'demo',
	
	FooterSubview = function(config)
	{
		FooterSubview.superclass.constructor.apply(this, arguments);
	};
	
	/**
	 * Footer subview
	 */
	Y.namespace(NS).FooterSubview = Y.extend(FooterSubview, Y.ys.View, {
		template: {$footer.tpl},
		
		renderUI: function()
		{
			this.container.append(
				this.compileTpl()
			);
			
		}
	},
	{
		NAME: 'FooterSubview'
	});
	
}, '1.0', {requires: ["ys_view"]});
