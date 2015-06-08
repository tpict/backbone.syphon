// Backbone.Syphon.InputFetcher
// ----------------------------

// If a dom element is given, just return the form fields and
// elements with "contenteditable".
// Otherwise, get the form fields (and contenteditable elements) from the view.
Syphon.InputFetcher = function(viewOrForm) {
  var inputs = ':input, [contenteditable=true]';
  if (_.isUndefined(viewOrForm.$el)) {
    return $(viewOrForm).find(inputs);
  } else {
    return viewOrForm.$(inputs);
  }
};
