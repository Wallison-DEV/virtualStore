import * as S from './styles';

const Button = ({ variant, children, type, className, onClick, href, maxwidth }: ButtonProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            onClick(e as any);
        }
    };

    if (type === 'link') {
        return (
            <S.ButtonLink className={className} variant={variant} href={href} onClick={handleClick as React.MouseEventHandler<HTMLAnchorElement>} maxwidth={maxwidth}>
                {children}
            </S.ButtonLink>
        );
    }
    return (
        <S.ButtonStyle className={className} variant={variant} onClick={handleClick as React.MouseEventHandler<HTMLButtonElement>} maxwidth={maxwidth}>
            {children}
        </S.ButtonStyle>
    );
};

export default Button;
