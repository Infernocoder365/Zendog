# Blog Descriptions

This directory contains markdown files for blog post descriptions. Each file corresponds to a blog post with the same ID.

## File Naming Convention

Files should be named according to the blog post ID. For example, the description for blog post with ID `1` should be in a file named `1.md`.

## File Format

Each markdown file should follow this format:

```markdown
# Title of the Blog Post

*Published on: Month Day*

*Written by: Author Name*

*Category: Category Name*

Content of the blog post goes here...
```

## Integration

These markdown files are automatically loaded by the BlogDetail component when a user views a specific blog post. The content replaces the description field from the blogPosts.json file.