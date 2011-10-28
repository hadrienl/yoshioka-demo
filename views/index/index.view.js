YUI().add('demo_index_view', function(Y) {

	var

	NS = 'demo',
	
	CLASS_HEADER = 'header',
	CLASS_MAIN = 'main',
	CLASS_FOOTER = 'footer',

	IndexView = function(config)
	{
		IndexView.superclass.constructor.apply(this, arguments);
	};

	/**
	 * Index view
	 */
	Y.namespace(NS).IndexView = Y.extend(IndexView, Y.ys.View, {
		template: {$index.tpl},
		
		renderUI: function()
		{
			this.container.append(
				this.compileTpl({
					class_header: CLASS_HEADER,
					class_main: CLASS_MAIN,
					class_footer: CLASS_FOOTER
				})
			);
			
			this._header = new Y.demo.HeaderSubview();
			this.container.one('.'+CLASS_HEADER).append(
				this._header.render()
			);
			
			this._footer = new Y.demo.FooterSubview();
			this.container.one('.'+CLASS_FOOTER).append(
				this._footer.render()
			);
		},
		bindUI: function()
		{
			Y.ys.Coord.after(
				'mainviewChange',
				function(e, view)
				{
					this.setView(
						Y.ys.Coord.get('mainview'),
						CLASS_MAIN
					);
				},
				this
			);
		},
		destructor: function()
		{
			this._header.destroy();
			this._footer.destroy();
		}
	},
	{
		NAME: 'IndexView'
	});
	
}, '1.0', {requires: ["ys_view", "demo_header_subview", "demo_footer_subview", "css_index_skin"]})