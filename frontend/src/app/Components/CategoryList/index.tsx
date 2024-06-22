import CategoryItem from '../Category';
import * as S from './styles';

const categories = [
    { label: 'Electronics & Technology', imageUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg', href: 'category/electronics' },
    { label: 'Fashion & Accessories', imageUrl: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg', href: 'category/fashion' },
    { label: 'Home & Kitchen', imageUrl: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg', href: 'category/home' },
    { label: 'Beauty & Personal Care', imageUrl: 'https://images.pexels.com/photos/273665/pexels-photo-273665.jpeg', href: 'category/beauty' },
    { label: 'Sports & Outdoors', imageUrl: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg', href: 'category/sports' },
    { label: 'Baby & Kids', imageUrl: 'https://images.pexels.com/photos/3661355/pexels-photo-3661355.jpeg', href: 'category/baby' },
    { label: 'Health & Wellness', imageUrl: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg', href: 'category/health' },
    { label: 'Books & Media', imageUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg', href: 'category/books' },
    { label: 'Food & Beverages', imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg', href: 'category/food' },
    { label: 'Automotive & Tools', imageUrl: 'https://images.unsplash.com/photo-1606676539940-12768ce0e762?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGF1dG9tb3RpdmUlMjAlMjYlMjB0b29sc3xlbnwwfHwwfHx8MA%3D%3D', href: 'category/automotive' },
    { label: 'Pet Shop', imageUrl: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg', href: 'category/pet' },
    { label: 'Outdoors & Gardening', imageUrl: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg', href: 'category/outdoors' },
];

const CategoryList = () => {
    return (
        <S.StyledCategoryList>
            {categories.map((category, index) => (
                <CategoryItem
                    key={index}
                    label={category.label}
                    imageUrl={category.imageUrl}
                    href={category.href}
                />
            ))}
        </S.StyledCategoryList>
    );
};

export default CategoryList;
