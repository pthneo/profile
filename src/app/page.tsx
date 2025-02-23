import { Avatar, Container, Flex, Grid, GridItem, Heading, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxWidth="container.2xl" centerContent padding={12}>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={1} hideBelow="md">
          <Flex direction="column">
            <Flex direction="row" alignItems={["center"]}>
              <Avatar.Root size="2xl">
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="https://bit.ly/sage-adebayo" />
              </Avatar.Root>
              <Heading size="2xl" paddingLeft={4}>Ben Schenk</Heading>
            </Flex>
            <Flex direction="column" paddingTop={8} gap={4}>
              <Link href="/about">About Me</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/hobbies">Hobbies</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem colSpan={3} fill="bg">
          <Link href="/projects">Blog</Link>
        </GridItem>
      </Grid>
    </Container>
  );
}
