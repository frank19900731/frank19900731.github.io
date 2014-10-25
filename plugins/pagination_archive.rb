module Jekyll

  class Pagination_archiver < Generator
    # This generator is safe from arbitrary code execution.
    safe true

    # Generate paginated pages if necessary.
    #
    # site - The Site.
    #
    # Returns nothing.
    def generate(site)
        paginate(site, "/archives/")
        #paginate(site, "/wx/archives/")
    end

    # Paginates the blog's posts. Renders the index.html file into paginated
    # directories, e.g.: page2/index.html, page3/index.html, etc and adds more
    # site-wide data.
    #
    # site - The Site.
    # page - The index.html Page that requires pagination.
    #
    # {"paginator" => { "page" => <Number>,
    #                   "per_page" => <Number>,
    #                   "posts" => [<Post>],
    #                   "total_posts" => <Number>,
    #                   "total_pages" => <Number>,
    #                   "previous_page" => <Number>,
    #                   "next_page" => <Number> }}
    def paginate(site, archive_path)
      all_posts = site.site_payload['site']['posts']
      pages = Pager.calculate_pages(all_posts, site.config['paginate'].to_i)

      (1..pages).each do |num_page|
        #path = "/archives/"
        path = archive_path
        pager = Pager.new(site.config, num_page, all_posts, path, '', pages)

        if num_page > 1
           path = path + "/page/#{num_page}"
        end

        newpage = GroupSubPage.new(site, site.source, path, nil, all_posts, "archives_index.html")
        newpage.pager = pager
        site.pages << newpage
      end
    end
  end

end