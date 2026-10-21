<?php

if ( ! defined( 'CEMDVOR_GOOGLE_FONT_DEFAULT' ) ) {
	define( 'CEMDVOR_GOOGLE_FONT_DEFAULT', true );
}

function cemdvor_styles() {
	$version = wp_get_theme()->get( 'Version' );
	$uri     = get_template_directory_uri();

	wp_enqueue_style(
		'cemdvor-general',
		$uri . '/assets/css/cemdvor.css',
		array(),
		$version
	);

	wp_enqueue_script(
		'cemdvor-theme-related',
		$uri . '/assets/js/cemdvor-theme-related.js',
		array(),
		$version,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'cemdvor_styles' );

function cemdvor_dark_mode_styles() {
	wp_enqueue_style(
		'cemdvor-dark-mode',
		get_template_directory_uri() . '/assets/css/dark-mode.css',
		array(),
		wp_get_theme()->get( 'Version' )
	);
}
add_action( 'enqueue_block_assets', 'cemdvor_dark_mode_styles' );

function cemdvor_customize_register( $wp_customize ) {
	$wp_customize->add_section( 'cemdvor_typography', array(
		'title'    => __( 'Типографика', 'cemdvor' ),
		'priority' => 30,
	) );

	$wp_customize->add_setting( 'cemdvor_enable_google_font', array(
		'default'           => CEMDVOR_GOOGLE_FONT_DEFAULT,
		'sanitize_callback' => 'wp_validate_boolean',
	) );

	$wp_customize->add_control( 'cemdvor_enable_google_font', array(
		'label'   => __( 'Включить Google Fonts (Urbanist, Lato, Roboto)', 'cemdvor' ),
		'section' => 'cemdvor_typography',
		'type'    => 'checkbox',
	) );
}
add_action( 'customize_register', 'cemdvor_customize_register' );

function cemdvor_google_font_script() {
	$font_url = '';

	if ( get_theme_mod( 'cemdvor_enable_google_font', CEMDVOR_GOOGLE_FONT_DEFAULT ) ) {
		$font_url = 'https://fonts.googleapis.com/css2?'
			. 'family=Urbanist:ital,wght@0,400;0,700;1,400;1,700'
			. '&family=Lato:wght@400;700'
			. '&family=Roboto:wght@400;500;700'
			. '&display=swap';
	}

	if ( empty( $font_url ) ) {
		return;
	}

	wp_enqueue_style(
		'cemdvor_google_font',
		$font_url,
		array(),
		wp_get_theme()->get( 'Version' )
	);
}
add_action( 'wp_enqueue_scripts', 'cemdvor_google_font_script' );
add_action( 'enqueue_block_editor_assets', 'cemdvor_google_font_script' );
add_action( 'enqueue_block_assets', 'cemdvor_google_font_script' );