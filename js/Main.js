Ext.onReady(function() {
	Ext.application({
		name   : 'MyDataViewApp',
		launch : function() {
			Ext.create('Ext.container.Viewport', {
				renderTo : Ext.getBody(),
				layout:'fit',
				items : [
					Ext.create('Ext.panel.Panel',{
						title: 'Panel Title',
						html: 'Panel Body'
					})
				]
			});
		}
	});
});