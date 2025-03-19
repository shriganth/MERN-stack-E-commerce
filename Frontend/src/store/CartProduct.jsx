import { create } from "zustand";


export const cartProductStore = create((set) => ({
    cartProducts: [],
    setCartProducts: (cartProducts) => set({cartProducts}),
    createCartProduct: async (newProduct) => {
        try {
            const res = await fetch("/api/cart", {
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
            set((state) => ({ cartProducts: [...state.cartProducts, data.data] }));
            
            return { success: true, message: "Product created successfully" };
    
        } catch (error) {
            console.error("Error creating product:", error);
            return { success: false, message: "Something went wrong. Please try again." };
        }
    },
    fetchCartProduct: async () => {
        const res = await fetch("/api/cart");

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        set({cartProducts: data.data});
    },
    deleteCartProduct: async (pid) => {
        const res = await fetch(`/api/cart/${pid}`, {
            method: "DELETE",
        });

        const data = await res.json();

        console.log("Data: ", data);

        if (!data.success) {
            return ({ success: false, message: data.message});
        }
        set((state) => ({ cartProducts: state.cartProducts.filter((product) => product._id !== pid) }));
        return ({ success: true, message: data.message });
    },
}));


