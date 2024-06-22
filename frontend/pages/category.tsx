import { useRouter } from 'next/router';
import ItemsList from '@/app/Components/ItemsList';

const CategoryPage = () => {
    const router = useRouter();
    const { category } = router.query;
    return (
        <div className="container">
            <h1>{category} Category Page</h1>
            <ItemsList category={category as string} />
        </div>
    );
};

export default CategoryPage;
