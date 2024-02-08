import React from 'react';
import useFetchInventoryItems from './use-fetch-inventory-items';

const InventoryManagement: React.FC = () => {
    const { isLoading, inventoryItems } = useFetchInventoryItems();

    return (
        <div>
        </div>
    );
};

export default InventoryManagement;
