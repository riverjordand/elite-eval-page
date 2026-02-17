import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";

interface GameEvent {
  date: number;
  time: string;
  team: string;
  opponent: string;
  color: string;
}

const teamColors: Record<string, string> = {
  "Varsity": "bg-red-600",
  "Junior Varsity": "bg-orange-500",
  "14U": "bg-purple-600",
  "13U": "bg-cyan-600",
  "LPA Events": "bg-pink-600",
};

const teams = ["All Teams", "Varsity", "Junior Varsity", "14U", "13U"];

const sampleGames: GameEvent[] = [
  { date: 1, time: "12a", team: "Junior Varsity", opponent: "SWWB Pre-Season Classic", color: "bg-orange-500" },
  { date: 3, time: "4p", team: "Junior Varsity", opponent: "Thunderbird", color: "bg-orange-500" },
  { date: 3, time: "5:30p", team: "13U", opponent: "Paladin", color: "bg-cyan-600" },
  { date: 3, time: "7:30p", team: "13U", opponent: "Paladin", color: "bg-cyan-600" },
  { date: 4, time: "5:30p", team: "14U", opponent: "PB Baseball", color: "bg-purple-600" },
  { date: 4, time: "7:30p", team: "14U", opponent: "PB Baseball", color: "bg-purple-600" },
  { date: 5, time: "5:30p", team: "Varsity", opponent: "Centennial HS", color: "bg-red-600" },
  { date: 6, time: "2:15p", team: "Varsity", opponent: "Liberty", color: "bg-red-600" },
  { date: 7, time: "8a", team: "Varsity", opponent: "Basic", color: "bg-red-600" },
  { date: 7, time: "9a", team: "13U", opponent: "Exposure Expos", color: "bg-cyan-600" },
  { date: 7, time: "11:30a", team: "14U", opponent: "Swarm 14U Gold", color: "bg-purple-600" },
  { date: 7, time: "1:30p", team: "13U", opponent: "ONE Shots Gold", color: "bg-cyan-600" },
  { date: 7, time: "1:45p", team: "14U", opponent: "Arizona Monsoon", color: "bg-purple-600" },
  { date: 8, time: "12a", team: "13U", opponent: "USSSA Super Bowl Bash", color: "bg-cyan-600" },
  { date: 8, time: "12a", team: "14U", opponent: "USSSA Super Bowl Bash", color: "bg-purple-600" },
  { date: 10, time: "5:30p", team: "13U", opponent: "Javalinas Baseball 12U", color: "bg-cyan-600" },
  { date: 11, time: "5:30p", team: "14U", opponent: "East Valley Blue Bandits", color: "bg-purple-600" },
  { date: 14, time: "12a", team: "Junior Varsity", opponent: "SWWB Presidents Classic", color: "bg-orange-500" },
  { date: 14, time: "12a", team: "Varsity", opponent: "WCP Presidents Day", color: "bg-red-600" },
  { date: 17, time: "5:30p", team: "13U", opponent: "Game TBD", color: "bg-cyan-600" },
  { date: 18, time: "5:30p", team: "14U", opponent: "Game TBD", color: "bg-purple-600" },
  { date: 21, time: "12a", team: "Varsity", opponent: "CAA Tournament", color: "bg-red-600" },
  { date: 24, time: "5:30p", team: "13U", opponent: "Game TBD", color: "bg-cyan-600" },
  { date: 25, time: "5:30p", team: "14U", opponent: "Game TBD", color: "bg-purple-600" },
  { date: 28, time: "10a", team: "Varsity", opponent: "CAA Doubleheader", color: "bg-red-600" },
];

