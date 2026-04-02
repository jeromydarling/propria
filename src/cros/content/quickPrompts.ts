// ══════════════════════════════════════════════════════════════
// Quick Prompts — Context-aware chat suggestions
// Shown in the compass drawer when chat history is empty
// Role-aware: different prompts per user type
// ══════════════════════════════════════════════════════════════

export function getQuickPrompts(role: string = 'coordinator'): string[] {
  switch (role) {
    case 'coordinator':
      return [
        'Log a contact attempt for Maria Torres',
        'Send payment reminder to Walker family',
        'Schedule Diaz annual check-in',
        "What's Keisha's pipeline status?",
        'Draft an email for the Spring Assembly',
        'Who has overdue ground lease payments?',
        'Show me families due for check-ins',
        'Generate a HUD-9902 report summary',
      ]
    case 'director':
      return [
        'Give me a portfolio health summary',
        'Which families need attention this week?',
        'What\'s the ground lease collection rate?',
        'Summarize this quarter\'s activity',
        'Who are our top resale candidates?',
        'Draft a board meeting agenda',
      ]
    case 'homeowner':
      return [
        'What\'s my current equity?',
        'When is my next ground lease payment?',
        'How do I request a repair?',
        'What events are coming up?',
        'Explain my resale formula',
      ]
    case 'counselor':
      return [
        'Show me my upcoming sessions',
        'What CLT context does Keisha need?',
        'Summarize my last session with David',
        'What documents is this client missing?',
      ]
    default:
      return ['How can NRI help today?']
  }
}
