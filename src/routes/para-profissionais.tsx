import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/para-profissionais")({
  component: ParaProfissionais,
});

function ParaProfissionais() {
  return (
    <div>
      <div className="container-editorial section-y">
      <h1 className="display-2 text-primary">Para Profissionais</h1>
    </div>
    </div>
  );
}