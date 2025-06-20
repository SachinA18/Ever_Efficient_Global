module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "everefficientlkalice-blue": "var(--everefficientlkalice-blue)",
        "everefficientlkathens-gray": "var(--everefficientlkathens-gray)",
        "everefficientlkazure-radiance": "var(--everefficientlkazure-radiance)",
        everefficientlkblack: "var(--everefficientlkblack)",
        "everefficientlkblack-8": "var(--everefficientlkblack-8)",
        "everefficientlkblue-zodiac-70": "var(--everefficientlkblue-zodiac-70)",
        "everefficientlkcerulean-blue": "var(--everefficientlkcerulean-blue)",
        "everefficientlkgenoa-9": "var(--everefficientlkgenoa-9)",
        everefficientlkmalachite: "var(--everefficientlkmalachite)",
        everefficientlkmirage: "var(--everefficientlkmirage)",
        "everefficientlkprussian-blue-85":
          "var(--everefficientlkprussian-blue-85)",
        everefficientlkshark: "var(--everefficientlkshark)",
        "everefficientlkshark-75": "var(--everefficientlkshark-75)",
        "everefficientlkslate-gray": "var(--everefficientlkslate-gray)",
        everefficientlkwhite: "var(--everefficientlkwhite)",
        "everefficientlkwhite-20": "var(--everefficientlkwhite-20)",
        "everefficientlkwhite-8": "var(--everefficientlkwhite-8)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "everefficient-lk-font-awesome-5-brands-regular":
          "var(--everefficient-lk-font-awesome-5-brands-regular-font-family)",
        "everefficient-lk-font-awesome-5-free-regular":
          "var(--everefficient-lk-font-awesome-5-free-regular-font-family)",
        "everefficient-lk-inter-bold":
          "var(--everefficient-lk-inter-bold-font-family)",
        "everefficient-lk-inter-bold-upper":
          "var(--everefficient-lk-inter-bold-upper-font-family)",
        "everefficient-lk-inter-extra-bold":
          "var(--everefficient-lk-inter-extra-bold-font-family)",
        "everefficient-lk-inter-medium":
          "var(--everefficient-lk-inter-medium-font-family)",
        "everefficient-lk-inter-medium-italic":
          "var(--everefficient-lk-inter-medium-italic-font-family)",
        "everefficient-lk-inter-regular":
          "var(--everefficient-lk-inter-regular-font-family)",
        "everefficient-lk-inter-semi-bold-upper":
          "var(--everefficient-lk-inter-semi-bold-upper-font-family)",
        "everefficient-lk-semantic-button":
          "var(--everefficient-lk-semantic-button-font-family)",
        "everefficient-lk-semantic-heading-1-title":
          "var(--everefficient-lk-semantic-heading-1-title-font-family)",
        "everefficient-lk-semantic-heading-2-title":
          "var(--everefficient-lk-semantic-heading-2-title-font-family)",
        "everefficient-lk-semantic-heading-4":
          "var(--everefficient-lk-semantic-heading-4-font-family)",
        "everefficient-lk-semantic-heading-5":
          "var(--everefficient-lk-semantic-heading-5-font-family)",
        "everefficient-lk-semantic-heading-6":
          "var(--everefficient-lk-semantic-heading-6-font-family)",
        "everefficient-lk-semantic-input":
          "var(--everefficient-lk-semantic-input-font-family)",
        "everefficient-lk-semantic-item":
          "var(--everefficient-lk-semantic-item-font-family)",
        "everefficient-lk-semantic-link":
          "var(--everefficient-lk-semantic-link-font-family)",
        "everefficient-lk-semantic-link-title":
          "var(--everefficient-lk-semantic-link-title-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideInLeft: 'slideInLeft 0.6s ease-out forwards',
        marquee: 'marquee 20s linear infinite',

      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
