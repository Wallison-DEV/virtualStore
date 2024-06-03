import * as S from './styles'

const Button = ({ variant, children, type, className, onClick, maxwidth }: ButtonProps) => {
    return (
        <S.ButtonStyle className={className} variant={variant} onClick={onClick} maxwidth={maxwidth}>{children}</S.ButtonStyle>
    )
}

export default Button