/*
  [txt]  - Paragraph
  - [txt] - List
  **[txt]** - Bold
  *[txt]* - Italic
  --[txt]-- - Strikethrough
  !(src) - Image
 */
import * as sanitizeHtml from 'sanitize-html';
export function ezmark(md) {
  let s = sanitizeHtml(md);
  const lines = s.split("\n");
  const result = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (/\*\*([^*]*)\*\*/g.test(line)) {
      line = line.replace(/\*\*([^*]*)\*\*/g, "<strong>$1</strong>");
    } else if (/\*([^*]*)\*/g.test(line)) {
      line = line.replace(/\*([^*]*)\*/g, "<em>$1</em>");
    } else if (/--([^*]*)--/g.test(line)) {
      line = line.replace(/--([^*]*)--/g, "<del>$1</del>");
    } else if (/!\(([^)]*)\)/g.test(line)) {
      line = line.replace(/!\(([^)]*)\)/g, '<img src="$1" />');
    } else if (/^- (.*)/g.test(line)) {
      line = line.replace(/^- (.*)/g, "<li>$1</li>");
      line = `<ul>${line}</ul>`;
    }

    line.replace("\n\n", "<br />");
    result.push(line);
  }

  return result.join("\n");
}
