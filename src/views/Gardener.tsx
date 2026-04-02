export default function Gardener() {
  return (
    <div style={{
      height:'100%',
      background:'var(--cream)',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      gap:'12px',
      fontFamily:'var(--sans)',
      color:'var(--ink-light)'
    }}>
      <div style={{
        fontFamily:'var(--serif-display)',
        fontSize:'28px',
        fontWeight:500,
        color:'var(--forest)',
        letterSpacing:'-0.02em'
      }}>Gardener Console</div>
      <div style={{fontSize:'14px'}}>Coming next</div>
    </div>
  )
}
