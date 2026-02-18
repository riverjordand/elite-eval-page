export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      applications: {
        Row: {
          additional_info: string | null
          bats: string
          best_60_yard: string | null
          city: string
          commitment_details: string | null
          community_service: string | null
          consent_marketing: boolean
          consent_transactional: boolean
          country: string
          created_at: string
          current_school: string
          date_of_birth: string
          dietary_restrictions: string | null
          email: string
          extracurricular: string
          first_name: string
          gpa: string
          grade_level: string
          guardian1_email: string
          guardian1_name: string
          guardian1_phone: string
          guardian2_email: string | null
          guardian2_name: string | null
          guardian2_phone: string | null
          host_family_needed: boolean
          hs_grad_year: string
          id: string
          last_name: string
          long_term_goals: string
          max_exit_velo: string | null
          max_pitching_speed: string | null
          medical_conditions: string | null
          phone: string
          player_video_url: string | null
          postal_code: string
          primary_position: string
          projected_start_date: string
          reviewed: boolean
          secondary_position: string
          short_term_goals: string
          sport: string
          sport_experience: string
          state: string
          street_address: string
          throws: string
          tour_status: string
          verbal_commitment: boolean
        }
        Insert: {
          additional_info?: string | null
          bats: string
          best_60_yard?: string | null
          city: string
          commitment_details?: string | null
          community_service?: string | null
          consent_marketing?: boolean
          consent_transactional?: boolean
          country?: string
          created_at?: string
          current_school: string
          date_of_birth: string
          dietary_restrictions?: string | null
          email: string
          extracurricular: string
          first_name: string
          gpa: string
          grade_level: string
          guardian1_email: string
          guardian1_name: string
          guardian1_phone: string
          guardian2_email?: string | null
          guardian2_name?: string | null
          guardian2_phone?: string | null
          host_family_needed?: boolean
          hs_grad_year: string
          id?: string
          last_name: string
          long_term_goals: string
          max_exit_velo?: string | null
          max_pitching_speed?: string | null
          medical_conditions?: string | null
          phone: string
          player_video_url?: string | null
          postal_code: string
          primary_position: string
          projected_start_date: string
          reviewed?: boolean
          secondary_position: string
          short_term_goals: string
          sport: string
          sport_experience: string
          state: string
          street_address: string
          throws: string
          tour_status?: string
          verbal_commitment?: boolean
        }
        Update: {
          additional_info?: string | null
          bats?: string
          best_60_yard?: string | null
          city?: string
          commitment_details?: string | null
          community_service?: string | null
          consent_marketing?: boolean
          consent_transactional?: boolean
          country?: string
          created_at?: string
          current_school?: string
          date_of_birth?: string
          dietary_restrictions?: string | null
          email?: string
          extracurricular?: string
          first_name?: string
          gpa?: string
          grade_level?: string
          guardian1_email?: string
          guardian1_name?: string
          guardian1_phone?: string
          guardian2_email?: string | null
          guardian2_name?: string | null
          guardian2_phone?: string | null
          host_family_needed?: boolean
          hs_grad_year?: string
          id?: string
          last_name?: string
          long_term_goals?: string
          max_exit_velo?: string | null
          max_pitching_speed?: string | null
          medical_conditions?: string | null
          phone?: string
          player_video_url?: string | null
          postal_code?: string
          primary_position?: string
          projected_start_date?: string
          reviewed?: boolean
          secondary_position?: string
          short_term_goals?: string
          sport?: string
          sport_experience?: string
          state?: string
          street_address?: string
          throws?: string
          tour_status?: string
          verbal_commitment?: boolean
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          athlete_first_name: string
          athlete_last_name: string
          consent_marketing: boolean
          consent_sms: boolean
          created_at: string
          email: string
          id: string
          notes: string | null
          parent_guardian_name: string | null
          phone: string
          reviewed: boolean
        }
        Insert: {
          athlete_first_name: string
          athlete_last_name: string
          consent_marketing?: boolean
          consent_sms?: boolean
          created_at?: string
          email: string
          id?: string
          notes?: string | null
          parent_guardian_name?: string | null
          phone: string
          reviewed?: boolean
        }
        Update: {
          athlete_first_name?: string
          athlete_last_name?: string
          consent_marketing?: boolean
          consent_sms?: boolean
          created_at?: string
          email?: string
          id?: string
          notes?: string | null
          parent_guardian_name?: string | null
          phone?: string
          reviewed?: boolean
        }
        Relationships: []
      }
      lead_submissions: {
        Row: {
          appointment_date: string | null
          contacted: boolean
          created_at: string
          email: string
          id: string
          lead_magnet_source: string
          parent_name: string
          phone: string
          player_age: string
          player_name: string
          primary_goal: string
        }
        Insert: {
          appointment_date?: string | null
          contacted?: boolean
          created_at?: string
          email: string
          id?: string
          lead_magnet_source: string
          parent_name: string
          phone: string
          player_age: string
          player_name: string
          primary_goal: string
        }
        Update: {
          appointment_date?: string | null
          contacted?: boolean
          created_at?: string
          email?: string
          id?: string
          lead_magnet_source?: string
          parent_name?: string
          phone?: string
          player_age?: string
          player_name?: string
          primary_goal?: string
        }
        Relationships: []
      }
      liability_waivers: {
        Row: {
          athlete_email: string
          athlete_first_name: string
          athlete_last_name: string
          athlete_phone: string
          coach_instructor_name: string | null
          consent_marketing: boolean
          created_at: string
          date_of_birth: string
          id: string
          other_usage_type: string | null
          parent_guardian_email: string | null
          parent_guardian_name: string | null
          parent_guardian_phone: string | null
          primary_position: string
          signature: string
          state: string
          team_org_name: string | null
          usage_type: string
        }
        Insert: {
          athlete_email: string
          athlete_first_name: string
          athlete_last_name: string
          athlete_phone: string
          coach_instructor_name?: string | null
          consent_marketing?: boolean
          created_at?: string
          date_of_birth: string
          id?: string
          other_usage_type?: string | null
          parent_guardian_email?: string | null
          parent_guardian_name?: string | null
          parent_guardian_phone?: string | null
          primary_position: string
          signature: string
          state: string
          team_org_name?: string | null
          usage_type: string
        }
        Update: {
          athlete_email?: string
          athlete_first_name?: string
          athlete_last_name?: string
          athlete_phone?: string
          coach_instructor_name?: string | null
          consent_marketing?: boolean
          created_at?: string
          date_of_birth?: string
          id?: string
          other_usage_type?: string | null
          parent_guardian_email?: string | null
          parent_guardian_name?: string | null
          parent_guardian_phone?: string | null
          primary_position?: string
          signature?: string
          state?: string
          team_org_name?: string | null
          usage_type?: string
        }
        Relationships: []
      }
      tour_bookings: {
        Row: {
          address: string | null
          athlete_dob: string | null
          athlete_positions: string | null
          booking_date: string
          booking_time: string
          consent_sms: boolean
          created_at: string
          current_school: string | null
          email: string
          first_name: string
          how_heard: string | null
          id: string
          last_name: string
          parent_name: string | null
          parent_phone: string | null
          parent2_name: string | null
          phone: string
          referring_contact: string | null
          special_requests: string | null
          status: string
        }
        Insert: {
          address?: string | null
          athlete_dob?: string | null
          athlete_positions?: string | null
          booking_date: string
          booking_time: string
          consent_sms?: boolean
          created_at?: string
          current_school?: string | null
          email: string
          first_name: string
          how_heard?: string | null
          id?: string
          last_name: string
          parent_name?: string | null
          parent_phone?: string | null
          parent2_name?: string | null
          phone: string
          referring_contact?: string | null
          special_requests?: string | null
          status?: string
        }
        Update: {
          address?: string | null
          athlete_dob?: string | null
          athlete_positions?: string | null
          booking_date?: string
          booking_time?: string
          consent_sms?: boolean
          created_at?: string
          current_school?: string | null
          email?: string
          first_name?: string
          how_heard?: string | null
          id?: string
          last_name?: string
          parent_name?: string | null
          parent_phone?: string | null
          parent2_name?: string | null
          phone?: string
          referring_contact?: string | null
          special_requests?: string | null
          status?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
