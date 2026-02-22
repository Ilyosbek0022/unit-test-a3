export type QuestionType = 'fill' | 'order' | 'cloze' | 'spelling';

export interface Question {
  id: string;
  type: QuestionType;
  instruction: string;
  text?: string; // For fill-in-the-blanks within a sentence
  options?: string[]; // For cloze or multiple choice
  correctAnswers: string[];
  placeholder?: string;
  words?: string[]; // For word order
  clue?: string; // For spelling or adjective hints
}

export interface Section {
  id: string;
  title: string;
  instruction: string;
  questions: Question[];
  options?: string[]; // Added options for the section (word box)
}

export interface UserAnswer {
  questionId: string;
  answer: string;
}
