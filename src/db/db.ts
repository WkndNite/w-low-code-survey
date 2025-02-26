// 定义数据库以及表的结构
import type { QuestionnaireDatabaseData } from '@/types';
import Dexie, { type Table } from 'dexie';

class QuestionnaireDatabase extends Dexie {
  // 非空断言 数据类型 主键类型
  questionnaire!: Table<QuestionnaireDatabaseData, number>;

  constructor() {
    super('QuestionnaireDatabase');
    this.version(1).stores({
      questionnaire: '++id, createdAt, updatedAt, title, questionsCount,components',
    });
  }
}

const db = new QuestionnaireDatabase();
export { db };
