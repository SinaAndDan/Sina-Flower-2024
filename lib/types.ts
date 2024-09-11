// lib/types.ts

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: number;
          email: string;
          created_at: string;
        };
        Insert: {
          email: string;
        };
        Update: {
          email?: string;
        };
      };
      // Add more tables here if needed
    };
  };
};
