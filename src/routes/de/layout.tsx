// With route rewriting, we can use the main layout for all languages
// This file is kept for compatibility but doesn't need any special logic
import { component$ } from "@builder.io/qwik";
import { Slot } from "@builder.io/qwik";

export default component$(() => {
  return <Slot />;
});
