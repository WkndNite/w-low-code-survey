import type { QuestionnaireDatabaseData } from '@/types';
import { db } from './db';

export async function saveQuestionnaire(data: QuestionnaireDatabaseData) {
  return await db.questionnaire.add(data);
}

export async function getAllQuestionnaires() {
  return await db.questionnaire.toArray();
}

export async function getQuestionnaireById(id: number) {
  return await db.questionnaire.get(id);
}

export async function deleteQuestionnaireById(id: number) {
  return await db.questionnaire.delete(id);
}

export async function updateQuestionnaireById(
  id: number,
  data: Partial<QuestionnaireDatabaseData>,
) {
  return await db.questionnaire.update(id, data);
}
