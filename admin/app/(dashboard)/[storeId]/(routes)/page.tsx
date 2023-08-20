import prismadb from "@/lib/prismadb";

interface DashboardPageProps{
    params:{storeId:string}
};

const DashboardPage : React.FC<DashboardPageProps> = async ({
    params
}) =>{
    return(
        <div className="flex-col">
            <div className="flex-1 space-y-4">

            </div>
        </div>
    );
}

export default DashboardPage;