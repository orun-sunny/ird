// globals.d.ts
import { IStaticMethods } from "preline/preline";

declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}
