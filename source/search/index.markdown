---
layout: page
title: "search"
date: 2014-08-31 00:42
comments: false
sharing: false
footer: false
exclude_from_search: true
---

<section id="search-results" style="display: none;">
  <p>Search results</p>
  <div class="entries" style="margin-top: 25px;">
  </div>
</section>

<script src="/javascripts/lunr.min.js" type="text/javascript" charset="utf-8"></script>
<script src="/javascripts/mustache.js" type="text/javascript" charset="utf-8"></script>
<script src="/javascripts/date.format.js" type="text/javascript" charset="utf-8"></script>
<script src="/javascripts/URI.min.js" type="text/javascript" charset="utf-8"></script>
<script src="/javascripts/jquery.lunr.search.js" type="text/javascript" charset="utf-8"></script>

{% raw %}
<script id="search-results-template" type="text/mustache">
  {{#entries}}
    <article style="margin-bottom: 10px;">
      <h3>
        {{#date}}<small><time datetime="{{pubdate}}" pubdate>{{displaydate}}</time></small>{{/date}}
        <a href="{{url}}">{{title}}</a>
      </h3>
    </article>
  {{/entries}}
</script>
{% endraw %}

<script type="text/javascript">
  $(function() {
    $('#search-query').lunrSearch({
      indexUrl: '/search.json',             // URL of the `search.json` index data for your site
      results:  '#search-results',          // jQuery selector for the search results container
      entries:  '.entries',                 // jQuery selector for the element to contain the results list, must be a child of the results element above.
      template: '#search-results-template'  // jQuery selector for the Mustache.js template
    });
  });
</script>