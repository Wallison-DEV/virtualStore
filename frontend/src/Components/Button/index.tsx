import * as S from './styles'

const Button = ({ variant, children, type, className, onClick, href, maxwidth }: ButtonProps) => {
    if (type === 'link') {
        return (
            <S.ButtonLink className={className} variant={variant} href={href} onClick={onClick} maxwidth={maxwidth}>{children}</S.ButtonLink>
        )
    }
    return (
        <S.ButtonStyle className={className} variant={variant} onClick={onClick} maxwidth={maxwidth}>{children}</S.ButtonStyle>
    )
}

export default Button