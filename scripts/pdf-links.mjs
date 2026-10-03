// Strip markdown links to LOCAL vault PDFs (the competition PDFs are not published),
// keeping the label as plain text. External http(s) PDF links (e.g. the GPhO 2016
// "Fonte" link) are kept: the (?!<?https?:) lookahead right after "\(" skips them,
// in both the angle-bracket form [a](<path with spaces.pdf>) and the plain form.
export function stripLocalPdfLinks(content) {
  content = content.replace(/\[([^\]]*)\]\((?!<?https?:)<[^>]*\.pdf[^>]*>\)/gi, "$1")
  content = content.replace(/\[([^\]]*)\]\((?!<?https?:)[^)\s]*\.pdf[^)]*\)/gi, "$1")
  return content
}
