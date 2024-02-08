import { useEffect } from 'react';
import useInventoryManagementStore from './inventory-management.store';
import { IInventoryItem } from './inventory-management.types';
import { fetchData } from './utils';
import { INVENTORY_ITEMS_API_URL } from './constants'

interface IUseFetchInventoryItems {
    isLoading: boolean;
    inventoryItems: IInventoryItem[] | undefined;
}

const useFetchInventoryItems = (): IUseFetchInventoryItems => {
    const { isLoading, setIsLoading, inventoryItems, setInventoryItems } = useInventoryManagementStore((state) => ({
        isLoading: state.isLoading,
        setIsLoading: state.setIsLoading,
        inventoryItems: state.inventoryItems,
        setInventoryItems: state.setInventoryItems,
    }));

    const fetchInventoryItems = async (): Promise<void> => {
        setIsLoading(true);
        const response = await fetchData(INVENTORY_ITEMS_API_URL);
        if (response) setInventoryItems(response);
        else setInventoryItems(undefined);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchInventoryItems();
    }, []);

    return { isLoading, inventoryItems };
};

export default useFetchInventoryItems;
