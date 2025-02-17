import { Button, Text, VStack, Box } from "@chakra-ui/react";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerRoot,
} from "../components/ui/drawer";
import { useState, useEffect } from "react";
import axios from "axios";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
  
      try {
        const response = await axios.get("http://localhost:3000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
        localStorage.setItem("id",response.data.userId)
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
  
    if (open) fetchProfile();
  }, [open]);
  

  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm">Profile</Button>
      </DrawerTrigger>
      <DrawerContent className="bg-gray-500 p-4">
        <DrawerHeader>
          <DrawerTitle className="text-blue-100 text-xl font-bold">Profile</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          {profile ? (
            <VStack align="start" spacing={4}>
              <Box>
                <Text fontWeight="semibold" color="gray.800">Name:</Text>
                <Text color="gray.100">{profile.name}</Text>
              </Box>
              <Box>
                <Text fontWeight="semibold" color="gray.800">Email:</Text>
                <Text color="gray.100">{profile.email}</Text>
              </Box>
              <Box>
                <Text fontWeight="semibold" color="gray.800">Age:</Text>
                <Text color="gray.100">{profile.age}</Text>
              </Box>
              <Box>
                <Text fontWeight="semibold" color="gray.800">Gender:</Text>
                <Text color="gray.100">{profile.gender}</Text>
              </Box>
              <Box>
                <Text fontWeight="semibold" color="gray.800">Profession:</Text>
                <Text color="gray.100">{profile.profession}</Text>
              </Box>
            </VStack>
          ) : (
            <Text className="text-white">Loading...</Text>
          )}
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline" className="text-black font-bold">Cancel</Button>
          </DrawerActionTrigger>
          
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default Drawer;
