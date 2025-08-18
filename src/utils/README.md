# Custom Markdown Features

This document describes the custom markdown features implemented in the blog application.

## Features

### Block-Style Paragraphs

Each paragraph in the markdown content is rendered as a styled block with a blue left border and dark background.

```markdown
This is a paragraph that will be rendered as a block.

This is another paragraph that will be rendered as a separate block.
```

### Counters

You can add numbered counters using the `[counter:X]` syntax, where X is the number to display.

```markdown
[counter:1] This is the first item.

[counter:2] This is the second item.
```

### Circles

You can add circled content using the `[circle:X]` syntax, where X is the content to display in the circle.

```markdown
[circle:A] This is option A.

[circle:B] This is option B.
```

### YouTube Previews

You can embed YouTube videos using the `[youtube:VIDEO_ID]` syntax, where VIDEO_ID is the YouTube video ID.

```markdown
[youtube:dQw4w9WgXcQ]
```

## Implementation

These features are implemented using a custom markdown renderer in `markdownRenderer.js`. The renderer overrides the default behavior of the marked library to add these custom features.

## Usage

To use these features in your blog posts, simply add the appropriate syntax to your markdown files in the `blogDescriptions` directory.