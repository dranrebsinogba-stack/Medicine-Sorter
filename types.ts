
export enum View {
  REGISTRATION = 'REGISTRATION',
  DASHBOARD = 'DASHBOARD',
  SET_MEDICINE = 'SET_MEDICINE',
  HISTORY = 'HISTORY',
  HELP_AI = 'HELP_AI'
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  age: string;
  profilePic?: string;
}

export interface VitalRecord {
  timestamp: string;
  heartRate: number;
  bloodOxygen: number;
  temperature: number;
}

export interface IntakeRecord {
  timestamp: string;
  type: 'MEDICINE' | 'VITALS';
  medicineName?: string;
  status?: string;
  vitals?: VitalRecord;
}

export interface Medication {
  name: string;
  compartment: number;
  dailyFrequency: number;
  startTime: string;
  interval: number;
}
