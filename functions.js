<?php
  add_action('rest_api_init', 'cors', 15);
  function cors() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
      header('Access-Control-Allow-Origin: *');
      header('Access-Control-Allow-Methods: GET');
      header('Access-Control-Allow-Credentials: true');
      return $value;
    });
  }

  add_action('after_setup_theme', 'setup');
  function setup() {
    add_theme_support('post-thumbnails');
  }

  add_action('admin_menu', 'remove_menus');
  function remove_menus(){
    // remove_menu_page('edit.php');
    remove_menu_page('edit-comments.php');
    // remove_menu_page('plugins.php');
    remove_menu_page('users.php');
  }
