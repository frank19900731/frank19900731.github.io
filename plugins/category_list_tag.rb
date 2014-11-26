module Jekyll
  class CategoryListTag < Liquid::Tag
    def render(context)
      html = ""
      ##categories = context.registers[:site].categories.keys
      ##categories.sort.each do |category|
      categories = context.registers[:site].categories
      categories.keys.sort_by{ |cat| categories[cat].count  }.reverse.each do |category|
        posts_in_category = context.registers[:site].categories[category].size
        #category_dir = context.registers[:site].config['category_dir']
        category_dir = "category"
        #category_url = File.join(category_dir, category.gsub(/_|\P{Word}/, '-').gsub(/-{2,}/, '-').downcase)
        category_url = File.join(category_dir, category.gsub(/_|\P{Word}/, '-').gsub(/-{2,}/, '-'))
        html << "<li class='category'><a href='/#{category_url}/'>#{category} (#{posts_in_category})</a></li>\n"
      end
      html
    end
  end
end

Liquid::Template.register_tag('category_list', Jekyll::CategoryListTag)