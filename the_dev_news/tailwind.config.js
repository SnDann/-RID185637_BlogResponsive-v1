module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#20B2AA", // teal-500 - Brand authority and trust-building moments
        "primary-dark": "#1A9B94", // teal-600 - Hover states and interactive feedback
        accent: "#26D0CE", // teal-400 - Success states and achievement highlights
        background: "#FAFBFC", // gray-50 - Clean reading canvas with subtle warmth
        surface: "#FFFFFF", // white - Content cards and elevated elements
        "text-primary": "#1A202C", // gray-800 - Extended reading without eye strain
        "text-secondary": "#4A5568", // gray-600 - Metadata and supporting information hierarchy
        success: "#38A169", // green-500 - Positive confirmations and completed actions
        warning: "#D69E2E", // yellow-600 - Important notices without alarm
        error: "#E53E3E", // red-500 - Clear problem identification with helpful tone
        border: "#E2E8F0", // gray-200 - Form inputs and content separation
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        serif: ['Source Serif 4', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        hover: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}