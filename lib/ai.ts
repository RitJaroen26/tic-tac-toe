import { checkWinner } from "@/utils/checkWinner";

export function GetAIMove(board: string[]): number {
  // const empty: number[] = board
  //     .map((v, i) => (v === "" ? i : -1))
  //     .filter((i): i is number => i !== -1);

  // if (empty.length === 0) return -1;

  // for (const i of empty) {
  //     const copy = [...board];
  //     copy[i] = "O";
  //     if (checkWinner(copy).winner === "O") return i;
  // }

  // for (const i of empty) {
  //     const copy = [...board];
  //     copy[i] = "X";
  //     if (checkWinner(copy).winner === "X") return i;
  // }

  // const preferredMoves = [4, 0, 2, 6, 8, 1, 3, 5, 7];
  // for (const i of preferredMoves) {
  //     if (empty.includes(i)) return i;
  // }

  // return empty[Math.floor(Math.random() * empty.length)];

  const empty: number[] = board
    .map((v, i) => (v === "" ? i : -1))
    .filter((i): i is number => i !== -1);
  if (empty.length === 0) return -1;
  for (const i of empty) {
    const copy = [...board];
    copy[i] = "O";
    if (checkWinner(copy).winner === "O") return i;
  }
  for (const i of empty) {
    const copy = [...board];
    copy[i] = "X";
    if (checkWinner(copy).winner === "X") return i;
  }
  if (empty.includes(4)) return 4;
  return empty[Math.floor(Math.random() * empty.length)];
}
