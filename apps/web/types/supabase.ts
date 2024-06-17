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
          author_id: string | null
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
          author_id?: string | null
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
          author_id?: string | null
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
            foreignKeyName: "posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          email: string
          first_name: string
          id: number
          last_name: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string
          first_name: string
          id?: number
          last_name?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          id?: number
          last_name?: string | null
          user_id?: string
        }
        Relationships: []
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
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
