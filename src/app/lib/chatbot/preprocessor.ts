/**
 * PREPROCESSOR
 *
 * Converts raw user input into a list of meaningful tokens.
 *
 * Steps:
 *  1. Lowercase  →  "What Projects" becomes "what projects"
 *  2. Strip punctuation  →  "hi!" becomes "hi"
 *  3. Split on whitespace  →  ["what", "projects"]
 *  4. Remove stopwords  →  ["projects"]  ("what" is a stopword)
 *
 * Stopwords are common words that carry no intent signal on their own.
 * Removing them means the matcher only scores on words that actually matter.
 */

const STOPWORDS = new Set([
  // articles & determiners
  'a', 'an', 'the', 'this', 'that', 'these', 'those',
  // pronouns
  'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves',
  'you', 'your', 'yours', 'he', 'him', 'his', 'she', 'her', 'hers',
  'it', 'its', 'they', 'them', 'their',
  // verbs (auxiliary & common)
  'is', 'am', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did',
  'will', 'would', 'could', 'should', 'may', 'might', 'can',
  // question words
  'what', 'which', 'who', 'whom', 'whose', 'where', 'when', 'why', 'how',
  // conjunctions & prepositions
  'and', 'or', 'but', 'if', 'then', 'than', 'as', 'by',
  'with', 'about', 'for', 'on', 'at', 'to', 'from', 'of', 'in',
  'out', 'up', 'into', 'through', 'during', 'before', 'after',
  // filler words
  'tell', 'give', 'show', 'know', 'like', 'want', 'get', 'make',
  'some', 'any', 'all', 'more', 'most', 'other', 'also', 'just',
  'no', 'not', 'only', 'same', 'so', 'very', 'really', 'quite',
  'please', 'thanks', 'thank', 'ok', 'okay',
  // noise
  'did', 'does', 'has', 'had', 'was', 'were', 'go', 'gone',
])

export function preprocess(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')   // strip punctuation & special chars
    .split(/\s+/)                   // split on any whitespace
    .filter(word => word.length > 1 && !STOPWORDS.has(word))
}
