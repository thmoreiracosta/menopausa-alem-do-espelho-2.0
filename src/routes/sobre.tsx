import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
});

function Sobre() {
  return (
    <div className="container-editorial section-y">
      <h1 className="display-2 text-primary">Sobre</h1>
    </div>
  );
}