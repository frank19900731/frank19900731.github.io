# This goes in _plugins/excerpt.rb
module Jekyll
  module ExcerptFilter
    def extract_excerpt(input)
      input.split('<!-- excerpt end -->')[0].split('<!-- excerpt start -->')[1]
    end
  end
end
 
Liquid::Template.register_filter(Jekyll::ExcerptFilter)