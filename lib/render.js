import sanitizeHtml from "sanitize-html";
import markdownit from 'markdown-it'

export const render = (md) => markdownit("commonmark").render(sanitizeHtml(md));
