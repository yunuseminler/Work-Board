import { db } from "@/lib/db";
import { Create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { Board } from "./board";
import { Form } from "./form";


const organizationIdPage = async () =>{
    const boards = await db.board.findMany();
    return(
        <div className="flex flex-col space-y-4">
           <Form />
            <div className="space-y-2">
                {boards.map((board) =>(
                    <Board key={board.id} title={board.title} id={board.id}/>
                ))}
            </div>
        </div>
    );
};

export default organizationIdPage;