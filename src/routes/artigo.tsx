import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/artigo")({
  component: Artigo,
});

function Artigo() {
  return (
    <div className="container-editorial section-y">
      <h1 className="display-2 text-primary">Artigo</h1>
    </div>
  );
}