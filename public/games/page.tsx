import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

const pongDescription =
  'Pong is one of the first computer games that ever created, this simple "tennis like" game features two paddles and a ball, the goal is to defeat your opponent by scoring more goals. \
   This implementation is made with the Godot engine in one afternoon with the aim of learning the ropes of the Engine.';

const arkDescription =
  "Arkanoid is a 1986 block breaker arcade game. Controlling a paddle-like craft, the player is tasked with clearing a formation of colorful blocks by deflecting a \
  ball towards it without letting the ball leave the bottom edge of the playfield. This Godot implementation has only a few simple levels and 3 power ups.";

const spaceInvadersDescription =
  "Space Invaders is a fixed shooter in which the player moves a laser cannon horizontally across the bottom of the screen and fires at aliens overhead.  \
  The goal is simple: to eliminate all of the aliens by shooting them.";

const asteroidsDescription =
  "Asteroids is a space-themed multidirectional shooter arcade video released in November 1979 by Atari, Inc. \
  The player controls a single spaceship in an asteroid field which is periodically traversed by flying saucers.";

export default async function Games() {
  return (
    <div className="flex flex-col items-center p-12">
      <h1 className="text-xl md:text-5xl font-light tracking-[0.1875em] text-center uppercase m-[unset]">
        👾Cuadrazo Games👾
      </h1>

      <Card
        topic="Games"
        title="Pong"
        description={pongDescription}
        image="/assets/pong.jpg"
        linkText="Go to game"
        linkRoute="/games/pong"
      />
      <Card
        topic="Games"
        title="Arkanoid"
        description={arkDescription}
        image="/assets/arkanoid.jpg"
        linkText="Go to game"
        linkRoute="/games/arkanoid"
      />

      <Card
        topic="Games"
        title="Space Invaders"
        description={spaceInvadersDescription}
        image="/assets/spaceinvaders.jpg"
        linkText="Go to game"
        linkRoute="/games/invaders"
      />
      <Card
        topic="Games"
        title="Asteroids"
        description={asteroidsDescription}
        image="/assets/asteroids.jpg"
        linkText="Go to game"
        linkRoute="/games/asteroids"
      />
      <Button text={"Volver"} route="/" />
    </div>
  );
}
