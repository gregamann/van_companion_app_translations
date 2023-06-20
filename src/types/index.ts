export const languages = ['en', 'fr'] as const

export type Language = (typeof languages)[number]
export type Translation = Record<Language, any>
