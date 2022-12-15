import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import CardLayout from "./CardLayout";
import FilterDrawer from "./FilterDrawer";

const UserFind: React.FC = () => {
  const miners = [
    {
      id: 1,
      name: "Alex Miller",
      location: "New York, United States",
      certifications: (
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
      ),
    },
    {
      id: 2,
      name: "Thea Chhim",
      location: "Massachusetts, United States",
      certifications: (
        <div className="flex gap-2">
          <div className="border rounded-3xl w-fit text-[#319795] bg-[#B2F5EA] p-1 pl-2 pr-2">
            SOC2
          </div>
          <div className="border rounded-3xl w-fit text-[#3182CE] bg-[#BEE3F8] p-1 pl-2 pr-2">
            HIPPA
          </div>
        </div>
      ),
    },
    {
      id: 3,
      name: "Xiangan He",
      location: "Massachusetts, United States",
      certifications: (
        <div className="flex gap-2">
          <div className="border rounded-3xl w-fit text-[#319795] bg-[#B2F5EA] p-1 pl-2 pr-2">
            SOC2
          </div>
          <div className="border rounded-3xl w-fit text-[#B83280] bg-[#FED7E2] p-1 pl-2 pr-2">
            GDPR
          </div>
        </div>
      ),
    },
  ];
  const [userList, setUserList] =
    React.useState<
      | {
          id: number;
          name: string;
          location: string;
          certifications: JSX.Element;
        }[]
      | undefined
    >(miners);
  const [text, setText] = React.useState("");
  const handleChange = () => {
    const findMiners =
      userList && userList.length > 0
        ? userList.filter((e) => e.name === text)
        : undefined;
    setUserList(findMiners);
  };
  const [showMinerCard, setshowMinerCard] = React.useState(false);

  return (
    <div>
      <div className="flex flex-col ml-auto mr-auto w-1/2">
        <div className="text-6xl pt-12">Search Miners</div>
        <div className="flex max-w-2xl gap-2 pt-12 pb-6">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              // eslint-disable-next-line react/no-children-prop
              children={
                <MagnifyingGlassIcon color="#A0AEC0" className="h-5 w-5" />
              }
            />
            <Input
              placeholder="Miner name or ID"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </InputGroup>
          <Button
            variant="solid"
            disabled={!text}
            onClick={handleChange}
            colorScheme="blue"
          >
            Search
          </Button>
        </div>
      </div>

      {showMinerCard ? (
        <div className="bg-[#F7FAFC] pt-8 h-screen">
          <CardLayout
            minerName={""}
            minerID={""}
            minerWebsite={""}
            minerLocation={""}
            onHandle={() => setshowMinerCard(false)}
          />
        </div>
      ) : (
        <div className="pt-4">
          {userList && userList.length === 0 && (
            <div className="border"> No miners found! :(</div>
          )}

          <div className="bg-[#F7FAFC] pt-8 h-screen">
            <div className="flex gap-2 pb-6  ml-auto mr-auto w-1/2">
              <FilterDrawer />
              <Button
                variant="solid"
                leftIcon={<ArrowDownIcon className="h-4 w-4" />}
                onClick={handleChange}
              >
                Export as CSV
              </Button>
            </div>
            <div className="bg-white rounded-lg border p-4 max-w-4xl divide-y ml-auto mr-auto w-1/2">
              <div className="grid grid-cols-3 font-bold text-sm pb-4">
                <div>Miner</div>
                <div>Location</div>
                <div>Certification</div>
              </div>
              {userList &&
                userList.length > 0 &&
                userList.map((user) => {
                  return (
                    <div
                      key={user.id}
                      onClick={() => setshowMinerCard(true)}
                      className="grid grid-cols-3 pt-4 pb-4 pointer"
                    >
                      <div>{user.name}</div>
                      <div>{user.location}</div>
                      <div>{user.certifications}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserFind;
