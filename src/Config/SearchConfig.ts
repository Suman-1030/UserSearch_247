// src/config/searchConfig.ts

export interface FieldConfig {
    uiType: string;
    label: string;
    renderOrder: number;
  }
  
  export interface SearchConfig {
    fields: Record<string, FieldConfig>;
  }
  
  export const searchConfig:SearchConfig = {
    fields: {
      firstName: { uiType: "input", label: "First Name", renderOrder: 1 },
      lastName: { uiType: "input", label: "Last Name", renderOrder: 2 },
      dateOfBirth: { uiType: "date", label: "Date of Birth", renderOrder: 3 },

    },
  };
  