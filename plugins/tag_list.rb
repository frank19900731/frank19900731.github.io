module Jekyll
  class CategoryListTag2 < Liquid::Tag
    def render(context)
      html = ""
      tagnames = context.registers[:site].tags.keys
      tagnames.sort.each do |tagsingle|
        posts_in_tag = context.registers[:site].tags[tagsingle].size
        #tag_dir = "tags"
        tag_dir = "tag"
        #tag_url = File.join(tag_dir, tagsingle.gsub(/_|\P{Word}/, '-').gsub(/-{2,}/, '-').downcase)
        tag_url = File.join(tag_dir, tagsingle.gsub(/_|\P{Word}/, '-').gsub(/-{2,}/, '-'))
        html << "<li class='tag'><a href='/#{tag_url}/'>#{tagsingle} (#{posts_in_tag})</a></li>\n"
      end
      html
    end
  end
end

Liquid::Template.register_tag('tag_list', Jekyll::CategoryListTag2)