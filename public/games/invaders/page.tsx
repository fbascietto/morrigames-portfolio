import { Button } from "@/components/Button";

export default async function Breakout() {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-xl md:text-5xl font-light tracking-[0.1875em] text-center uppercase m-[unset]">
        👾Cuadrazo Invaders👾
      </h1>

      <div className="p-6">
        <iframe
          id="game"
          className="w-[480px] h-[640px]"
          src={"./invaders/TC_Invaders.html"}
          title="game"
        />
      </div>
      <Button text={"Volver"} route="/games" />
    </div>
  );
}
