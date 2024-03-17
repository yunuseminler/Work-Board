import { BoardList } from "./_components/board-list";
import { Info } from "./_components/info";
import {  Seperator } from "@/components/ui/separator";
const organizationIdPage = async () =>{
    return(
        <div className="w-full mb-20">
            <Info />
            <Seperator className="my-4" />
            <div className="px-2 md:px-4">
                <BoardList />
            </div>
        </div>
    );
};

export default organizationIdPage;