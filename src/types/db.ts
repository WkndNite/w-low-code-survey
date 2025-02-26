import type { componentStatus } from './common';

export interface QuestionnaireDatabaseData {
  createdAt: number;
  updatedAt: number;
  title: string;
  questionsCount: number;
  components: componentStatus[];
}

export interface QuestionnaireTableRow extends QuestionnaireDatabaseData {
  id: number;
}
