export const instant = false

import Loading from "@/components/common/Loading";
import { Suspense } from "react";
import TodoRead from "./_component/TodoRead";
interface Params {
    params: Promise<{id: string}>
}

export default async function page({params}: Params) {
    const {id} = await params;

    return (
        <Suspense fallback={<Loading />}>
            <TodoRead id={id} />
        </Suspense>
    );
}