var tabs = document.querySelector('paper-tabs');
var list = document.querySelector('post-list');

tabs.addEventListener('core-select', function() {
  console.log("Selected: " + tabs.selected);
  list.show = tabs.selected;
});
