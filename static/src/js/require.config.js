var language = document.cookie.match(/language=([^;]+)/);
var locale = 'zh-cn';
if (language) {
	locale = language[1].split('_')[0]
}

requirejs.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	baseUrl: './../static/src/js',
	paths: {
		'jquery': './lib/jquery',
		'bootstrap': './lib/bootstrap',
		'modernizr': './lib/modernizr',
		'backbone': './lib/backbone',
		'underscore': './lib/underscore',
		'text': './lib/require/text',
		'css': './lib/require/css',
		'i18n': './lib/require/i18n',
		'jsTempl': './lib/jquery.tmpl',
		'datetimepicker': './lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker',
		'paginator': './lib/bootstrap-paginator/bootstrap-paginator.min',
		'bootstrap-dialog': './lib/bootstrap-dialog/js/bootstrap-dialog.min',
		'loading': './lib/loading/js/jquery.showLoading.min',
		'jqprint': './lib/jqueryjqprint/jquery.jqprint',
		'migrate': './lib/jqueryjqprint/jquery-migrate-1.2.1.min',
		'table2excel': './lib/table2excel/jquery.table2excel.min',
		'jq-form': './lib/jquery-form/jquery.form.min',
		'jqPrintArea': './lib/jQueryPrint/jQuery.print',
		'mousewheel': './lib/jquery.mCustomScrollbar/jquery.mousewheel',
		'mCustomScrollbar': './lib/jquery.mCustomScrollbar/jquery.mCustomScrollbar'
	},
	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'bootstrap': ['jquery'],
		'jsTempl': ['jquery'],
		'datetimepicker': ['jquery', 'bootstrap', 'css!./lib/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css'],
		'paginator': ['jquery'],
		'bootstrap-dialog': ['jquery', 'css!./lib/bootstrap-dialog/css/bootstrap-dialog.min.css'],
		'loading': ['jquery'],
		'jqprint': ['jquery', 'migrate'],
		'migrate': ['jquery'],
		'table2excel': ['jquery'],
		'jq-form': ['jquery'],
		'jqPrintArea': ['jquery'],
		'mCustomScrollbar': ['jquery', 'mousewheel', 'css!./lib/jquery.mCustomScrollbar/jquery.mCustomScrollbar.min.css']
	},
	config: {
		text: {
			onXhr: function(xhr, url) {
				xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			}
		},
		i18n: {
			locale: typeof locale !== 'undefined' ? locale : 'zh'
		}
	},
	map: {
		'*': {
			'css': './lib/require/css'
		}
	}
});