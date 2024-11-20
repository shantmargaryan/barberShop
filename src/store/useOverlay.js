import { create } from "zustand";

const useOverlay = create((set) => ({
    isShow: false,
    setIsShow: () => set({ isShow: true }),
    setIsHide: () => set({ isShow: false }),
}))

export default useOverlay