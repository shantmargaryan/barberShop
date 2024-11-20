import { create } from "zustand";

const useMeetingForm = create((set) => ({
    show: false,
    open: () => set({ show: true }),
    close: () => set({ show: false }),
}));

export default useMeetingForm