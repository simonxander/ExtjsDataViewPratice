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
				{name: 'David', age: '17', from: '1980/3/3'}
			]
		})

		// Must callParent when override constructor
		this.callParent(arguments);
	},
	html: 'Panel Body'
});