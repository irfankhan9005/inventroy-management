import { useEffect } from 'react';
import useInventoryManagementStore from './inventory-management.store';
import { IInventoryItem } from './inventory-management.interface';
import { fetchData } from './utils';
import { INVENTORY_ITEMS_API_URL } from './constants'

interface IUseFetchInventoryItems {
    isLoading: boolean;
    inventoryItems: IInventoryItem[] | undefined;
}

const useFetchInventoryItems = (): IUseFetchInventoryItems => {
    const { isLoading, setIsLoading, products, setProducts } = useInventoryManagementStore((state) => ({
        isLoading: state.isLoading,
        setIsLoading: state.setIsLoading,
        products: state.products,
        setProducts: state.setProducts,
    }));

    const fetchProducts = async (): Promise<void> => {
        try {
            setIsLoading(true);
            const response = await fetchData(INVENTORY_ITEMS_API_URL);
            if (response) setProducts(response);
            else setProducts(undefined);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    };

    useEffect(() => {
        // fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { isLoading, products };
};

export default useFetchInventoryItems;