const DAYS_FULL = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const DAYS_SHORT = ["S", "M", "T", "W", "T", "F", "S"];

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1));
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const isMobile = useIsMobile();
  const [viewMode, setViewMode] = useState<"calendar" | "list">(isMobile ? "list" : "calendar");

  useEffect(() => {
    setViewMode(isMobile ? "list" : "calendar");
  }, [isMobile]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const filteredGames = sampleGames.filter(
    (g) => selectedTeam === "All Teams" || g.team === selectedTeam
  );

  const getGamesForDay = (day: number) => filteredGames.filter((g) => g.date === day);

  // Build calendar grid
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  // List view: group games by date
  const gamesByDate = filteredGames.reduce<Record<number, GameEvent[]>>((acc, g) => {
    if (!acc[g.date]) acc[g.date] = [];
    acc[g.date].push(g);
    return acc;
  }, {});
  const sortedDates = Object.keys(gamesByDate).map(Number).sort((a, b) => a - b);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        <div className="relative h-36 md:h-64 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card via-background/80 to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[160px]" />
          <h1 className="relative font-bebas text-fluid-5xl uppercase text-center leading-none">
            Game <span className="text-primary">Schedule</span>
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-fluid-container-px pb-fluid-xl">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 md:mb-6">
          <Select value={selectedTeam} onValueChange={setSelectedTeam}>
            <SelectTrigger className="w-[150px] sm:w-[180px] h-9 font-oswald text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {teams.map((t) => (
                <SelectItem key={t} value={t} className="font-oswald">{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={prevMonth} className="h-8 w-8">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h2 className="font-bebas text-lg sm:text-2xl md:text-3xl uppercase tracking-wide min-w-[140px] text-center">
              {monthName} {year}
            </h2>
            <Button variant="outline" size="icon" onClick={nextMonth} className="h-8 w-8">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* View toggle - mobile shows list by default */}
          <div className="flex gap-1 bg-card/60 rounded-md p-0.5 border border-border/30">
            <button
              onClick={() => setViewMode("list")}
              className={`font-bebas text-xs sm:text-sm px-3 py-1.5 rounded transition-colors ${
                viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              List
            </button>
            <button
              onClick={() => setViewMode("calendar")}
              className={`font-bebas text-xs sm:text-sm px-3 py-1.5 rounded transition-colors ${
                viewMode === "calendar" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Calendar
            </button>
          </div>
        </div>

        {/* List View */}
        {viewMode === "list" && (
          <div className="space-y-2">
            {sortedDates.length === 0 && (
              <p className="text-center text-muted-foreground font-oswald py-12">No games scheduled this month.</p>
            )}
            {sortedDates.map((date) => (
              <div key={date} className="bg-card/40 border border-border/20 rounded-lg overflow-hidden">
                <div className="bg-card/80 px-4 py-2 border-b border-border/20">
                  <span className="font-bebas text-base md:text-lg text-foreground">
                    {monthName} {date}, {year}
                  </span>
                </div>
                <div className="divide-y divide-border/10">
                  {gamesByDate[date].map((game, gi) => (
                    <div key={gi} className="flex items-center gap-3 px-4 py-3">
                      <div className={`w-1.5 h-10 rounded-full ${game.color} flex-shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <p className="font-oswald text-sm md:text-base text-foreground truncate">
                          {game.team} — LPA vs {game.opponent}
                        </p>
                        <p className="font-oswald text-xs text-muted-foreground">{game.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Calendar View */}
        {viewMode === "calendar" && (
          <>
            <div className="border border-border/40 rounded-lg overflow-x-auto">
              <div className="min-w-[500px]">
                {/* Day Headers */}
                <div className="grid grid-cols-7 bg-card/60">
                  {DAYS_FULL.map((day, i) => (
                    <div key={day} className="py-2 text-center font-bebas text-xs md:text-base text-muted-foreground uppercase tracking-wider border-b border-border/30">
                      <span className="hidden sm:inline">{day}</span>
                      <span className="sm:hidden">{DAYS_SHORT[i]}</span>
                    </div>
                  ))}
                </div>

                {/* Weeks */}
                <div className="grid grid-cols-7">
                  {cells.map((day, i) => {
                    const games = day ? getGamesForDay(day) : [];
                    return (
                      <div
                        key={i}
                        className={`min-h-[60px] md:min-h-[120px] border-b border-r border-border/20 p-0.5 md:p-2 ${
                          day ? "bg-background" : "bg-card/20"
                        }`}
                      >
                        {day && (
                          <>
                            <span className="font-bebas text-xs md:text-base text-foreground/70">{day}</span>
                            <div className="mt-0.5 space-y-0.5">
                              {games.slice(0, 2).map((game, gi) => (
                                <div
                                  key={gi}
                                  className={`${game.color} rounded px-0.5 md:px-2 py-0.5 text-white`}
                                >
                                  <p className="font-oswald text-[7px] md:text-xs leading-tight truncate">
                                    vs {game.opponent}
                                  </p>
                                </div>
                              ))}
                              {games.length > 2 && (
                                <p className="font-oswald text-[7px] md:text-xs text-muted-foreground text-center">
                                  +{games.length - 2}
                                </p>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              {Object.entries(teamColors).map(([team, color]) => (
                <div key={team} className="flex items-center gap-1.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
                  <span className="font-oswald text-[10px] md:text-sm text-muted-foreground">{team}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <FooterSection />
    </div>
  );
};

export default Schedule;
