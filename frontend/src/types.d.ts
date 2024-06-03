declare type ButtonProps = {
    variant?: 'light' | 'dark' | 'blue' | 'lightblue'
    children: React.ReactNode | string
    type?: 'button' | 'submit' | 'reset' | 'link'
    className?: string
    onClick?: () => void
    maxwidth?: string
    href?: string
}