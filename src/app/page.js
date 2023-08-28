"use client";
import { Footer } from "@/components/Footer";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        mt="xs"
        label="Your review"
        placeholder="Do you enjoy eating?"
        minRows={3}
      ></Textarea>
      <Button mt="xs" color="orange">
        Submit Review
      </Button>
      <Divider my="sm" />
      <Group position="center">
        {" "}
        <Title order={4}>Elon Musk</Title> <Rating value={5} readOnly></Rating>
      </Group>
      <Text align="center" c="gray">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />
      <Group position="center">
        {" "}
        <Title order={4}>Mark Zuck</Title> <Rating value={4} readOnly></Rating>
      </Group>
      <Text align="center" c="gray">
        My favourite part is pepperoni
      </Text>
      <Pagination
        total={20}
        position="center"
        color="orange"
        mt="md"
      ></Pagination>
      <Footer></Footer>
    </Container>
  );
}
