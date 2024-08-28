export const buttonVariants = ['primary', 'secondary'] as const
export type ButtonVariants = (typeof buttonVariants)[number]
