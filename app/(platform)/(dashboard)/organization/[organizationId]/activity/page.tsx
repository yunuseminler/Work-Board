import { Suspense } from "react";

import { Seperator } from "@/components/ui/separator";

import { Info } from "../_components/info";

import { ActivityList } from "./_components/activity-list";

const ActivityPage = async () => {

  return (
    <div className="w-full">
      <Info />
      <Seperator className="my-2" />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default ActivityPage;