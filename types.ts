
export type ViewState = 'home' | 'details' | 'simulator' | 'discovery' | 'profile';

export interface Course {
  id: string;
  title: string;
  image: string;
  price: number;
  students: string;
  rating?: number;
  instructor?: string;
  description?: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  status: 'completed' | 'playing' | 'locked';
}
