/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Emoji from '@wwalc/ckeditor5-emoji/src/emoji'

export default class ClassicEditor extends ClassicEditorBase {}
window.ClassicEditor = ClassicEditor;
// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Alignment,
	Autoformat,
	BlockQuote,
	Bold,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontSize,
	Heading,
	Indent,
	Italic,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Strikethrough,
	Underline,
	HorizontalLine,
	Emoji
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'heading',
			'fontSize',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'fontBackgroundColor',
			'fontColor',
			'|',
			'indent',
			'outdent',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'link',
			'horizontalLine',
			'emoji'
		]
	},
	alignment: {
		options: [ 'left', 'right', 'center', 'justify' ]
	},
	link: {
		decorators: {
			addTargetToLinks: {
				mode: 'manual',
				label: 'Open in new tab',
				attributes: {
					target: '_blank',
				}
			}
		}
	},
	fontBackgroundColor: {
		colors: [
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black'
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey'
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey'
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey'
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true
			},
			{
				color: 'hsl(0, 75%, 60%)',
				label: 'Light Red'
			},
			{
				color: 'hsl(1,72%,36%)',
				label: 'Red'
			},
			{
				color: 'hsl(4,100%,23%)',
				label: 'Dark Red'
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Light Orange'
			},
			{
				color: 'hsl(30,95%,39%)',
				label: 'Orange'
			},
			{
				color: 'hsl(29,100%,30%)',
				label: 'Light brown'
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Light Yellow'
			},
			{
				color: 'hsl(47,100%,38%)',
				label: 'Yellow'
			},
			{
				color: 'hsl(90, 75%, 60%)',
				label: 'Light green'
			},
			{
				color: 'hsl(120, 75%, 60%)',
				label: 'Green'
			},
			{
				color: 'hsl(123,64%,27%)',
				label: 'Dark Green'
			},
			{
				color: 'hsl(138,100%,15%)',
				label: 'Grass Green'
			},
			{
				color: 'hsl(150, 75%, 60%)',
				label: 'Aquamarine'
			},
			{
				color: 'hsl(180, 75%, 60%)',
				label: 'Turquoise'
			},
			{
				color: 'hsl(210, 75%, 60%)',
				label: 'Light blue'
			},
			{
				color: 'hsl(240, 75%, 60%)',
				label: 'Blue'
			},
			{
				color: 'hsl(240,65%,45%)',
				label: 'Dark Blue'
			},
			{
				color: 'hsl(241,65%,23%)',
				label: 'Deep Dark Blue'
			},
			{
				color: 'hsl(270, 75%, 60%)',
				label: 'Light Purple'
			},
			{
				color: 'hsl(264,53%,40%)',
				label: 'Purple'
			},
			{
				color: 'hsl(260,63%,28%)',
				label: 'Dark Purple'
			}
		]
	},
	fontColor: {
		colors: [
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black'
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey'
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey'
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey'
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true
			},
			{
				color: 'hsl(0, 75%, 60%)',
				label: 'Light Red'
			},
			{
				color: 'hsl(1,72%,36%)',
				label: 'Red'
			},
			{
				color: 'hsl(4,100%,23%)',
				label: 'Dark Red'
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Light Orange'
			},
			{
				color: 'hsl(30,95%,39%)',
				label: 'Orange'
			},
			{
				color: 'hsl(29,100%,30%)',
				label: 'Light brown'
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Light Yellow'
			},
			{
				color: 'hsl(47,100%,38%)',
				label: 'Yellow'
			},
			{
				color: 'hsl(90, 75%, 60%)',
				label: 'Light green'
			},
			{
				color: 'hsl(120, 75%, 60%)',
				label: 'Green'
			},
			{
				color: 'hsl(123,64%,27%)',
				label: 'Dark Green'
			},
			{
				color: 'hsl(138,100%,15%)',
				label: 'Grass Green'
			},
			{
				color: 'hsl(150, 75%, 60%)',
				label: 'Aquamarine'
			},
			{
				color: 'hsl(180, 75%, 60%)',
				label: 'Turquoise'
			},
			{
				color: 'hsl(210, 75%, 60%)',
				label: 'Light blue'
			},
			{
				color: 'hsl(240, 75%, 60%)',
				label: 'Blue'
			},
			{
				color: 'hsl(240,65%,45%)',
				label: 'Dark Blue'
			},
			{
				color: 'hsl(241,65%,23%)',
				label: 'Deep Dark Blue'
			},
			{
				color: 'hsl(270, 75%, 60%)',
				label: 'Light Purple'
			},
			{
				color: 'hsl(264,53%,40%)',
				label: 'Purple'
			},
			{
				color: 'hsl(260,63%,28%)',
				label: 'Dark Purple'
			}
		]
	},
	fontSize: {
		options: [ 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40 ]
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' }
		]
	},
	emoji: [
		{ name: 'sideSmile', text: '😃'},
		{ name: 'smile', text: '🙂'},
		{ name: 'wink', text: '😉' },
		{ name: 'cool', text: '😎' },
		{ name: 'surprise', text: '😮' },
		{ name: 'confusion', text: '😕' },
		{ name: 'crying', text: '😢' },
		{ name: 'starEyes', text: '🤩'},
		{ name: 'partyFace', text: '🥳'},
		{ name: 'party', text: '🎉'},
	],
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
