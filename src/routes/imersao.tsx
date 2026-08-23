import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/imersao")({
  component: Imersao,
});

function Imersao() {
  return (
    <div className="container-editorial section-y">
      <h1 className="display-2 text-primary">Imersão</h1>
    </div>
  );
}