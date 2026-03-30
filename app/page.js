'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { VERSION_A, VERSION_B, VERSION_C, PRIVATE_META } from '../lib/formData';
import { FormField, SectionHeader, ProgressBar } from '../components/FormFields';

// ─── LANDING SCREEN ─────────────────────────────────────────
function Landing({ onSelect }) {
  const [mode, setMode] = useState('client');
  const isDesigner = mode === 'designer';

  // ── Slide toggle (portfolio pill style) ──
  const Toggle = () => (
    <div className="glass" style={{
      display:'inline-flex',alignItems:'center',borderRadius:9999,padding:4,
    }}>
      <button onClick={()=>setMode('client')} style={{
        padding:'10px 22px',borderRadius:9999,border:'none',
        fontFamily:"'Sarabun', sans-serif",fontSize:'0.8rem',fontWeight:600,
        letterSpacing:'0.06em',textTransform:'uppercase',
        cursor:'pointer',transition:'all 0.2s cubic-bezier(0.16,1,0.3,1)',
        background:!isDesigner?'var(--accent)':'transparent',
        color:!isDesigner?'#fff':'var(--text-secondary)',whiteSpace:'nowrap',
      }}>Clientele</button>
      <button onClick={()=>setMode('designer')} style={{
        padding:'10px 22px',borderRadius:9999,border:'none',
        fontFamily:"'Sarabun', sans-serif",fontSize:'0.8rem',fontWeight:600,
        letterSpacing:'0.06em',textTransform:'uppercase',
        cursor:'pointer',transition:'all 0.2s cubic-bezier(0.16,1,0.3,1)',
        background:isDesigner?'var(--purple-soft)':'transparent',
        color:isDesigner?'#fff':'var(--text-secondary)',whiteSpace:'nowrap',
      }}>Designer</button>
    </div>
  );

  // ── Social links ──
  const socialLinks = [
    { name: 'github', url: 'https://ampickettdesign.github.io/', label: 'G' },
    { name: 'linkedin', url: '#', label: 'L' },
    { name: 'instagram', url: '#', label: 'I' },
    { name: 'pinterest', url: '#', label: 'P' },
  ];

  const Socials = ({ size=36, light=true }) => (
    <div style={{display:'flex',gap:12,justifyContent:'center'}}>
      {socialLinks.map((s)=>(
        <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" style={{
          width:size,height:size,borderRadius:'50%',
          background:light?'var(--card)':'rgba(255,255,255,0.06)',
          border:light?'1px solid var(--border-light)':'1px solid rgba(255,255,255,0.1)',
          display:'flex',alignItems:'center',justifyContent:'center',
          cursor:'pointer',transition:'all 0.2s cubic-bezier(0.16,1,0.3,1)',
          fontSize:11,color:light?'var(--text-helper)':'rgba(255,255,255,0.4)',
          fontWeight:700,textTransform:'uppercase',
          fontFamily:"'Sarabun', sans-serif",textDecoration:'none',
        }}
        onMouseEnter={(e)=>{
          e.currentTarget.style.background='var(--accent)';
          e.currentTarget.style.color='#fff';
          e.currentTarget.style.borderColor='var(--accent)';
          e.currentTarget.style.transform='translateY(-2px)';
        }}
        onMouseLeave={(e)=>{
          e.currentTarget.style.background=light?'var(--card)':'rgba(255,255,255,0.06)';
          e.currentTarget.style.color=light?'var(--text-helper)':'rgba(255,255,255,0.4)';
          e.currentTarget.style.borderColor=light?'var(--border-light)':'rgba(255,255,255,0.1)';
          e.currentTarget.style.transform='translateY(0)';
        }}
        title={s.name}>{s.label}</a>
      ))}
    </div>
  );

  // ═══════════════════════════════════════════
  // CLIENT MODE
  // ═══════════════════════════════════════════
  if (!isDesigner) {
    return (
      <div style={{minHeight:'100vh',background:'var(--bg)'}}>

        {/* ──── DESKTOP ──── */}
        <div className="ld-desk" style={{minHeight:'100vh',flexDirection:'column'}}>
          {/* Glass nav */}
          <header style={{
            display:'flex',alignItems:'center',justifyContent:'space-between',
            padding:'0 3rem',height:72,
            background:'rgba(248,247,250,0.85)',
            backdropFilter:'blur(20px)',WebkitBackdropFilter:'blur(20px)',
            borderBottom:'1px solid transparent',
          }}>
            <a href="#" style={{fontFamily:"'Playfair Display',serif",fontSize:'1.5rem',fontWeight:700,color:'var(--text)',textDecoration:'none',letterSpacing:'-0.02em'}}>
              AMP<span style={{color:'var(--accent)'}}>.</span>
            </a>
            <div style={{display:'flex',alignItems:'center',gap:'2rem'}}>
              <Socials size={32} />
              <a href="mailto:AshleyPickett46@Gmail.com" className="btn-pill btn-pill--primary" style={{padding:'0.55rem 1.4rem',fontSize:'0.9rem'}}>
                Contact
              </a>
            </div>
          </header>

          {/* Hero — centered, portfolio style */}
          <div style={{
            flex:1,display:'flex',flexDirection:'column',alignItems:'center',
            justifyContent:'center',padding:'4rem 2rem 3rem',textAlign:'center',
            maxWidth:1400,margin:'0 auto',width:'100%',position:'relative',
          }}>
            <p className="section-label animate-in-1" style={{marginBottom:'1rem'}}>
              UI/UX & Graphic Designer
            </p>
            <h1 className="animate-in-2" style={{
              fontFamily:"'Playfair Display',serif",
              fontSize:'clamp(2.8rem, 6vw, 5rem)',fontWeight:700,
              lineHeight:1.05,letterSpacing:'-0.03em',
              color:'var(--text)',marginBottom:'1.25rem',
            }}>
              I. AM.<br />
              <span style={{color:'var(--accent)',fontStyle:'italic'}}>DESIGN</span>.
            </h1>
            <p className="animate-in-3" style={{
              fontSize:'clamp(1rem, 1.8vw, 1.25rem)',color:'var(--text-secondary)',
              maxWidth:580,lineHeight:1.7,marginBottom:'2rem',textWrap:'balance',
            }}>
              Thanks for choosing me for your project. When you're ready,
              hit the button below to start the questionnaire.
            </p>
            <div className="animate-in-4" style={{display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center',alignItems:'center',marginBottom:'0.75rem'}}>
              <button onClick={()=>onSelect('client')} className="btn-pill btn-pill--primary">
                I'm a Client →
              </button>
              <Toggle />
            </div>
            <p className="animate-in-5" style={{
              fontFamily:"'Sarabun',sans-serif",fontSize:'0.85rem',
              color:'var(--text-helper)',letterSpacing:'0.04em',marginBottom:'3rem',
            }}>This is a No-Obligation Questionnaire</p>

            {/* Hero image — full width below content, portfolio card style */}
            <div className="animate-in-5" style={{
              width:'100%',maxWidth:960,borderRadius:32,overflow:'hidden',
              border:'1px solid var(--border-light)',
              boxShadow:'0 20px 60px rgba(76,48,115,0.08)',
            }}>
              <img src="/hero-image.png" alt="Portfolio preview" style={{
                width:'100%',height:'auto',display:'block',
              }} />
            </div>
          </div>
        </div>

        {/* ──── MOBILE ──── */}
        <div className="ld-mob" style={{minHeight:'100vh',flexDirection:'column',alignItems:'center'}}>
          {/* Mobile nav */}
          <header style={{
            display:'flex',alignItems:'center',justifyContent:'space-between',
            padding:'0 1.25rem',height:64,width:'100%',
            borderBottom:'1px solid var(--border-light)',
          }}>
            <span style={{fontFamily:"'Playfair Display',serif",fontSize:'1.3rem',fontWeight:700,color:'var(--text)',letterSpacing:'-0.02em'}}>
              AMP<span style={{color:'var(--accent)'}}>.</span>
            </span>
            <a href="mailto:AshleyPickett46@Gmail.com" className="btn-pill btn-pill--primary" style={{padding:'0.45rem 1.2rem',fontSize:'0.8rem'}}>
              Contact
            </a>
          </header>

          {/* Hero image */}
          <div className="animate-in" style={{
            margin:'1.25rem auto 0',width:'calc(100% - 2.5rem)',maxWidth:400,
            borderRadius:20,overflow:'hidden',
            border:'1px solid var(--border-light)',
            boxShadow:'0 8px 30px rgba(76,48,115,0.06)',
          }}>
            <img src="/hero-image.png" alt="Portfolio preview" style={{width:'100%',height:'auto',display:'block'}} />
          </div>

          {/* Content */}
          <div style={{
            flex:1,display:'flex',flexDirection:'column',alignItems:'center',
            padding:'1.75rem 1.5rem 0',textAlign:'center',width:'100%',
          }}>
            <p className="section-label animate-in-1" style={{marginBottom:'0.75rem',fontSize:'0.7rem'}}>
              UI/UX & Graphic Designer
            </p>
            <h1 className="animate-in-2" style={{
              fontFamily:"'Playfair Display',serif",
              fontSize:'clamp(2.2rem, 9vw, 3rem)',fontWeight:700,
              lineHeight:1.05,letterSpacing:'-0.03em',
              color:'var(--text)',marginBottom:'0.75rem',
            }}>
              I. AM.<br />
              <span style={{color:'var(--accent)',fontStyle:'italic'}}>DESIGN</span>.
            </h1>
            <p className="animate-in-3" style={{
              fontSize:'1rem',color:'var(--text-secondary)',
              maxWidth:340,lineHeight:1.65,marginBottom:'1.5rem',textWrap:'balance',
            }}>
              Thanks for choosing me for your project! When you're ready,
              hit the button below to start the questionnaire.
            </p>
            <button className="animate-in-4 btn-pill btn-pill--primary" onClick={()=>onSelect('client')} style={{width:'100%',maxWidth:320,padding:'1rem 2rem',fontSize:'1rem'}}>
              I'm a Client →
            </button>
            <p className="animate-in-4" style={{
              fontFamily:"'Sarabun',sans-serif",fontSize:'0.75rem',
              color:'var(--text-helper)',marginTop:'0.75rem',marginBottom:'1.5rem',
            }}>This is a No-Obligation Questionnaire</p>
            <div className="animate-in-5"><Socials size={36} /></div>
            <p className="animate-in-5" style={{fontFamily:"'Sarabun',sans-serif",fontSize:'0.7rem',color:'var(--text-secondary)',marginTop:'0.6rem',fontStyle:'italic',marginBottom:'1.5rem'}}>
              If you'd like to follow me — it's majorly appreciated!
            </p>
            <div className="animate-in-5" style={{marginBottom:'2.5rem'}}><Toggle /></div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════
  // DESIGNER MODE
  // ═══════════════════════════════════════════
  return (
    <div data-theme="dark" style={{minHeight:'100vh',background:'var(--bg)'}}>

      {/* ──── DESKTOP ──── */}
      <div className="ld-desk" style={{minHeight:'100vh',flexDirection:'column'}}>
        <header style={{
          display:'flex',alignItems:'center',justifyContent:'space-between',
          padding:'0 3rem',height:72,
          background:'rgba(0,1,13,0.85)',
          backdropFilter:'blur(20px)',WebkitBackdropFilter:'blur(20px)',
          borderBottom:'1px solid var(--border)',
        }}>
          <span style={{fontFamily:"'Playfair Display',serif",fontSize:'1.5rem',fontWeight:700,color:'var(--text)',letterSpacing:'-0.02em'}}>
            AMP<span style={{color:'var(--accent)'}}>.</span>
          </span>
          <p style={{fontFamily:"'Sarabun',sans-serif",fontSize:'0.65rem',fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:'var(--error)'}}>Internal Use Only</p>
        </header>

        <div style={{
          flex:1,display:'flex',flexDirection:'column',alignItems:'center',
          justifyContent:'center',padding:'4rem 2rem 3rem',textAlign:'center',
          maxWidth:1400,margin:'0 auto',width:'100%',
        }}>
          <h1 className="animate-in-2" style={{
            fontFamily:"'Playfair Display',serif",
            fontSize:'clamp(2.5rem, 5vw, 4rem)',fontWeight:700,
            lineHeight:1.1,color:'var(--text)',marginBottom:'1.25rem',
          }}>
            Project <span style={{color:'var(--accent)',fontStyle:'italic'}}>Metadata</span>
          </h1>
          <p className="animate-in-3" style={{
            fontSize:'1.1rem',color:'var(--text-secondary)',
            maxWidth:460,lineHeight:1.7,marginBottom:'2.5rem',textWrap:'balance',
          }}>
            Your private process log, client notes, and honest reflections.
          </p>
          <div className="animate-in-4" style={{display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center',alignItems:'center',marginBottom:'1rem'}}>
            <button onClick={()=>onSelect('designer-fill')} className="btn-pill btn-pill--primary">
              Fill in Online →
            </button>
            <a href="/creative-brief-complete.pdf" download className="btn-pill btn-pill--outline">
              Download PDF
            </a>
          </div>
          <div className="animate-in-5" style={{marginTop:'1.5rem'}}><Toggle /></div>
        </div>
      </div>

      {/* ──── MOBILE ──── */}
      <div className="ld-mob" style={{minHeight:'100vh',flexDirection:'column',alignItems:'center'}}>
        <header style={{
          display:'flex',alignItems:'center',justifyContent:'space-between',
          padding:'0 1.25rem',height:64,width:'100%',
          borderBottom:'1px solid var(--border)',
        }}>
          <span style={{fontFamily:"'Playfair Display',serif",fontSize:'1.3rem',fontWeight:700,color:'var(--text)',letterSpacing:'-0.02em'}}>
            AMP<span style={{color:'var(--accent)'}}>.</span>
          </span>
          <p style={{fontFamily:"'Sarabun',sans-serif",fontSize:'0.6rem',fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--error)'}}>Internal Only</p>
        </header>

        <div style={{
          flex:1,display:'flex',flexDirection:'column',alignItems:'center',
          padding:'2.5rem 1.5rem 0',textAlign:'center',width:'100%',
        }}>
          <h1 className="animate-in-2" style={{
            fontFamily:"'Playfair Display',serif",
            fontSize:'clamp(2rem, 8vw, 2.8rem)',fontWeight:700,
            lineHeight:1.1,color:'var(--text)',marginBottom:'0.75rem',
          }}>
            Project <span style={{color:'var(--accent)',fontStyle:'italic'}}>Metadata</span>
          </h1>
          <p className="animate-in-3" style={{
            fontSize:'0.95rem',color:'var(--text-secondary)',
            maxWidth:320,lineHeight:1.65,marginBottom:'2rem',textWrap:'balance',
          }}>
            Your private process log, client notes, and honest reflections.
          </p>
          <div className="animate-in-4" style={{display:'flex',flexDirection:'column',gap:12,width:'100%',maxWidth:320}}>
            <button onClick={()=>onSelect('designer-fill')} className="btn-pill btn-pill--primary" style={{width:'100%',justifyContent:'center'}}>
              Fill in Online →
            </button>
            <a href="/creative-brief-complete.pdf" download className="btn-pill btn-pill--outline" style={{width:'100%',justifyContent:'center'}}>
              Download PDF
            </a>
          </div>
          <div className="animate-in-5" style={{marginTop:'2rem',marginBottom:'2.5rem'}}><Toggle /></div>
        </div>
      </div>
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
              fontFamily: "'Sarabun', sans-serif", textAlign: 'left',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, borderRadius: 10, background: 'var(--accent)',
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
              fontFamily: "'Sarabun', sans-serif", textAlign: 'left',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-secondary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, borderRadius: 10, background: 'var(--accent-secondary)',
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
            fontFamily: "'Sarabun', sans-serif", textDecoration: 'underline',
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
              cursor: 'pointer', fontFamily: "'Sarabun', sans-serif", textAlign: 'left',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-secondary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            Deep dive first — I want to be thorough
          </button>
          <button
            onClick={() => onChoice('brief-first')}
            style={{
              padding: '16px 24px', borderRadius: 12,
              background: 'var(--accent)', border: 'none',
              color: '#ffffff', fontSize: 15, fontWeight: 600,
              cursor: 'pointer', fontFamily: "'Sarabun', sans-serif", textAlign: 'left',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'var(--accent)'}
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
      background: 'var(--bg)',
      color: 'var(--text)',
    }}>
      <a href="#main-form" className="skip-link">Skip to form</a>

      <header style={{
        background: isDark ? 'var(--bg-elevated)' : accentColor,
        padding: '24px 24px 20px',
        borderBottom: isDark ? '1px solid var(--border)' : 'none',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: 6,
            color: isDark ? '#E74C3C' : 'rgba(255,255,255,0.7)',
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
            color={isDark ? 'var(--purple-soft)' : 'rgba(255,255,255,0.9)'}
          />
        </div>
      </header>

      {step === 0 && introText && (
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '20px 24px 0' }}>
          <p className="animate-in" style={{
            fontSize: 15, color: 'var(--text-secondary)',
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
            background: 'var(--card)',
            borderRadius: 16, padding: '28px 24px',
            border: `1px solid ${isDark ? 'var(--border)' : 'var(--border-light)'}`,
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
        background: isDark ? 'var(--bg-elevated)' : 'var(--card)',
        borderTop: `1px solid ${isDark ? 'var(--border)' : 'var(--border-light)'}`,
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
              border: `2px solid var(--border)`,
              background: 'transparent',
              color: 'var(--text-secondary)',
              fontSize: 14, fontWeight: 600, cursor: 'pointer',
              fontFamily: "'Sarabun', sans-serif", transition: 'border-color 0.2s',
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
                      ? 'var(--text-helper)'
                      : 'var(--border)',
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
                fontFamily: "'Sarabun', sans-serif", transition: 'background 0.2s',
              }}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              style={{
                padding: '10px 24px', borderRadius: 10, border: 'none',
                background: isDark ? 'var(--success)' : accentColor,
                color: isDark ? 'var(--bg)' : '#ffffff',
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                fontFamily: "'Sarabun', sans-serif",
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
      padding: '40px 20px', background: isDark ? 'var(--bg)' : 'var(--accent)',
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
          color: isDark ? 'var(--text-secondary)' : 'rgba(255,255,255,0.8)',
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
            fontFamily: "'Sarabun', sans-serif",
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
        accentColor="var(--purple-soft)"
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
          accentColor="var(--accent-secondary)"
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
      const color = clientVersion === 'a' ? 'var(--accent)' : 'var(--accent-secondary)';
      const intro = clientVersion === 'a'
        ? "Hi! I'm so excited to work with you. Fill this out as best you can — the more detail, the better. No wrong answers."
        : "This is a safe space — just answer what you can. Write whatever comes to mind — even 'I don't know' is a great answer. I'll help us figure out the rest.";

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
          accentColor="var(--accent-secondary)"
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
