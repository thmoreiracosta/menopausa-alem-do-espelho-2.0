import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ebook")({
  component: Ebook,
});

function Ebook() {
  return (
    <div className="container-editorial section-y">
      <h1 className="display-2 text-primary">E-book</h1>
    </div>
  );
}