/**
 * MATCHER
 *
 * Scores every intent against the preprocessed user tokens, then returns
 * the response from the highest-scoring intent.
 *
 * Scoring rules:
 *   +2  if a token exactly equals a pattern (strong signal)
 *   +1  if a token is contained in a pattern, or vice versa (partial match)
 *
 * Tie-breaking:
 *   When two intents share the same score, prefer the one whose patterns
 *   are more specific (shorter patterns = less ambiguous keyword).
 *
 * Minimum threshold:
 *   Score must be > 0 to count as a real match. Otherwise → fallback.
 */

import { intents } from './intents'
import { preprocess } from './preprocessor'

function pickRandom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function getResponse(userInput: string): string {
  const tokens = preprocess(userInput)

  if (tokens.length === 0) {
    return pickRandom(intents.find(i => i.id === 'fallback')!.responses)
  }

  let bestScore = 0
  let bestIntentId = 'fallback'

  for (const intent of intents) {
    if (intent.id === 'fallback') continue

    let score = 0
    for (const token of tokens) {
      let tokenMatched = false
      for (const pattern of intent.patterns) {
        if (token === pattern) {
          score += 2           // exact match — highest confidence
          tokenMatched = true
          break
        }
        if (!tokenMatched && (pattern.includes(token) || token.includes(pattern))) {
          score += 1           // partial match
          tokenMatched = true
          break
        }
      }
    }

    if (score > bestScore) {
      bestScore = score
      bestIntentId = intent.id
    }
  }

  const matched = intents.find(i => i.id === bestIntentId)!
  return pickRandom(matched.responses)
}
