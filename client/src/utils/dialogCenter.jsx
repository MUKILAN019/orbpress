import { Button, HStack } from "@chakra-ui/react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

const Dialog = () => {
  return (
    <HStack justify="center">
      <DialogRoot placement="center" motionPreset="slide-in-bottom">
        <DialogTrigger asChild>
          <Button
            variant="solid"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-40 font-bold text-white shadow-md hover:shadow-lg"
          >
            Create
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-gray-400 p-6 rounded-lg shadow-lg h-3/4 w-full">
          <DialogHeader>
            <DialogTitle className="text-gray-200 text-lg font-semibold ">
              Create Blog
            </DialogTitle>
          </DialogHeader>
          <DialogBody>
          <textarea rows="5" cols="50" placeholder="Blog..." className="w-full h-full"/>
          </DialogBody>
          <DialogFooter className="flex justify-end gap-3">
            <DialogActionTrigger asChild>
              <Button variant="outline" className="border-gray-700 text-gray-600 hover:bg-gray-100">
                Cancel
              </Button>
            </DialogActionTrigger>
            <Button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Save
            </Button>
            <Button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Post
            </Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </HStack>
  );
};

export default Dialog;
