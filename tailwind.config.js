/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Color System
      colors: {
        // Primary Colors
        accent: 'hsla(var(--accent-hsl), 1)',
        darkAccent: 'hsla(var(--darkAccent-hsl), 1)',
        lightAccent: 'hsla(var(--lightAccent-hsl), 1)',
        safeLightAccent: 'hsla(var(--safeLightAccent-hsl), 1)',
        safeDarkAccent: 'hsla(var(--safeDarkAccent-hsl), 1)',
        safeInverseAccent: 'hsla(var(--safeInverseAccent-hsl), 1)',
        safeInverseLightAccent: 'hsla(var(--safeInverseLightAccent-hsl), 1)',
        safeInverseDarkAccent: 'hsla(var(--safeInverseDarkAccent-hsl), 1)',
        black: 'hsla(var(--black-hsl), 1)',
        white: 'hsla(var(--white-hsl), 1)',
        
        // Brand Colors
        primary: 'hsla(166.69565217, 100%, 45.09803922%, 1)',
        secondary: 'hsla(166.69565217, 100%, 45.09803922%, 0)',
        tertiary: 'hsla(331.00478469, 100%, 59.01960784%, 1)',
        
        // Background Colors
        'bg-primary': 'hsla(var(--white-hsl), 1)',
        'bg-secondary': 'hsla(var(--black-hsl), 1)',
        'bg-overlay': 'hsla(331.00478469, 100%, 59.01960784%, 1)',
        'bg-menu-overlay': 'hsla(var(--black-hsl), 1)',
        
        // Text Colors
        'text-primary': 'hsla(var(--black-hsl), 1)',
        'text-secondary': 'hsla(var(--white-hsl), 1)',
        'text-accent': 'hsla(var(--accent-hsl), 1)',
        'text-link': 'hsla(var(--safeLightAccent-hsl), 1)',
        
        // Border Colors
        'border-primary': 'hsla(var(--black-hsl), 1)',
        'border-secondary': 'hsla(var(--white-hsl), 1)',
        'border-accent': 'hsla(var(--safeLightAccent-hsl), 1)',
      },
      
      // Font Families
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
        'meta': ['Poppins', 'sans-serif'],
        'primary-button': ['Poppins', 'sans-serif'],
        'secondary-button': ['Poppins', 'sans-serif'],
        'tertiary-button': ['Poppins', 'sans-serif'],
        'header-button': ['Poppins', 'sans-serif'],
        'newsletter-title': ['Poppins', 'sans-serif'],
      },
      
      // Font Weights
      fontWeight: {
        'heading': '500',
        'body': '300',
        'meta': '400',
        'primary-button': '500',
        'secondary-button': '500',
        'tertiary-button': '600',
        'header-button': '600',
        'newsletter-title': '500',
      },
      
      // Font Sizes
      fontSize: {
        'base': '16px',
        'heading-1': '2.2rem',
        'heading-2': '2.2rem',
        'heading-3': '2.2rem',
        'heading-4': '1.6rem',
        'large-text': '1.4rem',
        'normal-text': '1rem',
        'small-text': '0.9rem',
        'normal-meta': '1rem',
        'primary-button': '1rem',
        'secondary-button': '1rem',
        'tertiary-button': '1.25rem',
        'header-button': '0.9rem',
        'newsletter-title': '1.6rem',
        'site-title': '2rem',
        'mobile-site-title': '1.8rem',
      },
      
      // Line Heights
      lineHeight: {
        'heading': '1.4em',
        'body': '1.8em',
        'meta': '1em',
        'primary-button': '1.2em',
        'secondary-button': '1.2em',
        'tertiary-button': '1.2em',
        'header-button': '1.9em',
        'newsletter-title': '1.4em',
      },
      
      // Letter Spacing
      letterSpacing: {
        'heading': '0em',
        'body': '0em',
        'meta': '0.01em',
        'primary-button': '0.02em',
        'secondary-button': '0em',
        'tertiary-button': '0em',
        'header-button': '0.02em',
        'newsletter-title': '0em',
      },
      
      // Border Radius
      borderRadius: {
        'primary-button': '6.4px',
        'secondary-button': '6.4px',
        'tertiary-button': '6.4px',
        'form-field': '5px',
        'form-field-checkbox': '5px',
        'form-field-radio': '5px',
        'form-field-survey': '5px',
      },
      
      // Border Width
      borderWidth: {
        'form-field': '1px',
        'form-field-checkbox': '1px',
        'form-field-radio': '1px',
        'form-field-survey': '1px',
        'secondary-button': '1px',
        'tertiary-button': '3px',
        'primary-button': '0px',
      },
      
      // Spacing
      spacing: {
        'primary-button-padding-x': '2rem',
        'primary-button-padding-y': '1rem',
        'secondary-button-padding-x': '2rem',
        'secondary-button-padding-y': '1rem',
        'tertiary-button-padding-x': '3.4rem',
        'tertiary-button-padding-y': '1.5rem',
        'form-field-padding-vertical': '10px',
        'form-field-padding-horizontal': '10px',
        'form-field-checkbox-padding-vertical': '10px',
        'form-field-checkbox-padding-horizontal': '10px',
        'form-field-radio-padding-vertical': '10px',
        'form-field-radio-padding-horizontal': '10px',
        'form-label-spacing-bottom': '4px',
        'form-description-spacing-bottom': '4px',
        'form-caption-spacing-bottom': '2px',
        'form-field-spacing-bottom': '20px',
        'form-field-column-gap': '10px',
        'form-field-checkbox-row-gap': '12px',
        'form-field-checkbox-column-gap': '20px',
        'form-field-radio-row-gap': '12px',
        'form-field-radio-column-gap': '20px',
      },
      
      // Width/Height
      width: {
        'form-field-checkbox': '16px',
        'form-field-radio': '17px',
        'form-field-survey': '17px',
        'form-field-dropdown-icon': '18px',
      },
      height: {
        'form-field-checkbox': '16px',
        'form-field-radio': '17px',
        'form-field-survey': '17px',
        'form-field-dropdown-icon': '18px',
      },
      
      // Gap
      gap: {
        'form-field-checkbox-icon-text': '11px',
        'form-field-radio-icon-text': '11px',
        'form-field-checkbox-row': '12px',
        'form-field-checkbox-column': '20px',
        'form-field-radio-row': '12px',
        'form-field-radio-column': '20px',
        'form-field': '10px',
      },
      
      // Background Colors
      backgroundColor: {
        'primary-button': 'hsla(166.69565217, 100%, 45.09803922%, 1)',
        'secondary-button': 'transparent',
        'tertiary-button': 'hsla(331.00478469, 100%, 59.01960784%, 1)',
        'form-field': 'hsla(var(--darkAccent-hsl), 1)',
        'form-field-on-bg': 'hsla(var(--lightAccent-hsl), 1)',
      },
      
      // Text Colors
      textColor: {
        'primary-button': 'hsla(0, 0%, 0%, 1)',
        'secondary-button': 'hsla(166.69565217, 100%, 45.09803922%, 1)',
        'tertiary-button': 'hsla(0, 0%, 100%, 1)',
        'secondary-button': 'hsl(0, 0%, 0%)',
        'tertiary-button': 'hsl(0, 0%, 0%)',
        'form-field': 'hsl(0, 0%, 0%)',
        'form-placeholder': 'hsl(0, 0%, 50%)',
      },
      
      // Border Colors
      borderColor: {
        'form-field': 'hsl(0, 0%, 0%)',
        'form-field-checkbox': 'hsl(0, 0%, 0%)',
        'form-field-radio': 'hsl(0, 0%, 0%)',
        'form-field-survey': 'hsl(0, 0%, 0%)',
        'secondary-button': 'hsl(0, 0%, 0%)',
        'tertiary-button': 'hsl(0, 0%, 0%)',
        'primary-button': 'transparent',
      },
      
      // Animation
      animation: {
        'global': 'global 0.65s ease-in-out 1s both',
      },
      keyframes: {
        global: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}