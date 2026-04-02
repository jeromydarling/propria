import { useState, useCallback } from 'react'
import type { CourseModule, ModuleProgress, QuizQuestion } from './types'

function getQuiz(mod: CourseModule): { passing: number; questions: QuizQuestion[] } {
  if (Array.isArray(mod.quiz) && !('passing' in mod.quiz)) {
    return { passing: 70, questions: mod.quiz as QuizQuestion[] }
  }
  const q = mod.quiz as { passing: number; questions: QuizQuestion[] }
  return q
}

function getOptions(q: QuizQuestion): string[] {
  return q.options || q.opts || []
}

interface LmsProps {
  title: string
  subtitle: string
  modules: CourseModule[]
  passingThreshold: number
  certTitle: string
  certHolder: string
  certCeuHours?: number
}

export default function LmsEngine({ title, subtitle, modules, passingThreshold, certTitle, certHolder, certCeuHours }: LmsProps) {
  const [view, setView] = useState<'home'|'lesson'|'quiz'|'result'|'cert'>('home')
  const [currentModule, setCurrentModule] = useState(0)
  const [currentScreen, setCurrentScreen] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number|null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [lastScore, setLastScore] = useState(0)
  const [progress, setProgress] = useState<Record<number, ModuleProgress>>({})
  const [knowledgeAnswer, setKnowledgeAnswer] = useState<number|null>(null)
  const [knowledgeSubmitted, setKnowledgeSubmitted] = useState(false)

  const mod = modules[currentModule]
  const completedCount = Object.values(progress).filter(p => p.completed).length
  const allComplete = completedCount === modules.length
  const overallPct = Math.round((completedCount / modules.length) * 100)

  const openModule = useCallback((idx: number) => {
    setCurrentModule(idx)
    setCurrentScreen(0)
    setView('lesson')
  }, [])

  const nextLesson = useCallback(() => {
    if (currentScreen < mod.screens.length - 1) {
      setCurrentScreen(s => s + 1)
      setKnowledgeAnswer(null)
      setKnowledgeSubmitted(false)
    }
  }, [currentScreen, mod])

  const prevLesson = useCallback(() => {
    if (currentScreen > 0) {
      setCurrentScreen(s => s - 1)
      setKnowledgeAnswer(null)
      setKnowledgeSubmitted(false)
    }
  }, [currentScreen])

  const startQuiz = useCallback(() => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setQuizAnswers([])
    setView('quiz')
  }, [])

  const submitQuizAnswer = useCallback(() => {
    if (selectedAnswer === null) return
    if (showExplanation) {
      const newAnswers = [...quizAnswers, selectedAnswer]
      setQuizAnswers(newAnswers)
      if (currentQuestion < getQuiz(mod).questions.length - 1) {
        setCurrentQuestion(q => q + 1)
        setSelectedAnswer(null)
        setShowExplanation(false)
      } else {
        const correct = newAnswers.filter((a, i) => a === getQuiz(mod).questions[i].correct).length
        const score = Math.round((correct / getQuiz(mod).questions.length) * 100)
        setLastScore(score)
        setProgress(prev => ({
          ...prev,
          [mod.id]: { completed: score >= passingThreshold, quizScore: score, lessonsViewed: mod.screens.length }
        }))
        setView('result')
      }
    } else {
      setShowExplanation(true)
    }
  }, [selectedAnswer, showExplanation, quizAnswers, currentQuestion, mod, passingThreshold])

  const screen = mod?.screens[currentScreen]
  const quizQ = mod ? getQuiz(mod).questions[currentQuestion] : undefined

  return (
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:'var(--cream)',fontFamily:'var(--sans)',overflow:'hidden'}}>

      {/* TOPBAR */}
      <div style={{background:'var(--forest)',height:'var(--top-h)',display:'flex',alignItems:'center',padding:'0 14px',gap:10,flexShrink:0}}>
        {view !== 'home' && (
          <button onClick={() => setView('home')} style={{width:32,height:32,borderRadius:8,background:'rgba(245,240,232,0.1)',border:'none',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>
            <svg viewBox="0 0 14 14" width="14" height="14" fill="none" stroke="var(--parchment)" strokeWidth="1.5"><path d="M9 2L4 7l5 5"/></svg>
          </button>
        )}
        <div style={{flex:1}}><div style={{fontFamily:'var(--serif-display)',fontSize:16,fontWeight:700,color:'var(--parchment)'}}>Propria<span style={{color:'var(--terra-light)'}}>.</span></div></div>
        {allComplete && <button onClick={() => setView('cert')} style={{background:'rgba(245,240,232,0.1)',border:'none',borderRadius:8,padding:'4px 10px',cursor:'pointer'}}>
          <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="var(--gold)" strokeWidth="1.3"><circle cx="8" cy="7" r="4"/><path d="M5 11l-2 4h10l-2-4"/><path d="M6 7l1.5 1.5L10 6"/></svg>
        </button>}
      </div>

      {/* CONTENT */}
      <div style={{flex:1,overflow:'auto',WebkitOverflowScrolling:'touch'}}>

        {/* HOME */}
        {view === 'home' && <>
          <div style={{background:'var(--forest)',padding:'16px 16px 20px'}}>
            <div style={{fontFamily:'var(--serif-display)',fontSize:20,fontWeight:500,color:'var(--parchment)',letterSpacing:'-0.02em'}}>{title}</div>
            <div style={{fontSize:12,color:'rgba(245,240,232,0.5)',marginTop:2,marginBottom:14}}>{subtitle}</div>
            <div style={{height:8,background:'rgba(245,240,232,0.15)',borderRadius:4,overflow:'hidden',marginBottom:4}}>
              <div style={{width:overallPct+'%',height:'100%',background:'var(--gold)',borderRadius:4,transition:'width 0.4s'}}></div>
            </div>
            <div style={{fontSize:11,color:'rgba(245,240,232,0.4)'}}>{completedCount} of {modules.length} complete</div>
          </div>
          <div style={{height:3,background:'linear-gradient(90deg,var(--terra) 0%,var(--gold) 50%,var(--terra) 100%)'}}></div>

          {allComplete && <div style={{margin:'14px 14px 0',background:'var(--gold-pale)',border:'1px solid #E8D9A8',borderRadius:12,padding:'14px 16px',display:'flex',gap:10,alignItems:'center',cursor:'pointer'}} onClick={() => setView('cert')}>
            <svg viewBox="0 0 16 16" width="20" height="20" fill="none" stroke="var(--gold)" strokeWidth="1.3"><circle cx="8" cy="7" r="4"/><path d="M5 11l-2 4h10l-2-4"/><path d="M6 7l1.5 1.5L10 6"/></svg>
            <div><div style={{fontSize:14,fontWeight:500,color:'#633806'}}>Certificate earned</div><div style={{fontSize:12,color:'#854F0B'}}>Tap to view and download</div></div>
          </div>}

          <div style={{padding:'14px 14px 0',fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--ink-faint)'}}>Modules</div>
          {modules.map((m, i) => {
            const p = progress[m.id]
            return (
              <div key={m.id} onClick={() => openModule(i)} style={{margin:'8px 14px',background:'white',border:'0.5px solid var(--border)',borderRadius:12,padding:'14px 16px',cursor:'pointer',display:'flex',gap:12,alignItems:'center'}}>
                <div style={{width:36,height:36,borderRadius:'50%',background:p?.completed?'var(--forest)':p?.quizScore?'var(--gold-pale)':'var(--parchment)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:500,color:p?.completed?'white':p?.quizScore?'#633806':'var(--ink-faint)',flexShrink:0}}>{p?.completed?'✓':m.id}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:500,color:'var(--ink)',marginBottom:2}}>{m.title}</div>
                  <div style={{fontSize:11,color:'var(--ink-faint)'}}>{m.meta}</div>
                  {p?.quizScore !== undefined && p?.quizScore !== null && !p?.completed && <div style={{fontSize:11,color:'var(--terra)',marginTop:2}}>Quiz: {p.quizScore}% — retake needed</div>}
                </div>
              </div>
            )
          })}
          <div style={{height:80}}></div>
        </>}

        {/* LESSON */}
        {view === 'lesson' && screen && <>
          <div style={{background:'white',padding:'8px 14px',borderBottom:'0.5px solid var(--border)',display:'flex',alignItems:'center',gap:8}}>
            <div style={{flex:1,height:4,background:'var(--parchment-dk)',borderRadius:2,overflow:'hidden'}}>
              <div style={{width:((currentScreen+1)/mod.screens.length*100)+'%',height:'100%',background:'var(--forest)',borderRadius:2,transition:'width 0.3s'}}></div>
            </div>
            <span style={{fontSize:11,color:'var(--ink-faint)',flexShrink:0}}>{currentScreen+1} / {mod.screens.length}</span>
          </div>
          <div style={{padding:'20px 16px 100px'}}>
            <div style={{fontFamily:'var(--serif-display)',fontSize:20,fontWeight:500,color:'var(--forest)',letterSpacing:'-0.02em',marginBottom:16,lineHeight:1.3}}>{screen.title}</div>
            {screen.isRecap && <div style={{fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--terra)',marginBottom:8}}>Recap</div>}
            <div style={{fontFamily:'var(--serif-body)',fontSize:15,color:'var(--ink)',lineHeight:1.75,fontWeight:300}} dangerouslySetInnerHTML={{__html: screen.body}} />
            {(screen.why || screen.callout) && <div style={{marginTop:16,background:'var(--gold-pale)',border:'1px solid #E8D9A8',borderRadius:8,padding:'10px 14px'}}>
              <div style={{fontSize:10,fontWeight:500,letterSpacing:'0.08em',textTransform:'uppercase' as const,color:'#854F0B',marginBottom:3}}>{typeof screen.callout === 'object' ? screen.callout.label : screen.callout ? 'Note' : 'Why this matters'}</div>
              <div style={{fontSize:13,color:'#633806',lineHeight:1.5,fontWeight:300}}>{screen.why || (typeof screen.callout === 'object' ? screen.callout.text : screen.callout)}</div>
            </div>}
            {screen.knowledge && <div style={{marginTop:20,background:'white',border:'1px solid var(--border)',borderRadius:12,padding:16}}>
              <div style={{fontSize:10,fontWeight:500,letterSpacing:'0.08em',textTransform:'uppercase' as const,color:'var(--forest)',marginBottom:8}}>Knowledge check</div>
              <div style={{fontSize:14,fontWeight:500,color:'var(--ink)',marginBottom:12,lineHeight:1.4}}>{screen.knowledge.q}</div>
              {screen.knowledge.options.map((opt, oi) => (
                <div key={oi} onClick={() => !knowledgeSubmitted && setKnowledgeAnswer(oi)} style={{padding:'10px 14px',marginBottom:6,borderRadius:8,border:knowledgeSubmitted?(oi===screen.knowledge!.correct?'2px solid var(--forest)':oi===knowledgeAnswer?'2px solid var(--terra)':'1px solid var(--border)'):(oi===knowledgeAnswer?'2px solid var(--forest)':'1px solid var(--border)'),background:knowledgeSubmitted?(oi===screen.knowledge!.correct?'#E1F5EE':oi===knowledgeAnswer?'#FAECE7':'white'):(oi===knowledgeAnswer?'rgba(27,58,45,0.04)':'white'),cursor:knowledgeSubmitted?'default':'pointer',fontSize:13,color:'var(--ink)'}}>
                  {opt}
                </div>
              ))}
              {!knowledgeSubmitted && knowledgeAnswer !== null && <button onClick={() => setKnowledgeSubmitted(true)} style={{width:'100%',padding:10,borderRadius:8,background:'var(--forest)',color:'var(--parchment)',border:'none',fontSize:13,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)',marginTop:4}}>Check answer</button>}
              {knowledgeSubmitted && <div style={{marginTop:8,fontSize:13,color:knowledgeAnswer===screen.knowledge!.correct?'var(--forest)':'var(--terra)',fontWeight:500}}>{knowledgeAnswer===screen.knowledge!.correct?'Correct!':'Not quite — review the lesson content above.'}</div>}
            </div>}
          </div>
          {/* Lesson nav */}
          <div style={{position:'sticky',bottom:0,background:'white',borderTop:'0.5px solid var(--border)',padding:'10px 14px',display:'flex',gap:10}}>
            <button onClick={prevLesson} disabled={currentScreen===0} style={{flex:1,padding:10,borderRadius:8,border:'1px solid var(--border)',background:'white',color:currentScreen===0?'var(--ink-faint)':'var(--ink)',fontSize:13,cursor:currentScreen===0?'default':'pointer',fontFamily:'var(--sans)',opacity:currentScreen===0?0.4:1}}>← Previous</button>
            {currentScreen < mod.screens.length - 1
              ? <button onClick={nextLesson} style={{flex:1,padding:10,borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:13,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Next →</button>
              : <button onClick={startQuiz} style={{flex:1,padding:10,borderRadius:8,border:'none',background:'var(--terra)',color:'var(--parchment)',fontSize:13,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Take quiz →</button>
            }
          </div>
        </>}

        {/* QUIZ */}
        {view === 'quiz' && quizQ && <>
          <div style={{background:'var(--forest)',padding:'14px 16px'}}>
            <div style={{fontSize:10,fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase' as const,color:'var(--gold)',marginBottom:4}}>Module {mod.id} Quiz</div>
            <div style={{fontFamily:'var(--serif-display)',fontSize:18,fontWeight:500,color:'var(--parchment)'}}>Question {currentQuestion+1} of {getQuiz(mod).questions.length}</div>
            <div style={{height:4,background:'rgba(245,240,232,0.15)',borderRadius:2,overflow:'hidden',marginTop:10}}>
              <div style={{width:((currentQuestion+1)/getQuiz(mod).questions.length*100)+'%',height:'100%',background:'var(--gold)',borderRadius:2,transition:'width 0.3s'}}></div>
            </div>
          </div>
          <div style={{padding:'20px 16px 100px'}}>
            <div style={{fontSize:15,fontWeight:500,color:'var(--ink)',lineHeight:1.5,marginBottom:16}}>{quizQ.q}</div>
            {getOptions(quizQ).map((opt, oi) => (
              <div key={oi} onClick={() => !showExplanation && setSelectedAnswer(oi)} style={{padding:'12px 14px',marginBottom:8,borderRadius:8,border:showExplanation?(oi===quizQ.correct?'2px solid var(--forest)':oi===selectedAnswer?'2px solid var(--terra)':'1px solid var(--border)'):(oi===selectedAnswer?'2px solid var(--forest)':'1px solid var(--border)'),background:showExplanation?(oi===quizQ.correct?'#E1F5EE':oi===selectedAnswer?'#FAECE7':'white'):(oi===selectedAnswer?'rgba(27,58,45,0.04)':'white'),cursor:showExplanation?'default':'pointer',fontSize:14,color:'var(--ink)'}}>
                {opt}
              </div>
            ))}
            {showExplanation && <div style={{marginTop:8,fontSize:14,fontWeight:500,color:selectedAnswer===quizQ.correct?'var(--forest)':'var(--terra)'}}>{selectedAnswer===quizQ.correct?'Correct!':'Incorrect.'}</div>}
          </div>
          <div style={{position:'sticky',bottom:0,background:'white',borderTop:'0.5px solid var(--border)',padding:'10px 14px'}}>
            <button onClick={submitQuizAnswer} disabled={selectedAnswer===null} style={{width:'100%',padding:12,borderRadius:8,border:'none',background:selectedAnswer===null?'var(--parchment-dk)':'var(--forest)',color:selectedAnswer===null?'var(--ink-faint)':'var(--parchment)',fontSize:14,fontWeight:500,cursor:selectedAnswer===null?'default':'pointer',fontFamily:'var(--sans)'}}>{showExplanation?(currentQuestion<getQuiz(mod).questions.length-1?'Next question →':'See results →'):'Submit answer'}</button>
          </div>
        </>}

        {/* RESULT */}
        {view === 'result' && <>
          <div style={{padding:'48px 24px',textAlign:'center'}}>
            <div style={{width:80,height:80,borderRadius:'50%',background:lastScore>=passingThreshold?'#E1F5EE':'#FAECE7',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',fontSize:32}}>{lastScore>=passingThreshold?'✓':'✗'}</div>
            <div style={{fontFamily:'var(--serif-display)',fontSize:28,fontWeight:500,color:lastScore>=passingThreshold?'var(--forest)':'var(--terra)',marginBottom:8}}>{lastScore}%</div>
            <div style={{fontSize:16,color:'var(--ink)',marginBottom:4}}>{lastScore>=passingThreshold?'Module passed!':'Not quite — try again'}</div>
            <div style={{fontSize:14,color:'var(--ink-light)',marginBottom:32}}>{lastScore>=passingThreshold?`You scored above the ${passingThreshold}% threshold.`:`You need ${passingThreshold}% to pass. Review the lessons and retake.`}</div>
            <div style={{display:'flex',gap:10,justifyContent:'center'}}>
              {lastScore<passingThreshold && <button onClick={startQuiz} style={{padding:'12px 24px',borderRadius:8,border:'none',background:'var(--terra)',color:'var(--parchment)',fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Retake quiz</button>}
              <button onClick={() => setView('home')} style={{padding:'12px 24px',borderRadius:8,border:'1px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:14,cursor:'pointer',fontFamily:'var(--sans)'}}>{lastScore>=passingThreshold?'Continue':'Back to modules'}</button>
            </div>
          </div>
        </>}

        {/* CERTIFICATE */}
        {view === 'cert' && <>
          <div style={{padding:'32px 24px',textAlign:'center'}}>
            <div style={{maxWidth:480,margin:'0 auto',background:'white',border:'2px solid var(--gold)',borderRadius:16,padding:'40px 32px',position:'relative',boxShadow:'0 8px 40px rgba(0,0,0,0.08)'}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:4,background:'linear-gradient(90deg,var(--terra) 0%,var(--gold) 50%,var(--terra) 100%)',borderRadius:'14px 14px 0 0'}}></div>
              <svg viewBox="0 0 16 16" width="48" height="48" fill="none" stroke="var(--gold)" strokeWidth="1"><circle cx="8" cy="7" r="4"/><path d="M5 11l-2 4h10l-2-4"/><path d="M6 7l1.5 1.5L10 6"/></svg>
              <div style={{fontFamily:'var(--serif-display)',fontSize:24,fontWeight:500,color:'var(--forest)',marginTop:16,marginBottom:4,letterSpacing:'-0.02em'}}>{certTitle}</div>
              <div style={{fontSize:12,color:'var(--ink-faint)',marginBottom:20}}>This certifies that</div>
              <div style={{fontFamily:'var(--serif-display)',fontSize:22,fontWeight:500,color:'var(--ink)',fontStyle:'italic',marginBottom:20}}>{certHolder}</div>
              <div style={{fontSize:13,color:'var(--ink-light)',lineHeight:1.6,marginBottom:20}}>has successfully completed all {modules.length} modules{certCeuHours?` (${certCeuHours} CEU hours)`:''} with a passing score on all assessments.</div>
              <div style={{display:'flex',justifyContent:'space-between',padding:'16px 0 0',borderTop:'1px solid var(--border)'}}>
                <div style={{textAlign:'left'}}><div style={{fontSize:10,color:'var(--ink-faint)'}}>Issued</div><div style={{fontSize:12,color:'var(--ink)'}}>April 2, 2026</div></div>
                <div style={{textAlign:'right'}}><div style={{fontSize:10,color:'var(--ink-faint)'}}>Platform</div><div style={{fontFamily:'var(--serif-display)',fontSize:14,color:'var(--forest)'}}>Propria<span style={{color:'var(--terra)'}}>.</span></div></div>
              </div>
            </div>
            <div style={{marginTop:20,display:'flex',gap:10,justifyContent:'center'}}>
              <button style={{padding:'10px 20px',borderRadius:8,border:'1px solid var(--border)',background:'white',color:'var(--ink-mid)',fontSize:13,cursor:'pointer',fontFamily:'var(--sans)'}}>Download PDF</button>
              <button onClick={() => setView('home')} style={{padding:'10px 20px',borderRadius:8,border:'none',background:'var(--forest)',color:'var(--parchment)',fontSize:13,fontWeight:500,cursor:'pointer',fontFamily:'var(--sans)'}}>Back to course</button>
            </div>
          </div>
        </>}

      </div>
    </div>
  )
}
