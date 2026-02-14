import type { ModUtils } from "@sugarcube-modloader/BeforeSC2/Utils"

declare global {
    interface Window {
        modUtils: ModUtils
    }
}