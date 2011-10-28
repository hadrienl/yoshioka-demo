YUI().add('demo_header_view', function(Y) {

	var
	
	NS = 'demo',
	
	CLASS_LANGS = 'langs'
	
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
				this.compileTpl({
					class_langs: CLASS_LANGS
				})
			);
			
			this._langsSubview = new Y.demo.LangsSubview();
			this.container.one('.'+CLASS_LANGS).append(
				this._langsSubview.render()
			);
		},
		
		destructor: function()
		{
			this._langsSubview.destroy(true);
		}
	},
	{
		NAME: 'HeaderView'
	});
	
}, '1.0', {requires: ["ys_view", "demo_langs_subview", "css_header_skin"]});
