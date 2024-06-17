declare type ButtonProps = {
    variant: 'light' | 'blue' | 'orange'
    children: React.ReactNode | string
    type?: 'button' | 'submit' | 'reset' | 'link'
    className?: string
    onClick?: () => void
    maxwidth?: string
    href?: string
}