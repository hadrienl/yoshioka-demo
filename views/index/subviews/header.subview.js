YUI().add('demo_header_subview', function(Y) {

	var
	
	NS = 'demo',
	
	CLASS_LANGS = 'langs',
	
	HeaderSubview = function(config)
	{
		HeaderSubview.superclass.constructor.apply(this, arguments);
	};
	
	/**
	 * Header subview
	 */
	Y.namespace(NS).HeaderSubview = Y.extend(HeaderSubview, Y.ys.View, {
		template: {$header.tpl},
		renderUI: function()
		{
			this.container.append(
				this.compileTpl({
					class_langs: CLASS_LANGS
				})
			);
			
			this._langs = new Y.demo.LangsSubview();
			this.container.one('.'+CLASS_LANGS).append(
				this._langs.render()
			);
		},
		destructor: function()
		{
			this._langs.destroy();
		}
	},
	{
		NAME: 'HeaderSubview'
	});
	
}, '1.0', {requires: ["ys_view", "demo_langs_subview"]});
