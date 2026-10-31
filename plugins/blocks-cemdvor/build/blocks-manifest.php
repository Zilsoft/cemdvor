<?php
// This file is generated. Do not modify it manually.
return array(
	'block-contact' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-cemdvor/block-contact',
		'version' => '0.1.0',
		'title' => 'Contact Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocks-cemdvor',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-header' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-cemdvor/block-header',
		'version' => '0.1.3',
		'title' => 'Шапка',
		'category' => 'cemdvor',
		'icon' => 'layout',
		'description' => 'Список блоков',
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocks-cemdvor',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-nav-icons' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'cemdvor/block-nav-icons',
		'version' => '0.1.0',
		'title' => 'Navigation Icons Block',
		'category' => 'widgets',
		'icon' => 'links',
		'description' => 'Navigation Icons Block.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocks-cemdvor',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'marketLink' => array(
				'type' => 'string',
				'default' => ''
			),
			'searchLink' => array(
				'type' => 'string',
				'default' => ''
			),
			'emailLink' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	),
	'block-working-hours' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'cemdvor/block-working-hours',
		'version' => '0.1.0',
		'title' => 'Working Hours Block',
		'category' => 'widgets',
		'icon' => 'clock',
		'description' => 'Working hours display widget',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocks-cemdvor',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'block-working-phone' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'cemdvor/block-working-phone',
		'version' => '0.1.0',
		'title' => 'Working Phone Block',
		'category' => 'widgets',
		'icon' => 'phone',
		'description' => 'Widget for displaying work phone numbers.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocks-cemdvor',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'phoneLink1' => array(
				'type' => 'string',
				'default' => ''
			),
			'phoneLink2' => array(
				'type' => 'string',
				'default' => ''
			),
			'phoneLink3' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	)
);
