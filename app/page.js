'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { VERSION_A, VERSION_B, VERSION_C, PRIVATE_META } from '../lib/formData';
import { FormField, SectionHeader, ProgressBar } from '../components/FormFields';

// ─── LANDING SCREEN ─────────────────────────────────────────
function Landing({ onSelect }) {
  const [mode, setMode] = useState('client');
  const isDesigner = mode === 'designer';

  const Toggle = () => (
    <div style={{
      position:'fixed',bottom:28,left:'50%',transform:'translateX(-50%)',
      zIndex:30,display:'flex',alignItems:'center',
      background:isDesigner?'#18141f':'#ffffff',
      border:'1px solid '+(isDesigner?'#2e2640':'#e8e3f0'),
      borderRadius:100,padding:4,
      boxShadow:isDesigner?'0 8px 32px rgba(0,0,0,0.5)':'0 8px 32px rgba(26,16,37,0.10)',
      transition:'all 0.4s ease',
    }}>
      <button onClick={()=>setMode('client')} style={{
        padding:'10px 22px',borderRadius:100,border:'none',
        fontFamily:'inherit',fontSize:12,fontWeight:600,
        letterSpacing:'0.06em',textTransform:'uppercase',
        cursor:'pointer',transition:'all 0.3s ease',
        background:!isDesigner?'#1a1025':'transparent',
        color:!isDesigner?'#ffffff':'#5a5a60',whiteSpace:'nowrap',
      }}>Clientele</button>
      <button onClick={()=>setMode('designer')} style={{
        padding:'10px 22px',borderRadius:100,border:'none',
        fontFamily:'inherit',fontSize:12,fontWeight:600,
        letterSpacing:'0.06em',textTransform:'uppercase',
        cursor:'pointer',transition:'all 0.3s ease',
        background:isDesigner?'#7F63C1':'transparent',
        color:isDesigner?'#ffffff':'#655a78',whiteSpace:'nowrap',
      }}>Designer</button>
    </div>
  );

  const Socials = ({ size=42, bg='#f0ecf5', color='#655a78', hoverBg, hoverColor }) => (
    <div style={{display:'flex',gap:14,justifyContent:'center'}}>
      {['dribbble','behance','instagram','linkedin'].map((s)=>(
        <div key={s} style={{
          width:size,height:size,borderRadius:'50%',background:bg,
          display:'flex',alignItems:'center',justifyContent:'center',
          cursor:'pointer',transition:'all 0.2s',
          fontSize:11,color,fontWeight:700,textTransform:'uppercase',
        }}
        onMouseEnter={(e)=>{if(hoverBg)e.currentTarget.style.background=hoverBg;if(hoverColor)e.currentTarget.style.color=hoverColor;}}
        onMouseLeave={(e)=>{e.currentTarget.style.background=bg;e.currentTarget.style.color=color;}}
        title={s}>{s[0].toUpperCase()}</div>
      ))}
    </div>
  );

  if (!isDesigner) {
    return (
      <div style={{minHeight:'100vh',background:'#faf9fc',position:'relative'}}>
        <style>{`
          .ld-desk{display:none}.ld-mob{display:flex}
          @media(min-width:768px){.ld-desk{display:flex!important}.ld-mob{display:none!important}}
        `}</style>

        {/* DESKTOP CLIENT */}
        <div className="ld-desk" style={{
          minHeight:'100vh',flexDirection:'column',alignItems:'center',
          justifyContent:'center',padding:'60px 60px 100px',position:'relative',overflow:'hidden',
        }}>
          <div style={{position:'absolute',top:80,left:60,width:48,height:48,borderRadius:14,border:'2px solid #e8e3f0',opacity:0.5,transform:'rotate(12deg)'}} />
          <div style={{position:'absolute',top:140,right:100,width:10,height:10,borderRadius:'50%',background:'#6801C2',opacity:0.18}} />
          <div style={{position:'absolute',bottom:200,left:120,width:8,height:8,borderRadius:'50%',background:'#00A0C7',opacity:0.2}} />
          <div style={{position:'absolute',top:200,right:180,width:36,height:36,borderRadius:10,border:'2px solid #efe6fc',opacity:0.4,transform:'rotate(-8deg)'}} />

          <header style={{position:'absolute',top:0,left:0,right:0,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'28px 48px'}}>
            <h1 style={{fontFamily:"'Playfair Display', serif",fontSize:22,fontWeight:800,color:'#1a1025',letterSpacing:'0.03em',lineHeight:1}}>I. AM. DESIGN.</h1>
            <a href="mailto:AshleyPickett46@Gmail.com" style={{fontSize:13,color:'#655a78',textDecoration:'none',padding:'8px 16px',borderRadius:8}}>Contact</a>
          </header>

          <div className="animate-in" style={{textAlign:'center',maxWidth:680,position:'relative',zIndex:1}}>
            <p style={{fontSize:13,fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',color:'#655a78',marginBottom:20}}>
              Ashley M. Pickett · UI/UX & Graphic Designer
            </p>
            <h2 style={{fontFamily:"'Playfair Display', serif",fontSize:56,fontWeight:700,color:'#1a1025',lineHeight:1.12,letterSpacing:'-0.02em',marginBottom:20}}>
              Let's Build Something<br /><span style={{color:'#6801C2'}}>Beautiful Together</span>
            </h2>
            <p style={{fontSize:18,color:'#4a3d5c',lineHeight:1.7,maxWidth:480,margin:'0 auto 40px'}}>
              Thanks for choosing me for your project. When you're ready, hit the button below to start the questionnaire.
            </p>
            <button onClick={()=>onSelect('client')} style={{
              padding:'18px 44px',borderRadius:12,background:'#6801C2',border:'none',
              color:'#ffffff',fontSize:17,fontWeight:600,cursor:'pointer',
              transition:'all 0.25s ease',fontFamily:'inherit',
              boxShadow:'0 4px 20px rgba(104,1,194,0.2)',marginBottom:24,
            }}
            onMouseEnter={(e)=>{e.currentTarget.style.background='#5501a0';e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 28px rgba(104,1,194,0.3)';}}
            onMouseLeave={(e)=>{e.currentTarget.style.background='#6801C2';e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 4px 20px rgba(104,1,194,0.2)';}}
            >I'm a Client →</button>
            <p style={{fontSize:13,color:'#8a7ea0',marginBottom:40}}>This is a No-Obligation Questionnaire</p>
            <Socials hoverBg="#6801C2" hoverColor="#ffffff" />
            <p style={{fontSize:12,color:'#8a7ea0',marginTop:12,fontStyle:'italic'}}>If you'd like to follow me — it's majorly appreciated!</p>
          </div>
        </div>

        {/* MOBILE CLIENT */}
        <div className="ld-mob" style={{minHeight:'100vh',flexDirection:'column',padding:'0 0 100px'}}>
          <header style={{padding:'24px 20px 0',textAlign:'center'}}>
            <h1 style={{fontFamily:"'Playfair Display', serif",fontSize:34,fontWeight:800,letterSpacing:'0.04em',color:'#1a1025',lineHeight:1,marginBottom:8}}>I. AM. DESIGN.</h1>
            <p style={{fontSize:12,color:'#655a78',lineHeight:1.5}}>Ashley M. Pickett · UI/UX & Graphic Designer</p>
            <div style={{display:'flex',justifyContent:'center',gap:16,marginTop:4}}>
              <a href="mailto:AshleyPickett46@Gmail.com" style={{fontSize:11,color:'#6801C2',textDecoration:'underline',textUnderlineOffset:2}}>AshleyPickett46@Gmail.com</a>
              <span style={{fontSize:11,color:'#655a78'}}>(509) 609-6956</span>
            </div>
          </header>
          <div style={{margin:'20px 20px 0',borderRadius:14,overflow:'hidden',background:'#e8e3f0',aspectRatio:'16 / 9',maxHeight:200}} />
          <div className="animate-in" style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',padding:'28px 24px 0',textAlign:'center'}}>
            <h2 style={{fontFamily:"'Playfair Display', serif",fontSize:30,fontWeight:600,color:'#1a1025',marginBottom:10}}>Welcome</h2>
            <p style={{fontSize:15,color:'#4a3d5c',maxWidth:340,lineHeight:1.65,marginBottom:24}}>
              Thanks for choosing me for your project! When you're ready, hit the button below to start the questionnaire.
            </p>
            <span style={{display:'block',fontSize:26,color:'#d8d0e4',marginBottom:20,lineHeight:1}} aria-hidden="true">↓</span>
            <button onClick={()=>onSelect('client')} style={{
              padding:'20px 40px',borderRadius:14,background:'#6801C2',border:'none',
              color:'#ffffff',fontSize:20,fontWeight:700,cursor:'pointer',
              transition:'all 0.25s ease',fontFamily:'inherit',textTransform:'uppercase',
              width:'100%',maxWidth:340,boxShadow:'0 4px 24px rgba(104,1,194,0.2)',
            }}
            onMouseEnter={(e)=>{e.currentTarget.style.background='#5501a0';}}
            onMouseLeave={(e)=>{e.currentTarget.style.background='#6801C2';}}
            >I'm a Client</button>
            <p style={{fontSize:11,color:'#655a78',marginTop:12}}>This is a No-Obligation Questionnaire</p>
            <div style={{marginTop:24}}><Socials size={38} bg="#e8e3f0" color="#655a78" /></div>
            <p style={{fontSize:11,color:'#8a7ea0',marginTop:10,fontStyle:'italic'}}>If you'd like to follow me — it's majorly appreciated!</p>
          </div>
        </div>
        <Toggle />
      </div>
    );
  }

  // DESIGNER MODE
  return (
    <div data-theme="dark" style={{minHeight:'100vh',background:'#0d0a12',position:'relative'}}>
      <style>{`
        .ld-desk{display:none}.ld-mob{display:flex}
        @media(min-width:768px){.ld-desk{display:flex!important}.ld-mob{display:none!important}}
      `}</style>

      {/* DESKTOP DESIGNER */}
      <div className="ld-desk" style={{
        minHeight:'100vh',flexDirection:'column',alignItems:'center',justifyContent:'center',
        padding:'60px 60px 100px',position:'relative',overflow:'hidden',
      }}>
        <div style={{position:'absolute',top:'30%',left:'50%',transform:'translate(-50%,-50%)',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(127,99,193,0.06) 0%,transparent 70%)',pointerEvents:'none'}} />
        <header style={{position:'absolute',top:0,left:0,right:0,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'28px 48px'}}>
          <h1 style={{fontFamily:"'Playfair Display', serif",fontSize:22,fontWeight:800,color:'#f0ecf5',letterSpacing:'0.03em',lineHeight:1}}>I. AM. DESIGN.</h1>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:'#ff4d4d',fontFamily:"'Space Mono', monospace"}}>Internal Use Only</p>
        </header>
        <div className="animate-in" style={{textAlign:'center',maxWidth:520,position:'relative',zIndex:1}}>
          <h2 style={{fontFamily:"'Playfair Display', serif",fontSize:48,fontWeight:700,color:'#f0ecf5',lineHeight:1.15,marginBottom:16}}>Project Metadata</h2>
          <p style={{fontSize:17,color:'#8a7ea0',lineHeight:1.65,maxWidth:400,margin:'0 auto 44px'}}>
            Your private process log, client notes, and honest reflections.
          </p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
            <button onClick={()=>onSelect('designer-fill')} style={{
              padding:'18px 40px',borderRadius:12,background:'#7F63C1',border:'none',
              color:'#ffffff',fontSize:17,fontWeight:600,cursor:'pointer',fontFamily:'inherit',
              transition:'all 0.25s ease',boxShadow:'0 4px 20px rgba(127,99,193,0.25)',
            }}
            onMouseEnter={(e)=>{e.currentTarget.style.background='#9a80d8';e.currentTarget.style.transform='translateY(-2px)';}}
            onMouseLeave={(e)=>{e.currentTarget.style.background='#7F63C1';e.currentTarget.style.transform='translateY(0)';}}
            >Fill in Online →</button>
            <a href="/creative-brief-complete.pdf" download style={{
              padding:'18px 40px',borderRadius:12,background:'transparent',
              border:'2px solid #2e2640',color:'#bab0ca',fontSize:17,fontWeight:600,
              cursor:'pointer',fontFamily:'inherit',textDecoration:'none',textAlign:'center',
              transition:'border-color 0.25s',
            }}
            onMouseEnter={(e)=>e.currentTarget.style.borderColor='#7F63C1'}
            onMouseLeave={(e)=>e.currentTarget.style.borderColor='#2e2640'}
            >Download PDF</a>
          </div>
        </div>
      </div>

      {/* MOBILE DESIGNER */}
      <div className="ld-mob" style={{minHeight:'100vh',flexDirection:'column',padding:'0 0 100px'}}>
        <header style={{padding:'24px 20px 0',textAlign:'center'}}>
          <h1 style={{fontFamily:"'Playfair Display', serif",fontSize:34,fontWeight:800,letterSpacing:'0.04em',color:'#f0ecf5',lineHeight:1,marginBottom:8}}>I. AM. DESIGN.</h1>
          <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:'#ff4d4d',fontFamily:"'Space Mono', monospace"}}>Internal Use Only</p>
        </header>
        <div style={{margin:'20px 20px 0',borderRadius:14,overflow:'hidden',background:'#18141f',aspectRatio:'16 / 9',maxHeight:200}} />
        <div className="animate-in" style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',padding:'28px 24px 0',textAlign:'center'}}>
          <h2 style={{fontFamily:"'Playfair Display', serif",fontSize:28,fontWeight:600,color:'#f0ecf5',marginBottom:10}}>Project Metadata</h2>
          <p style={{fontSize:14,color:'#8a7ea0',marginBottom:28,lineHeight:1.6,maxWidth:320}}>
            Your private process log, client notes, and honest reflections.
          </p>
          <div style={{display:'flex',flexDirection:'column',gap:12,width:'100%',maxWidth:320}}>
            <button onClick={()=>onSelect('designer-fill')} style={{
              padding:'18px 24px',borderRadius:12,background:'#7F63C1',border:'none',
              color:'#ffffff',fontSize:16,fontWeight:600,cursor:'pointer',fontFamily:'inherit',
            }}>Fill in Online</button>
            <a href="/creative-brief-complete.pdf" download style={{
              padding:'18px 24px',borderRadius:12,background:'transparent',
              border:'2px solid #2e2640',color:'#bab0ca',fontSize:15,fontWeight:600,
              textDecoration:'none',textAlign:'center',
            }}>Download PDF</a>
          </div>
        </div>
      </div>
      <Toggle />
    </div>
  );
}

// ─── CLIENT VERSION PICKER ───────────────────────────────────
function ClientPicker({ onPick }) {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', padding: '40px 20px',
      background: 'var(--bg)',
    }}>
      <div className="animate-in" style={{ textAlign: 'center', maxWidth: 560 }}>
        <p style={{
          fontSize: 11, fontWeight: 600, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'var(--text-helper)', marginBottom: 12,
        }}>
          Which fits you best?
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 32,
          fontWeight: 600, color: 'var(--text)', marginBottom: 8,
        }}>
          Pick Your Starting Point
        </h2>
        <p style={{
          fontSize: 15, color: 'var(--text-secondary)', marginBottom: 40,
          lineHeight: 1.6,
        }}>
          No wrong choice — both lead to the same place.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 440, margin: '0 auto' }}>
          <button
            onClick={() => onPick('a')}
            style={{
              padding: '24px 28px', borderRadius: 14,
              background: 'var(--card)', border: '2px solid var(--border)',
              cursor: 'pointer', transition: 'all 0.2s',
              fontFamily: 'inherit', textAlign: 'left',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6801C2'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, borderRadius: 10, background: '#6801C2',
                color: '#fff', fontWeight: 700, fontSize: 16, flexShrink: 0,
              }}>A</span>
              <div>
                <span style={{ display: 'block', fontSize: 17, fontWeight: 600, color: 'var(--text)' }}>
                  I Have a Vision
                </span>
                <span style={{ fontSize: 14, color: 'var(--text-helper)', lineHeight: 1.5 }}>
                  I know what I want — let's get into the details.
                  You can also fill out the deep-dive guide first if you'd like.
                </span>
              </div>
            </div>
          </button>

          <button
            onClick={() => onPick('b')}
            style={{
              padding: '24px 28px', borderRadius: 14,
              background: 'var(--card)', border: '2px solid var(--border)',
              cursor: 'pointer', transition: 'all 0.2s',
              fontFamily: 'inherit', textAlign: 'left',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00A0C7'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, borderRadius: 10, background: '#00A0C7',
                color: '#fff', fontWeight: 700, fontSize: 16, flexShrink: 0,
              }}>B</span>
              <div>
                <span style={{ display: 'block', fontSize: 17, fontWeight: 600, color: 'var(--text)' }}>
                  Let's Figure It Out Together
                </span>
                <span style={{ fontSize: 14, color: 'var(--text-helper)', lineHeight: 1.5 }}>
                  Not sure where to start? That's completely okay.
                  We'll walk through it step by step.
                </span>
              </div>
            </div>
          </button>
        </div>

        <button
          onClick={() => window.location.reload()}
          style={{
            marginTop: 32, background: 'none', border: 'none',
            color: 'var(--text-helper)', fontSize: 14, cursor: 'pointer',
            fontFamily: 'inherit', textDecoration: 'underline',
            textUnderlineOffset: 3,
          }}
        >
          ← Back to start
        </button>
      </div>
    </div>
  );
}

