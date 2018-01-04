<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'twentyseventeen' ); ?></a>

	<header id="masthead" class="site-header" role="banner">

		<?php get_template_part( 'template-parts/header/header', 'image' ); ?>

		<?php if ( has_nav_menu( 'top' ) ) : ?>
			<div class="navigation-top">
				<div class="wrap">
					<?php get_template_part( 'template-parts/navigation/navigation', 'top' ); ?>
				</div><!-- .wrap -->
			</div><!-- .navigation-top -->
		<?php endif; ?>
		
		<div class="brandmarketing_bnr"><a target="_blank" href="http://sdgpartners.jp/brandmarketing/"><h4>朝活<br>SDGsセミナー</h4><span>特設ページへ →</span></a></div>
		
		<style>
			@media all and (min-width: 769px) {
				.brandmarketing_bnr {
					position: fixed;
					bottom: 12%;
					right: 0;
					z-index: 99999;
					text-align: center;
					font-weight: normal;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
					border: 1px solid #000bc9;
				}
				.brandmarketing_bnr h4 {
					display: block;
					padding: 12px 20px 12px 20px;
					color: #000;
					font-family: serif;
					font-size: 30px;
					line-height: 1.2;
					font-weight: normal !important;
					text-align: left;
					background-color: rgba(255,255,255,.8);
					margin: 0 !important;
				}
				.brandmarketing_bnr a {
					display: block;
					transition: .24s all ease;
				}
				.brandmarketing_bnr a:hover {
					opacity: .6;
				}
				.brandmarketing_bnr span {
					display: block;
					color: #000bc9;
					font-family: sans-serif;
					font-size: 	14px;
					padding: .4em .2em;
					color: #fff;
					background-color: #000bc9;
					text-align: center;
					font-weight: bold;
				}
			}
			@media all and (max-width: 768px) {
				.brandmarketing_bnr a {
					display: block;
				}
				.brandmarketing_bnr {
					position: fixed;
					bottom: 0;
					left: 0;
					width: 100%;
					padding: 0 4%;
					z-index: 99999;
					text-align: center;
					font-weight: normal;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
					background-color: #000bc9;
					font-size: 0;
				}
				.brandmarketing_bnr h4 {
					padding: .5em 0;
					display: inline-block;
					vertical-align: middle;
					width: 66%;
					color: #fff;
					font-family: serif;
					font-size: 24px;
					line-height: 1.2;
					font-weight: normal !important;
					text-align: left;
					margin: 0 !important;
					padding-right: 4%;
				}
				.brandmarketing_bnr h4 br {
					display: none;
				}
				.brandmarketing_bnr span {
					display: inline-block;
					vertical-align: middle;
					color: #000bc9;
					font-family: sans-serif;
					font-size: 12px;
					text-align: right;
					font-weight: bold;
					width: 30%;
					background-color: #fff;
					text-align: center;
					padding: .4em 0;
				}
			}
			@media all and (max-width: 380px) {
				.brandmarketing_bnr h4 {
					font-size: 20px;
				}
				.brandmarketing_bnr span {
					font-size: 10px;
				}
			}
		</style>
		
	</header><!-- #masthead -->

	<?php

	/*
	 * If a regular post or page, and not the front page, show the featured image.
	 * Using get_queried_object_id() here since the $post global may not be set before a call to the_post().
	 */
	if ( ( is_single() || ( is_page() && ! twentyseventeen_is_frontpage() ) ) && has_post_thumbnail( get_queried_object_id() ) ) :
		echo '<div class="single-featured-image-header">';
		echo get_the_post_thumbnail( get_queried_object_id(), 'twentyseventeen-featured-image' );
		echo '</div><!-- .single-featured-image-header -->';
	endif;
	?>

	<div class="site-content-contain">
		<div id="content" class="site-content">
