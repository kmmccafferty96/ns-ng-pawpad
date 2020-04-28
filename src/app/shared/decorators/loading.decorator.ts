import { rootInjector } from '../services/root-injector';
import { HttpStatusService } from '../services/http-status.service';

export function Loading() {
    return (target: any, key: string): void => {
        const service = rootInjector.get(HttpStatusService);
        target[key] = service.loading$;
    };
}
