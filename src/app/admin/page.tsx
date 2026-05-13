import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components";
import { routes } from "@/constants/routes";

export default async function HomePage() {
  return (
    <div className="flex flex-col justify-items-center gap-3 p-4 pb-20 bg-white">
      <div className="grid grid-rows-2 gap-3 mt-3 w-full md:grid-cols-1">
        <Button asChild variant="secondary" size="icon-lg" className="w-full">
          <Link href={routes.ADMIN.ACADEMY} className="w-full">
            Academy Register List
            <ArrowUpRight size={18} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
