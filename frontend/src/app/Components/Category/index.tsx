import * as S from './styles';

const CategoryItem = ({ label, imageUrl, href }) => {
    return (
        <S.StyledCategoryItem>
            <h2>{label}</h2>
            <img src={imageUrl} alt={label} />
            <a href={href}>See More</a>
        </S.StyledCategoryItem>
    );
};

export default CategoryItem;
