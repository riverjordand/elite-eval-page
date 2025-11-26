import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { format, startOfWeek, addDays, isSameDay, addWeeks, subWeeks } from "date-fns";

interface Appointment {
  id: string;
  parent_name: string;
  player_name: string;
  appointment_date: string;
  phone: string;
  email: string;
}

interface WeeklyCalendarProps {
  appointments: Appointment[];
}

const WeeklyCalendar = ({ appointments }: WeeklyCalendarProps) => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const weekStart = startOfWeek(currentWeek, { weekStartsOn: 0 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const timeSlots = Array.from({ length: 13 }, (_, i) => i + 8); // 8 AM to 8 PM

  const appointmentsByDay = useMemo(() => {
    return appointments.reduce((acc, apt) => {
      if (apt.appointment_date) {
        const date = new Date(apt.appointment_date);
        const dayKey = format(date, "yyyy-MM-dd");
        if (!acc[dayKey]) acc[dayKey] = [];
        acc[dayKey].push(apt);
      }
      return acc;
    }, {} as Record<string, Appointment[]>);
  }, [appointments]);

  const getAppointmentsForSlot = (day: Date, hour: number) => {
    const dayKey = format(day, "yyyy-MM-dd");
    const dayAppointments = appointmentsByDay[dayKey] || [];
    
    return dayAppointments.filter((apt) => {
      const aptDate = new Date(apt.appointment_date);
      const aptHour = aptDate.getHours();
      return aptHour === hour;
    });
  };

  const goToPreviousWeek = () => setCurrentWeek(subWeeks(currentWeek, 1));
  const goToNextWeek = () => setCurrentWeek(addWeeks(currentWeek, 1));
  const goToToday = () => setCurrentWeek(new Date());

  const isToday = (day: Date) => isSameDay(day, new Date());

  return (
    <div className="bg-card border-2 border-border rounded-xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="px-6 py-5 border-b-2 border-border bg-secondary/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CalendarIcon className="w-6 h-6 text-primary" />
            <div>
              <h2 className="text-2xl font-bebas font-bold uppercase tracking-wide">
                Weekly Schedule
              </h2>
              <p className="text-sm text-muted-foreground font-oswald mt-1">
                {format(weekStart, "MMMM d")} - {format(addDays(weekStart, 6), "MMMM d, yyyy")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPreviousWeek}
              className="font-oswald"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={goToToday}
              className="font-oswald"
            >
              Today
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={goToNextWeek}
              className="font-oswald"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          {/* Day Headers */}
          <div className="grid grid-cols-8 border-b-2 border-border bg-secondary/20">
            <div className="p-3 font-bebas text-sm uppercase tracking-wider">Time</div>
            {weekDays.map((day) => (
              <div
                key={day.toISOString()}
                className={`p-3 text-center font-bebas text-sm uppercase tracking-wider ${
                  isToday(day) ? "bg-primary/10 text-primary" : ""
                }`}
              >
                <div className="font-bold">{format(day, "EEE")}</div>
                <div className={`text-lg ${isToday(day) ? "font-black" : ""}`}>
                  {format(day, "d")}
                </div>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          <div className="divide-y divide-border">
            {timeSlots.map((hour) => (
              <div key={hour} className="grid grid-cols-8 min-h-[80px]">
                {/* Time Label */}
                <div className="p-3 text-sm font-oswald text-muted-foreground border-r border-border bg-secondary/10">
                  {format(new Date().setHours(hour, 0, 0, 0), "h:mm a")}
                </div>

                {/* Day Cells */}
                {weekDays.map((day) => {
                  const appointments = getAppointmentsForSlot(day, hour);
                  return (
                    <div
                      key={`${day.toISOString()}-${hour}`}
                      className={`p-2 border-r border-border relative ${
                        isToday(day) ? "bg-primary/5" : "bg-background"
                      } hover:bg-secondary/30 transition-colors`}
                    >
                      {appointments.map((apt) => (
                        <div
                          key={apt.id}
                          className="bg-primary text-primary-foreground rounded-lg p-2 mb-2 text-xs shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <div className="font-oswald font-bold">
                            {format(new Date(apt.appointment_date), "h:mm a")}
                          </div>
                          <div className="font-oswald font-semibold mt-1">
                            {apt.player_name}
                          </div>
                          <div className="font-oswald text-[10px] opacity-90 mt-0.5">
                            {apt.parent_name}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="px-6 py-4 border-t-2 border-border bg-secondary/20">
        <div className="flex items-center gap-4 text-xs font-oswald text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded"></div>
            <span>Scheduled Evaluation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary/10 rounded"></div>
            <span>Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCalendar;