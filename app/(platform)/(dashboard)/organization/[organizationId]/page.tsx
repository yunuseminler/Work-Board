import { OrganizationSwitcher,auth } from "@clerk/nextjs";

const organizationIdPage = () =>{
    const {userId, orgId} = auth();
    return(
        <div>
            
        </div>
    );
};

export default organizationIdPage;