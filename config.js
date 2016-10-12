/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'templates'},
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	config.height = 300;
	//config.allowedContent = '*';

	config.fullPage = true;
	config.disallowedContent = 'script; *[on*]';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';

	config.extraPlugins = 'justify,lineutils,widget,image2,templates';

	config.filebrowserBrowseUrl = '/plugins/ckeditor/kcfinder/browse.php?type=files&dir=files/public';
    config.filebrowserImageBrowseUrl = '/plugins/ckeditor/kcfinder/browse.php?type=images&dir=images/public';
    config.filebrowserFlashBrowseUrl = '/plugins/ckeditor/kcfinder/browse.php?type=flash&dir=flash/public';
    config.filebrowserUploadUrl = '/plugins/ckeditor/kcfinder/upload.php?type=files&dir=files/public';
    config.filebrowserImageUploadUrl = '/plugins/ckeditor/kcfinder/upload.php?type=images&dir=images/public';
    config.filebrowserFlashUploadUrl = '/plugins/ckeditor/kcfinder/upload.php?type=flash&dir=flash/public';
};
