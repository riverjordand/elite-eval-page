import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Users, TrendingUp, Calendar as CalendarIcon, Target, Check, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface Submission {
  id: string;
  parent_name: string;
  player_name: string;
  player_age: string;
  email: string;
  phone: string;
  primary_goal: string;
  lead_magnet_source: string;
  created_at: string;
  contacted: boolean;
  appointment_date: string | null;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/auth");
        return;
      }

      const { data: roles, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (error) throw error;

      if (!roles) {
        toast({
          title: "Access Denied",
          description: "You don't have admin access.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
      loadSubmissions();
    } catch (error) {
      console.error("Error checking admin access:", error);
      navigate("/");
    }
  };

  const loadSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from("lead_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error("Error loading submissions:", error);
      toast({
        title: "Error",
        description: "Failed to load submissions.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStats = () => {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    const thisWeek = submissions.filter(
      (s) => new Date(s.created_at) >= weekAgo
    ).length;

    const goalCounts = submissions.reduce((acc, s) => {
      acc[s.primary_goal] = (acc[s.primary_goal] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const topGoal = Object.entries(goalCounts).sort(
      ([, a], [, b]) => b - a
    )[0];

    return {
      total: submissions.length,
      thisWeek,
      topGoal: topGoal ? topGoal[0].replace(/-/g, " ") : "N/A",
    };
  };

  const stats = getStats();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const updateContacted = async (id: string, contacted: boolean) => {
    try {
      const { error } = await supabase
        .from("lead_submissions")
        .update({ contacted })
        .eq("id", id);

      if (error) throw error;

      setSubmissions(
        submissions.map((s) => (s.id === id ? { ...s, contacted } : s))
      );

      toast({
        title: "Updated",
        description: `Marked as ${contacted ? "contacted" : "not contacted"}.`,
      });
    } catch (error) {
      console.error("Error updating contacted status:", error);
      toast({
        title: "Error",
        description: "Failed to update status.",
        variant: "destructive",
      });
    }
  };

  const updateAppointment = async (id: string, date: Date | undefined) => {
    try {
      const { error } = await supabase
        .from("lead_submissions")
        .update({ appointment_date: date?.toISOString() || null })
        .eq("id", id);

      if (error) throw error;

      setSubmissions(
        submissions.map((s) =>
          s.id === id ? { ...s, appointment_date: date?.toISOString() || null } : s
        )
      );

      toast({
        title: "Updated",
        description: date
          ? `Appointment set for ${format(date, "PPP 'at' p")}`
          : "Appointment cleared.",
      });
    } catch (error) {
      console.error("Error updating appointment:", error);
      toast({
        title: "Error",
        description: "Failed to update appointment.",
        variant: "destructive",
      });
    }
  };

  if (!isAdmin || isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bebas font-black uppercase tracking-wide">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground font-oswald mt-1">
              Manage and track your lead submissions
            </p>
          </div>
          <Button onClick={handleSignOut} variant="outline" size="lg" className="font-oswald">
            Sign Out
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="bg-card border-2 border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-oswald text-muted-foreground uppercase tracking-wider mb-2">
                  Total Leads
                </p>
                <p className="text-4xl font-bebas font-black text-primary">
                  {stats.total}
                </p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-oswald text-muted-foreground uppercase tracking-wider mb-2">
                  This Week
                </p>
                <p className="text-4xl font-bebas font-black">
                  {stats.thisWeek}
                </p>
              </div>
              <div className="p-3 bg-secondary rounded-lg">
                <CalendarIcon className="w-6 h-6 text-foreground" />
              </div>
            </div>
          </div>

          <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-oswald text-muted-foreground uppercase tracking-wider mb-2">
                  Top Goal
                </p>
                <p className="text-xl font-oswald font-semibold capitalize leading-tight">
                  {stats.topGoal}
                </p>
              </div>
              <div className="p-3 bg-secondary rounded-lg">
                <Target className="w-6 h-6 text-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-card border-2 border-border rounded-xl overflow-hidden shadow-lg">
          <div className="px-6 py-5 border-b-2 border-border bg-secondary/30">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bebas font-bold uppercase tracking-wide">
                  Lead Submissions
                </h2>
                <p className="text-sm text-muted-foreground font-oswald mt-1">
                  {submissions.length} total submission{submissions.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-0">
            {submissions.length === 0 ? (
              <div className="text-center py-16 px-6">
                <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground font-oswald text-lg">
                  No submissions yet.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b-2 border-border hover:bg-transparent bg-secondary/20">
                      <TableHead className="font-bebas text-sm uppercase tracking-wider py-4 px-6">Status</TableHead>
                      <TableHead className="font-bebas text-sm uppercase tracking-wider py-4 px-6">Date</TableHead>
                      <TableHead className="font-bebas text-sm uppercase tracking-wider py-4 px-6">Parent</TableHead>
                      <TableHead className="font-bebas text-sm uppercase tracking-wider py-4 px-6">Player Info</TableHead>
                      <TableHead className="font-bebas text-sm uppercase tracking-wider py-4 px-6">Contact</TableHead>
                      <TableHead className="font-bebas text-sm uppercase tracking-wider py-4 px-6">Goal</TableHead>
                      <TableHead className="font-bebas text-sm uppercase tracking-wider py-4 px-6">Appointment</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission, index) => (
                      <TableRow 
                        key={submission.id}
                        className={`border-border hover:bg-primary/5 transition-all duration-200 ${
                          index % 2 === 0 ? 'bg-background' : 'bg-secondary/10'
                        }`}
                      >
                        <TableCell className="py-5 px-6">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              checked={submission.contacted}
                              onCheckedChange={(checked) =>
                                updateContacted(submission.id, checked as boolean)
                              }
                              className="cursor-pointer"
                            />
                            <span className="text-xs font-oswald uppercase">
                              {submission.contacted ? (
                                <span className="text-green-600 font-semibold flex items-center gap-1">
                                  <Check className="w-3 h-3" /> Contacted
                                </span>
                              ) : (
                                <span className="text-muted-foreground">Pending</span>
                              )}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="font-oswald py-5 px-6">
                          <div className="flex flex-col">
                            <span className="font-semibold">
                              {new Date(submission.created_at).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {new Date(submission.created_at).toLocaleTimeString('en-US', { 
                                hour: 'numeric', 
                                minute: '2-digit'
                              })}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="font-oswald font-semibold py-5 px-6">
                          {submission.parent_name}
                        </TableCell>
                        <TableCell className="font-oswald py-5 px-6">
                          <div className="flex flex-col">
                            <span className="font-semibold">{submission.player_name}</span>
                            <span className="text-sm text-muted-foreground">{submission.player_age}</span>
                          </div>
                        </TableCell>
                        <TableCell className="font-oswald py-5 px-6">
                          <div className="flex flex-col gap-1">
                            <a 
                              href={`mailto:${submission.email}`}
                              className="text-sm hover:text-primary transition-colors hover:underline"
                            >
                              {submission.email}
                            </a>
                            <a 
                              href={`tel:${submission.phone}`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
                            >
                              {submission.phone}
                            </a>
                          </div>
                        </TableCell>
                        <TableCell className="py-5 px-6">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-oswald font-bold bg-primary text-primary-foreground capitalize shadow-sm">
                            {submission.primary_goal.replace(/-/g, " ")}
                          </span>
                        </TableCell>
                        <TableCell className="py-5 px-6">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-[200px] justify-start text-left font-oswald text-xs",
                                  !submission.appointment_date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {submission.appointment_date ? (
                                  format(new Date(submission.appointment_date), "PPP 'at' p")
                                ) : (
                                  <span>Set appointment</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={
                                  submission.appointment_date
                                    ? new Date(submission.appointment_date)
                                    : undefined
                                }
                                onSelect={(date) =>
                                  updateAppointment(submission.id, date)
                                }
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                              {submission.appointment_date && (
                                <div className="p-3 border-t">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full font-oswald text-xs"
                                    onClick={() =>
                                      updateAppointment(submission.id, undefined)
                                    }
                                  >
                                    <X className="w-3 h-3 mr-1" />
                                    Clear appointment
                                  </Button>
                                </div>
                              )}
                            </PopoverContent>
                          </Popover>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;