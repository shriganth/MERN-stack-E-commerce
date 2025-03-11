import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill in all fields" };
        }
    
        try {
            const res = await fetch("/api/product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct)
            });
    
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
    
            const data = await res.json();
            set((state) => ({ products: [...state.products, data.data] }));
            
            return { success: true, message: "Product created successfully" };
    
        } catch (error) {
            console.error("Error creating product:", error);
            return { success: false, message: "Something went wrong. Please try again." };
        }
    },
    fetchProduct: async () => {
        const res = await fetch("/api/product");

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        set({products: data.data});
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/product/${pid}`, {
            method: "DELETE",
        });

        const data = await res.json();

        console.log("Data: ", data);

        if (!data.success) {
            return ({ success: false, message: data.message});
        }
        set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
        return ({ success: true, message: data.message });
    },
    updateProduct: async (pid, updateProduct) => {
        const res = await fetch(`/api/product/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateProduct),
        });

        const data = await res.json();

        if (!data.success) {
            return ({ success: false, message: data.message});
        }

        set((state) => ({ products: state.products.map((product) => product._id === pid ? data.data : product) }));
        return ({ success: true, message: data.message });
    }
    
}));

