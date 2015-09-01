Ext.Loader.setPath('MyDataView', 'js');
Ext.require('MyDataView.MyPanel');

Ext.onReady(function() {
	Ext.application({
		name   : 'MyDataViewApp',
		launch : function() {
			Ext.create('Ext.container.Viewport', {
				renderTo : Ext.getBody(),
				layout:'fit',
				items : [
					Ext.create('MyDataView.MyPanel', {})
				]
			});
		}
	});
});