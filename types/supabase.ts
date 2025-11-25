export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string
          extra_info: Database["public"]["Enums"]["CategoryExtraInfo"] | null
          id: number
          name: Database["public"]["Enums"]["CategoryName"]
        }
        Insert: {
          created_at?: string
          extra_info?: Database["public"]["Enums"]["CategoryExtraInfo"] | null
          id?: number
          name: Database["public"]["Enums"]["CategoryName"]
        }
        Update: {
          created_at?: string
          extra_info?: Database["public"]["Enums"]["CategoryExtraInfo"] | null
          id?: number
          name?: Database["public"]["Enums"]["CategoryName"]
        }
        Relationships: []
      }
      centers: {
        Row: {
          additional_info: string | null
          address: string
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          additional_info?: string | null
          address: string
          created_at?: string
          id?: number
          name: string
          updated_at?: string
        }
        Update: {
          additional_info?: string | null
          address?: string
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          content: string | null
          created_at: string
          email: string | null
          id: number
          name: string | null
          phone_no: string | null
          replied: boolean
        }
        Insert: {
          content?: string | null
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          phone_no?: string | null
          replied?: boolean
        }
        Update: {
          content?: string | null
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          phone_no?: string | null
          replied?: boolean
        }
        Relationships: []
      }
      posts: {
        Row: {
          backlinks: Json[] | null
          body: string
          category_id: number
          created_at: string
          extra_info: Json | null
          id: number
          image: Json | null
          published_at: string | null
          teaser: string | null
          title: string
          views: number
        }
        Insert: {
          backlinks?: Json[] | null
          body?: string
          category_id: number
          created_at?: string
          extra_info?: Json | null
          id?: number
          image?: Json | null
          published_at?: string | null
          teaser?: string | null
          title?: string
          views?: number
        }
        Update: {
          backlinks?: Json[] | null
          body?: string
          category_id?: number
          created_at?: string
          extra_info?: Json | null
          id?: number
          image?: Json | null
          published_at?: string | null
          teaser?: string | null
          title?: string
          views?: number
        }
        Relationships: [
          {
            foreignKeyName: "posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      schedules: {
        Row: {
          additional_info: string | null
          center_id: number | null
          class_type: Database["public"]["Enums"]["class_type"]
          created_at: string
          day_of_week: number
          end_time: string
          id: number
          start_time: string
          title: string
          updated_at: string
        }
        Insert: {
          additional_info?: string | null
          center_id?: number | null
          class_type?: Database["public"]["Enums"]["class_type"]
          created_at?: string
          day_of_week: number
          end_time: string
          id?: number
          start_time: string
          title: string
          updated_at?: string
        }
        Update: {
          additional_info?: string | null
          center_id?: number | null
          class_type?: Database["public"]["Enums"]["class_type"]
          created_at?: string
          day_of_week?: number
          end_time?: string
          id?: number
          start_time?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "schedules_center_id_fkey"
            columns: ["center_id"]
            isOneToOne: false
            referencedRelation: "centers"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      CategoryExtraInfo: "ClassScore"
      CategoryName: "요가" | "라이프스타일"
      class_type: "studio" | "private" | "other"
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
      CategoryExtraInfo: ["ClassScore"],
      CategoryName: ["요가", "라이프스타일"],
      class_type: ["studio", "private", "other"],
    },
  },
} as const

