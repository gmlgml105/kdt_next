export const instant = false

import { Suspense } from "react";
import PhotoRead from "./_component/PhotoRead";
import Loading from "@/components/common/Loading";

interface Params {
    params: Promise<{id: string}>
}

export default async function page({params}: Params) {
    const { id } = await params;

    return (
        <Suspense fallback={<Loading />}>
            <h1>게시글 상세 정보</h1>
            <PhotoRead id={id} />
        </Suspense>
    );
}