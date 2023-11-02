import React from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Show,
  Hide,
  Square,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

function App(props) {
  return (
    <Flex
      m={5}
      p={5}
      h={100}
      border={"1px solid black"}
      justify="space-between"
      overflowX="hidden"
    >
      <Flex align="center">
        <Flex>
          <Text fontSize="1.3rem" color="black" fontWeight={"400"} mr={5}>
            NavBar
          </Text>
        </Flex>
        <Flex gap={2}>
          <Hide below="md">
            <Button bg="none" _hover={{ bg: "none" }}>
              Home
            </Button>
            <Button bg="none" _hover={{ bg: "none" }}>
              Link
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                bg="none"
                _hover={{ bg: "none" }}
                _expanded={{ bg: "none" }}
                rightIcon={<ChevronDownIcon />}
              >
                Dropdown
              </MenuButton>
              <MenuList>
                <MenuItem>A</MenuItem>
                <MenuItem>B</MenuItem>
                <MenuItem borderTop={"1px solid grey"}>C</MenuItem>
              </MenuList>
            </Menu>
            <Button bg="none" _hover={{ bg: "none" }} isDisabled>
              Disabled
            </Button>
          </Hide>
        </Flex>
      </Flex>
      <Flex align="center" gap={2}>
        <Show below="md">
          <Menu>
            <MenuButton as={Button} align="center">
              <HamburgerIcon fontSize={"1.5rem"} />
            </MenuButton>
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>Link</MenuItem>
              <MenuItem>Dropdown</MenuItem>
              <MenuItem>Disabled</MenuItem>
              <MenuItem>Search</MenuItem>
            </MenuList>
          </Menu>
        </Show>
        <Hide below="md">
          <Input borderRadius={10} placeholder="Search" size={"sm"} />
          <Button
            p={5}
            size={"sm"}
            variant="outline"
            leftIcon={<SearchIcon />}
            colorScheme="green"
            _hover={{ bg: "green", color: "white", border: "1px solid green" }}
          >
            Search
          </Button>
        </Hide>
      </Flex>
    </Flex>
  );
}

export default App;
