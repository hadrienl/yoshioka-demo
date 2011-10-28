YUI().add('demo_langs_subview', function(Y) {

	var
	
	NS = 'demo',
	
	LangsSubview = function(config)
	{
		LangsSubview.superclass.constructor.apply(this, arguments);
	};
	
	/**
	 * Langs subview
	 */
	Y.namespace(NS).LangsSubview = Y.extend(LangsSubview, Y.ys.View, {
		container: '<ul></ul>',
		renderUI: function()
		{
			Y.Array.each(
				Y.config.locales,
				function(l)
				{
					var i18n = __('index~locale_'+l.locale, null, true),
						li = Y.Node.create(
						'<li><a href="#">'+i18n+'</a></li>'
					);
					li.on(
						'click',
						function(e, locale)
						{
							e.preventDefault();
							
							Y.ys.I18nManager.set('locale', locale)
						},
						this,
						l.locale
					);
					this.container.append(li);
				},
				this
			);
		}
	},
	{
		NAME: 'LangsSubview'
	});
	
}, '1.0', {requires: ["ys_view"]});
