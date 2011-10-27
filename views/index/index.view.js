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
			
			this.setView(
				'header',
				CLASS_HEADER
			);
			this.setView(
				'footer',
				CLASS_FOOTER
			);
		},
		bindUI: function()
		{
			Y.ys.Coord.after(
				'change',
				function(e, view)
				{
					this.setView(
						Y.ys.Coord.get('mainview'),
						CLASS_MAIN
					);
				},
				this
			);
		}
	},
	{
		NAME: 'IndexView'
	});
	
}, '1.0', {requires: ["ys_view", "css_index_skin"]})