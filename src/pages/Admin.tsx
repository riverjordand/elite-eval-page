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
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-black uppercase">Admin Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Lead Submissions</h2>
          
          {submissions.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              No submissions yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Parent Name</TableHead>
                    <TableHead>Player Name</TableHead>
                    <TableHead>Age/Grade</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Goal</TableHead>
                    <TableHead>Source</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell>
                        {new Date(submission.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{submission.parent_name}</TableCell>
                      <TableCell>{submission.player_name}</TableCell>
                      <TableCell>{submission.player_age}</TableCell>
                      <TableCell>{submission.email}</TableCell>
                      <TableCell>{submission.phone}</TableCell>
                      <TableCell className="capitalize">
                        {submission.primary_goal.replace(/-/g, " ")}
                      </TableCell>
                      <TableCell>{submission.lead_magnet_source}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;