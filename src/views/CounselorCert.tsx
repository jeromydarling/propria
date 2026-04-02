import LmsEngine from './lms/LmsEngine'
import { CERT_MODULES } from './lms/certModules'

export default function CounselorCert() {
  return (
    <LmsEngine
      title="CLT Counselor Certification"
      subtitle="4 modules · 4.0 CEU hours · Practical assessment · 85% to certify"
      modules={CERT_MODULES}
      passingThreshold={85}
      certTitle="CLT Counselor Certified"
      certHolder="Sarah Wilkins"
      certCeuHours={4.0}
    />
  )
}
