if (Drupal.jsEnabled) {
  $(document).ready(function() {
    // Find all the external links and add ext class and target attribute (if necessary)
    var $links = $("a[@href^='http:']:not([@href*='" + Drupal.settings.extlink.baseUri + "'])");
    if (Drupal.settings.extlink.extClass) {
      $links.addClass(Drupal.settings.extlink.extClass);
    }
    if (Drupal.settings.extlink.extTarget) {
      $links.attr('target', Drupal.settings.extlink.extTarget);
    }
  });
}