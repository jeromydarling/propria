export interface KnowledgeCheck {
  q: string
  options: string[]
  correct: number
}

export interface Screen {
  title: string
  body: string
  why?: string
  callout?: string | { label: string; text: string }
  isRecap?: boolean
  knowledge?: KnowledgeCheck
  [key: string]: unknown
}

export interface QuizQuestion {
  q?: string
  options?: string[]
  opts?: string[]
  correct?: number
  title?: string
  body?: string
  why?: string
  [key: string]: unknown
}

export interface Quiz {
  passing: number
  questions: QuizQuestion[]
}

export type CourseQuiz = Quiz | QuizQuestion[]

export interface CourseModule {
  id: number
  title: string
  meta: string
  screens: Screen[]
  quiz: CourseQuiz
  [key: string]: unknown
}

export interface ModuleProgress {
  completed: boolean
  quizScore: number | null
  lessonsViewed: number
}
