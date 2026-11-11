import AuthHydration from "@/components/auth/AuthHydration";
import MyPageContainer from "./_component/MyPageContainer";

export default function page() {
    return (
        <>
            <AuthHydration />
            <MyPageContainer />
        </>
    );
}