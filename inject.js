;(function() {
function injectScript(src, fn) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = src
  script.onload = fn
  head = document.getElementsByTagName('head')[0]
  head.appendChild(script)
}

function injectScripts(fn) {
  var scripts = [
    '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1-rc2/jquery.js',
    '//raw.github.com/hazzik/livequery/master/dist/jquery.livequery.min.js'
  ]

  lastsrc = scripts.pop()
  last = function() {
    injectScript(lastsrc, fn);
  }
  i = last

  while (scripts.length > 0) {
    var src = scripts.pop()
    var next = i
    i = function() {
      injectScript(src, next)
    }
  }
  i()
}
injectScripts(function() {
  jQuery(function($) {
    $(document).bind('DOMSubtreeModified',function(){
      if ($('select.cb-calendar').length > 0) {
        jQuery('select.cb-calendar').find('option:contains("' + localStorage['gcalmod.extension.selected'] + '")').attr('selected', true);
        jQuery('select.cb-calendar').on('change', function() {
          var newVal = jQuery('select.cb-calendar').find('option:selected').text()
          localStorage['gcalmod.extension.selected'] = newVal
        });
      }
    })
  });
})
})();

