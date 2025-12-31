export const brandColors = {
  black: '#000000',      // Primary: logo, text, borders
  offWhite: '#F1FAEE',   // Backgrounds, cards
  steelBlue: '#457B9D',  // Accents, buttons, links
  paleCyan: '#A8DADC',   // Subtle highlights, hovers
  white: '#FFFFFF',      // Rare contrasts
} as const;

export type BrandColor = keyof typeof brandColors;