// ─── DEEP DIVE PROMPT (for Version A) ───────────────────────
function DeepDivePrompt({ onChoice }) {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', padding: '40px 20px',
      background: 'var(--bg)',
    }}>
      <div className="animate-in" style={{ textAlign: 'center', maxWidth: 520 }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 28,
          fontWeight: 600, color: 'var(--text)', marginBottom: 12,
        }}>
          One More Thing
        </h2>
        <p style={{
          fontSize: 15, color: 'var(--text-secondary)', marginBottom: 36,
          lineHeight: 1.6,
        }}>
          After your brief, there's a detailed project guide that covers branding,
          features, content, and more. Want to fill that out first, or go straight
          into your brief?
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360, margin: '0 auto' }}>
          <button
            onClick={() => onChoice('deep-first')}
            style={{
              padding: '16px 24px', borderRadius: 12,
              background: 'var(--card)', border: '2px solid var(--border)',
              color: 'var(--text)', fontSize: 15, fontWeight: 600,
              cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#00A0C7'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            Deep dive first — I want to be thorough
          </button>
          <button
            onClick={() => onChoice('brief-first')}
            style={{
              padding: '16px 24px', borderRadius: 12,
              background: '#6801C2', border: 'none',
              color: '#ffffff', fontSize: 15, fontWeight: 600,
              cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#5501a0'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#6801C2'}
          >
            Start with my brief — we'll get to the details after →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── FORM ENGINE ─────────────────────────────────────────────
function BriefForm({ sections, version, accentColor, isDark, onSubmit, onBack, introText, signoff }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const contentRef = useRef(null);

  const safeStep = Math.max(0, Math.min(step, sections.length - 1));
  if (safeStep !== step) setStep(safeStep);

  const section = sections[safeStep];

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const updateField = useCallback((key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const filledCount = sections.reduce((acc, sec) =>
    acc + sec.fields.filter((f) => {
      const v = data[f.key];
      return Array.isArray(v) ? v.length > 0 : v?.toString().trim();
    }).length, 0
  );
  const totalFields = sections.reduce((a, s) => a + s.fields.length, 0);

  const currentSectionEmptyFields = section.fields.filter((f) => {
    const v = data[f.key];
    return !v || (Array.isArray(v) ? v.length === 0 : !v.toString().trim());
  });

  const handleNext = () => {
    if (currentSectionEmptyFields.length > 0) {
      const fieldsList = currentSectionEmptyFields.map((f) => f.label || f.key).join(', ');
      const confirmed = window.confirm(
        `You have ${currentSectionEmptyFields.length} empty field${currentSectionEmptyFields.length > 1 ? 's' : ''} in this section:\n\n"${fieldsList}"\n\nAre you sure you want to leave these blank and continue?`
      );
      if (!confirmed) return;
    }
    setStep(step + 1);
  };

  const handleSubmit = () => {
    const allEmptyFields = sections.flatMap((sec) =>
      sec.fields.filter((f) => {
        const v = data[f.key];
        return !v || (Array.isArray(v) ? v.length === 0 : !v.toString().trim());
      })
    );
    if (allEmptyFields.length > 0) {
      const fieldsList = allEmptyFields.slice(0, 5).map((f) => f.label || f.key).join(', ');
      const more = allEmptyFields.length > 5 ? `\n\n...and ${allEmptyFields.length - 5} more` : '';
      const confirmed = window.confirm(
        `You have ${allEmptyFields.length} empty field${allEmptyFields.length > 1 ? 's' : ''} across the form:\n\n"${fieldsList}"${more}\n\nAre you sure you want to submit without these?`
      );
      if (!confirmed) return;
    }
    onSubmit(data);
  };

  const themeProps = isDark ? { 'data-theme': 'dark' } : {};

  return (
    <div {...themeProps} style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      background: isDark ? '#0d0a12' : 'var(--bg)',
      color: isDark ? '#f0ecf5' : 'var(--text)',
    }}>
      <a href="#main-form" className="skip-link">Skip to form</a>

      <header style={{
        background: isDark ? '#110e17' : accentColor,
        padding: '24px 24px 20px',
        borderBottom: isDark ? '1px solid #2e2640' : 'none',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: 6,
            color: isDark ? '#ff4d4d' : 'rgba(255,255,255,0.7)',
            fontFamily: isDark ? "'Space Mono', monospace" : 'inherit',
          }}>
            {isDark ? 'Private — Do Not Share' : `Version ${version.toUpperCase()}`}
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 24,
            fontWeight: 600, color: '#ffffff', marginBottom: 14,
          }}>
            {isDark ? 'Project Metadata' : version === 'a' ? 'Client Design Brief' : version === 'b' ? "Let's Figure It Out Together" : 'Detailed Project Guide'}
          </h1>
          <ProgressBar
            current={filledCount}
            total={totalFields}
            color={isDark ? '#7F63C1' : 'rgba(255,255,255,0.9)'}
          />
        </div>
      </header>

      {step === 0 && introText && (
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '20px 24px 0' }}>
          <p className="animate-in" style={{
            fontSize: 15, color: isDark ? '#8a7ea0' : 'var(--text-secondary)',
            lineHeight: 1.7, fontStyle: 'italic',
          }}>
            {introText}
          </p>
        </div>
      )}

      <main id="main-form" ref={contentRef} style={{
        flex: 1, overflowY: 'auto', padding: '28px 20px 140px',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <SectionHeader
            num={section.num}
            title={section.title}
            subtitle={section.subtitle}
            callout={section.callout}
            versionColor={accentColor}
          />
          <div className="animate-delay" style={{
            background: isDark ? '#18141f' : 'var(--card)',
            borderRadius: 16, padding: '28px 24px',
            border: `1px solid ${isDark ? '#2e2640' : 'var(--border-light)'}`,
          }}>
            {section.fields.map((field) => (
              <FormField
                key={field.key}
                field={field}
                value={data[field.key]}
                onChange={(val) => updateField(field.key, val)}
              />
            ))}
          </div>
        </div>
      </main>

      <footer style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        background: isDark ? '#110e17' : 'var(--card)',
        borderTop: `1px solid ${isDark ? '#2e2640' : 'var(--border-light)'}`,
        padding: '14px 20px', zIndex: 10,
      }}>
        <div style={{
          maxWidth: 680, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <button
            onClick={() => step > 0 ? setStep(step - 1) : onBack()}
            style={{
              padding: '10px 20px', borderRadius: 10,
              border: `2px solid ${isDark ? '#2e2640' : 'var(--border)'}`,
              background: 'transparent',
              color: isDark ? '#bab0ca' : 'var(--text-secondary)',
              fontSize: 14, fontWeight: 600, cursor: 'pointer',
              fontFamily: 'inherit', transition: 'border-color 0.2s',
            }}
          >
            ← {step > 0 ? 'Back' : 'Exit'}
          </button>

          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }} role="tablist" aria-label="Form sections">
            {sections.map((_, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                role="tab"
                aria-selected={i === step}
                aria-label={`Section ${i + 1} of ${sections.length}`}
                style={{
                  width: i === step ? 24 : 8, height: 8, borderRadius: 100,
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'all 0.25s ease',
                  background: i === step
                    ? accentColor
                    : i < step
                      ? (isDark ? '#5a5a60' : 'var(--text-helper)')
                      : (isDark ? '#2e2640' : 'var(--border)'),
                }}
              />
            ))}
          </div>

          {step < sections.length - 1 ? (
            <button
              onClick={handleNext}
              style={{
                padding: '10px 24px', borderRadius: 10, border: 'none',
                background: accentColor, color: '#ffffff',
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                fontFamily: 'inherit', transition: 'background 0.2s',
              }}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              style={{
                padding: '10px 24px', borderRadius: 10, border: 'none',
                background: isDark ? '#00DBBE' : accentColor,
                color: isDark ? '#0d0a12' : '#ffffff',
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {signoff ? 'Submit Brief ✓' : 'Save & Continue →'}
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}

// ─── SUCCESS SCREEN ──────────────────────────────────────────
function Success({ version, onReset }) {
  const isDark = version === 'private';
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px', background: isDark ? '#0d0a12' : '#6801C2',
    }}>
      <div className="animate-in" style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>
          {isDark ? '🔒' : '🎉'}
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 34,
          fontWeight: 600, color: '#ffffff', marginBottom: 14,
        }}>
          {isDark ? 'Saved' : 'Brief Submitted'}
        </h1>
        <p style={{
          color: isDark ? '#8a7ea0' : 'rgba(255,255,255,0.8)',
          fontSize: 16, lineHeight: 1.6, marginBottom: 32,
        }}>
          {isDark
            ? 'Your private metadata has been saved. This stays between you and your spreadsheet.'
            : "Thank you! I'll review everything and be in touch soon. Can't wait to create something great together."
          }
        </p>
        {!isDark && (
          <p style={{
            color: 'rgba(255,255,255,0.7)', fontSize: 15, marginBottom: 32,
          }}>
            — Ashley
          </p>
        )}
        <button
          onClick={onReset}
          style={{
            padding: '14px 32px', borderRadius: 12,
            border: '2px solid rgba(255,255,255,0.2)',
            background: 'transparent', color: '#ffffff',
            fontSize: 15, fontWeight: 600, cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          ← Start Over
        </button>
      </div>
    </div>
  );
}

// ─── APP ORCHESTRATOR ────────────────────────────────────────
export default function Home() {
  const [screen, setScreen] = useState('landing');
  const [clientVersion, setClientVersion] = useState(null);
  const [phase, setPhase] = useState(null);
  const [combinedData, setCombinedData] = useState({});
  const [deepDiveCompleted, setDeepDiveCompleted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = async (version, data) => {
    setSubmitting(true);
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          version,
          data,
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error('Submit failed:', err);
    }
    setSubmitting(false);
  };

  const reset = () => {
    setScreen('landing');
    setClientVersion(null);
    setPhase(null);
    setCombinedData({});
    setDeepDiveCompleted(false);
    setSubmitted(false);
  };

  if (submitted) {
    return <Success version={clientVersion === 'private' ? 'private' : clientVersion} onReset={reset} />;
  }

  if (screen === 'landing') {
    return <Landing onSelect={(role) => setScreen(role)} />;
  }

  if (screen === 'designer-fill') {
    return (
      <BriefForm
        key="private"
        sections={PRIVATE_META}
        version="private"
        accentColor="#7F63C1"
        isDark={true}
        introText="Be honest, be messy, this is yours. Not for client eyes."
        signoff={true}
        onBack={() => reset()}
        onSubmit={async (data) => {
          setClientVersion('private');
          await submit('private', data);
          setSubmitted(true);
        }}
      />
    );
  }

  if (screen === 'client') {
    if (!clientVersion) {
      return <ClientPicker onPick={(v) => { setClientVersion(v); setPhase(v === 'a' ? 'ask-deep' : 'brief'); }} />;
    }

    if (phase === 'ask-deep') {
      return <DeepDivePrompt onChoice={(c) => {
        setPhase(c === 'deep-first' ? 'deepdive-before' : 'brief');
      }} />;
    }

    if (phase === 'deepdive-before') {
      return (
        <BriefForm
          key="deepdive-before"
          sections={VERSION_C}
          version="c"
          accentColor="#00A0C7"
          isDark={false}
          introText="Let's get the details nailed down first. Take your time."
          signoff={false}
          onBack={() => setPhase('ask-deep')}
          onSubmit={(data) => {
            setCombinedData((prev) => ({ ...prev, ...data }));
            setDeepDiveCompleted(true);
            setPhase('brief');
          }}
        />
      );
    }

    if (phase === 'brief') {
      const sections = clientVersion === 'a' ? VERSION_A : VERSION_B;
      const color = clientVersion === 'a' ? '#6801C2' : '#00A0C7';
      const intro = clientVersion === 'a'
        ? "Hi! I'm so excited to work with you. Fill this out as best you can — the more detail, the better. No wrong answers."
        : "This is a safe space — just answer what can. Write whatever comes to mind — even 'I don't know' is a great answer. I'll help us figure out the rest.";

      return (
        <BriefForm
          key={`brief-${clientVersion}`}
          sections={sections}
          version={clientVersion}
          accentColor={color}
          isDark={false}
          introText={intro}
          signoff={false}
          onBack={() => { setClientVersion(null); setPhase(null); }}
          onSubmit={(data) => {
            setCombinedData((prev) => ({ ...prev, ...data }));
            setPhase('deepdive-after');
          }}
        />
      );
    }

    if (phase === 'deepdive-after') {
      const alreadyDid = deepDiveCompleted;
      if (alreadyDid) {
        if (!submitting && !submitted) {
          submit(clientVersion, combinedData).then(() => setSubmitted(true));
        }
        return (
          <div style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center',
            justifyContent: 'center', background: 'var(--bg)',
          }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>Submitting your brief…</p>
          </div>
        );
      }

      return (
        <BriefForm
          key="deepdive-after"
          sections={VERSION_C}
          version="c"
          accentColor="#00A0C7"
          isDark={false}
          introText="Almost done! This detailed guide helps me build exactly what you need."
          signoff={true}
          onBack={() => setPhase('brief')}
          onSubmit={async (data) => {
            const allData = { ...combinedData, ...data };
            await submit(clientVersion, allData);
            setSubmitted(true);
          }}
        />
      );
    }
  }

  return null;
}
