export const instant = false

import { Suspense } from "react";
import JoinAdditional from "./_component/JoinAdditional";

export default function page() {
    return (
        <>
            <Suspense>
                <JoinAdditional />
            </Suspense>
        </>
    );
}