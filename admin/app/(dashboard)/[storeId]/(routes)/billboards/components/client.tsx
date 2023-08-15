"use client";


import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Billboard } from "@prisma/client";
import { BillboardColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface BillboardClientProps{
    data: BillboardColumn[]
}

export const BillboardClient: React.FC<BillboardClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();
    return(
        <>
        <div className="flex items-center justify-between">
            <Heading 
                title= {`Billboards (${data.length})`}
                description="Manage billboard for your store" 
            />
            <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                <Plus className="mr-2 h-4 w-4"/>
                Add New
            </Button>
        </div>
        <Separator/>
        <DataTable searchKey="label" columns={columns} data={data}/>
        </>
    )
}