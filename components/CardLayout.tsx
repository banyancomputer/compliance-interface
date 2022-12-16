import Link from "next/link";
import React from "react";
import {
  ArrowUpRightIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@chakra-ui/react";

type Props = {
  minerName: string;
  minerID: string;
  minerWebsite: string;
  minerLocation: string;
  onHandle?: () => void;
};
const CardLayout = ({
  minerName,
  minerID,
  minerWebsite,
  minerLocation,
  onHandle,
}: Props) => {
  return (
    <div className="ml-auto mr-auto w-1/2">
      <div className="pb-4">
        <Button
          variant="solid"
          onClick={onHandle}
          leftIcon={<ArrowLeftIcon className="h-3 w-3" />}
        >
          Back
        </Button>
      </div>
      <div className="bg-white rounded-lg border p-3 text-black max-w-2xl pb-6">
        <div className="flex flex-row gap-12 border-b items-center pt-4 pb-4">
          <div className="flex gap-2">
            <div className="text-4xl">Alex Miller</div>
            <div className="text-[#808080] text-4xl">ID:f01234</div>
          </div>

          <Button
            variant="outline"
            rightIcon={<ArrowUpRightIcon className="w-3 h-3 text-[#2D3748]" />}
          >
            Miner&apos;s Website
          </Button>
        </div>
        <div className="text-sm font-medium text-[#808080] pt-12">LOCATION</div>
        <div className="text-2xl">New York, United States</div>
        <div className="text-sm font-medium text-[#808080] pt-12">
          Certifications
        </div>
        <div className="flex gap-12 border-t border-b pt-2 pb-2 max-w-2xl items-center">
          <div className="flex gap-2">
            <div className="border rounded-3xl w-fit text-[#319795] bg-[#B2F5EA] p-1 pl-2 pr-2">
              SOC2
            </div>
            <div className="border rounded-3xl w-fit text-[#3182CE] bg-[#BEE3F8] p-1 pl-2 pr-2">
              HIPPA
            </div>
            <div className="border rounded-3xl w-fit text-[#B83280] bg-[#FED7E2] p-1 pl-2 pr-2">
              GDPR
            </div>
          </div>
          <Button
            variant="solid"
            rightIcon={<ArrowDownIcon className="w-3 h-3 text-[#2D3748]" />}
          >
            Download All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
