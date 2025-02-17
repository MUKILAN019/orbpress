import { Button, Input, Text, Flex } from "@chakra-ui/react";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "../components/ui/popover";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
const PopOver = () => {
  const [content, setContent] = useState("");
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <Button size="sm" variant="solid" colorScheme="orange" borderRadius="md">
          Explore
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-gray-600 shadow-lg rounded-lg p-4">
        <PopoverArrow />
        <PopoverBody>
          <PopoverTitle fontWeight="medium" className="text-orange-700 text-lg mb-2">
            Search Blog
          </PopoverTitle>
          <Text my={4} className="text-blue-500 font-bold">
            Explore other blogs and find the best content for you.
          </Text>
          <Flex>
            <Input
              placeholder="Search"
              size="sm"
              className="border text-white font-semibold"
            />
            <Button ml={2} colorScheme="blue" size="sm" borderRadius="md">
              <FaSearch />
            </Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  );
};

export default PopOver;
