import { OrganizationSwitcher,auth } from "@clerk/nextjs";

const organizationIdPage = () =>{
    const {userId, orgId} = auth();
    return(
        <div>
            <OrganizationSwitcher
            hidePersonal/>
        </div>
    );
};

export default organizationIdPage;