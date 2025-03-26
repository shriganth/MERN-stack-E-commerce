import { create } from "zustand";

export const User = create((set) => ({
    UserData: [],
    setUserData: (UserData) => set({UserData}),
    createUserData: async (newUser) => {
        try {
            const res = await fetch("/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser)
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data = await res.json();
            set((state) => ({ UserData: [...state.UserData, data.data] }));

            return { success: true, message: "Userdata created successfully" };

        } catch (error) {
            console.error("Error creating product:", error);
            return { success: false, message: "Something went wrong. Please try again." };
        }
    }
}));