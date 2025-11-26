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
import { Users, TrendingUp, Calendar, Target } from "lucide-react";

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
                <Calendar className="w-6 h-6 text-foreground" />
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
        <div className="bg-card border-2 border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bebas font-bold uppercase tracking-wide">
              Lead Submissions
            </h2>
          </div>
          
          <div className="p-6">
            {submissions.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground font-oswald text-lg">
                  No submissions yet.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead className="font-bebas text-base uppercase">Date</TableHead>
                      <TableHead className="font-bebas text-base uppercase">Parent</TableHead>
                      <TableHead className="font-bebas text-base uppercase">Player</TableHead>
                      <TableHead className="font-bebas text-base uppercase">Age/Grade</TableHead>
                      <TableHead className="font-bebas text-base uppercase">Email</TableHead>
                      <TableHead className="font-bebas text-base uppercase">Phone</TableHead>
                      <TableHead className="font-bebas text-base uppercase">Goal</TableHead>
                      <TableHead className="font-bebas text-base uppercase">Source</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow 
                        key={submission.id}
                        className="border-border hover:bg-secondary/50 transition-colors"
                      >
                        <TableCell className="font-oswald">
                          {new Date(submission.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="font-oswald font-semibold">
                          {submission.parent_name}
                        </TableCell>
                        <TableCell className="font-oswald">
                          {submission.player_name}
                        </TableCell>
                        <TableCell className="font-oswald">
                          {submission.player_age}
                        </TableCell>
                        <TableCell className="font-oswald text-sm">
                          {submission.email}
                        </TableCell>
                        <TableCell className="font-oswald text-sm">
                          {submission.phone}
                        </TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-oswald font-semibold bg-primary/10 text-primary capitalize">
                            {submission.primary_goal.replace(/-/g, " ")}
                          </span>
                        </TableCell>
                        <TableCell className="font-oswald text-sm capitalize">
                          {submission.lead_magnet_source.replace(/-/g, " ")}
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