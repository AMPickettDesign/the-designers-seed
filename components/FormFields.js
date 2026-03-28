'use client';

export function TextField({ field, value, onChange }) {
  const id = `field-${field.key}`;
  return (
    <div className="field-group" style={{ marginBottom: 24 }}>
      <label htmlFor={id} style={{
        display: 'block', fontSize: 15, fontWeight: 600,
        color: 'var(--text)', marginBottom: 4,
      }}>
        {field.label}
      </label>
      {field.helper && (
        <p id={`${id}-hint`} style={{
          fontSize: 13, color: 'var(--text-helper)', margin: '0 0 8px',
          fontStyle: 'italic', lineHeight: 1.4,
        }}>
          {field.helper}
        </p>
      )}
      <input
        id={id}
        type="text"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={field.helper ? `${id}-hint` : undefined}
        style={{
          width: '100%', padding: '12px 16px', borderRadius: 10,
          border: '2px solid var(--input-border)',
          background: 'var(--input-bg)', color: 'var(--text)',
          fontSize: 15, outline: 'none', transition: 'border-color 0.2s',
        }}
        onFocus={(e) => e.target.style.borderColor = 'var(--input-focus)'}
        onBlur={(e) => e.target.style.borderColor = 'var(--input-border)'}
      />
    </div>
  );
}

export function TextArea({ field, value, onChange }) {
  const id = `field-${field.key}`;
  return (
    <div className="field-group" style={{ marginBottom: 24 }}>
      <label htmlFor={id} style={{
        display: 'block', fontSize: 15, fontWeight: 600,
        color: 'var(--text)', marginBottom: 4,
      }}>
        {field.label}
      </label>
      {field.helper && (
        <p id={`${id}-hint`} style={{
          fontSize: 13, color: 'var(--text-helper)', margin: '0 0 8px',
          fontStyle: 'italic', lineHeight: 1.4,
        }}>
          {field.helper}
        </p>
      )}
      <textarea
        id={id}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        aria-describedby={field.helper ? `${id}-hint` : undefined}
        style={{
          width: '100%', padding: '12px 16px', borderRadius: 10,
          border: '2px solid var(--input-border)',
          background: 'var(--input-bg)', color: 'var(--text)',
          fontSize: 15, outline: 'none', resize: 'vertical',
          minHeight: 80, transition: 'border-color 0.2s',
        }}
        onFocus={(e) => e.target.style.borderColor = 'var(--input-focus)'}
        onBlur={(e) => e.target.style.borderColor = 'var(--input-border)'}
      />
    </div>
  );
}

export function ChipSelect({ field, value, onChange }) {
  const selected = value || [];
  const toggle = (opt) => {
    if (selected.includes(opt)) onChange(selected.filter((s) => s !== opt));
    else onChange([...selected, opt]);
  };

  return (
    <div className="field-group" style={{ marginBottom: 24 }} role="group" aria-labelledby={`chips-${field.key}`}>
      <p id={`chips-${field.key}`} style={{
        fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 4,
      }}>
        {field.label}
      </p>
      {field.helper && (
        <p style={{
          fontSize: 13, color: 'var(--text-helper)', margin: '0 0 8px',
          fontStyle: 'italic',
        }}>
          {field.helper}
        </p>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
        {field.options.map((opt) => {
          const active = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggle(opt)}
              aria-pressed={active}
              style={{
                padding: '8px 18px', borderRadius: 100,
                border: `2px solid ${active ? 'var(--accent)' : 'var(--input-border)'}`,
                background: active ? 'var(--accent)' : 'transparent',
                color: active ? 'var(--text-on-purple)' : 'var(--text-secondary)',
                fontSize: 14, fontWeight: active ? 600 : 400,
                cursor: 'pointer', transition: 'all 0.15s ease',
                fontFamily: 'inherit',
              }}
            >
              {active && <span aria-hidden="true" style={{ marginRight: 6 }}>✓</span>}
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function FormField({ field, value, onChange }) {
  switch (field.type) {
    case 'text': return <TextField field={field} value={value} onChange={onChange} />;
    case 'textarea': return <TextArea field={field} value={value} onChange={onChange} />;
    case 'chips': return <ChipSelect field={field} value={value} onChange={onChange} />;
    default: return null;
  }
}

export function SectionHeader({ num, title, subtitle, callout, versionColor }) {
  const accentColor = versionColor || 'var(--accent)';
  return (
    <div className="animate-in" style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 4 }}>
        <span style={{
          fontFamily: "'Playfair Display', serif", fontSize: 40,
          fontWeight: 700, color: 'var(--border)', lineHeight: 1, userSelect: 'none',
        }}>
          {num}
        </span>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 24,
          fontWeight: 600, color: 'var(--text)', lineHeight: 1.2,
          letterSpacing: '-0.02em',
        }}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p style={{ fontSize: 14, color: 'var(--text-helper)', marginBottom: 8, marginLeft: 52 }}>
          {subtitle}
        </p>
      )}
      <div style={{
        width: 32, height: 3, background: accentColor,
        borderRadius: 2, marginLeft: 52, marginBottom: callout ? 16 : 0,
      }} />
      {callout && (
        <div style={{
          background: 'var(--accent-soft)', padding: '12px 20px',
          borderRadius: 10, marginTop: 12, borderLeft: `3px solid ${accentColor}`,
        }}>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: 0, fontWeight: 500 }}>
            {callout}
          </p>
        </div>
      )}
    </div>
  );
}

export function ProgressBar({ current, total, color }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        flex: 1, height: 4, background: 'var(--border-light)',
        borderRadius: 100, overflow: 'hidden',
      }}>
        <div
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${pct}% complete`}
          style={{
            width: `${pct}%`, height: '100%',
            background: color || 'var(--accent)',
            borderRadius: 100, transition: 'width 0.4s ease',
          }}
        />
      </div>
      <span style={{
        fontSize: 13, color: 'var(--text-helper)',
        fontWeight: 500, minWidth: 36, textAlign: 'right',
      }}>
        {pct}%
      </span>
    </div>
  );
}
