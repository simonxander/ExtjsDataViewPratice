Ext.define('MyDataView.MyPanel', {
	extend: 'Ext.panel.Panel',
	title: 'Panel Title',
	constructor: function(config) {
		this.store = new Ext.data.Store({
			fields: [
				{name : 'name'},
				{name : 'age' , type : 'float' },
				{name : 'from' , type : 'date' }
			],
			data: [
				{name: 'Simon', age: '18', from: '1997/5/8'},
				{name: 'Simon2', age: '20', from: '2015/9/2'},
				{name: 'David', age: '17', from: '1980/3/3'}
			]
		})

		var dataViewConfig = {
			xtype: 'dataview',
			store: this.store,
			cls: 'myDataviewCls',
			itemSelector: 'div.item',
			tpl: new Ext.XTemplate(
				'<tpl for=".">',
					'<div class="item"> <b>{name}</b>Age: {age} <br>{from}</div>',
				'</tpl>'
			)
		};

		config.items = dataViewConfig;

		// Must callParent when override constructor
		this.callParent(arguments);
	}
});
