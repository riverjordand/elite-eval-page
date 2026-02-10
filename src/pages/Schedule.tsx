import { useState } from "react";
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

// Sample schedule data for February 2026
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

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)); // Feb 2026
  const [selectedTeam, setSelectedTeam] = useState("All Teams");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const goToday = () => setCurrentDate(new Date());

  const filteredGames = sampleGames.filter(
    (g) => selectedTeam === "All Teams" || g.team === selectedTeam
  );

  const getGamesForDay = (day: number) => filteredGames.filter((g) => g.date === day);

  // Build calendar grid
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        <div className="relative h-48 md:h-64 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card via-background/80 to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[160px]" />
          <h1 className="relative font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-center leading-none">
            Game <span className="text-primary">Schedule</span>
          </h1>
        </div>
      </section>

      {/* Calendar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 pb-16">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Select value={selectedTeam} onValueChange={setSelectedTeam}>
              <SelectTrigger className="w-[180px] h-10 font-oswald">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {teams.map((t) => (
                  <SelectItem key={t} value={t} className="font-oswald">{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" onClick={prevMonth} className="h-9 w-9">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextMonth} className="h-9 w-9">
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" onClick={goToday} className="h-9 font-oswald text-sm px-4">
              Today
            </Button>
          </div>

          <h2 className="font-bebas text-2xl md:text-3xl uppercase tracking-wide">
            {monthName} {year}
          </h2>
        </div>

        {/* Calendar Grid */}
        <div className="border border-border/40 rounded-lg overflow-hidden">
          {/* Day Headers */}
          <div className="grid grid-cols-7 bg-card/60">
            {DAYS.map((day) => (
              <div key={day} className="py-2 text-center font-bebas text-sm md:text-base text-muted-foreground uppercase tracking-wider border-b border-border/30">
                {day}
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
                  className={`min-h-[80px] md:min-h-[120px] border-b border-r border-border/20 p-1 md:p-2 ${
                    day ? "bg-background" : "bg-card/20"
                  }`}
                >
                  {day && (
                    <>
                      <span className="font-bebas text-sm md:text-base text-foreground/70">{day}</span>
                      <div className="mt-1 space-y-1">
                        {games.slice(0, 3).map((game, gi) => (
                          <div
                            key={gi}
                            className={`${game.color} rounded px-1 md:px-2 py-0.5 md:py-1 text-white cursor-default`}
                          >
                            <p className="font-oswald text-[9px] md:text-xs leading-tight truncate">
                              <span className="hidden md:inline">{game.team} — </span>LPA vs {game.opponent}
                            </p>
                            <p className="font-oswald text-[8px] md:text-[10px] opacity-80">{game.time}</p>
                          </div>
                        ))}
                        {games.length > 3 && (
                          <p className="font-oswald text-[9px] md:text-xs text-muted-foreground text-center">
                            +{games.length - 3} more
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

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center">
          {Object.entries(teamColors).map(([team, color]) => (
            <div key={team} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded ${color}`} />
              <span className="font-oswald text-xs md:text-sm text-muted-foreground">{team}</span>
            </div>
          ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Schedule;
