import os

BLOG_DIR = "docs/blogs"
BLOG_FILES = "docs/blogs.md"

blog_data = {}

def blogFormat(blog):
    old_blog = open(BLOG_DIR + "/" + blog, "r")
    new_blog = open(BLOG_DIR + "/temp_blog.md", "w")
    with old_blog as f:
        for i, line in enumerate(f):
            if i == 0 and 'Title' not in line:
                title = (line.split('#')[1]).strip()
                new_blog.write("# " + "Title: " + title)
            elif i == 2 and 'Author' not in line:
                author = (line.split('#')[1]).strip()
                new_blog.write("# " + "Author: " + author)
            elif i == 4 and 'Date' not in line:
                timestamp = (line.split('#')[1]).strip()
                new_blog.write("# " + "Date: " + timestamp)
            else:
                new_blog.write(line)
    old_blog.close()
    new_blog.close()
    os.remove(BLOG_DIR + "/" + blog)
    os.rename(BLOG_DIR + '/temp_blog.md', BLOG_DIR + "/" + blog)

    
files = os.listdir(BLOG_DIR)
blog_list_file = open(BLOG_FILES, "w")
blog_list_file.write("# List of all blogs\n\n")
for file_name in files:
    blogFormat(file_name)
    blog_name = file_name.strip(".md").replace("-", " ").title()
    blog_link_line = "* " + "[" + blog_name + "]" \
                       + "(blogs/" + blog_name.strip('.md') + ".html)" + "\n"
    blog_list_file.write(blog_link_line)

blog_list_file.close()
