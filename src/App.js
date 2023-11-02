import { Button, useToast } from "@chakra-ui/react";

function App() {
  const toast = useToast();
  return (
    <>
      <Button
        onClick={() =>
          toast({
            title: "Note",
            description: "By pressing the buttons, you will create an account",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        What is This?
      </Button>
      <Button
        onClick={() =>
          toast({
            title: "Account Created",
            description: "Account has been sucessfully created",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Create Account(sucess)
      </Button>
      <Button
        onClick={() =>
          toast({
            title: "Account Created",
            description: "Failed to Create an Account",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Create Account(fail)
      </Button>
    </>
  );
}

export default App;
