import { Button } from "@/components/Button";

export default async function Asteroids() {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-xl md:text-5xl font-light tracking-[0.1875em] text-center uppercase m-[unset]">
        👾Cuadrazo Asteroids👾
      </h1>

      <div className="p-6">
        <iframe
          id="game"
          className="w-[1240px] h-[720px]"
          src={"./asteroids/TC-Asteroids.html"}
          title="game"
        />
      </div>
      <Button text={"Volver"} route="/games" />
    </div>
  );
}
