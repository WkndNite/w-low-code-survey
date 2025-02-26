import mitt from 'mitt';
import type { EventBus } from '@/types';

const emitter = mitt<EventBus>();

export default emitter;
