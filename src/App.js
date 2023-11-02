import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  SimpleGrid,
  Heading,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      {/*Card*30>CardHeader>Heading[size="md"]>lorem2^^CardBody>lorem15^CardFooter[justify="space-between"][flexWrap="wrap"][gap={2}]>Button[flex={1}]*2>lorem1*/}
      <SimpleGrid gap={3} columns={{ base: 1, md: 3, xl: 6 }}>
        <Card>
          <CardHeader>
            <Heading size="md">Lorem ipsum.</Heading>
          </CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            accusantium fugiat laboriosam magnam, numquam saepe?
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>
              <AddIcon border={"1px solid black"} borderRadius={10} p={"1px"} />
              Lorem.
            </Button>
            <Button flex={1}>Veritatis.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Sit, totam.</Heading>
          </CardHeader>
          <CardBody>
            Eveniet, obcaecati, repellat. Ab dolorem magnam quia veniam vero!
            Inventore mollitia neque quidem quod vitae.
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Assumenda!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Debitis, veniam!</Heading>
          </CardHeader>
          <CardBody>
            Alias aliquam aspernatur beatae consequatur explicabo ipsam iusto
            nobis quam qui quidem, quod sint voluptas.
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Accusamus.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Enim, sunt.</Heading>
          </CardHeader>
          <CardBody>
            Culpa deleniti, eos porro quibusdam quisquam velit. Dolorum earum
            mollitia natus porro quod tempore vitae.
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Qui.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Qui, repellendus.</Heading>
          </CardHeader>
          <CardBody>
            Alias aspernatur culpa incidunt ipsam itaque magni minus nesciunt,
            officiis perspiciatis, quae quaerat rem repellendus.
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Cumque.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Quidem, quod.</Heading>
          </CardHeader>
          <CardBody>
            Accusantium aspernatur dolores laborum nesciunt provident quisquam
            recusandae repellat. Ad dolorem mollitia non quia sequi.
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Aperiam!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Minus, voluptate!</Heading>
          </CardHeader>
          <CardBody>
            Culpa debitis, dignissimos doloremque dolores doloribus et explicabo
            iure maxime molestiae quasi quia similique. Molestiae.
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Commodi?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Officiis, quod!</Heading>
          </CardHeader>
          <CardBody>
            Atque dolor doloribus facere libero quis repellendus similique
            temporibus? Ad, aliquid, illo. Doloribus odit, sunt.
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Sed!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Facilis, laborum?</Heading>
          </CardHeader>
          <CardBody>
            Architecto aspernatur doloremque et eveniet, molestiae nobis quae
            recusandae repudiandae tempore tenetur voluptatem voluptatibus,
            voluptatum?
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Optio?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Amet, expedita.</Heading>
          </CardHeader>
          <CardBody>
            Asperiores assumenda corporis dolor dolorem dolorum eligendi, ipsa
            laudantium maxime, omnis porro, quibusdam repellendus vitae.
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Mollitia.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Ipsam, sequi.</Heading>
          </CardHeader>
          <CardBody>
            Ab amet cumque, enim laudantium maxime perspiciatis praesentium quod
            repellat repudiandae sed velit vero voluptatibus?
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Quod.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Aspernatur, iste?</Heading>
          </CardHeader>
          <CardBody>
            Atque distinctio doloribus ex facere, molestias numquam officia
            pariatur quo quos repudiandae saepe sed similique!
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Ex?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Sunt, voluptas?</Heading>
          </CardHeader>
          <CardBody>
            Consectetur explicabo libero minima ut? Expedita iste minus
            necessitatibus officiis placeat quia rem repudiandae, tempore!
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Sed.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Corporis, tempore.</Heading>
          </CardHeader>
          <CardBody>
            Enim esse magni nam quis quo recusandae rem vel vitae? A commodi
            maiores possimus voluptate?
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Quis?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Omnis, qui.</Heading>
          </CardHeader>
          <CardBody>
            Amet atque distinctio et exercitationem, hic ipsum nobis provident
            quia! Aspernatur commodi delectus nesciunt tenetur!
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Doloribus.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Dolores, suscipit.</Heading>
          </CardHeader>
          <CardBody>
            Adipisci dignissimos iste odio. Amet aperiam aspernatur dolor,
            expedita iure maxime neque nobis unde. Doloremque.
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Velit!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Placeat, repellendus.</Heading>
          </CardHeader>
          <CardBody>
            Assumenda blanditiis consectetur eaque facere fugit, labore minima
            nemo provident qui quod repellendus rerum unde!
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Expedita?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Nulla, officiis!</Heading>
          </CardHeader>
          <CardBody>
            A ad, amet, at est eum ex explicabo facilis harum hic nisi quae sed
            ullam?
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Assumenda.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Error, sed?</Heading>
          </CardHeader>
          <CardBody>
            Commodi eos unde veritatis! Cupiditate dolorem maiores numquam
            recusandae sequi. Adipisci at autem quidem voluptatibus.
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Provident?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Fugit, iste?</Heading>
          </CardHeader>
          <CardBody>
            Adipisci asperiores cum delectus dolores iusto labore officia optio
            perferendis quas, quo sequi sit soluta!
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Cupiditate!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Eius, rerum.</Heading>
          </CardHeader>
          <CardBody>
            Asperiores aut consectetur cum eius harum in, ipsa libero magni,
            modi perferendis quam, sunt veritatis!
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Excepturi.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Non, ut?</Heading>
          </CardHeader>
          <CardBody>
            Expedita, ipsam, voluptatibus. Corporis eum fugiat itaque.
            Consequuntur distinctio dolores ex natus praesentium tempora velit?
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Incidunt.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Asperiores, eveniet?</Heading>
          </CardHeader>
          <CardBody>
            A autem dolorem earum exercitationem ipsa laudantium magnam modi,
            quae quidem quo reiciendis vel. Vel.
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Ex.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Accusantium, asperiores?</Heading>
          </CardHeader>
          <CardBody>
            A, accusamus aliquam earum, eos est, facere maiores molestias nam
            nostrum obcaecati quas totam! Aliquam.
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Qui.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">A, pariatur?</Heading>
          </CardHeader>
          <CardBody>
            Accusamus autem deserunt doloremque dolores enim excepturi expedita
            id nulla perferendis, quam? Accusantium, at, ex!
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Esse.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Dolor, iusto.</Heading>
          </CardHeader>
          <CardBody>
            Accusantium animi ducimus eius expedita facere inventore laborum
            magnam nemo, obcaecati optio quis sequi totam?
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Ratione.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Fuga, recusandae!</Heading>
          </CardHeader>
          <CardBody>
            A, architecto, consectetur deleniti doloremque et explicabo harum in
            laborum nam odit officia, quae quas!
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Hic!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Facere, perferendis.</Heading>
          </CardHeader>
          <CardBody>
            Debitis ea expedita impedit minus nulla, omnis quod reprehenderit
            repudiandae, saepe tempore unde, velit vero!
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Adipisci?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Quae, voluptate.</Heading>
          </CardHeader>
          <CardBody>
            Ad aperiam consequatur doloremque eius enim eos eveniet, nobis
            quaerat quasi reiciendis reprehenderit repudiandae, rerum!
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Omnis.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Nam, nulla!</Heading>
          </CardHeader>
          <CardBody>
            Accusamus adipisci cumque dicta dignissimos dolores molestiae nulla
            pariatur provident quos reprehenderit sed, totam unde?
          </CardBody>
          <CardFooter justify="space-between" flexWrap="wrap" gap={2}>
            <Button flex={1}>Lorem.</Button>
            <Button flex={1}>Voluptates.</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
}

export default App;
