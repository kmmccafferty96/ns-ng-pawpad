import { rootInjector } from '../services/root-injector';
import { HttpStatusService } from '../services/http-status.service';

export function Acting() {
    return function(target: any, key: string): void {
        const service = rootInjector.get(HttpStatusService);
        target[key] = service.acting$;
    };
}
