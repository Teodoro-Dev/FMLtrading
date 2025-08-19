module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#0a0a0a',
        brand2: '#1a1a1a',
        accent: '#6366f1',
        accent2: '#8b5cf6',
        accent3: '#06b6d4',
        accent4: '#10b981',
        accent5: '#f59e0b',
        textOnBrand: '#ffffff',
        text: '#ffffff',
        textSecondary: '#e2e8f0',
        textMuted: '#94a3b8',
        muted: '#64748b',
        bg: '#000000',
        surface: 'rgba(26, 26, 26, 0.9)',
        surface2: 'rgba(15, 15, 15, 0.95)',
        glass: 'rgba(255, 255, 255, 0.08)',
        glassBorder: 'rgba(255, 255, 255, 0.15)',
        secondary: '#6b7280',
        secondaryHover: '#9ca3af',
      },
      borderRadius: {
        xl: '16px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(99, 102, 241, 0.4)',
        glowStrong: '0 0 40px rgba(99, 102, 241, 0.6)',
        glowAccent: '0 0 30px rgba(6, 182, 212, 0.5)',
        glowSuccess: '0 0 25px rgba(16, 185, 129, 0.5)',
      },
      maxWidth: {
        container: '1200px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      width: {
        '30': '7.5rem',
      },
      height: {
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}