/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export type GameState = {
  players: Record<string, Player>;
  orbs: Record<string, Orb>;
  leaderboard: LeaderboardEntry[];
};

export type PlayerState = 'alive' | 'dead' | 'spectating';

export type Player = {
  id: string;
  name: string;
  color: string;
  segments: { x: number; y: number }[];
  score: number;
  isBoosting: boolean;
  state: PlayerState;
  currentAngle: number;
  inputs: { left: boolean; right: boolean; boost: boolean };
  specialTimeout: number; // Time remaining for special effect
};

export type Orb = {
  id: string;
  x: number;
  y: number;
  value: number;
  color: string;
  type: 'normal' | 'special';
};

export type LeaderboardEntry = {
  id: string;
  name: string;
  score: number;
  color: string;
};
