interface Team {
  id: number;
  name: string;
  image: string;
}

interface Run {
  ball: number;
  run: number;
}

interface Inning {
  team: Team;
  runs: Run[];
  totalRuns: number;
}

export interface Match {
  id: string;
  team1: string;
  team2: string;
  tossWinner: string;
  matchWinner: string;
}

export interface MatchDetails extends Match {
  innings: Inning[];
}

export interface MatchInterface {
  id: string;
  tossWinner: Team;
  team1: Team;
  team2: Team;
  innings: Inning[];
  matchWinner: string;
}
