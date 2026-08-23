import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contato")({
  component: Contato,
});

function Contato() {
  return (
    <div className="container-editorial section-y">
      <h1 className="display-2 text-primary">Contato</h1>
    </div>
  );
}