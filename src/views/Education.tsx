import LmsEngine from './lms/LmsEngine'
import { EDU_MODULES } from './lms/educationModules'

export default function Education() {
  return (
    <LmsEngine
      title="CLT Homeowner Education"
      subtitle="6 modules · 3–4 hours · Certificate on completion"
      modules={EDU_MODULES}
      passingThreshold={70}
      certTitle="CLT Homebuyer Education Certificate"
      certHolder="Keisha Johnson"
    />
  )
}
