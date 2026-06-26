import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(135deg, #0f172a 0%, #111827 50%, #0ea5e9 100%)',
          color: '#fff',
          fontFamily: 'Inter, Arial, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '360px',
            height: '360px',
            borderRadius: '999px',
            background: 'rgba(14, 165, 233, 0.18)',
            filter: 'blur(10px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-110px',
            left: '-90px',
            width: '340px',
            height: '340px',
            borderRadius: '999px',
            background: 'rgba(59, 130, 246, 0.2)',
            filter: 'blur(10px)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '72px',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '24px',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 700,
              }}
            >
              RC
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '22px', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                Portfolio
              </div>
              <div style={{ fontSize: '28px', opacity: 0.88 }}>
                Front-End Developer in Lucknow
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '860px' }}>
            <div style={{ fontSize: '78px', lineHeight: 1.02, fontWeight: 800 }}>
              Rishabh Chandra Lal
            </div>
            <div style={{ fontSize: '30px', lineHeight: 1.4, color: 'rgba(255,255,255,0.86)' }}>
              React, responsive UI, modern web experiences, and performance-focused front-end work.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            {['React JS', 'Responsive Design', 'Bootstrap', 'Performance', 'Portfolio'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '14px 20px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.11)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  fontSize: '22px',
                  fontWeight: 600,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
