import * as Comlink from 'comlink';
import { convertHEIC } from 'services/wasmHeicConverter/wasmHEICConverterService.ts';

export class Convert {
    async convertHEIC(fileBlob, format) {
        return convertHEIC(fileBlob, format);
    }
}

Comlink.expose(Convert);
