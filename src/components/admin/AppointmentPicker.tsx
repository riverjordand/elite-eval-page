import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface AppointmentPickerProps {
  value: string | null;
  onSelect: (date: Date | undefined) => void;
}

const AppointmentPicker = ({ value, onSelect }: AppointmentPickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined
  );
  const [selectedHour, setSelectedHour] = useState<string>(
    value ? format(new Date(value), "h") : "9"
  );
  const [selectedMinute, setSelectedMinute] = useState<string>(
    value ? format(new Date(value), "mm") : "00"
  );
  const [selectedPeriod, setSelectedPeriod] = useState<string>(
    value ? format(new Date(value), "a") : "AM"
  );

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      applyDateTime(date, selectedHour, selectedMinute, selectedPeriod);
    }
  };

  const applyDateTime = (
    date: Date,
    hour: string,
    minute: string,
    period: string
  ) => {
    const newDate = new Date(date);
    let hours = parseInt(hour);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    
    newDate.setHours(hours, parseInt(minute), 0, 0);
    onSelect(newDate);
  };

  const handleTimeChange = (hour: string, minute: string, period: string) => {
    setSelectedHour(hour);
    setSelectedMinute(minute);
    setSelectedPeriod(period);
    
    if (selectedDate) {
      applyDateTime(selectedDate, hour, minute, period);
    }
  };

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const minutes = ["00", "15", "30", "45"];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[220px] justify-start text-left font-oswald text-xs",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? (
            format(new Date(value), "MMM d, yyyy 'at' h:mm a")
          ) : (
            <span>Set appointment</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          initialFocus
          className={cn("p-3 pointer-events-auto")}
          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
        />
        
        {selectedDate && (
          <div className="p-4 border-t border-border">
            <p className="text-sm font-oswald font-semibold mb-3 uppercase tracking-wide">
              Select Time
            </p>
            <div className="flex items-center gap-2">
              <Select
                value={selectedHour}
                onValueChange={(val) =>
                  handleTimeChange(val, selectedMinute, selectedPeriod)
                }
              >
                <SelectTrigger className="w-[70px] font-oswald">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {hours.map((hour) => (
                    <SelectItem key={hour} value={hour} className="font-oswald">
                      {hour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <span className="font-oswald font-bold">:</span>

              <Select
                value={selectedMinute}
                onValueChange={(val) =>
                  handleTimeChange(selectedHour, val, selectedPeriod)
                }
              >
                <SelectTrigger className="w-[70px] font-oswald">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {minutes.map((minute) => (
                    <SelectItem key={minute} value={minute} className="font-oswald">
                      {minute}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedPeriod}
                onValueChange={(val) =>
                  handleTimeChange(selectedHour, selectedMinute, val)
                }
              >
                <SelectTrigger className="w-[70px] font-oswald">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AM" className="font-oswald">AM</SelectItem>
                  <SelectItem value="PM" className="font-oswald">PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {value && (
          <div className="p-3 border-t">
            <Button
              variant="ghost"
              size="sm"
              className="w-full font-oswald text-xs"
              onClick={() => {
                setSelectedDate(undefined);
                onSelect(undefined);
              }}
            >
              <X className="w-3 h-3 mr-1" />
              Clear appointment
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default AppointmentPicker;