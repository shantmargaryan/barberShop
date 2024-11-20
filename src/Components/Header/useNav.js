import { create } from "zustand"


const useNav = create((set) => ({
    navIsOpen: false,
    setNavIsOpen: (isShow) => set({ navIsOpen: isShow }),
}))

export default useNav