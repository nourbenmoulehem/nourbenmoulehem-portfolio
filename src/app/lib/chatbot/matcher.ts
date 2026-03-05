/**
 * MATCHER
 *
 * How it works:
 *  1. Check for follow-up phrases in the raw input ("tell me more", "elaborate", etc.)
 *     If found AND we have context from the last intent → return that intent's followUp response.
 *  2. Otherwise, preprocess the input and score every intent:
 *       +2 for an exact token match (highest confidence)
 *       +1 for a partial match (token inside pattern or vice versa)
 *  3. Highest score wins. Ties go to the intent with more matching tokens.
 *  4. Score of 0 → fallback.
 *
 * Returns { response, intentId } so the UI can track context across turns.
 */

import { intents } from './intents'
import { preprocess } from './preprocessor'

export type MatchResult = {
  response: string
  intentId: string
}

// Raw-text phrases that survive stopword filtering poorly.
// Checked against the original input BEFORE preprocessing.
const RAW_NAME_PHRASES = [
  'about her', 'about nour', 'who is she', 'who is nour', 'nour ben moulehem',
  'tell me about her', 'tell me about nour', 'who she is', 'introduce nour',
  'about the developer', 'about yourself', 'who are you', 'she is',
]

const RAW_HIRE_PHRASES = [
  'why hire', 'should hire', 'hire her', 'recruit her', 'hire nour',
  'makes her special', 'makes nour special', 'what makes her', 'what makes nour',
  'stand out', 'why nour', 'why her', 'unique about', 'sets her apart',
  'why should', 'reason to hire', 'strengths', 'what is special', "what's special",
]

function matchesRaw(raw: string, phrases: string[]): boolean {
  const lower = raw.toLowerCase()
  return phrases.some(p => lower.includes(p))
}

// Phrases that signal "give me more detail on the last topic"
const FOLLOWUP_PHRASES = [
  'tell me more', 'more details', 'more info', 'more information',
  'elaborate', 'go on', 'continue', 'explain more', 'expand',
  'more about', 'what else', 'and then', 'details', 'why',
  'how so', 'like what', 'for example', 'give me an example',
  'en savoir plus', 'plus de détails', 'explique',
]

function isFollowUp(raw: string): boolean {
  const lower = raw.toLowerCase().trim()
  // Single word "more" counts too
  if (lower === 'more' || lower === 'plus' || lower === 'suite') return true
  return FOLLOWUP_PHRASES.some(phrase => lower.includes(phrase))
}

function pickRandom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function getResponse(userInput: string, lastIntentId?: string): MatchResult {
  // ── Raw-phrase shortcuts (checked before preprocessing) ──────────────────
  // Some questions lose all meaningful tokens after stopword removal (e.g.
  // "tell me about her" → every word is a stopword). Catch them here first.
  if (matchesRaw(userInput, RAW_NAME_PHRASES)) {
    const intent = intents.find(i => i.id === 'name')!
    return { response: pickRandom(intent.responses), intentId: 'name' }
  }

  if (matchesRaw(userInput, RAW_HIRE_PHRASES)) {
    const intent = intents.find(i => i.id === 'hire_pitch')!
    return { response: pickRandom(intent.responses), intentId: 'hire_pitch' }
  }

  // ── Follow-up handling ───────────────────────────────────────────────────
  if (isFollowUp(userInput) && lastIntentId) {
    const lastIntent = intents.find(i => i.id === lastIntentId)
    if (lastIntent?.followUp && lastIntent.followUp.length > 0) {
      return { response: pickRandom(lastIntent.followUp), intentId: lastIntentId }
    }
  }

  // ── Normal intent matching ───────────────────────────────────────────────
  const tokens = preprocess(userInput)

  if (tokens.length === 0) {
    const fallback = intents.find(i => i.id === 'fallback')!
    return { response: pickRandom(fallback.responses), intentId: 'fallback' }
  }

  let bestScore = 0
  let bestTokensMatched = 0
  let bestIntentId = 'fallback'

  for (const intent of intents) {
    if (intent.id === 'fallback') continue

    let score = 0
    let tokensMatched = 0

    for (const token of tokens) {
      let tokenMatched = false
      for (const pattern of intent.patterns) {
        if (token === pattern) {
          score += 2             // exact match — strong signal
          tokensMatched++
          tokenMatched = true
          break
        }
        if (!tokenMatched && (pattern.includes(token) || token.includes(pattern))) {
          score += 1             // partial match
          tokensMatched++
          tokenMatched = true
          break
        }
      }
    }

    // Prefer higher score; break ties by how many distinct tokens matched
    if (
      score > bestScore ||
      (score === bestScore && score > 0 && tokensMatched > bestTokensMatched)
    ) {
      bestScore = score
      bestTokensMatched = tokensMatched
      bestIntentId = intent.id
    }
  }

  const matched = intents.find(i => i.id === bestIntentId)!
  return { response: pickRandom(matched.responses), intentId: bestIntentId }
}
