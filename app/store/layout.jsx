import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "GizmoCart. - Store Dashboard",
    description: "GizmoCart. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
