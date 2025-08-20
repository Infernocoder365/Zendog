import { marked } from 'marked';

// Avoid configuring marked multiple times during HMR
let isConfigured = false;

function setupMarkedOnce() {
  if (isConfigured) return;

  // Global config for GitHub-style rendering
  marked.use({
    gfm: true,
    breaks: true,
    headerIds: true,
    smartLists: true,
    smartypants: true,
    mangle: false,
    headerPrefix: 'user-content-'
  });

  isConfigured = true;
}

export function setupCustomRenderer() {
  // Ensure extensions and global options are applied once
  setupMarkedOnce();

  const renderer = new marked.Renderer();

  // Helper function to recursively render content from token objects
  function extractContent(token) {
    if (typeof token === 'string') {
      return token;
    } else if (token && typeof token === 'object') {
      if (token.tokens && Array.isArray(token.tokens)) {
        // Recursively render nested tokens
        return marked.parseInline(token.tokens.map(t => t.raw || t.text || '').join(''), { renderer });
      } else if (token.text) {
        return marked.parseInline(token.text, { renderer });
      } else {
        return token.raw || '';
      }
    } else {
      return String(token || '');
    }
  }

  // GitHub-style paragraph with Tailwind classes
  renderer.paragraph = function(text) {
    const content = extractContent(text);
    return `<p class="mb-4 text-whie leading-relaxed">${content}</p>`;
  };

  // GitHub-style headings with Tailwind classes
  renderer.heading = function(text) {
    const content = extractContent(text);
    
    const classes = {
      1: 'text-3xl font-bold my-10',
      2: 'text-md font-bold my-10',
      3: 'text-3xl font-heading my-10',
      4: 'text-2xl font-heading my-10',
      5: 'text-xl font-heading my-10',
      6: 'text-sm font-heading my-10'
    };
    const id = content.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    return `<h${text.depth} id="user-content-${id}" class="${classes[text.depth]}">${content}</h${text.depth}>`;
  };

  // GitHub-style links with Tailwind classes and preview support
  renderer.link = function(text) {
    const linkText = extractContent(text.text);
    const titleAttr = text.title ? ` title="${text.title}"` : '';
    
    // Handle image links with preview
    const isImage = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(text.href);
    const isVideo = /\.(mp4|webm|mov|avi|mkv)$/i.test(text.href);
    
    if (isImage) {
      return `<div class="mb-4">
        <a href="${text.href}"${titleAttr} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline hover:no-underline">
          <img src="${text.href}" alt="${linkText}" class="max-w-full h-auto" />
        </a>
      </div>`;
    }
    
    if (isVideo) {
      return `<div class="mb-4">
        <video controls class="max-w-full h-auto rounded-md">
          <source src="${text.href}" type="video/${text.href.split('.').pop().toLowerCase()}" />
          Your browser does not support the video tag.
        </video>
      </div>`;
    }
    
    // Handle YouTube links with embed preview
    const youtubeMatch = text.href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    if (youtubeMatch) {
      const videoId = youtubeMatch[1];
      return `<div class="mb-4">
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/${videoId}" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          class="rounded-md">
        </iframe>
      </div>`;
    }
    
    // Regular links with preview card
    return `<a href="${text.href}"${titleAttr} target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-white underline">
        ${linkText || text.href}
      </a>`;
  };

  // GitHub-style code with Tailwind classes
  renderer.code = function(code, language) {
    const content = extractContent(code);
    const langClass = language ? ` language-${language}` : '';
    return `<pre class="bg-gray-50 rounded-md p-4 mb-4 overflow-x-auto"><code class="text-sm text-white${langClass}">${content}</code></pre>`;
  };

  // GitHub-style inline code with Tailwind classes
  renderer.codespan = function(code) {
    const content = extractContent(code);
    return `<code class="bg-gray-100 text-sm px-1 py-0.5 rounded text-red-600 font-mono">${content}</code>`;
  };

  // GitHub-style blockquotes with Tailwind classes
  renderer.blockquote = function(quote) {
    const content = extractContent(quote);
    return `<blockquote class="pl-4 mb-4 text-gray-600 italic">${content}</blockquote>`;
  };

  // GitHub-style lists with Tailwind classes
  renderer.list = function(body) {
    const type = body.ordered ? 'ol' : 'ul';
    const startAttr = body.ordered && body.start && body.start !== 1 ? ` start="${body.start}"` : '';
    const listClass = body.ordered 
      ? 'list-decimal ml-6 mb-4 space-y-1'
      : 'list-disc ml-6 mb-4 space-y-1';
    
    // Process each list item
    const itemsHtml = body.items.map(item => renderer.listitem(item)).join('');
    return `<${type} class="${listClass}"${startAttr}>${itemsHtml}</${type}>`;
  };

  // GitHub-style list items with Tailwind classes
  renderer.listitem = function(text) {
    // Handle token structure properly for nested lists
    if (text && typeof text === 'object' && text.tokens) {
      // Process tokens to handle nested lists and inline formatting
      let content = '';
      
      for (const token of text.tokens) {
        if (token.type === 'text') {
          // Parse text as inline markdown to handle formatting like **bold**
          content += marked.parseInline(token.text, { renderer });
        } else if (token.type === 'list') {
          // Render nested list
          content += renderer.list(token);
        } else if (token.type === 'paragraph') {
          // Handle paragraph tokens within list items
          content += extractContent(token);
        } else if (token.type === 'strong') {
          // Handle bold text
          content += renderer.strong(token);
        } else if (token.type === 'em') {
          // Handle italic text
          content += renderer.em(token);
        } else if (token.type === 'codespan') {
          // Handle inline code
          content += renderer.codespan(token);
        } else if (token.type === 'link') {
          // Handle links
          content += renderer.link(token);
        } else {
          // Handle other token types by parsing them inline
          content += marked.parseInline(token.raw || token.text || '', { renderer });
        }
      }
      
      return `<li class="text-whie leading-relaxed">${content}</li>`;
    }
    
    // Fallback for simple text content
    const content = extractContent(text);
    return `<li class="text-whie leading-relaxed">${content}</li>`;
  };

  // GitHub-style horizontal rules with Tailwind classes
  renderer.hr = function() {
    return '<hr class="border-t border-white my-8">';
  };

  // GitHub-style tables with Tailwind classes
  renderer.table = function(header, body) {
    return `<div class="overflow-x-auto mb-4">
      <table class="min-w-full">
        <thead class="bg-gray-50">
          ${header}
        </thead>
        <tbody class="divide-y divide-gray-200">
          ${body}
        </tbody>
      </table>
    </div>`;
  };

  renderer.tablerow = function(content) {
    // Handle token structure for table rows
    if (content && typeof content === 'object' && content.tokens) {
      const rowContent = content.tokens.map(token => {
        if (token.type === 'tablecell') {
          return renderer.tablecell(token, token.flags || {});
        }
        return extractContent(token);
      }).join('');
      return `<tr class="hover:bg-gray-50">${rowContent}</tr>`;
    }
    
    const rowContent = extractContent(content);
    return `<tr class="hover:bg-gray-50">${rowContent}</tr>`;
  };

  renderer.tablecell = function(content, flags) {
    // Handle token structure for table cells
    let cellContent = '';
    
    if (content && typeof content === 'object' && content.tokens) {
      // Process tokens within the cell
      for (const token of content.tokens) {
        if (token.type === 'text') {
          cellContent += marked.parseInline(token.text, { renderer });
        } else if (token.type === 'strong') {
          cellContent += renderer.strong(token);
        } else if (token.type === 'em') {
          cellContent += renderer.em(token);
        } else if (token.type === 'codespan') {
          cellContent += renderer.codespan(token);
        } else if (token.type === 'link') {
          cellContent += renderer.link(token);
        } else {
          cellContent += marked.parseInline(token.raw || token.text || '', { renderer });
        }
      }
    } else {
      cellContent = extractContent(content);
    }
    
    const tag = flags && flags.header ? 'th' : 'td';
    const classes = flags && flags.header 
      ? 'px-4 py-2 text-left text-sm font-medium text-whie'
      : 'px-4 py-2 text-sm text-whie';
    
    return `<${tag} class="${classes}">${cellContent}</${tag}>`;
  };

  // GitHub-style images with preview support
  renderer.image = function(text) {
    const titleAttr = text.title ? ` title="${text.title}"` : '';
    return `<div class="mb-4">
      <a href="${text.href}"${titleAttr} target="_blank" rel="noopener noreferrer" class="inline-block">
        <img src="${text.href}" alt="${text || ''}" class="max-w-full h-auto rounded-md" />
      </a>
    </div>`;
  };

  // GitHub-style emphasis with Tailwind classes
  renderer.strong = function(text) {
    const content = extractContent(text);
    return `<strong class="font-bold">${content}</strong>`;
  };

  renderer.em = function(text) {
    const content = extractContent(text);
    return `<em class="italic">${content}</em>`;
  };

  renderer.del = function(text) {
    const content = extractContent(text);
    return `<del class="line-through text-whie">${content}</del>`;
  };

  // Apply this renderer using setOptions
  marked.setOptions({ renderer });

  return renderer;
}

/**
 * Render markdown content with GitHub-style rendering using Tailwind CSS classes.
 * - Uses only Tailwind CSS classes for styling
 * - Mimics GitHub's markdown rendering style
 * - Supports all standard markdown elements
 */
export function renderMarkdown(markdown) {
  if (markdown == null) return '';

  // Normalize to string
  let markdownStr;
  if (typeof markdown === 'string') {
    markdownStr = markdown;
  } else if (markdown && typeof markdown === 'object') {
    markdownStr = markdown.text || markdown.raw || String(markdown);
  } else {
    markdownStr = String(markdown);
  }

  // Ensure our renderer is configured
  setupCustomRenderer();

  // Parse markdown with our custom renderer
  const html = marked.parse(markdownStr, { renderer: setupCustomRenderer() });
  return `<div class="prose prose-lg max-w-none text-whie">${html}</div>`;
}