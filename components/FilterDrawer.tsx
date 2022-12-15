import React from "react";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Checkbox,
  Stack,
  Switch,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

function FilterDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant="solid"
        leftIcon={<AdjustmentsHorizontalIcon className="h-4 w-4" />}
        onClick={onOpen}
        colorScheme="blue"
      >
        Filter
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <div className="text-4xl pl-4 border-b pt-12 pb-8">Filters</div>
          <DrawerBody>
            <Stack mt={1} spacing={1} className="border-b pt-3 pb-5">
              <p className="font-bold text-sm pb-2">Certification Types</p>
              <Checkbox>HIPAA</Checkbox>
              <Checkbox>SOC2</Checkbox>
              <Checkbox>GDPR</Checkbox>
            </Stack>
            <Stack mt={1} spacing={1} className="border-b pt-3 pb-5">
              <p className="font-bold text-sm">Location</p>
              <Checkbox>Africa and Middle East</Checkbox>
              <Checkbox>Asia</Checkbox>
              <Checkbox>Australia and Oceania</Checkbox>
              <Checkbox>Central America and Caribbean</Checkbox>
              <Checkbox>Europe</Checkbox>
              <Checkbox>Northern America</Checkbox>
              <Checkbox>South America</Checkbox>
            </Stack>
            <div className="border-b pt-3 pb-5">
              Has retrieval <Switch size="md" className="" />
            </div>
            <div className="border-b pt-3 pb-5">
              <p className="pb-4"> Storage Size</p>
              <div className="flex items-center">
                <InputGroup>
                  <Input type="tel" placeholder="0" />
                  <InputRightAddon children="TB" />
                </InputGroup>
                <div>-</div>
                <InputGroup>
                  <Input type="tel" placeholder="100000" />
                  <InputRightAddon children="TB" />
                </InputGroup>
              </div>
            </div>
            <Stack mt={1} spacing={1} className="border-b pt-3 pb-5">
              <p className="font-bold text-sm">Data Tier Center</p>
              <Checkbox>l</Checkbox>
              <Checkbox>ll</Checkbox>
              <Checkbox>lll</Checkbox>
              <Checkbox>lV</Checkbox>
              <Checkbox>V</Checkbox>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default FilterDrawer;
