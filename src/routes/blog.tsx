import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: Blog,
});

function Blog() {
  return (
    <div className="container-editorial section-y">
      <h1 className="display-2 text-primary">Blog</h1>
    </div>
  );
}