import { isQuestionsComponent, type componentStatus } from '@/types';
import { computed } from 'vue';
export function useSerialNumber(components: componentStatus[]) {
  return computed(() => {
    let questionSerialNumber = 1;
    return components.map((component) => {
      if (isQuestionsComponent(component.name)) {
        return questionSerialNumber++;
      }
      return null;
    });
  });
}
